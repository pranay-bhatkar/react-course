import React from "react";
import { addTodo } from "../../actions/actions";

const Home = () => {
  // async function addTodo(formaData) {
  //   "use server";
  //   const title = formaData.get("title");
  //   console.log(title);
  // }

  return (
    <div>
      <form action={addTodo}>
        <input name="title" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Home;
