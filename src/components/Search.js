import React, { Component } from "react";
import "./Search.css";

// URL Default for getting a summary paragraph from Wiki's API
let wikiUrl =
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=";

// Class Component: Search
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: "",
      paragraph: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = () => {
    let search = this.state.value;
    // Append the search query to the link
    let searchUrl = wikiUrl + search;

    // Fetch data from constructed search URL
    fetch(searchUrl)
      .then(res => {
        // Return data in form of JSON
        return res.json();
      })
      .then(foundData => {
        this.setState({
          paragraph:
            // Take the returned JSON data, access the first property (regardless of the name), get that property's 'extract'
            // Store the extract in the current 'State'
            foundData.query.pages[Object.keys(foundData.query.pages)[0]].extract
        });
      });
  };

  render() {
    return (
      <div className="search">
        <h1>Search Using Wikipedia API</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="searchTxt"
        />
        <input
          type="submit"
          name="Submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
        {/* If state's 'paragraph' is not null and has any value, render the component */}
        {this.state.paragraph ? <p>{this.state.paragraph}</p> : ""}
      </div>
    );
  }
}

export default Search;
