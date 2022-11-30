import React from 'react'

const Cartitem = ({id,name,image,color,price,amount}) => {
  return (
    <div className='car_headeing grid grid_colum_five'>
    <div className="cart_image_name">
        <div>
            <figure>
                <img src={image} alt={name} />
            </figure>
        </div>

        <div>
            <p>{name}</p>
        </div>
        
        <div className="color_name">
            <p>color:</p>
            <div className="color_style" style={{backgroundColor:color, color:color}}>
        
        </div>
        </div>

        
    </div>

    <div className="cart_price">
        <p>{price}</p>
    </div>
    </div>
  )
}

export default Cartitem
