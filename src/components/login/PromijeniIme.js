import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postaviIme } from "../../features/user/userSlice";

const PromijeniIme = () => {
  const ime = useSelector((state) => state.user.ime);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor='ime'>Ime</label>
      <input
        type='text'
        className='p-1 rounded-lg text-black'
        id='ime'
        required
        value={ime}
        onChange={(e) => dispatch(postaviIme(e.target.value))}
      />
    </>
  );
};

export default PromijeniIme;
