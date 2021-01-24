import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../NotFound'
import Feed from '../Feed'
import Head from '../helpers/Head'
import UserHeader from './UserHeader'

const User = () => {
    return (
        <section className="container"> 
        <Head title='Minha conta'/>
        <UserHeader/>
        <Routes>
            <Route path="/" element={<Feed />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
            
        </section>
    )
}

export default User
