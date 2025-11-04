const Galeria = ({ imagenes }) => {
    return (
        <div>
            {imagenes.map((src, index) => (
                <img key={index} src={src} alt={`Imagen ${index + 1}`} />
            ))}
        </div>
    );
};

export default Galeria;