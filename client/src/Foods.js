import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Food from './Food';


function Foods(props){
    useEffect(() => {
        if(props.value){
            getData()
        }
    }, [props.value])

    const [foods, setFoods] = useState([])
    console.log("foods", foods)

    const getData = () => {
        axios.get("http://localhost:5000/api/restricted/data", {
            headers: {
                Authorization: `${props.value}`
            }
        })
            .then(res => {
                console.log(res)
                setFoods(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return(
        <div>
            {foods.map(food => {
                return (
                    <Food food = {food} />
                )
            })}
        </div>
    )
}

export default Foods;
