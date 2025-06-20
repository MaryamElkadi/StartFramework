import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import avatar from '../../assets/avataaars.svg'; 
import Footer from '../../components/footer/footer'; 

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='main bg-emerald-400 flex justify-center items-center flex-col '>
                <img className ='w-65' src={avatar} alt="" />
                <h1 className='text-4xl text-white font-bold my-4'>START FRAMEWORK</h1>
                <div className='flex justify-center items-center '>
                    <div className='bg-white me-8 w-19 h-1'></div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <div className='bg-white me-2 w-19 h-1 mx-8'></div>
                </div>
                <span className='text-white my-4 mb-18'>Graphic Artist - Web Designer - Illustrator</span>
            </div>
             <Footer />
        </div>
       

    );
}
