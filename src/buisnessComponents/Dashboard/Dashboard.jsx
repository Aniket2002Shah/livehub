import'./Dashboard.scss'
import {Bar, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS , CategoryScale, LinearScale, PointElement,LineElement,Title,Tooltip,Legend,BarElement,ArcElement} from 'chart.js'
import { AppRegistration, ArrowUpward, AttachMoney, Circle, Dashboard as DashboardIcon, Description, Payment, Person, RateReview, Star, Sync } from '@mui/icons-material'
import Purchase from '../Purchase/Purchase'
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,BarElement,ArcElement)

function Dashboard(){

    const menuList = ["Dashboard","Registrations/Orders","Earnings","Ratings","Reviews","Followers","Payment & Transactions","Documentation"]

    const dashboardDataList = ["Earnings","Registrations/Orders","Ratings","Reviews","Followers"]
    const dashboardValueList = ["23k","440","89","35","15"]

    const icon =(value)=>{
        switch(value){
            case 0: return <DashboardIcon style={{width:"19px",height:"19px"}}/>
            case 1:return <AppRegistration style={{width:"19px",height:"19px"}}/>
            case 2:return <AttachMoney style={{width:"19px",height:"19px"}}/>
            case 3:return <Star style={{width:"19px",height:"19px"}}/>
            case 4:return <RateReview style={{width:"19px",height:"19px"}}/>
            case 5:return  <Person style={{width:"19px",height:"19px"}}/>
            case 6:return <Payment style={{width:"19px",height:"19px"}}/>
            case 7:return <Description style={{width:"19px",height:"19px"}}/>
            default:return <Dashboard style={{width:"19px",height:"19px"}}/>
        }
    }

    const getItemIcons = (value)=>{
        switch(value){
            case 0: return <AttachMoney style={{width:"26px",height:"26px",color:"#10A815"}}/>
            case 1:return <AppRegistration style={{width:"26px",height:"26px",color:"#910E91"}}/>
            case 2:return <Star style={{width:"26px",height:"26px",color:"#FFCD05"}}/>
            case 3:return <RateReview style={{width:"26px",height:"26px",color:"#F38129"}}/>
            case 4:return <Person style={{width:"26px",height:"26px",color:"#4A3DFF"}}/>
            default:return
        }
    }

    const MenuItem = ({value})=>{
        return(
          <div className="menuItemContainer" style={{display:"flex",alignContent:"flex-end",gap:"5px"}}>
            <span>{icon(value)}</span>
            <span className="menuName">{menuList[value]}</span>
          </div>
        );
      }


      const DashboardItem =({value})=>{
        return(
            <div className="dashboardItemBox" >
                <div className="symbol">
                    <div className="symboltext">{dashboardDataList[value]}</div>
                    <span>{getItemIcons(value)}</span>
                </div>
                <div className="symbolvalue">{dashboardValueList[value]}</div>
            </div>
        )
      }

    const baroption={
        responsive:true,
        plugins:{
            legend:{display:false},
            title:{
                display:false,
                text:"Module Bar Chart",
            }
        }    
    }

    const bardata={
        labels:["01","02","03","04","05","06","07","08","09","10","11","12","13","4","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],
        datasets:[
            {
                label:"Previous Month",
                data:[20,30,40,50,60,30],
                backgroundColor:"#10A815"
            },
            {
                label:"Current Month",
                data:[15,20,45,30,10,40],
                backgroundColor:"#4A3DFF"
            }
        ]
    }


    const doughnutoption = {
        plugins:{
            legend:{display:false},
            title:{
                display:false
            },
        }
    } 

    const doughnutdata={
        labels:["Successfull","Progress","Canceled","Returned"],
        datasets:[
            {
                label:"Items",
                data:[30,50,10,10],
                backgroundColor:[
                    '#10A815',
                    '#508DDD',
                    '#F01616',
                    '#FFCD05'
                ],
                cutout:"72%"
            }
        ]

    }



    return(
    <div className="dashboard">
      <div className="dashboardWrapper">
        <div className="dashboardMenu">
        {menuList?.map((m,i)=>{
            console.log(i)
            return(<MenuItem key={i} value={i}/>)
          }
          )}
        </div>
        <div className="dashboardContent">
            <div className="dashboardContentTop">
                <div className="dashboardContentTopRight">
                    <div className="ChartTitle">
                        <div className="titleText">Earnings</div>
                        <div className="refresh" style={{color:"#508DDD"}}>
                            <Sync style={{width:"16px",height:"16px"}}/>
                            <span className="refreshText">Refresh</span>
                        </div>
                    </div>

                    <div className="label">
                        <div className="prevMonth" style={{display:"flex",alignItems:"center",gap:"150px"}}>
                            <div className="prevLabel" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#10A815"}}/>
                                <span className="prevText" style={{fontSize:"13px"}}>Previous Month</span>
                            </div>
                            <div className="prevEarning" style={{fontSize:"15px",fontWeight:"600"}}>$10,000</div>
                        </div>

                        <div className="currentMonth" style={{display:"flex",alignItems:"center",gap:"150px"}}>
                            <div className="currentLabel" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#508DDD"}}/>
                                <span className="currentText" style={{fontSize:"13px"}}>Current Month</span>
                            </div>
                            <div className="currentEarning" style={{display:"flex",alignItems:"center"}}>
                                <span className="earningAmt" style={{fontSize:"15px",fontWeight:"600",marginRight:"8px"}}>$11,000</span>
                                <div className="changePercent" style={{fontSize:"13px",color:"#10A815"}}>+10%</div>
                                <ArrowUpward style={{width:"16px",height:"16px",color:"#10A815"}}/>
                            </div>
                        </div>
                    </div>

                    <div className="dashBoardBarChart">
                       <Bar  options={baroption} data={bardata}/>
                    </div>
                </div>
                <div className="dashboardContentTopLeft">
                    <div className="doughnutTitle">Orders/Registrations</div>

                    <div className="doughnutChartBox" style={{display:"flex",gap:"18px"}}>
                    <div className="dashboardDoughnut" >
                        <div className="doughnutText">
                            <span>5000</span>
                            <span>Registartions</span>
                        </div>
                       <Doughnut options={doughnutoption} data={doughnutdata}/>
                    </div>
                    <div className="dashboardDougnutDescripton" style={{display:"flex",flexDirection:"column",gap:"10px"}}>

                         <div className="dougnutSuccessfull" style={{display:"flex",flexDirection:"column"}}>
                            <div className="successfull" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#10A815"}}/>
                                <span className="successfullText" style={{fontSize:"14px"}}>Successfull</span>
                            </div>
                            <div className="sucessfullItems" style={{fontSize:"13px",fontWeight:"600"}}>&#40;$10,000 items&#41;</div>
                        </div>

                        <div className="dougnutProgress" style={{display:"flex",flexDirection:"column"}}>
                            <div className="progress" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#508DDD"}}/>
                                <span className="progressText" style={{fontSize:"14px"}}>Progress</span>
                            </div>
                            <div className="progressItems" style={{fontSize:"13px",fontWeight:"600"}}>&#40;$3,000 items&#41;</div>
                        </div>

                        <div className="dougnutCanceled" style={{display:"flex",flexDirection:"column"}}>
                            <div className="canceled" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#F01616"}}/>
                                <span className="canceledText" style={{fontSize:"14px"}}>Canceled</span>
                            </div>
                            <div className="canceledItems" style={{fontSize:"13px",fontWeight:"600"}}>&#40;$100 items&#41;</div>
                        </div>

                        <div className="dougnutReturned" style={{display:"flex",flexDirection:"column"}}>
                            <div className="returned" style={{display:"flex",alignItems:"center"}}>
                                <Circle style={{width:"11px",height:"11px",marginTop:"2px",color:"#FFCD05"}}/>
                                <span className="returnedText" style={{fontSize:"14px"}}>Returned</span>
                            </div>
                            <div className="returnedItems" style={{fontSize:"13px",fontWeight:"600"}}>&#40;$100 items&#41;</div>
                        </div>
                    </div>
                    </div>
                    <div className="doughnutItemWrapper">
                    <div className="doughnutItemList">
                        <Purchase/>
                        <Purchase/>
                        <Purchase/>
                        <Purchase/>
                        <Purchase/>
                        <Purchase/>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div className="dashboardContentBottom">
                <div className="currentMonthBox" style={{display:"flex"}}>
                    <span className="currentMonthText">Current Month</span>
                    <div className="currentMonthItemList" style={{display:"flex",gap:"59px"}}>
                     {dashboardDataList?.map((m,i)=>{
                      return(<DashboardItem key={i} value={i}/>)
                     }
                     )}
                    </div>
                </div>
                <div className="todayBox" style={{display:"flex"}}>
                <span className="todayText" style={{paddingLeft:"20px",paddingRight:"20px",textAlign:"center",marginRight:"85px"}}>Today</span>
                    <div className="todayItemList" style={{display:"flex",gap:"59px"}}>
                     {dashboardDataList?.map((m,i)=>{
                      return(<DashboardItem key={i} value={i}/>)
                     }
                     )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}


export default Dashboard