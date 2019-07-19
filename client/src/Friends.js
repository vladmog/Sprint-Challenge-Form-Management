import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Friend from './Friend';


function Friends(props){
    useEffect(() => {
        if(props.value){
            getData()
        }
    }, [props.value])

    const [friends, setFriends] = useState([])
    console.log("friends", friends)

    const getData = () => {
        axios.get("http://localhost:5000/api/restricted/data", {
            headers: {
                Authorization: `${props.value}`
            }
        })
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }



    return(
        <div>
            {friends.map(friend => {
                return (
                    <Friend friend = {friend} />
                )
            })}
        </div>
    )
}

export default Friends;
