import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import s from "./components/Profile/Profile.module.css";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    console.log(props)
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer />}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/login' component={Login}/>
            </div>
        </div>
    );
}

export default App;

