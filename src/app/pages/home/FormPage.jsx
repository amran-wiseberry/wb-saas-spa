import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Button, Form } from 'reactstrap';
import TextInput from '../../partials/form/TextInput';


const mapState = (state, ownProps) => {

  return {
    state: state
  };
};

const FormPage = () => {
  const onFormSubmit = values => {
console.log(values);
    }
  };
    return (
        <div>
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete='off'
            >
              
              <Field
                label='Name'
                name='title'
                component={TextInput}
                placeholder='Give your event a name'
              />
              {/* <Field
                name='category'
                component={SelectInput}
                options={category}
                placeholder='What is your event about?'
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Tell us about your event'
              />
              <Header sub color='teal' content='Event location details' />
              <Field
                name='city'
                component={PlaceInput}
                options={{types: ['(cities)']}}
                onSelect={this.handleCitySelect}
                placeholder='Event city'
              />
              <Field
                name='venue'
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types: ['establishment']
                }}
                onSelect={this.handleVenueSelect}
                placeholder='Event venue'
              />
              <Field
                name='date'
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                placeholder='Event date'
                showTimeSelect
                timeFormat='HH:mm'
              /> */}
              <Button disabled={invalid || submitting || pristine} positive type='submit'>
                Submit
              </Button>
              <Button
                type='button'
              >
                Cancel
              </Button>
            </Form>
        </div>
    )
}

export default connect(
  mapState,
)(reduxForm({ form: 'eventForm'})(FormPage));