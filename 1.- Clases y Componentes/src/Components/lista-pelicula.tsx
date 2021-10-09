import React from 'react';
import ItemPelicula from './item-pelicula';
import './estilos.css';

//.js : HTML / JAVASCRIPT / CSS.
//.ts : JAVASCRIPT / TYPESCRIPT.
//.tsx : HTML / JAVASCRIPT / CSS / TYPESCRIPT.

//React:
//Clases 
//Componentes

class ListadoPelicula extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            variable_Mensaje: "Hola mundo desde Componente Clase (Estado)!",
            lista_pelicula: [],
            item_pelicula: {
                pelicula: '',
                descripcion: ''
            }
        }
    }

    cambiarMensaje = () => {
        this.setState({variable_Mensaje: 'Usted cambio el mensaje xD'});
        console.log('Cambio de estado de variable_Mensaje');
    }

    onChange = (nuevoEstado:any) => {
        console.log(nuevoEstado);
        this.setState({
            item_pelicula:{
                ...this.state.item_pelicula,
                ...nuevoEstado
            }
        })
    }

    guardarPelicula = () => {
        const { item_pelicula, lista_pelicula } = this.state;

        this.setState({
            lista_pelicula: [
                ...lista_pelicula,          
                item_pelicula
            ]
        })
    }

    render(){
        const { lista_pelicula, item_pelicula } = this.state;
        console.log(lista_pelicula);
        return(
            <>
                <div className="Formulario">
                    <label> Formulario </label>
                    <input onChange={(e) => this.onChange({pelicula: e.target.value})} type="text" placeholder="Pelicula" value={item_pelicula.pelicula} /> <br/>
                    <input onChange={(e) => this.onChange({descripcion: e.target.value})} type="text" placeholder="Descripción" value={item_pelicula.descripcion} /> <br/>
                    <button onClick={this.guardarPelicula}>Guardar</button>
                </div>
                <div className="Listado">
                    <h1>Listado</h1>
                    { 
                        lista_pelicula.map( (item:any, position:number) => {
                            const pelicula = item.pelicula;
                            const descripcion = item.descripcion;

                            return ( 
                                <ItemPelicula 
                                    key={ position }
                                    pelicula={ pelicula }
                                    descripcion={ descripcion }
                                /> 
                            )
                        }) 
                    }
                </div>
            </>
        )
    }
}

//{ variable_Mensaje } <br/>
//<button onClick={ () => this.cambiarMensaje() } > Cambiar Mensaje </button>

export default ListadoPelicula;

/* const listadopelicula2 = (props:any) => {
    return (
        <div>
            Hola mundo desde Componente!
        </div>
    )
} */