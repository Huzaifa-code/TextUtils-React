
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// In react-router-dom v6, "Switch" is replaced by routes "Routes"

function App() {

  const [mode , setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
          setAlert({
            msg: message,
            type: type
          })
          setTimeout(() => {
              setAlert(null);
          }, 3000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled 🔥 ", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>

        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-4">
        <Routes>
              <Route exact path="/about" element={<About/>}>       
              </Route>
              
              <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> }>
              </Route>
        </Routes>
         
        </div>
    </Router>
    </>
  );
}

export default App;
