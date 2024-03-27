import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <h1>Movie App</h1>
      </div>
      <div className='search'>
        <input type='text' placeholder='keyword ?'></input>
        <button>search</button>
      </div>

      <div className='movie-lists'>
        <div className='movie'>Movie-1</div>
        <div className='movie'>Movie-2</div>
      </div>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

