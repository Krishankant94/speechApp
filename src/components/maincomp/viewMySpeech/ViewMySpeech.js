import React, { useEffect, useState } from "react";
import Card from "../../common-ui/card";
import Button from "../../common-ui/button";
import Modal from "../../common-ui/modal";

export default function ViewMySpeech({ dataList }) {
  const [speechSet, setSpeeches] = useState([]);
  const [openModal, setModal] = useState(false);
  const [speechObj, setSpeechObj] = useState(null);

  useEffect(() => {
    setSpeeches(dataList);
  }, [dataList]);

  const speeches =
    speechSet &&
    speechSet.map((item, i) => (
      <Card
        key={i}
        onClick={() => {
          setModal(true);
          setSpeechObj(item);
        }}
        author={item.author.name}
        text={item.text}
        keywords={item.keywords}
      />
    ));

  const handleSave = dataObj => {
    let tempArr = [...speechSet, dataObj];
    setSpeeches(tempArr);
    setModal(false);
  };

  const handleUpdate = obj => {
    const findIndexOfDel = speechSet.findIndex(
      item => item.sid === speechObj.sid
    );
    speechSet.splice(findIndexOfDel, 1, obj);
    setSpeeches(speechSet);
    setModal(false);
  };

  const handleDelete = () => {
    const findIndexOfDel = speechSet.findIndex(
      item => item.sid === speechObj.sid
    );
    speechSet.splice(findIndexOfDel, 1);
    setSpeeches(speechSet);
    setModal(false);
  };

  return (
    <div className="view-my-search">
      <div className="btn-section">
        <Button
          primary
          onClick={() => {
            setModal(true);
            setSpeechObj(false);
          }}
        >
          Submit a New Speech
        </Button>
      </div>
      {speeches && <div className="search-results">{speeches}</div>}
      {openModal && (
        <Modal
          dataObj={speechObj}
          edit
          onSave={handleSave}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </div>
  );
}
