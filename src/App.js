import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import { useDispatch, useSelector} from 'react-redux'
import { fetchingData } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataSlice);
   
  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <NavBar/>
      <hr style={{marginTop : "10px"}} />
      <LandingPage/>
    </div>
  ) : <></>
}



export default App;
