import { useState } from 'react';    
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)
  const showAlert=(message, type)=>{
      setalert({
        message:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 2000);
  }
  const togglemode=()=>{
    if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = '#333333';
        showAlert("Dark mode has been enabled","success")
    }
    else {
        setmode('light')
        document.body.style.backgroundColor =  'white';
        showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Text Utilty App" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-4">
      <Textform showAlert={showAlert } heading="Enter the text below:" mode={mode}/>
    </div>
    </>
  );
}
export default App;