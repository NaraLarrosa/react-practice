import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
// import { formValues, Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  // renderInput({ input, label, meta }) {
  //   return(
  //     <div className={className}>
  //       <label>{ label }</label>
  //       <input { ...input} autoComplete="off" />
  //       {this.renderError(meta )}
  //     </div>
  //   );
  // };

  // onSubmit( formValues ) {
  //   console.log(formValues);
  // };

  // render() {
  //   return(
  //     <form onSubmt={this.props.handleSubmit(this.onSubmit)} className="ui form">
  //       <Field 
  //         name="title" 
  //         component={this.renderInput} 
  //         label="Enter title"
  //       />
  //       <Field 
  //         name="title" 
  //         component={this.renderInput} 
  //         label="Enter description"
  //       />
  //       <button className="ui button primary">Submit</button>
  //     </form>
  //   );
  // };

  // const validate= (formValues) => {
  //   const errors = {};
  //   if(!formValues.title) {
  //     errors.title = 'You must enter a description';
  //   };
  // };

  
// export default reduxForm({
//   form: 'streamCreate',
//   validate
// })(StreamCreate);


  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

