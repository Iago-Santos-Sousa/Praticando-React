import "./LoaderUm.css";

const LoaderUm = () => {
  const containerLoader = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const loadingDisplay = {
    margin: "0 auto",
    width: "60px",
    height: "60px",
  };

  return (
    <div id="loader-um" style={containerLoader}>
      <div className="loading-display" style={loadingDisplay}>
        <div className="c-loader-um"></div>
      </div>
    </div>
  );
};

export default LoaderUm;
