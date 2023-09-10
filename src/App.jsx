import Toolbar from './customComponents/Toolbar/Toolbar';
import './App.scss';
import UserProfile from './pages/UserProfile/UserProfile';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import Leftbar from './customComponents/Leftbar/Leftbar';
import Rightbar from './customComponents/Rightbar/Rightbar';
import Market from './customComponents/Market/Market';
import TopRated from './customComponents/TopRated/TopRated';
import { Navigate, Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import Feed from './customComponents/Feed/Feed';
import BuisnessProfileTop from './buisnessComponents/BuisnessProfileTop/BuisnessProfileTop';
import Navbar from './buisnessComponents/Navbar/Navbar';
import BuisnessDescription from './buisnessComponents/BuisnessDescription/BuisnessDescription';
import RightItemList from './buisnessComponents/RightItemList/RightItemList';
import BuisnessPost from './buisnessComponents/BuisnessPost/BuisnessPost';
import Main from './customComponents/Main/Main';


function App(){

    const Layout = ()=>{
      return(
        <div>
        <Toolbar buisnessAcc={true}/>
          <div style={{display:"flex"}}>
            <Leftbar/>
            <div style={{flex:6}}>
             <Outlet/>
            </div>
            <Rightbar/>
          </div>
        </div>
      )
    }

    const BuisnesLayout=()=>{
    return(
    <div className="BuisnessProfile">
      <Toolbar buisnessAcc={true}/>
      <Navbar/>
        <div className="BuisnessProfileWrapper" style={{display:"flex"}}>
          <div className="BuisnessProfileRight" style={{flex:"5.4",display:"flex",flexDirection:"column",position:"relative",marginRight:"5px"}}>
            <BuisnessProfileTop/>
              <div className="BuisnessProfileRightBottom" style={{position:"sticky",top:"85px",zIndex:"9",display:"flex",height:"80vh"}}>
                <BuisnessDescription/>
                <div className="main" style={{flex:"4.25",marginTop:"10px"}}>
                  <Outlet/>
                </div>
              </div>
          </div>
          <div className="sidebar" style={{flex:"1.1",marginTop:"20px"}}>
            <RightItemList/>
          </div>
        </div>
      </div>
    )
    }

    
  
    const ProtectedRoute = ({children})=>{
      return children;
    }
  
    const router = createBrowserRouter([
      {
        path:"/",
        element:
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
        children:[
          {
            path:"/",
            element:<Feed type="post"/>
          },
          {
            path:"/jobs",
            element:<Feed type="job"/>
          },
          {
            path:"/events",
            element:<Feed type="event"/>
          },
          {
            path:"/market",
            element:<Market/>
          },
          {
            path:"/topRated",
            element:<TopRated/>
          },
          {
            path:"/disOffer",
            element:<Market store={false}/>
          },
        ]
      },
      {
        path:"/buisnessProfile/:companyName",
        element:
        <ProtectedRoute>
          <BuisnesLayout/>
        </ProtectedRoute>,
        children:[
          {
            path:"/buisnessProfile/:companyName",
            element:<Main/>
          },
          {
            path:"/buisnessProfile/:companyName/post",
            element:<BuisnessPost type="post"/>
          },
          {
            path:"/buisnessProfile/:companyName/jobs",
            element:<BuisnessPost type="job"/>
          },
          {
            path:"/buisnessProfile/:companyName/events",
            element:<BuisnessPost type="event"/>
          },
          {
            path:"/buisnessProfile/:companyName/store",
            element:<Market store={true}/>
          }
        ]
      },
      {
        path:"/userProfile",
        element:  <>
        <Toolbar buisnessAcc={true}/>
        <UserProfile/>
        </>
      },
      {
        path:"/dashboard",
        element:<DashboardPage/>
      },
    ]);
    return (
      <div>
       <RouterProvider router={router}/>
      </div>
    );
  }


export default App