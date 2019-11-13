import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  input = ({ input }) => {
    return (
      <div>
        <label>{input.name}</label>
        <input type='text' name={input.name} id='' />
      </div>
    );
  };

  render() {
    return (
      <form>
        <Field name='title' component={this.input} />
        <Field name='description' component={this.input} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'steamCreate',
})(StreamCreate);
