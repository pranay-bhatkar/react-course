import Form from "next/form";
import React from "react";
import { updateStatus } from "../actions/actions";

const StatusBtn = ({ id }) => {
  const action = updateStatus.bind(null, id);

  return (
    <div>
      <Form action={action}>
        <button className="bg-green-600 text-white p-2 mt-1 border-amber-100 border-2 ">
          Mark resolved
        </button>
      </Form>
    </div>
  );
};

export default StatusBtn;
