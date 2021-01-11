import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const allItemsQuery = gql`
  query allItemsQuery {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;


export default class Items extends Component {
  render() {
    return (
      <div>
        <p>Items!</p>
        <Query query={allItemsQuery}>
          {(payload) => {
            console.log(payload);
            return <p>Hey I'm the child of query</p>;
          }}
        </Query>
      </div>
    )
  }
}
