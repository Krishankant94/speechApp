import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function({ datalist, defaultIndex }) {
  const [slectedInx, setSlectedInx] = useState(defaultIndex);
  return (
    <Tabs selectedIndex={slectedInx} onSelect={index => setSlectedInx(index)}>
      <TabList>
        {datalist.map((item, i) => (
          <Tab key={i}>{item.title}</Tab>
        ))}
      </TabList>
      {datalist.map((item, i) => (
        <TabPanel key={i}>{item.component}</TabPanel>
      ))}
    </Tabs>
  );
}
