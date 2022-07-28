import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postaviPassword } from "../../features/user/userSlice";

const PromijeniPassword = () => {
  const password = useSelector((state) => state.user.password);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        className='p-1 rounded-lg text-black'
        id='password'
        required
        value={password}
        onChange={(e) => dispatch(postaviPassword(e.target.value))}
      />
    </>
  );
};

export default PromijeniPassword;
