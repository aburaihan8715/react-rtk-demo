import Cake from "./features/cake/Cake";
import IceCream from "./features/ice-cream/IceCream";
import User from "./features/user/User";

const App = () => {
  return (
    <div>
      <div>app component</div>
      <br />
      <Cake></Cake>
      <br />
      <IceCream></IceCream>
      <br />
      <User></User>
    </div>
  );
};

export default App;
