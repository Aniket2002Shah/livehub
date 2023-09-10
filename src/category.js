import { Article, CellTowerSharp, CheckroomSharp, ConstructionSharp, DirectionsCarFilledSharp, Face2Sharp, FestivalSharp, FormatPaint, HealthAndSafetySharp, LocalMallSharp, Power, Restaurant, SavingsSharp, SchoolSharp, ShoppingBasket, Spa, TheaterComedy } from '@mui/icons-material'
import { Event as EventIcon,Work } from '@mui/icons-material'
import {ReactComponent as GraphicDesign} from './resources/icons/graphicDesigner.svg'
import {ReactComponent as Footwear} from './resources/icons/footwear.svg'
import {ReactComponent as Hotel} from './resources/icons/hotel.svg'
import {ReactComponent  as CareTaker} from './resources/icons/house worker.svg'
import {ReactComponent  as Management} from './resources/icons/management.svg'


export const getIcons=(id,h,w)=>{
    switch(id){
        case 990: return <Work style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 999: return <EventIcon style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 1: return <CheckroomSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 2:return <DirectionsCarFilledSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 3: return <SavingsSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 4: return <Face2Sharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 5: return <ConstructionSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 6: return <SchoolSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 7: return <Power style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 8: return <TheaterComedy style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 9: return <FestivalSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 10: return <Footwear style={{height:h!=null?h:"19px",width:w!=null?w:"20px"}}/>
        case 11: return <GraphicDesign style={{height:h!=null?h:"18px",width:w!=null?w:"19px"}}/>
        case 12: return <ShoppingBasket style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 13: return <Spa style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 14: return <Hotel style={{height:h!=null?h:"18px",width:w!=null?w:"19px"}}/>
        case 15: return <FormatPaint style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 16: return <CareTaker style={{height:h!=null?h:"20px",width:w!=null?w:"22px"}}/>
        case 17: return <Management style={{height:h!=null?h:"20px",width:w!=null?w:"20px"}}/>
        case 18: return <HealthAndSafetySharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 19: return <Article style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 20: return <Restaurant style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 21: return <LocalMallSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
        case 22: return <CellTowerSharp style={{height:h!=null?h:"22px",width:w!=null?w:"22px"}}/>
    }
}



export const category=[

    {
        id:990,
        bgColor:"#508DDD",
        name:"Job",
        nickname:"Job",
        icon:getIcons(990)
    },
    {
        id:999,
        bgColor:"#FE4343",
        name:"Event",
        nickname:"Evnt",
        icon:getIcons(999)
    },

    {
        id:1,
        bgColor:"#B72AA3",
        name:"Apparel & Clothing",
        nickname:"A&C",
        icon:getIcons(1)
    },
    {
        id:2,
        bgColor:"#0E7DA7",
        name:"Automotive Service",
        nickname:"Auto",
        icon:getIcons(2)
    },
    {
        id:3,
        bgColor:"#21D206",
        name:"Bank & Financial Services",
        nickname:"B&FS",
        icon:getIcons(3)
    },
    {
        id:4,
        bgColor:"#EE17BB",
        name:"Beauty & Cosmetics",
        nickname:"B&C",
        icon:getIcons(4)
    },
    {
        id:5,
        bgColor:"#DDAE5F",
        name:"Construction & Civil Work",
        nickname:"C&CW",
        icon:getIcons(5)
    },
    {
        id:6,
        bgColor:"#F57D16",
        name:"Education",
        nickname:"Edu",
        icon:getIcons(6)
    },
    {
        id:7,
        bgColor:"#32C7DF",
        name:"Eletronics",
        nickname:"Elec",
        icon:getIcons(7)
    },
    {
        id:8,
        bgColor:"#BFEB27",
        name:"Entertainment & Arts",
        nickname:"E&A",
        icon:getIcons(8)
    },
    {
        id:9,
        bgColor:"#D12960",
        name:"Event Planner & Decorator",
        nickname:"EP&D",
        icon:getIcons(9)
    },
    {
        id:10,
        bgColor:"#A87705",
        name:"Footwear",
        nickname:"FTW",
        icon:getIcons(10)
    },
    {
        id:11,
        bgColor:"#C326EA",
        name:"Graphic Design & Digital Art",
        nickname:"G&DA",
        icon:getIcons(11)
    },
    {
        id:12,
        bgColor:"#1CEC37",
        name:"Grocery & Household Goods",
        nickname:"G&HG",
        icon:getIcons(12)
    },
    {
        id:13,
        bgColor:"#39E98B",
        name:"Gym, Fitness, Yoga & Wellness",
        nickname:"GFY&W",
        icon:getIcons(13)
    },
    {
        id:14,
        bgColor:"#EB4949",
        name:"Hotel,Lodge & Resort",
        nickname:"HL&R",
        icon:getIcons(14)
    },
    {
        id:15,
        bgColor:"#9E0DC8",
        name:"House Decoration & Renovation",
        nickname:"HD&R",
        icon:getIcons(15)
    },
    {
        id:16,
        bgColor:"#F7D23E",
        name:"House workers & Caretakers",
        nickname:"HW&C",
        icon:getIcons(16)
    }, 
    {
        id:17,
        bgColor:"#FF7920",
        name:"Management & Entrepreunership",
        nickname:"M&E",
        icon:getIcons(17)
    },
    {
        id:18,
        bgColor:"#00B617",
        name:"Medical & Healthcare",
        nickname:"M&H",
        icon:getIcons(18)
    },
    {
        id:19,
        bgColor:"#E23703",
        name:"News,Blogs & Politics",
        nickname:"NB&P",
        icon:getIcons(19)
    },
    {
        id:20,
        bgColor:"#13C48F",
        name:"Restaurant,Cafe & Bar",
        nickname:"RC&B",
        icon:getIcons(20)
    },
    {
        id:21,
        bgColor:"#E9E931",
        name:"Shopping & Retail",
        nickname:"S&R",
        icon:getIcons(21)
    }, 
    {
        id:22,
        bgColor:"#DF7308",
        name:"Telecommunication & Network",
        nickname:"T&N",
        icon:getIcons(22)
    },
    
]