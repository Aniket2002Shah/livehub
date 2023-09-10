import { useLocation } from 'react-router-dom'
import DescriptionBar from '../../customComponents/DescriptionBar/DescriptionBar'
import './BuisnessDescription.scss'
import { Buisness } from '../../dumydata'

function BuisnessDescription(){
    const location = useLocation()
    const ind= location.state.bid
    const data = Buisness[ind]

    return(
    <div className="descriptionBuisnessBox">
        <DescriptionBar data={data}/>
    </div>
    )
}

export default BuisnessDescription