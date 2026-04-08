"use client"

import { ArrowLeft, ShoppingBasket,} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Image from 'next/image'

function CartPage() {
  const {cartData}=useSelector((state:RootState)=>state.cart)
  return (
    <div className='w-[90%] sm:w-[80%] mx-auto mt-8 mb-24 relative'>
      <Link href={'/'} className='flex absolute -top-2 left-2 items-center gap-2 text-amber-500 
      hover:text-amber-500 font-medium transition-all'>
      <ArrowLeft size={20}/>
      <span className='hidden sm:inline'>Back To Home</span>
      </Link>
      <motion.h2
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.3}}
    className='text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 text-center mb-10'
    >
      Your Shoping Cart
      </motion.h2>
    {cartData.length==0 ? (
      <motion.div
       initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.3}}
    className='text-center py-20 bg-white rounded-2xl shadow-md'
      >
        <ShoppingBasket className='w-16 h-16 text-gray-500 mx-auto mb-4' size={20}/>
        <p>Your cart is empty.Add freash food to continue Shopping</p>
        <Link href={"/"} className='bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600
        transition-all inline-block  font-medium'>Continue Shopping</Link>
      </motion.div>
    ):(
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
     <div>
      <AnimatePresence>
        {cartData.map((item,index)=>(
          <motion.div  
          key={index}
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:-20}}
          className='flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md p-5
          hover:shadow-xl transition-all duration-300 border border-gray-100'
          >
            <div className='relative w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrik-0
            rounded-xl over bg-gray-50 '>
              <Image src={item.image}
              alt={item.name}
                 fill
                 className='object-contain p-3 transition-transform duration-300 hover:scale-105'
              />
           
              
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
     </div>
      </div>
    )}

    </div>
  )
}

export default CartPage
