import React, { Component } from 'react';
import { earningData } from '../data/dummy';
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Board = ({icon, title, amount, percentage, chart}) => {
    return (
        <div className='flex justify-between items-center dark:bg-second-dark-bg 
            shadow-md rounded-xl h-[150px] bg-white mx-4 p-3 
            hover:shadow-xl hover:-translate-y-2 ease-in-out transition-transform'>
            <div className='flex flex-col w-[50%]'>
                <button type='button' className={`p-2 h-12 hover:drop-shadow-md hover:bg-white
                w-12 rounded-full bg-gray-200 flex justify-center items-center dark:bg-slate-800`}>
                <span className='text-2xl justify-center  flex items-center dark:text-gray-200'>{icon}</span></button>
                <p className='text-sm mt-4 text-gray-400'>Compared to last month</p>
            </div>
            <div className='flex flex-col w-[50%] px-4 dark:text-gray-200'>
                <p className='mb-2 text-md font-semibold -translate-x-3'>{title}</p>
                <p className='mb-2 text-2xl font-semibold -translate-x-3'>{amount}</p>
                <div className='flex justify-center items-center -translate-x-3 bg-gray-100 
                    rounded-md dark:bg-slate-700
                    cursor-pointer hover:bg-white hover:drop-shadow-md px-1'>
                    <span className='mr-2'>{chart}</span>
                    <p className='mb-2 font-semibold text-gray-500 dark:text-gray-100'>{percentage}</p>
                </div>
            </div>
        </div>
    )
}




export default class  TopBoard extends Component{

    render (){
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 500,
            arrows: false,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        initialSlide: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        }
    
       return ( 
        (<div className="">
        <Slider {...settings}>
        {earningData.map((item, index) => (
                    <Board key={index} {...item} />
                ))}
        </Slider>
        </div>))
    
    }
    }
