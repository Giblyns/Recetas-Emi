import React from 'react'

export default function Home() {
    return (
        <div className='receta'>
            <h2 className='texto'>Milanesa napolitana</h2>
            <img className='imagen' src="./src/assets/neapolitan_milanese.jpg" alt="Milanesa Napolitana" height={240} width={343} />
            <div className='ingredientes texto'>Ingredientes:
                Filetes de carne (tradicionalmente se utiliza carne de res, pero también puedes usar pollo, cerdo o incluso berenjenas para una opción vegetariana),
                Pan rallado,
                Harina,
                Huevos,
                Sal y pimienta al gusto,
                Lonjas de jamón,
                Queso (preferiblemente mozzarella u otro queso que se funda bien),
                Salsa de tomate (puede ser salsa marinara o tu preferida).
            </div>
            <div className='proceso texto'>Preparación de los filetes:

Golpea ligeramente los filetes de carne para que estén de un grosor uniforme. Esto ayuda a que se cocinen de manera más pareja.
Sazona los filetes con sal y pimienta al gusto.
Preparación de los ingredientes para empanizar:

Prepara tres platos poco profundos. En uno coloca harina, en otro los huevos batidos y en el tercero el pan rallado sazonado con sal y pimienta.
Empanizado:

Pasa cada filete primero por la harina, asegurándote de que esté bien cubierto y sacudiendo el exceso.
Luego, sumerge el filete en el huevo batido, asegurándote de que esté completamente cubierto.
Por último, pásalo por el pan rallado, presionando ligeramente para que se adhiera bien. Repite este proceso con todos los filetes.
Fritura:

Calienta aceite en una sartén grande a fuego medio-alto.
Fríe las milanesas empanizadas durante unos 3-4 minutos por lado, o hasta que estén doradas y cocidas por dentro. Colócalas sobre papel absorbente para eliminar el exceso de aceite.
Armado de la milanesa a la napolitana:

Coloca las milanesas fritas en una bandeja apta para horno.
Encima de cada milanesa, agrega una o dos lonjas de jamón y cubre con una buena cantidad de queso.
Horneado:

Precalienta el horno a 180°C.
Coloca la bandeja en el horno durante unos minutos, hasta que el queso se derrita y comience a dorarse.
Salsa y servir:

Mientras tanto, calienta la salsa de tomate.
Una vez que el queso esté derretido, saca las milanesas del horno y sirve cada una cubierta con salsa de tomate caliente.</div>
        </div>
    )
}
