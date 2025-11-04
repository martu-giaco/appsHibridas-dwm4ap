const Card = ({nombre, imagen, desc}) => {

    return(
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h4>{nombre}</h4>
            <p>{desc}</p>
        </div>
    )
}

export default Card