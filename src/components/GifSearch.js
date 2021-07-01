import React, { Component } from "react";

export default class GifSearch extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label>Enter a Search Term</label>
          <input
            type="text"
            name="keyword"
            onChange={(event) => this.props.handleInputChange(event)}
            value={this.props.vlaue}
          />
        </div>
        <button type="submit">Find Gifs</button>
      </form>
    );
  }
}
