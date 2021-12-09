import Component from "./component/Component";
import ArrayComponent from "./component/ArrayComponent";
import ShapeComponent from "./component/ShapeComponent";

function App() {
  return (
    <div className="App">
      <Component name="Bill" age={20 + 5}/>   {/* This will not throw any console errors, accepts number or string */}
      <ArrayComponent array={[ 1, "bc"]} />   {/* This will throw an error in the console because the entire array is not number type */}
      <ShapeComponent person={{ id: 1, name: "Wayde", age: 27, hobby: "Ninjitsu" }} />     {/* This does not throw an error. Hobby is extra, if "shape" was replaced with "exact" in line 9, then this would throw an error  */}
    </div>
  );
}

export default App;
