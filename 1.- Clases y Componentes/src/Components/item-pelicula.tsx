

interface IPelicula {
    pelicula:String,
    descripcion:String
}

const componenteItem = (props:IPelicula) => {
    return (
        <div>
            <h2> { props.pelicula } </h2>
            <p> {props.descripcion} </p>
        </div>
    )
}

export default componenteItem;