import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBZJr23idl22iOKn3goHkh0jBsQfMV2DZ0';

const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}


ReactDOM.render(<App />, document.querySelector('.container'));
