import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0,
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlfor="title">
            Quick
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              required
            />
          </label>
        </fieldset>
      </Form>
    )
  }
}

export default CreateItem;
