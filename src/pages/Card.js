
import React from 'react'
import Proptypes from 'prop-types'
import  './Cards.css'


function Bootstrap(props) {

    return (
  
      <div >      
        <div className='card text-center '>
            <div className="card-body ">
                <div className="overflow ">
                <img  src={props.imageSource} alt="" className='img-thumbnail img card-img-top'/>
                </div>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'></p>
                <a href="#!" className="btn btn-outline-secondary">
                    Agregar al pedido
                </a>
            </div>
        </div>

      </div>
    );
}
Bootstrap.propTypes= {
  title: Proptypes.string.isRequired,
  url: Proptypes.string,
  imageSource:Proptypes.string
}

export default Bootstrap;
  