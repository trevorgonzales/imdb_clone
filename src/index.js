// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Movie from './routes/Movie';
import Shows from './routes/Shows';
import Actors from './routes/Actors';
import WatchList from './routes/Watchlist';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/movie" element={<Movie />}></Route>
      <Route path="/shows" element={<Shows />}></Route>
      <Route path="/actors" element={<Actors />}></Route>
      <Route path="/watchlist" element={<WatchList />}></Route>
    </Routes>
  </BrowserRouter>
  /*<StrictMode>
    <App />
  </StrictMode>*/
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
