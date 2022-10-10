import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <div className="card">
        <div className="header">
          <h1>page not found</h1>
        </div>
        <div className="body">
          <p>Looks like you've followed a broken link or entered a 
            URL that doesn't exist on this site.</p>
          <p>
            <Link className="btn" to="/">Back to site</Link>
          </p>
        </div>
      </div>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    .card{
      position: relative;
    display: flex;
    flex-direction: column;
    width: 75%;
    max-width: 364px;
    padding: 24px;
    background: white;
    color: rgb(14, 30, 37);
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgb(14 30 37 / 16%);  
    }
    .header{
      h1{
      margin: 0;
      font-size: 22px;
      line-height: 24px;
        }
      }
    .body{

    }

`
export default ErrorPage;
