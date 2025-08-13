const Card = ({ imagen, titulo, descripcion, link, linktext }) => {
    return (
        <div
            className="card d-flex flex-column h-100"
            style={{ height: 420 }} // altura más baja que antes
        >
            {/* Contenedor de imagen flexible */}
            <div className="flex-grow-1 overflow-hidden">
                <img
                    src={imagen}
                    alt={titulo}
                    className="w-100"
                    style={{ height: "100%", objectFit: "cover", display: "block" }}
                />
            </div>

            {/* Contenido */}
            <div className="card-body d-flex flex-column align-items-center p-3">
                <h6 className="card-title text-center fw-bold">{titulo}</h6>
                <p className="card-text text-center small">{descripcion}</p>
                <a href={link} className="btn btn-primary btn-sm mt-auto" target="_blank">{linktext}</a>
            </div>
        </div>
    );
};

export default Card;
