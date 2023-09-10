import './Stories.scss'

function Stories() {
  const Story=()=>{
    return( 
     <div className="story">
       <img src="./images/pexel_login_bg.jpg" alt='Story' className='storyImg'/>
       <img src="./images/pexel_register_bg.jpg" alt="" className="userProfilePic" />
       <span>John Doe</span>
     </div>
    );
   }
   return (
    <div className="storiesWrapper">
     <div className="stories">
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
       <Story/>
     </div>
     </div>
   );
  }
  
  export default Stories;