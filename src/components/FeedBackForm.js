import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedBackForm() {
    const [form, setForm] = useState({
        name: "",
        movie: "",
        rating: "", // Changed from 'ratings' to 'rating'
        comments: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const updatedReviews = [...existingReviews, form];
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));

        alert("Thank You For Your Feedback");
        navigate("/reviews");
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
           <h1>Movie Review Form</h1>
            <label>Name:</label>
            <input type='text' name='name' onChange={handleChange} value={form.name} required placeholder='Enter your name'/>

            <label>Movie:</label>
            <select name='movie' onChange={handleChange} value={form.movie} required>
                <option value="">Select</option>
                <option value="Ghilli">Ghilli</option>
                <option value="GOAT">GOAT</option>
                <option value="Jananayagan">Jananayagan</option>
                <option value="Mersal">Mersal</option>
                <option value="sarkar">sarkar</option>
                <option value="Kaththi">Kaththi</option>
            </select>

            <label>Rating:</label>
            <input type='number' name='rating' min='1' max='5' value={form.rating} onChange={handleChange} required placeholder='Enter between 1-5' />

            <label>Comments:</label>
            <textarea name='comments' onChange={handleChange} value={form.comments} placeholder='Describe about the movie' />

            <button type='submit'>Submit</button>
        </form>
    );
}

export default FeedBackForm;
