import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard_Main from './components/dashboard/dashboard_main';
import Download_Main from './components/download/download_main';
import Landing_Page_Main from './components/landing_page/landing_page_main';
import Login_Main from './components/login/login_main';
import Signup_Main from './components/signup/signup_main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup_Main/>}></Route>
        <Route exact path='/downloads' element={<Download_Main/>}></Route>
        <Route exact path='/' element={<Landing_Page_Main/>}></Route>
        <Route exact path='/login' element={<Login_Main/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard_Main/>}></Route>
      </Routes>
    
    </BrowserRouter>
    {/* <Signup_Main/> */}
    {/* <Dashboard_Main/> */}
    {/* <Landing_Page_Main/> */}
    {/* <Download_Main/> */}
    </>
  );
}<Login_Main/>

export default App;
