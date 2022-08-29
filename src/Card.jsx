
 function Card(props)
{
    return (
    <>
   <div className="card">
    <div className="cards">
        <img src={props.imgsrc} alt="my_pic"  className="card_img"/>
        <div className="cards_info">
            <p className="card_tittle">{props.tittle}</p>
            <h2>{props.name}</h2>
            <a href={props.link} target="_blank">
            <button>Watch Now</button>
            </a>
        </div>
    </div>
</div>
    </>
 )
}

export default Card;