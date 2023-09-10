import './Rightbar.scss'
import Events from './Events/Events';
import New from './New/New';
import Community from './Community/Community';

function Rightbar() {
    return (
      <div className="rightbar">
       <Events/>
       <New/>
       <Community/>
      </div>
    );
  }
  
  export default Rightbar;