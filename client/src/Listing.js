import React from "react";

const Listing = (listing) => {
  const listings = listing.listings;

  return (
    <div className="listing">
      {listings.map((state) => (
        <ul className="state-list">
          <div className="state">
            <h2>{state.state}</h2>
            {state.links.map((link) => (
              <li className="list-item"><a href={link.link} target="_blank">{link.title}</a></li>
            ))}
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Listing;
