import React, { useState } from "react";
import Card from "../../common-ui/card";
import Button from "../../common-ui/button";
import Modal from "../../common-ui/modal";

const SearchSpeech = ({ dataList }) => {
  const [searchableText, setSearchableText] = useState("");
  const [speechesSet, setSpeeches] = useState(null);
  const [speechObj, setSpeechObj] = useState(null);
  const [openModal, setModal] = useState(false);

  const handleSearch = () => {
    let data = dataList.filter(item =>
      item.author.name.includes(searchableText.trim().toLowerCase())
    );
    setSpeeches(data);
  };

  const handleAllSearch = () => {
    setSpeeches(Object.values(dataList));
  };

  const speeches =
    speechesSet &&
    speechesSet.map((item, i) => (
      <Card
        onClick={() => {
          setModal(true);
          setSpeechObj(item);
        }}
        key={i}
        author={item.author.name}
        text={item.text}
        keywords={item.keywords}
      />
    ));

  return (
    <div className="search-speech-container">
      <div className="search-section">
        <ul>
          <li>
            {" "}
            <input
              className="form-control"
              placeholder="Enter Auther Name"
              type="text"
              onChange={e => {
                setSearchableText(e.target.value);
              }}
              value={searchableText}
            />
          </li>
          <li>
            <Button
              primary
              disabled={searchableText ? false : true}
              onClick={handleSearch}
            >
              {" "}
              Search
            </Button>
          </li>
          <li>
            <Button secondary onClick={handleAllSearch}>
              All
            </Button>
          </li>
        </ul>
      </div>
      {openModal && (
        <Modal
          dataObj={speechObj}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
      {speeches && <div className="search-results">{speeches}</div>}
    </div>
  );
};
export default SearchSpeech;
