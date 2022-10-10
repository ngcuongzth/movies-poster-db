import React, {useContext} from 'react';
import { GlobalContext } from '../store/context';
import { HANDLE_QUERY_CHANGE } from '../store/action';

const SearchForm = () =>{
  const {state, dispatch} = useContext(GlobalContext);
  const {query, errorMessage} = state;
    return <form className="search-form">
        <h2>search movies</h2>
        <input type="text" className="form-input" value={query}
        onChange={(e)=>{
         dispatch({
          type: HANDLE_QUERY_CHANGE,
          payload: e.target.value
         })
        }}
        />
        <div className="error">{errorMessage}</div>
      </form>
}

export default SearchForm;