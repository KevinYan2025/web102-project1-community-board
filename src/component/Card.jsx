
import '../App.css'
const Card = (props) => {
    return (
        <div className="card box">
            <div className='websiteInfo'>
                <img src={props.image}></img>
                <h1>{props.name}</h1>
                <a href={props.url}>
                <button className='buttonSytle'>{props.buttonName}</button>
                </a>
            </div>
        </div>
    )
}
export default Card;