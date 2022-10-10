import React , {useContext}from 'react'
import { GlobalContext } from '../store/context'
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrapper>
        <h1>Loading...</h1>
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.section`
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 3rem;
    h1{
        color: #FF6651;
        text-align: center;
    }

`
export default Loading