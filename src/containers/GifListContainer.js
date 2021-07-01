import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      keyword: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
        keyword: event.target.value
    })
    };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.keyword}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let gifs = [];
        for (let i = 0; i < 3; i++) {
          gifs.push(data.data[i]);
        }
        this.setState({
          gifs
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} value={this.state.keyword}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
