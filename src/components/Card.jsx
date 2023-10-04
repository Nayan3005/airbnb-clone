import '../index.css'
import star from '../../public/star.png'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`../../public/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img  className='card--star' src={star}/>
                <span className='gray'>{props.rating} • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}