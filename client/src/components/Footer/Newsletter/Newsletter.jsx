import { useState } from "react";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
     const [message , setMessage] = useState("")
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [msg, setMsg] = useState("")

      function subscribe(e) {
          const formEle = document.querySelector(".form")
          e.preventDefault()
          console.log("subscribe")
       const formData = new FormData(formEle)
          fetch("https://script.google.com/macros/s/AKfycbx6w5HhxonXPAaTfRNkqhe28K_Abwlv2UKPzRKTOV4uTZkdbvKfVlxNwl3Csq_6Q-rJ7Q/exec",{
            method: "POST",
            body: formData
          }).then((res)=>res.json())
          .then((data)=>{
            console.log(data)
          })
          .catch((err)=>console.log(err))
           
        }



    return <div className="newsletter-section">
        <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <form className="form" onSubmit={(e)=>{
                  subscribe(e)
                 
                  setName("") 
                  setEmail("") 
                  setMsg("") 
                  setTimeout(()=>{
                    setMessage("")
                  },5000)
                  
                  }}>
                    <input type="text" name="Name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" name="Email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" name="Message" placeholder="Message" value={msg} onChange={(e)=>setMsg(e.target.value)} />
                    <button onClick={()=>{setMessage("You Subscribe Successfully")}}>Subscribe</button>
                           
                </form >
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    
                    <div className="icon">
                       <a href="https://www.facebook.com/abhayr.yadav.7" target="_blank"><FaFacebookF size={14}/></a>  
                    </div>
                    <div className="icon">
                      <a href="https://twitter.com/home" target="_blank"><FaTwitter size={14} /></a>
                    </div>
                    <div className="icon">
                      <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={14} /></a>                        
                    </div>
                    <div className="icon">
                      <a href="https://www.linkedin.com/in/abhay-yadav-a8511411a/" target="_blank"><FaLinkedinIn size={14} /></a>
                    </div>                
                </span>
                <br/>
                <span id="msg">{message}</span>
            </div>
    </div>;
};

export default Newsletter;
