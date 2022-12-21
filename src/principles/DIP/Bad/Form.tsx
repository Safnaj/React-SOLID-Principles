import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "../Style.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
  };

  /* 
    DIP Rule: High level modules should not depend on low level modules. Both should depend on abstractions.
    When we want utilize the same logic/compoent for another page with different API endpoint, we 
    have to come up with the if condition or different function. This is not a good practice.
  */

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form' onSubmit={handleSubmit}>
          <input
            type='text'
            value={email}
            placeholder='username'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          <p className='message'>
            Not registered? <Link to='#'>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
