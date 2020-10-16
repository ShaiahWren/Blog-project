import React from 'react';
import PostList from './components/PostList';
import { BrowserRouter as Router} from 'react-router-dom' ;


import './App.css';

function App() {
  return (
    <div className="App">
      <Router> 
        <PostList />
      </Router>
    </div>
  );
}

export default App;
