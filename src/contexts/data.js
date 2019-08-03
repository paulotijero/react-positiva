import React from "react";

import { allServices } from "../services/api";

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);
  const [step, setStep] = React.useState(1);
  const [info, setInfo] = React.useState({});

  React.useEffect(() => {
    allServices().then(list => setData(list));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setStep(step + 1);
  }

  function handleChange(event) {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  const value = {
    data: data,
    step: step,
    handleSubmit: handleSubmit,
    handleChange: handleChange
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
