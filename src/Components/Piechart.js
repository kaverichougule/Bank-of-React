import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Piechart = (props) => {
  const chartRef = useRef(null);

  // Function to calculate total interest
function calculateTotalInterest(loanAmount, interestRate, loanTenure) {
  return (loanAmount * interestRate * loanTenure) / 100;
}

// Function to calculate monthly payment
function calculateMonthlyPayment(loanAmount, interestRate, loanTenure) {
  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfPayments = loanTenure * 12;

  const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;

  const monthlyPayment = numerator / denominator;

  return monthlyPayment;
}

const totalInterest = calculateTotalInterest(props.data.loanAmount, props.data.interestRate, props.data.tenure);
const monthlyPayment = calculateMonthlyPayment(props.data.loanAmount, props.data.interestRate, props.data.tenure);

console.log("Total Interest:", totalInterest);
console.log("Monthly Payment:", monthlyPayment);

  let pieArray = [props.data.homeValue, totalInterest]

  console.log(pieArray);

  useEffect(() => {
    const data = {
      labels: ['Principle', 'Interest'],
      datasets: [
        {
          data: pieArray,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1,
        },
      ],
    };

    // Access the current property of the chartRef to get the canvas element
    const ctx = chartRef.current.getContext('2d');

    // Check if there's an existing Chart instance and destroy it
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new instance of Chart.js
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        // Add your chart options here
        responsive: false, // responsiveness
        maintainAspectRatio: false, // Disable aspect ratio
        width: 400, // Set the width of the chart
        height: 400,
        animation: true // Set the height of the chart
      },
    });

    // Store the newChart instance in the chartRef
    chartRef.current.chart = newChart;
  }, pieArray); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h2>Monthly Payment: $ 45.29</h2>
      <canvas ref={chartRef} className='piechart'></canvas>
    </div>
  );
};

export default Piechart;
