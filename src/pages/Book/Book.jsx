import React from 'react';
import { FaRegStar } from "react-icons/fa";

const Book = ({ item }) => {
    const { author, bookName, category, image, rating, tags } = item;
    return (
        <div className="card shadow-sm bg-gray-100 pt-6">
            <figure>
                <img className='w-40 h-60 object-cover'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                </h2>
                <span className="text-sm">{author}</span>
                <div className='flex justify-between'>
                    <span className="badge badge-xs badge-primary">{category}</span>
                    <div className='flex'>
                        <FaRegStar />
                        <span class="badge badge-xs badge-warning">{rating}</span>
                    </div>
                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-start">
                    {
                        tags.map((tag, index) => <div key={index} className="badge badge-sm badge-outline">{tag}</div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Book;