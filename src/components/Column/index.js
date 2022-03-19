import React from "react";

const Component = ({ imageURL, imageAlt, children }) => {
  return (
    <div>
      {imageURL && (
        <img src={imageURL} alt={imageAlt} />
      )}
      {children}
    </div>
  );
};

export default Component;
