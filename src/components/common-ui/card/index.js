import React from "react";

const Card = ({ author, text, keywords, onClick }) => {
  return (
    <div className="speech-app-card " onClick={onClick}>
      <div className="card-header">
        <h1>{author}</h1>
        <div className="speech-card-content">
          <p>{text}</p>
        </div>
      </div>
      <div className="speech-card-footer">
        {keywords && (
          <ul>
            {keywords.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
