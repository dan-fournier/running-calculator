
import './App.css'
import DistanceConverter from './components/DistanceConverter';

function App() {

  // const button = document.getElementById("myButton");
  // const input = document.getElementById("value");
  // const measureSelect = document.getElementById("mileage");

  // const text = document.querySelector(".text");
  // const result = document.querySelector(".result");

  // function convert() {
  //   if (measureSelect.value == 'kilometers') {
  //     const miles = Math.round(((input.value / 1.609) + Number.EPSILON) * 100) / 100

  //     result.textContent = `${miles} mi`;
  //   } else {
  //     const km = Math.round(((input.value * 1.609) + Number.EPSILON) * 100) / 100;
  //     result.textContent = `${km} km`;
  //   }
  // }

  // function updateText(e) {
  //   if (e.target.value == 'kilometers') {
  //     text.textContent = "Convert number of kilometers to miles";
  //   } else if (e.target.value == 'miles') {
  //     text.textContent = "Convert number of miles to kilometers";
  //   }
  // }

  // measureSelect.addEventListener("change", updateText);
  // button.addEventListener("click", convert);

  return (
    <DistanceConverter />
  )
}

export default App
