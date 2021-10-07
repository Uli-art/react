import React from "react";
import MyButton from "./components/MyButton/MyButton"

const buttonArray = ['success','primary','danger','warning','secondary']
const App = () => {
  return (
    <div className="App">
      {buttonArray.map((btn)=>
          <MyButton className={btn}> 
          {btn} 
          </MyButton>
      )}
    </div>
  );
}

export default App;
