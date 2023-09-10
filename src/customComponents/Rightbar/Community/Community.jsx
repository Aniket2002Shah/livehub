import './Community.scss'

function Community(){

    
        return(
            <div className="community">
                <img src="./images/community.jpg" alt="" className="communityProfilePic" />
                <div className="description">
                    <div className="communityName">Skull Graphic Designers</div>
                    <div className="membersBox">
                        <span className="membersText">Members</span>
                        <span className="membersNum">1425</span>
                    </div>
                    <div className="postBox">
                        <span className="postText">Post</span>
                        <span className="postNum">12k</span>
                    </div>
                    <div className='joinBtn'>
                    <button>Join</button>
                    </div>
                </div>
               
            </div>
        );


  
}

export default Community