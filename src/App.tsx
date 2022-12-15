import React from "react";
import "./App.css";
import { ButtonWithOCP, ButtonWithoutOCP } from "./OCP";
import { ProductListBad, ProductListGood } from "./SRP";

function App() {
  return (
    <div>
      {/* <ProductListBad /> */}
      <ButtonWithoutOCP />
    </div>
  );
}

export default App;
