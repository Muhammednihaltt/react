import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './react-router-dom/Home'
import About from './react-router-dom/About'
import ProductDetail from './dynamic-routing/productDetail'
import Products from './dynamic-routing/Products'
// import Basic from './FunctionalComponents/Basic'
// import Home from './FunctionalComponents/Hooks/UseContext/Theme/Home'
// import { ThemeProvider } from './FunctionalComponents/Hooks/UseContext/Theme/ThemeContext'
// import { UserApiProvider } from './FunctionalComponents/Hooks/UseContext/User-list/UserApiContext'
// import UserList from './FunctionalComponents/Hooks/UseContext/User-list/UserList'
// import UseEff from './FunctionalComponents/Hooks/useEffect/UseEff'
// // import UserList from './FunctionalComponents/Hooks/useEffect/UserList'
// import Counter from './FunctionalComponents/Hooks/useState/Counter'
// import Props from './FunctionalComponents/Props'
// import State from './FunctionalComponents/state'
// import Basic from './Basic'
// import CallingFunction from './embeding-expression/CallingFunction'
// import Conditional from './embeding-expression/conditional'
// import Welcome from './embeding-expression/Welcome'


function App() {

  return (
    <>
      {/* // embeding expression
    // {/* <Basic/> */}
      {/* <Welcome />
      <CallingFunction />
      <Conditional />
      <Basic /> */}


      {/* // <----------Functional components --------> */}
      {/* <Basic /> */}
      {/* <State/> */}
      {/* <Props/> */}
      {/* <Counter/> */}
      {/* <UseEff/> */}
      {/* <UserList/> */}

      {/* ------------------Use Context----------------- */}

      {/* 1.Theme  */}
      {/* <ThemeProvider>
      <Home/>
    </ThemeProvider> */}
      {/* <UserApiProvider>
      <UserList/>
    </UserApiProvider> */}

      {/* -------react-router-dom------ */}
      {/* 1.basic */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link>|
          <Link to='/about'>About</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div> */}
      {/* ------2. dynamic routing---- */}
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </>

  )
}


// -------------ClassComponents---------

// import React, { Component } from 'react'
// import BasicClass from './ClassComponents/BasicClass'
// import Counter from './ClassComponents/Counter'
// import Mounting from './ClassComponents/LifeCycleMethods/Mounting'
// import Update from './ClassComponents/LifeCycleMethods/Update'
// import UnMounting from './ClassComponents/LifeCycleMethods/UnMounting'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <BasicClass/> */}
//         {/* <Counter/> */}


//       {/* -----Life Cycle Methods--------- */}

//       {/* <Mounting/> */}
//       {/* <Update/> */}
//       <UnMounting/>



//       </div>
//     )
//   }
// }


export default App
