import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation createItemMutation(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: 'shoes',
    description: 'Fresh new shoes',
    image: 'shoe.jpg',
    largeImage: 'largeShoe.jpg',
    price: 1110,
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    console.log("Uploading file");
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'quickman');

    const response = await fetch(
      process.env.NEXT_PUBLIC_CLOUDINARY, {
      method: 'POST',
      body: data
    });
    const file = await response.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

  render() {
    const { router } = this.props;

    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form onSubmit={async (e) => {
            e.preventDefault();
            const res = await createItem();

            router.push({
              pathname: '/item/[id]',
              query: { id: res.data.createItem.id },
            });
          }}>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
                Image
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload an Image"
                  required
                  onChange={this.uploadFile}
                  />
              </label>

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
              <label htmlFor="description">
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
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
