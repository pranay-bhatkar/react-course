import React from "react";
import Form from "next/form";
import { submitUser } from "../../../actions/actions";

const FormPage = () => {
  return (
    <div>
      <h1>Create User</h1>
      <Form action={submitUser}>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </Form>

      <h1>Search Forms</h1>
      <Form action={"/forms/search"}>
        <input type="text" name="query" placeholder="search post id" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

export default FormPage;
