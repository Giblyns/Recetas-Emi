import React from 'react'

export default function Home() {
    return (
        <div className='receta'>
            <h2 className='texto'>Papas fritas</h2>
            <img className='imagen' src="./src/assets/french_fries.jpg" alt="Papas Fritas" height={240} width={343} />
            <div className='ingredientes texto'>Ingredientes:
                Papas (preferiblemente variedades como Russet o Yukon Gold),
                Aceite vegetal (como aceite de girasol o de maíz),
                Sal (opcional).
            </div>
            <div className='proceso texto'>Instrucciones:

                Lava y pela las papas.
                Corta las papas en tiras del grosor que desees para tus papas fritas.
                Remojo opcional:

                Si tienes tiempo, remoja las tiras de papas en agua fría durante 30 minutos a 1 hora. Esto ayuda a eliminar el exceso de almidón y a que las papas queden más crujientes.
                Secado:

                Una vez remojadas (si decides hacerlo), seca las tiras de papas con una toalla de cocina para eliminar la humedad.
                Freír las papas:

                Calienta una cantidad generosa de aceite en una sartén grande o una freidora a fuego medio-alto (aproximadamente 170-180°C).
                Coloca las tiras de papas en el aceite caliente, cuidando no poner demasiadas a la vez para que no se amontonen.
                Fríe las papas durante unos 5-7 minutos, hasta que estén doradas y crujientes.
                Escurrir y sazonar:

                Retira las papas fritas del aceite con una espumadera o una cuchara ranurada y colócalas sobre papel absorbente para eliminar el exceso de aceite.
                Si lo deseas, sazona las papas fritas con sal u otras especias según tu gusto.
                ¡Listo para disfrutar!

                Sirve las papas fritas calientes y disfrútalas como acompañamiento o como un sabroso bocadillo.</div>
        </div>
    )
}
