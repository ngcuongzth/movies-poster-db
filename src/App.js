import React, { useContext, useEffect } from 'react'
import { GlobalContext } from './store/context';
import HomePage from './Pages/HomePage';
import ShareLayout from './components/ShareLayout';
import ErrorPage from './Pages/ErrorPage'
import SingleMoviesPage from './Pages/SingleMoviesPage';
import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_START
} from './store/action'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const { useAxios, dispatch, state, API_ENDPOINT } = useContext(GlobalContext);
  const { query } = state;

  const { myResponse, loading } = useAxios(`${API_ENDPOINT}&s=${query}`);


  useEffect(() => {
    if (loading === true) {
      dispatch({
        type: FETCH_MOVIES_START
      })
      return;
    }
    else {
      if (myResponse.Response === "True") {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: myResponse.Search
        })
      }
      if (myResponse.Response === "False") {
        console.log(myResponse.Error)
        dispatch({
          type: FETCH_MOVIES_FAILURE,
          payload: myResponse.Error
        })
      }
    }
  }, [myResponse, loading])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="movies/:id" element={<SingleMoviesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App