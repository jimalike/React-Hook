import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BASE_URL = "https://api.themoviedb.org/3"
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWZhYWUyMWJlY2EyNmRjMDdlZDk4MTA5MjM2MmZkNSIsInN1YiI6IjY2MDM0NGNmOGNmY2M3MDE3ZDA2YTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qd2nK9z2VAe1T9r9JkNF27YEX_pv5CN8n_3ZWTAxp2o"

function App() {


  // step -1 : เก็บ input จาก user => React State
  // step-2 : handle จังหวะ submit
  // step-3 : Make HTTP Request => Get Data
  // step-4 : เอา Data มาแสดงผล (เก็บเป็น React State)

  const [keyword, setKeyword] = useState('');
  const [movieLists, setMovieLists] = useState([])
  const [totalpage, settotalpage] = useState(0)


   const  handleSubmit = async (event) => {
    console.log('submitted');
    
    event.preventDefault();
    let url = `${BASE_URL}/search/keyword?query=${keyword}&page=1`
    let option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    }
    try{
      const response = await fetch(url,option);
      const data =  await response.json();
      setMovieLists(data.results);
      settotalpage(data.total_pages)
      // const movies = data.results
    } catch (error) {
      console.log(error);
    }
  };

  const  handleClick = async ( number) => {
    
    let url = `${BASE_URL}/search/keyword?query=${keyword}&page=${number}`
    let option = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    }
    try{
      const response = await fetch(url,option);
      const data =  await response.json();
      setMovieLists(data.results);
      settotalpage(data.total_pages)
      // const movies = data.results
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Movie App</h1>
      </div>
      <form className='search' onSubmit={handleSubmit}>
        <input type='text' placeholder='keyword ?' value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
        <button type='submit'>search</button>
      </form>

      <div>
        {Array.from(Array(totalpage).keys()).map((n) => (
          <button onClick={(event) => handleClick(n+1)} key={n}>{n+1}</button>
        ))}
      </div>

      <div className='movie-lists'>
        {movieLists.map((movie) => (
          <div key={movie.id} className='movie'>{movie.name}</div>
        ))}
      </div>
    </div>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

