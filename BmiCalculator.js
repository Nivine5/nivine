import React, { useState, useEffect } from 'react';

const BmiCalculator = ({ weight, height }) => {
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState('');

  useEffect(() => {
    calculateBmi();
  }, [weight, height]);

  const calculateBmi = () => {

    const heightInMeter = height / 100;
  // turn heigh into meter 
    const calculatedBmi = weight / (heightInMeter * heightInMeter);
    setBmi(calculatedBmi);
    setBmiCategory(getBmiCategory(calculatedBmi));
  };

  const getBmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 24.9) return 'Normal weight';
    if (bmiValue < 29.9) return 'overerweight';
    return 'Obese';
  };

  return (
    <div>
      <h2>BMI Calculator Result</h2>
      <p>Your BMI: {bmi.toFixed(2)}</p>
      <p>BMI Category: {bmiCategory}</p>
    </div>
  );
};

export default BmiCalculator;
