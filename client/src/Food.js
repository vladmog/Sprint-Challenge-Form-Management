import React from 'react';

function Food(props) {
    return (
        <div>
            <h1>{props.food.name}</h1>
            <h2>{props.food.course}</h2>
            {props.food.ingredients.map(ingredient => {
                return (
                      <div>
                          <p>{ingredient}</p>
                      </div>      
                )
            })}
        </div>
    )
}

export default Food;