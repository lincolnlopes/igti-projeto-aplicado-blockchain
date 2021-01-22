import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed'
import UserHeader from './UserHeader'

const User = () => {
    return (
        <section className="container"> 
        <UserHeader/>
        <Routes>
            <Route path="/" element={<Feed />}/>
        </Routes>
            
        </section>
    )
}

export default User
