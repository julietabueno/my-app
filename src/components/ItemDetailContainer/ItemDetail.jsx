import React from 'react'
import { ItemCountHook } from '../ItemCount/ItemCountHook'
import Swal from 'sweetalert2'
import './ItemDetail.css'

export const ItemDetail = ({ item }) => {

    const onAdd = (count) => {
        Swal.fire({
            title: 'Felicitaciones!',
            text: `Agregaste ${count} ${item.nickname} al carrito: ${item.name} ${item.lastname}`,
            imageUrl: `${item.image}`,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    return (
        <div className='DetailContainer' key={item.id}>
            <div className='cardDetail'>
                <h1><strong> {item.nickname}</strong></h1>

                <img className='imgLego' src={item.image} alt={item.nickname} />
                <div className='cardDetail2'>
                    <h2>Precio: ${item.price}</h2>
                    <h3 className='coleccion'>Coleccion: {item.category}</h3>
                    <p className='description'>Descripción: {item.description}</p>
                    <div>
                        <img className='imglogo' src={item.logo} alt={item.category} />
                    </div>
                </div>
                <ItemCountHook stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}
