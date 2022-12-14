import React, { useEffect, useState } from 'react';
import Food from './Food';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Foods = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/food`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return (
        <div className='lg:px-24 px-4 my-10'>
            <h1 className='text-4xl font-bold' data-aos="fade-right">Most Popular Dishes</h1>
            <div className='flex justify-between items-center mt-4'>
                <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur <br /> autem saepe voluptates, veniam fugit officia!</p>
                <button data-aos="fade-left" className='btn-animation bg-primary w-[150px] h-[40px] rounded text-white'>Show All Menu</button>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 py-6' data-aos="flip-up">
                {
                    foods.map(food => <Food
                        key={food._id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;