import React from "react";
import Tabs from "./components/common-ui/tabs";
import SearchSpeech from "./components/maincomp/searchSpeech/SearchSpeech";
import ViewMySpeech from "./components/maincomp/viewMySpeech/ViewMySpeech";
import mockData from "./mockData/speeches.json";

const App = () => {
  let filteredData = Object.values(mockData);
  filteredData = filteredData.filter(item => item.author.name === "krishan");

  const dataList = [
    {
      title: "Search Speeches",
      component: <SearchSpeech dataList={Object.values(mockData)} />
    },
    {
      title: "View My Speeches",
      component: <ViewMySpeech dataList={filteredData} />
    }
  ];
  return (
    <div>
      {/* <SpeechContainer /> */}
      <Tabs datalist={dataList} defaultIndex={0} />
    </div>
  );
};

export default App;
