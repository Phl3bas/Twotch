import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const pageOne = () => {
  return <div>PageOne</div>;
};

const pageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' exact component={pageOne} />
        <Route path='/pagetwo' component={pageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
