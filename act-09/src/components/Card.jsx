const Card = ({nombre, imagen, desc}) => {

    return(
        <div className="card">
            <h4>{nombre}</h4>
            <p>{desc}</p>
            <img src="{imagen}" alt="{nombre}" />
        </div>
    )
}

export default Card