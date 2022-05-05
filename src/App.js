import React, { useState } from "react";

export default function App() {

   const stuff = {
      email: "",
      password: "",
      confirmpassword: "",
      isjoining: true

   }

   const [formData, setFormData] = useState(stuff);

   function handleChange(event) {
      const target = event.target;

      setFormData(function (prevData) {
         return {
            ...prevData,
            [target.name]: target.type === "checkbox" ? !prevData.isjoining : target.value
         }
      })
   }






   console.log(formData)
   console.log(checkPasswords())
   /**
    * 3. When the user clicks "Sign up", check if the
    *    password & confirmation match each other. If
    *    so, log "Successfully signed up" to the console.
    *    If not, log "passwords to not match" to the console.
    * 4. Also when submitting the form, if the person checked
    *    the "newsletter" checkbox, log "Thanks for signing
    *    up for our newsletter!" to the console.
    */

   function checkPasswords(){
         return formData.password === formData.confirmpassword
   }


   function handleSubmit(event) {
      event.preventDefault();

   }



   return (
      <div className="form-container">
         <form className="form" onSubmit={handleSubmit}>

            <input
               name="email"
               type="email"
               placeholder="Email address"
               className="form--input"
               onChange={handleChange}
            />

            <input
               name="password"
               type="password"
               placeholder="Password"
               className="form--input"
               onChange={handleChange}
            />

            <input
               name="confirmpassword"
               type="password"
               placeholder="Confirm password"
               className="form--input"
               onChange={handleChange}
            />

            <div className="form--marketing">
               <input
                  onChange={handleChange}
                  name="isjoining"
                  id="okayToEmail"
                  type="checkbox"
                  checked={formData.isjoining}
               />
               <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>

            <button className="form--submit">Sign up</button>

         </form>
      </div>
   );
}
