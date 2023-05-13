import { useRef, useState } from 'react';
import React from 'react';

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
      <div className="card shadow-xl p-12">
        <h1 className="text-3xl font-bold mb-3 self-center">Distance Converter</h1>
        <form className="w-full max-w-xs" onSubmit={distanceConvertSubmitHandler}>
          <label htmlFor="conversion-value">Convert a distance:</label>
          <input className="input input-bordered w-full max-w-xs" type="number" id="conversion-value" ref={conversionValueInputRef} />
          
          <label className="label">
            <span className="label-text">Choose distance measurement:</span>
          </label>
            <select className="select select-bordered max-w-xs w-full" value={selectedDistanceMeasurement} onChange={ e => setDistanceMeasurement(e.target.value)}>
              <option value="kilometers">Kilometers</option>
              <option value="miles">Miles</option>
            </select>

          <div className="flex justify-center">
            <button className="btn w-64 rounded-full mt-8 justify-center" id="myButton" type="submit">Convert</button>
          </div>
        </form>
        <p className="font-bold mt-6">Result: {convertedValue}</p>
      </div>
    </>
  );
}