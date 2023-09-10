import './Comments.scss';

function Comments() {

  const Comment=()=>{
    return(
        <div className="comment">
            <img src='./persons/default_Profile_Picture.png' alt='Profile'/>
            <div className="info">
                <span>Micky Collin</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus porro autem veritatis laudantium, error dolores, voluptas nulla magni tenetur totam dolorum. Recusandae ducimus dolorum nulla corrupti nisi architecto doloribus?</p>
            </div>
            <span className='date'>1 hour ago</span>
        </div>
    );
  }

  return (
    <div className="comments">
        <div className="write">
            <img src="./persons/person2.jpg" alt="Profile" />
            <input type="text"  placeholder='Write a Comment...'/>
            <button>Send</button>
        </div>
     <Comment/>
     <Comment/>
     <Comment/>
     <Comment/>
    </div>
  );
}

export default Comments;