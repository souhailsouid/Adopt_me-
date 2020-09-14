import React from "react";
import pet from "@frontendmasters/pet";
class Details extends React.Component {
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: ``,
        media: animal.media,
      });
    });
  }
  render() {
    return <div></div>;
  }
}

export default Details;
