import { useState } from "react";
import "./slider.css";

export default function Slider(props) {
  const [changedvalue, setValue] = useState(props.value);
  const changeData = (e) => {
    const { name, value } = e.target;

    // Update the corresponding value in the state based on the slider's name
    const updatedData = {
      ...props.data,
      [name]: value,
    };

    // If the slider is either downPayment or loanAmount, update both
    if (name === 'downPayment' || name === 'loanAmount') {
      const remainingValue = name === 'downPayment' ? 'loanAmount' : 'downPayment';
      const remainingAmount = props.data.homeValue - updatedData[name];
      updatedData[remainingValue] = remainingAmount;
    }

    // Update the state with the new data
    props.updateData(updatedData);
  };

  // let [sign, setSign] = useState()

  return (
    <div className="slider">
      <p className="title">{props.title}</p>
      <p className="value">{props.sign}{props.value}</p>
      <input
        type="range"
        min={props.min}
        max={props.max}
        name={props.name}
        step={props.step}
        value={props.value}
        onChange={changeData}
      />
      <div className="min-max">
        <p className="min">{props.sign}{props.min}{props.secondarySign}</p>
        <p className="max">{props.sign}{props.max}{props.secondarySign}</p>
      </div>
    </div>
  );
}
