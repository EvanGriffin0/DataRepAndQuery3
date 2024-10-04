import logo from './logo.svg';
import './App.css';


//import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//updated app.js to call the components i created in the folder

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import NavigationBar from './components/navbar';



//called instances of each component
//added instance of navbar
//added the routes

function App() {
  return (

    //adjusted the navigation bar to call the components and load them on page
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<Header />} />
          <Route path="/create" element={<Footer />} />
        </Routes>
       
      </Router>
    
    </div>
  );
}

export default App;