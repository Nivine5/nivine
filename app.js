import React, { useState } from 'react';
import InputField from './components/inputfield';
import BmiCalculator from './components/BmiCalculator';
import './styles.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <InputField label="Weight (kg)" value={weight} onChange={handleWeightChange} />
      <InputField label="Height (cm)" value={height} onChange={handleHeightChange} />
      {weight > 0 && height > 0 && <BmiCalculator weight={weight} height={height} />}
    </div>
  );
}

export default App;
