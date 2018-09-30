import React from 'react'

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f }) =>
    <section className="color">
        <h1>{title}</h1>
        <div className="color" 
             style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

export default Color