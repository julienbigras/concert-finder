import React from 'react';

const Form = (props) => {
  return (
    <form action="">
      <label htmlFor="cities">Choose a city: </label>
      <select
        name="cities"
        id="cities"
        value={props.selectValue}
        onChange={props.handleCityChange}
      >
        <option value="toronto">Toronto</option>
        <option value="montreal">Montreal</option>
        <option value="ottawa">Ottawa</option>
        <option value="buffalo">Buffalo</option>
        <option value="detroit">Detroit</option>
      </select>
      <button onClick={(e) => props.updateCity(e)}>Go!</button>
    </form>
  );
};

export default Form;
