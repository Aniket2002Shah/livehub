import './Event.scss'

function Event({data}){
    return(
    <div className="event">
        <div className="calendar">
            <div className="date">{data?.date}</div>
            <div className="month">{data?.month}</div>
        </div>
        <div className="content">
            <div className="title">{data?.title}</div>
            <div className="desc">
                <div className="likes">{data?.likes} likes</div>
                <div className="interested">{data?.interested} interested</div>
                <div className="locationTime">At {data?.start}, {data?.venue}</div>
            </div>
        </div>
    </div>
    );
}

export default Event