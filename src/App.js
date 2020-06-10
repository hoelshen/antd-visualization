import React, { Suspense } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import routes from './router'


import './App.css';



function App() {
  return (
    <div className="App">
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        {
        //遍历配置文件，生成路由列表
          routes.map((route,index)=>{
            return (
            //路由配置中的全部属性作为Route的属性
              <Route {...route} key={index}/>
            )
          })
        }
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
