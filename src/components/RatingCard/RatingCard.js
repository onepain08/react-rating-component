import React from "react";
import './RatingCard.css'
import star from './icon-star.svg'
import Button from './Button'
import thankImg from './illustration-thank-you.svg'


function RatingCard(){

    //Rating data

    const data= [
        {markedDown: false, id: 1, content: 1},
        {markedDown: false, id: 2, content: 2},
        {markedDown: false, id: 3, content: 3},
        {markedDown: false, id: 4, content: 4},
        {markedDown: false, id: 5, content: 5}
    ]

    const [marked,setMarked] = React.useState(data)
    const [submited, setSubmited] = React.useState(false)
    const [rate, setRate] = React.useState(0)


    const ratings = marked.map(btn => (
        <Button 
            key={btn.id} 
            id={btn.id}
            content={btn.content}
            markedDown={btn.markedDown} 
            onClick={() =>toggleMarked(btn.id)}
        />
            
        
    ))
    
    //State functions

    function toggleMarked(id){
        setMarked(oldMarked =>{
            return oldMarked.map((btn) =>{
                return btn.id === id ? {...btn, markedDown: !btn.markedDown} : {...btn, markedDown: false}
                
            })
        })
    }

    function submit(){
        setSubmited(prevSubmited => !prevSubmited)
    }
    
    function takeRating(){
        setRate(() =>{
            return marked.map((btn) => {
                return btn.markedDown === true ? btn.content : ''
        })
        
        })
    }

    console.log(rate)

    return(
        <div className="cardBody">
            {!submited &&<div>
                <div className="icons">
                    <div className="starContainer">
                        <img src={star} alt='star'></img>
                    </div>
                </div>
                <div className="textContent">
                    <h1>How did we do?</h1>
                    <p>
                        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                    </p>
                </div>
                <div className="ratingBtns">
                    {ratings}
                </div>
                <button className="submitBtn" onClick={() => {submit(); takeRating();}}>SUBMIT</button>
            </div>}
            {submited &&<div className="thankState">
                <div className="thankImg">
                    <img src={thankImg} alt="thankyou" ></img>
                </div>
                <div className="submitedRatingText">
                    <p>You selected {rate} out of 5</p>
                </div>
                <div className="textContent">
                    <h1>Thank you!</h1>
                    <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </div>
            </div>}
        </div>
    )
}

export default RatingCard;