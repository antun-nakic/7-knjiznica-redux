import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postaviPassword } from "./features/user/userSlice";

const PromijeniPassword = () => {
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Trenutno imas {password} godina.</h1>
      <input
        type="text"
        value={password}
        onChange={(e) => dispatch(postaviPassword(e.target.value))}
      />
    </div>
  );
};

export default PromijeniPassword;
