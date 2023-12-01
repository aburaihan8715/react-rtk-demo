import { useDispatch, useSelector } from "react-redux";
import { iceCreamOrder, iceCreamRestocked } from "./iceCreamSlice";
import { useState } from "react";

const IceCream = () => {
  const [value, setValue] = useState("");
  const { numberOfIceCream } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>ice cream component {numberOfIceCream}</div>
      <div>
        <input onChange={(e) => setValue(+e.target.value)} type="number" name="" id="" />
      </div>
      <div>
        <button onClick={() => dispatch(iceCreamOrder())}>order ice cream 1</button>
        <button onClick={() => dispatch(iceCreamRestocked(value))}>restocked ice cream {value}</button>
      </div>
    </div>
  );
};

export default IceCream;
