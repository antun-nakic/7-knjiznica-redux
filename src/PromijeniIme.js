import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postaviIme } from "./features/user/userSlice";

const PromijeniIme = () => {
  const ime = useSelector((state) => state.user.ime);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Tvoje ime je {ime}.</h1>
      <input
        type="text"
        value={ime}
        onChange={(e) => dispatch(postaviIme(e.target.value))}
      />
    </div>
  );
};

export default PromijeniIme;
