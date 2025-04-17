import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div
            className="hero min-h-100 my-5 rounded-md"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}>
            <div className="hero-overlay rounded-md"></div>
            <div className="text-white text-left">
                <div className="max-w-6xl w-[50%]">
                    <h1 className="mb-5 text-5xl font-bold">Read a Book Today</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Book List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;