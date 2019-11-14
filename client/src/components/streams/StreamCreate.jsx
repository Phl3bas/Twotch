import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  state = {};

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className='ui error message'>{error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <input
          type='submit'
          className='ui button primary'
          aria-label='label'
          value='submit'
        />
        .
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a valid title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a valid description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'steamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
