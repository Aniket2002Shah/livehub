import './LeftbarMenu.scss'
import { useState } from 'react'

import about from '../../../resources/menu/about.png'
import saved from '../../../resources/menu/bookmark .png'
import cart  from '../../../resources/menu/cart.png'
import favourites from '../../../resources/menu/favourites.png'
import feedback from '../../../resources/menu/feedback.png'
import help from '../../../resources/menu/help.png'
import language from '../../../resources/menu/language.png'
import payment from '../../../resources/menu/payment.png'
import productAndServcies from '../../../resources/menu/product and services.png'
import settings from '../../../resources/menu/settings.png'

function LeftbarMenu() {

  const menuIcons   = [productAndServcies,payment,saved,favourites,cart,language,settings,help]
  const menuList = ["Orders and Registrations","Payment and Transactions","Saved","Favourites","Saved Carts","Languages","Settings","Help and Support"]

  const MenuItem = ({value})=>{
    return(
      <div className="menuItemContainer">
        <img src={menuIcons[value]} alt="" className="menuIcon" />
        <span className="menuName">{menuList[value]}</span>
      </div>
    );
  }
    return (
      <div className="leftbarMenu">
        <div className="menuItemList">
          {menuList?.map((m,i)=>{
            console.log(i)
            return(<MenuItem key={i} value={i}/>)
          }
          )}
        </div>
      </div>
    );
  }
  
  export default LeftbarMenu;