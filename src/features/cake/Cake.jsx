import { useDispatch, useSelector } from "react-redux";
import { cakeOrder, cakeRestocked } from "./cakeSlice";

const Cake = () => {
  const { numberOfCake } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <div>cake component {numberOfCake}</div>
      <div>
        <button onClick={() => dispatch(cakeOrder())}>order cake 1</button>
        <button onClick={() => dispatch(cakeRestocked(5))}>restocked cake 5</button>
      </div>
    </div>
  );
};

export default Cake;
