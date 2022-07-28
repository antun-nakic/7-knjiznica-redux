import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postaviDob } from "./features/user/userSlice";

const PromijeniDob = () => {
  const dob = useSelector((state) => state.user.dob);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Trenutno imas {dob} godina.</h1>
      <input
        type="number"
        value={dob}
        onChange={(e) => dispatch(postaviDob(e.target.value))}
      />
    </div>
  );
};

export default PromijeniDob;
