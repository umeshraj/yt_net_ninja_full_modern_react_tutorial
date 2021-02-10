import { useState } from "react";

const Home = () => {
  let name = "mario";

  const handleClick = () => {
    name = "luigi";
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
