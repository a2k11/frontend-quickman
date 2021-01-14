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

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={this.state.price}
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="price">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Enter a Description"
              value={this.state.description}
              required
              onChange={this.handleChange}
            />
          </label>


        </fieldset>
      </Form>
    )
  }
}

export default CreateItem;
