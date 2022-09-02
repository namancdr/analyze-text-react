import {useState} from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {

    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    
    const showAlert = (message, type)=> {
        setAlert({
            msg : message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }
    
    const toggleMode =()=>{
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = '#212529'
            showAlert('Dark mode has been enabled', 'success')
        }else{
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert('Light mode has been enabled', 'success')

        }
    }

    return(
        <Router>
            <div>
                <Navbar title="/Analyz/" mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert} />

                <Switch>
                    <Route exact path="/about">
                        <About mode={mode} />
                    </Route>
                    <Route exact path="/">
                        <TextForm heading="Enter your text" mode={mode} />
                    </Route>
                </Switch>

                {/* <About /> */}
            </div>
        </Router>
    )
}
export default App;