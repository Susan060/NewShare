import "./App.css";
import React, { Component } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 10;
  apikey="2cc22390140a40cead3a2799f4fd9fce"
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="general"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="science"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="Business"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Business"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="Sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Sports"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="Health"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Health"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="General"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"General"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Entertainment"}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress= {this.setProgress} apikey={this.apikey}
                  key="Technology"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
