import React, { useEffect, useState, useCallback } from "react";

const initNumbers = [1, 2, 3];

function AddNumbers() {
  const [numbers, setNumbers] = useState([]);
  console.log(numbers);
  useEffect(() => {
    // fetch("/numbers.json")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setNumbers([data]);
    //   });
    setNumbers(initNumbers);
  }, []);

  // const addNumber = () => {
  //   setNumbers([...numbers, numbers.length + 1]);
  // };

  // addNumbers with useCallback.
  const addNumber = useCallback(() => {
    setNumbers([...numbers, numbers.length + 1]);
  }, [numbers]);

  return (
    <div>
      {numbers}
      <br></br>
      <button onClick={addNumber}>add</button>
    </div>
  );
}

export default AddNumbers;
