import React, { useState } from "react";

const Fetch = () => {
  const [data, setData] = useState(
    fetch("https://api.thecatapi.com/v1/images/search").then((resp) =>
      resp.json().then(resp.url)
    )
  );
  function newCat() {
    fetch("https://api.thecatapi.com/v1/images/search").then((resp) =>
      resp.json().then(setData(resp.url))
    );
  }
  return (
    <>
      <img src={data} />
      {console.log(data)}
      <button onClick={newCat}>CAT</button>
    </>
  );
};

export default Fetch;
