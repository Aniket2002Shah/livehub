import LeftbarMenu from '../Leftbar/LeftbarMenu/LeftbarMenu';
import LeftbarProfile from '..//Leftbar/LeftbarProfile/LeftbarProfile';
import './Leftbar.scss'

function Leftbar() {
    return (
      <div className="leftbar">
        <LeftbarProfile/>
        <LeftbarMenu/>
      </div>
    );
  }
  
  export default Leftbar;