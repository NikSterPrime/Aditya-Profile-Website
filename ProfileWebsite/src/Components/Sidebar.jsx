import { useState } from 'react';
import React from "react";
import './Component_Styles/Sidebar.css';

const Sidebar = () => {


    return(
        <div className='bg-[#1e1e1e] h-full w-15 flex flex-col justify-center py-3 fixed top-0'>
            <ul className='px-3'>
                <li><a href='https://www.instagram.com/adityapuranik_03/'><img className='object-scale-down py-2' src='./instagram.png'></img></a></li>
                <li><a href='https://www.linkedin.com/in/adityapuranikunreal/'><img className='object-scale-down py-2' src='./linkedin.png'></img></a></li>
                <li><a href='https://github.com/NikSterPrime'><img className='py-2' src='./github.png'></img></a></li>
            </ul>
        </div>
    )
}

export default Sidebar;