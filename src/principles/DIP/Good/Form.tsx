import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "../Style.css";

interface IFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
}

const Form = (props: IFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onSubmit } = props;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(email, password);
  };

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
