import React from "react";
import WithoutRedux from "./components/withOutRedux";
import WithRedux from "./components/withRedux";

function App() {
  return (
    <div className="App">
      <div>
        without redux
        <WithoutRedux />
      </div>
      <div>
        with redux
        <WithRedux />
      </div>
    </div>
  );
}

export default App;
