import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div className="Alret-container">
    <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>{props.alert.messege}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</div>
  )
}

export default Alert