  import './App.css';
  import NavBar from './components/Navbar';
  import React,{useState} from 'react'
  import TextForm from './components/TextForm';
  import Alert from './components/Alert';
  import About from './components/About';
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  function App() {
    const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type: type
        })
        setTimeout(() => {
          setAlert(null);
          }, 3000);
          }
          const [mode,setMode] = useState('light');
          const toggleMode = ()=>{
            if(mode === 'light'){
              setMode('dark');
              document.body.style.backgroundColor = '#191a37';
              document.body.style.color = 'white'
              showAlert("Dark Mode Enable","success")
              document.title = "Qtext - Dark Mode"
              }
              else{
                setMode('light');
                document.body.style.backgroundColor = 'white';
                document.body.style.color='black'
                showAlert("Light Mode Enable","success")
                document.title = "Qtext - Light Mode"
                }
                }
                const router = createBrowserRouter([
                  {
                    path: "/",
                    element: <><NavBar title="" mode={mode} toggleMode={toggleMode}/><Alert alert={alert}></Alert><TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/></>,
                  },
                  {
                    path: "/about",
                    element: <><NavBar title="" mode={mode} toggleMode={toggleMode}/>
                    <Alert alert={alert}></Alert>
                    <About/></>,
                  }
                ]);
                return (
                  <>
      <div className='container'>
      </div>
      <RouterProvider router={router} />
      </>
    );
  }

  export default App;
