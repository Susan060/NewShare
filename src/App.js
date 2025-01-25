import "./App.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
  const[progress,setprogress]=useState(0)
  let pageSize = 10;
  const apikey="2cc22390140a40cead3a2799f4fd9fce"
 const  setProgress = (progress) => {
    setprogress(progress);
  };

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress= {setProgress} apikey={apikey}
                  key="general"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="science"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="science"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="Business"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="Sports"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="Health"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="General"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="Entertainment"
                  pageSize={pageSize}
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
                  setProgress= {setProgress} apikey={apikey}
                  key="Technology"
                  pageSize={pageSize}
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

export default App;
