/*
  Developer Madison Lucey
  @version 1/3/2022 - 3/26/2022
  Responsive & Interactive React JS Blog
*/

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 ">
      <h3 className="text-xl mb-3 font-semibold border-b pb-4 ">Categories</h3>
    
      {categories.map((category, index) => (
        // <Link key={index} href={`/category/${category.slug}`}>
        <a key={index} href={`/category/${category.slug}`}>
        <span className={`block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 `} >
          <span style={{transform:"translateY(5px) translateX(0px)", color: "hsl(245deg, 100%, 60%)"}} class="List__IconWrapper-sc-ox71bz-5 gYniyB mr-2 inline "><svg xmlns="http://www.w3.org/2000/svg" className="mr-2 inline hover:translate-x-3 transform ease transition duration-300" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          
          <a href={`/category/${category.slug}`} className={`cursor-pointer inline   ${(window.location.pathname == `/category/${category.slug}`) ? 'text-pink-600 font-semibold' : ''} text-base text-black font-bold hover:text-pink-500 ease transition duration-300`}  style={{letterSpacing: "0.027rem"}}>
            {category.name}
            </a>
            </span>
         

            </span>
           </a>
        // </Link>
      ))
      
      } 
    
     
    </div>
  );
};

export default Categories;
