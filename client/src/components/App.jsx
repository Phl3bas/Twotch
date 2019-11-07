import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList} />
        <Route path='/stream/new' exact component={StreamCreate} />
        <Route path='/stream/edit/:id' exact component={StreamEdit} />
        <Route path='/stream/delete/:id' exact component={StreamDelete} />
        <Route path='/stream/show/:id' exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
