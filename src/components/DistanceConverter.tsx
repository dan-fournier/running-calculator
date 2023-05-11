import { useRef } from 'react';

const DistanceConverter: React.FC = () => {
  const conversionValueInputRef = useRef<HTMLInputElement>(null);

  const distanceConvertSubmitHandler = (e: React.FormEvent) => {
    // prevent browser default to send server request 
    e.preventDefault();

    // this will never be null because it is initialized when the form is submitted and that can only happen after it's been rendered  
    const enteredValue = conversionValueInputRef.current!.value;
    console.log(enteredValue);
  }

  return (
    <>
      <h1>Distance Converter</h1>
      <form onSubmit={distanceConvertSubmitHandler}>
        <div>
          <label htmlFor="conversion-value">Convert number of kilometers to miles</label>
          <input type="number" id="conversion-value" ref={conversionValueInputRef} />
          <select name="distance" id="mileage">
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
          </select>
        </div>

        <button id="myButton" type="submit">Convert</button>
      </form>
    </>
  );
};

export default DistanceConverter;