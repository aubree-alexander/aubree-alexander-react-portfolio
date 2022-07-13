
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import Home from './components/home'
import Resume from './components/resume'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            {/* default page */}
            <Route path='/' element={<Home />}/>
            <Route path='/resume' element={<Resume />}/>
        </Routes>
        </BrowserRouter>
        <Footer></Footer>

    </div>
  )
}

export default App










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
