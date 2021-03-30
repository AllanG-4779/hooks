import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function UseCallback() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(4500);
  const updatingAge = (item) => {
    return setAge(age + item);
  };
  const updatingSal = (item) => {
    return setSalary(salary + item);
  };
  return (
    <div>
      <Title />
      <Count name="Age" value={age} />
      <Button text="Increment Age" change={() => updatingAge(1)} />
      <Count name="Salary" value={salary} />
      <Button text="Increment Salary" change={() => updatingSal(100)} />
    </div>
  );
}

export default UseCallback;
