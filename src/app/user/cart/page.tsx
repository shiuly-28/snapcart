"use client"

import { ArrowLeft, Minus, Plus, ShoppingBasket,} from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {AnimatePresence, motion} from 'motion/react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import Image from 'next/image'
import { decreaseQuantity, increaseQuantity } from '@/redux/cartSlice'

function CartPage() {
  const {cartData}=useSelector((state:RootState)=>state.cart)
  const dispatch=useDispatch<AppDispatch>()
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
              <div className='mt-4 sm:mt-0 sm:ml-4 flex-1 text-center sm:text-left'>
                <h3 className='text-base sm:text-lg font-semibold text-gray-600 line-clamp-1'>{item.name}</h3>
                <p className='text-xs sm:text-sm text-gray-500'>{item.unit}</p>
                <p className='text-amber-600 font-bold mt-1 text-sm sm:text-base'>৳:{Number(item.price)*item.quantity}</p>
              </div>
              <div className='flex items-center justify-center sm:justify-end gap-3 sm:mt-0 bg-gray-50 py-2 rounded-full'>
                <button className='w-7 h-7 flex items-center justify-center rounded-full bg-amber-300 hover:bg-amber-200 transition-all'
                onClick={()=>dispatch(decreaseQuantity(item._id))} ><Minus className='text-white' size={16}/></button>
                <span className='font-semibold text-gray-800 w-6 text-center'>{item.quantity}</span>
                <button className='w-7 h-7 flex items-center justify-center rounded-full bg-amber-300 hover:bg-amber-200 transition-all'
                onClick={()=>dispatch(increaseQuantity(item._id))}  ><Plus className='text-white' size={16}/></button>
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
