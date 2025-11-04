const Card = (props) => {

    return(
        <div className="card">
            <img src={props.imagen} alt={props.nombre} />
            <h4>{props.nombre}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card;