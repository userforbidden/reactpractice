import React from "react";

function WishApp(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 50
    }
    

    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "#04756F"
    } else if (hours >= 12 && hours < 17){
        timeOfDay = 'afternoon'
        styles.color = "purple"
    } else{
        timeOfDay = 'night'
        styles.color = "#D90000";
    }

    
    return(
        <h1 style = {styles} >Good {timeOfDay}!</h1>
    )
}

export default WishApp