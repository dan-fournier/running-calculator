import { useRef, useState } from 'react';

export default function DistanceConverter() {
  const [selectedDistanceMeasurement, setDistanceMeasurement] = useState('kilometers');
  const [convertedValue, setConvertedValue] = useState<string>('');
  const conversionValueInputRef = useRef<HTMLInputElement>(null);

  const distanceConvertSubmitHandler = (e: React.FormEvent) => {
    // prevent browser default to send server request 
    e.preventDefault();

    // this will never be null because it is initialized when the form is submitted and that can only happen after it's been rendered  
    // using parseInt to coerce this input string into a number
    const enteredValue = parseInt(conversionValueInputRef.current!.value);
    
    if(selectedDistanceMeasurement === 'kilometers' ) {
      const miles = Math.round(((enteredValue / 1.609) + Number.EPSILON) * 100) / 100

      setConvertedValue(`${miles} mi`);

    }else if(selectedDistanceMeasurement === 'miles' ) {
      const km = Math.round(((enteredValue * 1.609) + Number.EPSILON) * 100) / 100

      setConvertedValue(`${km} km`);
    } 
  }

  return (
    <>
      <h1>Distance Converter</h1>
      <form onSubmit={distanceConvertSubmitHandler}>
        <div className="calculator">
          <label htmlFor="conversion-value">Convert a distance:</label>
          <input type="number" id="conversion-value" ref={conversionValueInputRef} />
          
          <label>
            Choose distance measurement:
            <select value={selectedDistanceMeasurement} onChange={ e => setDistanceMeasurement(e.target.value)}>
              <option value="kilometers">Kilometers</option>
              <option value="miles">Miles</option>
            </select>
          </label>
        </div>

        <button id="myButton" type="submit">Convert</button>
      </form>
      <p>Result: {convertedValue}</p>
    </>
  );
}