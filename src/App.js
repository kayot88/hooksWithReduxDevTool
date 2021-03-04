import React from "react";
import Message from "./components/Snackbars";
import WithoutRedux from "./components/withOutRedux";
import WithReduxToolkit from "./components/withRedux";

function App() {
  return (
    <div className="App">
      <div>
        without redux
        {/* <WithoutRedux /> */}
      </div>
      <div>
        with redux
        <WithReduxToolkit />
      </div>
      <div>
        <Message />
      </div>
    </div>
  );
}

export default App;
