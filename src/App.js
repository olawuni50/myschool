import React, {useState} from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";
import Sidebar from "./Component/Sidebar/Sidebar";
import Footers from "./Component/Footer/Footers"
import MyService from "./Pages/MyService";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Loginn from "./Pages/Loginn";
// import ProfilesLists from "./Component/Profile/ProfilesLists";
// import Sign from "./Component/MySignUp/Sign";
import Payment from "./Pages/Payment";
import MyContact from "./Pages/MyContact";



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [infos, setInfo] = useState([])
  const [isLoading] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    // Add info

    const addInfo = (info) => {
      const id = Math.floor(Math.random() * 1000) + 1
  setInfo([...infos, {id:id, ...info}])
    }



  return (
   
    <Router>
    
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route exact path="/services" component={MyService}/>
        <Route exact path="/sign-up" component={SignUp}/>    
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Loginn}/>
        <Route exact path="/payment-form" component={Payment}/>
        <Route exact path="/contacts" component={MyContact}/>
        {/* <Route path="/profile" component={ProfilesLists} infos={infos}/> */}
        {/* <Route path = "/sign-up" component={Sign} addInfo={addInfo}/> */}
    
      </Switch>
      <Footers/>
    </Router>
    

  );
    
    
}

export default App;
