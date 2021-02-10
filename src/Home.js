const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, Ninjas!");
    console.log(e);
  };

  const handleClickAgain = (e, name) => {
    console.log("hello " + name);
    console.log(e);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClickAgain(e, "Mario");
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
