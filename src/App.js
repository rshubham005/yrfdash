
import Auth from './components/auth/Auth'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";
import Admin from './components/Admin';
import Users  from './components/routes/Users';
import Rewards from './components/routes/Rewards';
import Setting from './components/routes/Setting';
import Rewarddesc from './components/routes/Rewarddesc';
import Login from './components/auth/Login';
import Userinfo from './components/routes/Userinfo';
import Usermoreinfo from './components/routes/Usermoreinfo';
import Appusage from './components/routes/Appusage';
import Dashboard from './components/routes/Dashboard';
// import Bookingdetails from './components/routes/Bookingdetails';
import Actors from './components/routes/Actors'
import DataContext from './components/DataContext';
import ActorDetails from './components/routes/ActorDetails';
import MovieDetail from './components/routes/MovieDetail';
import FBO from './components/routes/FBO'
import LBO from './components/routes/LBO'
import WBO from './components/routes/WBO'
import Genre from './components/routes/Genre';
import GenreDetail from './components/routes/GenreDetail';

function App() {
  return (
    <DataContext>
      <Router>
      <Routes>
        <Route path='/auth/' element={<Auth />}>
        <Route path='/auth/login' element={<Login />}></Route>
        </Route>
        
        {/* (localStorage.getItem('username'))? */}
        <Route path='/' element={(localStorage.getItem('username'))?<Admin />:<Auth />}>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Appusage />} ></Route>   
          {/* <Route path="/dashboard/booking-details" element={<Bookingdetails />} ></Route>    */}
          <Route path="/dashboard/actors" element={<Actors />} ></Route>
          <Route path="/dashboard/genre" element={<Genre />} ></Route>
        </Route>
        <Route path="/genre-info/:genre" element={<GenreDetail />} ></Route>
        <Route path='actor-details/:actor' element={<ActorDetails />} ></Route>
        <Route path='movie-detail/' element={<MovieDetail />} >
            <Route exact path='/movie-detail/:movie' element={<FBO />}/>
            <Route exact path='/movie-detail/wbo/:movie' element={<WBO />}/>
            <Route exact path='/movie-detail/lbo/:movie' element={<LBO />}/>
        </Route>
        <Route path="/user-management" element={<Users />}></Route>
        <Route path="/rewards" element={<Rewards />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/reward-description/:id" element={<Rewarddesc />}></Route>
        <Route path="/user-info/:id" element={<Userinfo />}></Route>
        <Route path="/user-more-info/:id" element={<Usermoreinfo />}></Route>
        </Route>
      </Routes>
    </Router>
    </DataContext>
  );
}

export default App;