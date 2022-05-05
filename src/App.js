import React, { useState } from "react";

export default function App() {
   const [formData, setFormData] = useState(
      {
         email: "",
         password: "",
         confirmpassword: "",
         isjoining: true

      });

   function handleChange(event) {
      const { name, type, value, checked } = event.target;

      setFormData(function (prevData) {
         return {
            ...prevData,
            [name]: type === "checkbox" ? checked : value
         }
      })
   }

   function handleSubmit(event) {
      event.preventDefault();
      console.log(formData.password === formData.confirmpassword ? "Successfully signed up" : "passwords do not match")
      console.log(formData.isjoining === true ? "Thanks for signing up to our news letter" : "Consider signing up man")

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
               value={formData.email}
            />

            <input
               name="password"
               type="password"
               placeholder="Password"
               className="form--input"
               onChange={handleChange}
               value={formData.password}
            />

            <input
               name="confirmpassword"
               type="password"
               placeholder="Confirm password"
               className="form--input"
               onChange={handleChange}
               value={formData.confirmpassword}
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
