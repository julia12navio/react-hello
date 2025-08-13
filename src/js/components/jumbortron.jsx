const Jumbotron = () => {
    return (
        <div className="p-2 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5">Welcome!</h1>
                <p className="fs-5">Aquí encontrarás el top ventas de Zara. Descubre la selección de los artículos más vendidos de Zara, cuidadosamente elegidos por su estilo, calidad y tendencia. Inspírate con las piezas que marcan la temporada y encuentra tu próximo look favorito.</p>
                <a
                    href="https://www.zara.com/es/es/mujer-vestidos-l1066.html?v1=2420896"
                    className="btn btn-primary btn-lg"
                    target="_blank"
                >
                    Ve a Zara, a ver más vestidos!
                </a>
            </div>
        </div>
    );

}
export default Jumbotron;

