import React from "react";

const Footer = (data) => {
  let creators = [];

  for (let i = 1; i < data.listings.length; i++) {
    if (data.listings[i][4] !== "") {
      creators.push(data.listings[i][4]);
    }
  }

  return (
    <div className="footer">
      <div>Actively adding links related to the #DefundThePolice movement</div>
      <div>made with ❤️ by @gracewingo </div>
      <div>
        Want to contribute to the spreadsheet? Please go{" "}
        <a href="https://docs.google.com/spreadsheets/d/1Tu1fcZhsLl3ZasokqoOwJ8drjHeZh35eBF237DYZGdc/edit#gid=0">
          here
        </a>{" "}
        and add comments!
      </div>
      <div class="creditors">
        Huge Thank you to{" "}
        {creators.map((c) => (
          <a href={`https://twitter.com/${c}`}> {`${c}, `} </a>
        ))}
        for creating these resources and spreadsheets - You can follow them on
        Twitter.
      </div>
    </div>
  );
};

export default Footer;