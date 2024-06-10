import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "./App.css";

import Body from './component/Body'

import Trending from './Page/Trending';
import Movie from './Page/Movie';
import Tvshow from './Page/Tvshow';
import Search from './Page/Search';

import { Outlet, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Body />
//       },
//       {
//         path: "Trending",
//         element: <Trending />
//       },
//       {
//         path: "Movie",
//         element: <Movie />
//       },
//       {
//         path: "Tvshow",
//         element: <><Tvshow /></>
//       },
//       {
//         path: "Search",
//         element: <Search />
//       }

//     ]
//   },

// ])

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Trending />} />
      <Route path="Trending" element={<Trending />} />
      <Route path="Movie" element={<Movie />} />
      <Route path="Tvshow" element={<Tvshow />} />
      <Route path="Search" element={<Search />} />
    </Route>
  )
)
ReactDOM.render(
  <RouterProvider router={route} />,
  document.getElementById('root')
);
