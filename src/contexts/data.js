import React from "react";

import { allServices } from "../services/api";
import dataJson from "../services/data.json"

const DataContext = React.createContext();

function DataProvider(props) {
  const [data, setData] = React.useState([]);
  const [step, setStep] = React.useState(
    JSON.parse(localStorage.getItem("step") || 1)
  );
  const [info, setInfo] = React.useState(
    JSON.parse(localStorage.getItem("info") || "{}")
  );

  React.useEffect(() => {
    allServices().then(list => setData(list));
    if(data.length === 0) setData(dataJson); // Access to fetch at 'https://challenge-labp.s3.amazonaws.com/services.json' from origin has been blocked by CORS 
  }, [data.length]);

  function handleSubmit(event) {
    event.preventDefault();
    if (step === 4) {
      setInfo({
        address: "",
        date: "",
        email: "",
        lastname: "",
        name: "",
        phone: ""
      });
      setStep(1);
      localStorage.clear();
    } else {
      setStep(step + 1);
      localStorage.setItem("step", JSON.stringify(step + 1));
    }
  }

  function handleChange(event) {
    setInfo({ ...info, [event.target.name]: event.target.value });
    localStorage.setItem(
      "info",
      JSON.stringify({ ...info, [event.target.name]: event.target.value })
    );
  }

  const value = {
    data: data,
    step: step,
    info: info,
    handleSubmit: handleSubmit,
    handleChange: handleChange
  };

  return <DataContext.Provider value={value} {...props} />;
}

export { DataProvider, DataContext };
