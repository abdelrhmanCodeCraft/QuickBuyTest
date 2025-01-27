import React from 'react'
import message from '../image/3D_animation-message-removebg-preview.png'
import '../style/components/newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="container">
            <div className="content">
                <img src={message} alt="" />
                <h1>newsletter</h1>
                <h4>stay up to date with our latest news and products</h4>
                <label htmlFor="">
                    <input type="email" placeholder='your email adress' />
                    <button type='submit'> subscrip </button>
                    
                </label>
                <p>your email is safe with us, we dont span</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
