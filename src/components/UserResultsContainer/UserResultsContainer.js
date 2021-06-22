import React, { Component } from "react";
import UserDataset from "../UserDataset/UserDataset";
import Search from "../Search/Search";
import API from "../../utils/api.js";

class UserResultsContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.fetchEmployees()
      .then((res) => {
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results,
        });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.searchByName(value.toLowerCase());
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  searchByName = (input) => {
    if (input !== "") {
      this.setState({
        filteredResults: this.state.results.filter((user) => {
          return user.name.first.toLowerCase().includes(input);
        }),
      });
      console.log(this.state.filteredResults);
    } else {
      this.setState({ filteredResults: this.state.results });
    }
  };

  sortByAscending = (columnName) => {
    console.log(columnName);
    if (columnName === "First") {
      const data = this.state.results;
      data.sort((a, b) => {
        if (a.name.first > b.name.first) {
          return 1;
        } else {
          return 0;
        }
      });
      this.setState({
        results: data,
      });
    }
  };

  sortByDescending = (columnName) => {
    console.log("double clicked", columnName);
    if (columnName === "First") {
      const data = this.state.results;
      data.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return 1;
        } else {
          return 0;
        }
      });
      this.setState({
        results: data,
      });
    }
  };

  render() {
    return (
      <>
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <UserDataset
          className="dataset"
          results={this.state.filteredResults}
          searchByName={this.searchByName}
          ascending={this.sortByAscending}
          descending={this.sortByDescending}
        />
      </>
    );
  }
}

export default UserResultsContainer;
