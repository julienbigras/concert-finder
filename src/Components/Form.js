import React from 'react';

class Form extends React.Component {
  render(props) {
    return (
      <form action="">
        <label htmlFor="cities">Choose a city: </label>
        <select
          name="cities"
          id="cities"
          value={this.state.selectValue}
          onChange={this.props.handleChange}
        >
          <option value="toronto">Toronto</option>
          <option value="montreal">Montreal</option>
          <option value="ottawa">Ottawa</option>
          <option value="buffalo">Buffalo</option>
          <option value="detroit">Detroit</option>
        </select>
        <button onClick={(e) => this.props.updateCity(e)}>click</button>
      </form>
    );
  }
}

export default Form;
