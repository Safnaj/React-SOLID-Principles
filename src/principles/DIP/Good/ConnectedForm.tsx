import React from "react";
import axios from "axios";
import Form from "./Form";

const ConnectedForm = () => {
  /* This implementation provides the actual implementation to the abstracted form component. */
  const handleSubmit = async (email: string, password: string) => {
    await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
  };
  return <Form onSubmit={handleSubmit} />;
};

export default ConnectedForm;
