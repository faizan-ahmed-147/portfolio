import React, {useState} from 'react';
import "../componenetCss/Contact.css";
import contactImg from "../img/about-3.jpg"
function Contact() {



    const [user, setUser] = useState ({
      name:"",email:"",subject:"",message:""
    });
    let name, value;
  
  
    const handleInputs = (e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value})
      console.log(name);
      console.log(value);
    }
  
    const postData = async (e)=>{
    e.preventDefault();
    const {name, email, subject, message} = user;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, subject, message
      })
    });
  
    const data = await res.json()
    if (res.status === 422 || !data) {
    
      window.alert("Invalid crediential")
      console.log("Invalid crediential");
    }else{
      window.alert("submited succesfully")
      console.log("submited succesfully");
      
    }
  
  
  
    }

    return (
        <div className="contact component__space" id="Contact" method="POST" >
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+923142276505</strong> or email <strong>fa147672@gmail.com</strong></p>
                        </div>
                        <div className="input__box" method="post">
                           <input type="text" name="name"  id='name' className="contact name" value={user.name} onChange={handleInputs} placeholder="Your name *" />
                           <input type="text" name="email" id='email' className="contact email" value={user.email} onChange={handleInputs} placeholder="Your Email *" />
                           <input type="text" name="subject" id='subject' className="contact subject" value={user.subject} onChange={handleInputs} placeholder="Write a Subject" />
                           <textarea name="message" id="message" value={user.message} onChange={handleInputs} placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" value="contact" onClick={postData} type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact