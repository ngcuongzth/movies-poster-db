import React , {useContext}from 'react'
import Movies from '../components/Movies'
import Loading from '../components/Loading'
import {GlobalContext} from '../store/context'
const HomePage = () => {
  const {state} = useContext(GlobalContext)
  const {isLoading} = state;
  if(isLoading){
    return <Loading/>
  }
  else{
    return <Movies/>
  }
}

export default HomePage