import logo from './logo.svg';
import './App.css';

//updated app.js to call the components i created in the folder

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


//called instances of each component
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;