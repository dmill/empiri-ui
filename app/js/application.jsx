import React from "react";
import DropdownComponent from "./components/dropdown_component";

React.render(
  <DropdownComponent content={<div>Menu</div>} items={["item1", "item2", "item3"]} />,
  document.getElementById("root")
);
