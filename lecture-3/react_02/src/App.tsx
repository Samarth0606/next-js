import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState({ name: "", email: "" });

  async function callApi() {
    await new Promise((r) => setTimeout(r, 5000));

    let data = await fetch(
      "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    let resp = await data.json();
    setLoader(false);
    setData(resp);
  }

  useEffect(function () {
    callApi();
  }, []);

  if (loader) {
    return "loading...";
  }

  return (
    <div>
      <Card email={data.email} name={data.name} />
    </div>
  );
}

export default App;
