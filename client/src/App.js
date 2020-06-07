import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Listing from "./Listing";
import Why from "./Why";
import "./App.css";
import { useFetch } from "./useFetchHook";

const App = () => {
  const { data, loading } = useFetch("/api");
  let states = [];

  if (data) {
    for (let i = 1; i < data.length; i++) {
      let state = data[i][1];
      if (states.indexOf(state) === -1) {
        states.push(state);
      }
    }
  }
  // Will refactor.
  let listingObj = {};

  for (let i = 0; i < states.length; i++) {
    for (let j = 1; j < data.length; j++) {
      let link = data[j][2];
      let title = data[j][3];

      if (states[i] === data[j][1]) {
        if (listingObj[states[i]]) {
          listingObj[states[i]].push({ link, title });
        } else {
          listingObj[states[i]] = [];
          listingObj[states[i]].push({ link, title });
        }
      }
    }
  }

  states = Object.keys(listingObj).map((s) => ({
    state: s,
    links: listingObj[s],
  }));

  return (
    <div className="App">
      <Header className="Header" />
      <Why />
      <div className="Listings">
        {loading ? "...Loading" : <Listing listings={states} />}
      </div>
      <div className="Actions">
        <p>
          In many municipalities, the fiscal year ends on{" "}
          <strong>June 30</strong>. Next year’s budgets are being finalized this
          month and will take effect in July.{" "}
        </p>
        <h3>Here's how you can take action now to reallocate these funds:</h3>
        <ul>
          <li>
            Call and email your city council members and mayor directly:{" "}
            <a href="https://defund12.org/">Defund12.org</a>
          </li>
          <li>
            <a href="https://blacklivesmatter.com/defundthepolice/">Sign</a> the
            Black Lives Matter #DefundThePolice petition{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.nis.us/blog/how-to-defund-your-police-department-in-six-steps">
              12 Steps
            </a>{" "}
            to Defunding Your Police Department by NIS{" "}
          </li>
          <li>
            Want to Defund the Police? Refinery29{" "}
            <a href="https://www.refinery29.com/en-us/2020/06/9856512/how-to-help-defund-the-police">
              how you can help
            </a>
            :{" "}
          </li>
        </ul>
      </div>
      {data && <Footer listings={data} />}
    </div>
  );
};

export default App;
