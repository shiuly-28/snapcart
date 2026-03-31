"use client"

import { ArrowLeft, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import {motion} from 'motion/react'

const categories=[
    "Fruits & Vegetable",
            "Dairy & Eggs",
            "Rice ", "Atta & Grains",
            "Snacks & Biscuits",
            "Spices & Masals",
            "Beverages & Drinks",
            "Personal Care",
            "Household Essentials",
            "Instant & Packaged Food",
            "Baby & Pet Care"
]
const units=[
    "kg", "g", "liter", "ml", "price", "pack"
]
const AddGrocery = () => {
    const [name, setName]=useState("")
    const [category, setCategory]=useState("")
    const [unit, setUnit]=useState("")
    const [price, setPrice]=useState("")
    const[preview, setPreview]=useState<string|null>()
    const[backendImage, setBackendImage]=useState<File | null>()

    const handleImageChange=(e:ChangeEvent<HTMLInputElement>)=> {
        const files=e.target.files
        if(!files || files.length==0)return
        const file=files[0]
        setBackendImage(file)
        setPreview(URL.createObjectURL(file))
    }
    return (
        <div className='min-h-screen flex items-center justify-center 
          py-16 px-4 relative'>
            <Link href={"/"} className='absolute top-6 left-6 flex items-center gap-2
             text-amber-500 font-semibold  px-4 rounded-full  hover:text-amber-600  transition-all'>
                <ArrowLeft className='w-5 h-5'/>
                <span className='hidden md:flex'>Back To Home</span>
            </Link>
            <motion.div  
            initial={{y:20, opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.4}}
            className='bg-white w-full max-w-2xl shadow-2xl rounded-2xl border-amber-300 p-8'
            >
            <div className='flex flex-col items-center mb-8'>
                <div className='flex items-center gap-3'>
                    <PlayCircle className='text-amber-500'/>
                    <h1>Add Your Fresh Finds</h1>
                     </div>
                    <p className='text-gray-500 text-sm mt-2 text-center'>Fill out the details below to add a new Fresh Finds item</p>
               
            </div>
            <form className='flex flex-col gap-6 w-full animate-pulse'>
           <div>
             <label htmlFor="" className='text-gray-700 font-medium mb-1'>Fresh Finds Name</label>
            <span className='text-red-500'>*</span>
            <input type="text" id='name' placeholder='eg: sweets, Milk...'
            onChange={(e)=>setName(e.target.value)}value={name}
            className='w-full border border-gray-300 
            rounded-xl px-4 py-3 outline-none focus:right-2 focus:ring-amber-500 transition-all' />
           </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <div>
                
                <label className="block text-gray-700 font-medium  mb-1">
                Category<span className='text-red-500'>*</span></label>
                <select name='category' value={category} className='w-full border border-gray-300
                 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 transition-all bg-white' 
                 onChange={(e)=>setCategory(e.target.value)}>
                <option>Select Category</option>
                {categories.map(cat=>(
                    <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
                    <div>
                
                <label className="block text-gray-700 font-medium  mb-1">
                Unit<span className='text-red-500'>*</span></label>
                <select name='unit' className='w-full border border-gray-300
                 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400 transition-all bg-white'
                 onChange={(e)=>setUnit(e.target.value)}
                 value={unit}
                 >
                <option value="">Select Unit</option>
                {units.map(cat=>(
                    <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
           </div>


            <div>
             <label htmlFor="" className='text-gray-700 font-medium mb-1'>Price</label>
            <span className='text-red-500'>*</span>
            <input type="text" id='name' placeholder='eg: 120' className='w-full border border-gray-300 
            rounded-xl px-4 py-3 outline-none focus:right-2 focus:ring-amber-500 transition-all'
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
            />
           </div>
            <div>
             <label htmlFor="image" className='text-gray-700 font-medium mb-1'>Upload Image</label>
            <span className='text-red-500'>*</span>
            <input type="file" accept='image/*' id='name' placeholder='eg: 120' className='w-full border border-gray-300 
            rounded-xl px-4 py-3 outline-none focus:right-2 focus:ring-amber-500 transition-all'
            onChange={handleImageChange}
         
            />
           </div>
            </form>
            </motion.div>
        </div>
    );
};

export default AddGrocery;