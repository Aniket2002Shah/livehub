import './JobComponent.scss'

function JobComponent({data}){
    return(
        <div className="jobComponent">
            <div className="jobComponentLeft">
                <div className="priceDetails">
                    <span className="price">{data.salary}</span>
                    <span className="currency">{data.currency}</span>
                </div>
                <div className="jobType">{data.type}</div>
            </div>
            <div className="jobComponentRight">
                <div className="title">{data.title}</div>
                <div className="duration" style={{columnGap:"15px"}}>
                    <span className="durationText">Duration:</span>
                    <span className="durationTiming arrival">{data.arrive}</span>
                    <span className="durationTiming">To</span>
                    <span className="durationTiming depart">{data.depart}</span>
                </div>
                <div className="deadline">
                    <span className="deadlineText">Deadline:</span>
                    <span className="deadlineDate">{data.deadline}</span>
                </div>
            </div>
        </div>
    )
}

export default JobComponent;