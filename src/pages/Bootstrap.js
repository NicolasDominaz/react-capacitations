import Card from './Card'
import Back from "../components/Back/Back";
import Title from "../components/Title/Title";
import React from 'react'
import  './Cards.css'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'


const cards = [
    {
        id:1,
        title:' Picada de jamón crudo con rúcula, oliva y parmesano  $2400',
        image: image1
    },
    {
        id:2,
        title:' Picada de jamón crudo con rúcula, oliva y parmesano  $2400',
        image:image2

    },
    {
        id:3,
        title:' Empanadas de carne y muzzarella y papas bridge    $1140',
        image:image3

    },
    {
        id:4,
        title:'Empanadas de carne y muzzarella y papas bridge    $1140',
        image:image1

    },
    {
        id:5,
        title:'Empanadas de carne y muzzarella y papas bridge    $1140',
        image:image2

    },
    {
        id:6,
        title:'Empanadas de carne y muzzarella y papas bridge    $1140',
        image:image3

    },
]

function Cprincipal() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className="row">
            <Title>
            Entradas
          </Title>

            {
                cards.map(card =>(
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} imageSource={card.image}/>
                    </div>
                ))
            }
            <br/><br/><br/>
            <Back />
        </div>
      
    </div>
    )
}

export default Cprincipal