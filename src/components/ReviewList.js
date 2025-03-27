import React, { useEffect } from 'react'
import { useState } from 'react';
function ReviewList(props) {
    const[reviews,setReviews]=useState([]);
    
    useEffect(()=>{
     const stored=JSON.parse(localStorage.getItem("reviews"))||[]
     setReviews(stored);
    },[]);
  return (
    <div className='review-list'>
        <h2>All Movies Reviews</h2>
        { reviews.length===0?(<p>No Reviews Submitted Yet</p>):
        <ul>
            {reviews.map((review,index)=>(
                <li key={index} className='Review-card'>
                    <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
                    <br></br>
                    Rating:{review.rating}/5
                    <br></br>
                    {review.comments &&<p>{review.comments}</p>}
                </li>
            ))}
            </ul>
            }
    </div>
  );
}
export default ReviewList;
