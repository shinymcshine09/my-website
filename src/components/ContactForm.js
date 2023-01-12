import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="ContactForm">
      <form onSubmit={onSubmit}>
        <div className="NameInput">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="name" required placeholder='Name...'/>
        </div>
        <br/>
        <div className="EmailInput">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="email" required placeholder='Email...' />
        </div>
        <br/>
        <div className="MessageInput">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-control" id="message" required placeholder='Message...'/>
        </div>
        <br/>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm