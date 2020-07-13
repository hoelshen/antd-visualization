import React from 'react'

const Home = React.lazy(()=>import(/*webpackchunkname:Home*/'./pages/Home' ))
const Edit = React.lazy(()=>import(/*webpackchunkname:Edit*/'./pages/Edit' ))
const Drag = React.lazy(()=>import(/*webpackchunkname:Drage*/'./pages/Drag'))
const Sort = React.lazy(()=>import(/*webpackchunkname:Drage*/'./pages/Sort'))

export default [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/edit/:id',
        component:Edit
    },
    {
      path:'/drag/index',
      component:Drag
    },
    {
      path:'/sort/index',
      component:Sort
    }
]
