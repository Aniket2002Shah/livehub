import './PostComponent.scss'
import {ReactComponent as GraphicDesigner} from '../../resources/icons/graphicDesigner.svg'
import { BASE_URL } from '../../AppConstant'
import { category, getIcons } from '../../category'

function PostComponent({data}){
    return(
        <div className="postComponent">
            <div className="postComponentWrapper">
                <>
                {category?.map((c,i)=>{
                if(c.id===data.category){
                return(
                    <span className="categoryBox" style={{backgroundColor:c.bgColor,color:"white"}} key={i}>
                      <span className='categoryIcon' style={{width:"14px",height:"13px",display:"flex",alignItems:"center"}}>{getIcons(c.id,"13px","14px")}</span>
                      <span className="category" style={{maxWidth:"5px"}}>{c.nickname}</span>
                    </span>
                )
                }
              })}
                </>
            <div>{ data.image && <img src={data.image} alt="" className="postImg" />}</div>
            <div className="postContent">
                <div className="title">{data.title}</div>
                <div className="description" style={{height:"25px",overflow:"hidden"}}>{data.description}</div>
                <div className="details" style={{marginLeft:data.image==null && "70px"}} >
                    <div className="likes">{data.likes} likes</div>
                    <div className="createdAt">At:{data.date}</div>
                </div>
            </div>
         </div>
         <div className='postHorizontalLine'/>
        </div>
    )
}

export default PostComponent

//style={{alignSelf:"center"}} use at details when img ==null
//to maintain detail and category position