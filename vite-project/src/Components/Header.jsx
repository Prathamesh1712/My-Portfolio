import React, { useState } from 'react'

export default function Header() {
 
    const [BrandName, setBrandName]=useState("PRAHAMESH SHIRKE");
    
   const [menuLinks,setmenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:'1'
        },
        {
            title:"About",
            link:"/About",
            id:'2'
        },
        {
            title:"Skills",
            link:"/skills",
            id:'3'
        },
        {
            title:"Portfolio",
            link:"/portfolio",
            id:'4'
        },
        {
            title:"Contact",
            link:"/contact",
            id:'5'
        },
    ]);

    const [actionButton, setactionButton]=useState({
        title:"Download",
        link:"/hire-me"
    });

    return (
    <>
   <div className="h-20 px-16 border main flex bg-gray-100 justify-between items-center sticky top-0">
   <div>
   <h1 className="text-2xl font-bold">{BrandName}</h1>
   </div>

   <div className="space-x-6">

   {menuLinks.map(link=>(
    <a href={link.link} key={link.id} className="hover:text-orange-600">
    {link.title}
    </a>
   ))}
   
  
    </div>


   <div>
   <a href={actionButton.link} className="px-4 py-2  bg-orange-500 rounded-full text-1xl shadow ">
   {actionButton.title}
   </a>
   </div>

   </div>
    </>
  );
}
