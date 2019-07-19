import React from 'react';

function Friend(props) {
    return (
        <div>
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.course}</h2>
            {props.friend.ingredients.map(ingredient => {
                return (
                      <div>
                          <p>{ingredient}</p>
                      </div>      
                )
            })}
        </div>
    )
}

export default Friend;