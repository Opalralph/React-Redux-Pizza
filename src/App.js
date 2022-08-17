import './App.css';
import React from "react";
import Items from "./components/Items";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
  return (
    <div className="App">
          <div className="navbar navbar-dark bg-dark navbar-expand-sm sticky-top">
              <div className="container">
                  <a className="navbar-brand font-weight-bolder " href="/">Pizza Hut with React | Redux </a>
              </div>
          </div>
        <Provider store={store} >
        <div className="container mt-5">
            <Items />
        </div>
        </Provider>
    </div>
  );
}
export default App
