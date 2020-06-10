import React from 'react'

const Home = React.lazy(()=>import(/*webpackchunkname:Home*/'./pages/Home' ))
const Edit = React.lazy(()=>import(/*webpackchunkname:Edit*/'./pages/Edit' ))

export default [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/edit/:id',
        component:Edit
    }
]
