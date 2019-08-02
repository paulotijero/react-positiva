import React from "react";

import { allServices } from "../services/api";

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    allServices().then(list => setData(list));
  }, []);

  const value = {
    data: data
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
