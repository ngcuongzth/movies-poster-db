import React from 'react'
import SearchForm from "./SearchForm"
import { Outlet } from "react-router-dom"

const ShareLayout = () =>{
    return (
        <div className="sharelayout">
            <SearchForm/>
            <Outlet/>
        </div>
    )
}

export default ShareLayout