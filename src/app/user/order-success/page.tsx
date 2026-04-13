
"use client"
import React from 'react'
import {motion} from 'motion/react'
import { CheckCircle } from 'lucide-react'
function OrderSuccess() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh]
    px-6 text-center bg-linear-to-b from-amber-50 to-white'>
        <motion.div
        initial={{scale:0,rotate:-10}}
        animate={{scale:1, rotate:0}}
        transition={{
            type:"spring",
            damping:10,
            stiffness:100
        }}
        className='relative'
        >
            <CheckCircle className='text-amber-600 w-24 h-24 md:w-28 md:28'/>
        </motion.div>
        <motion.h1
        initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.4, delay:0.3}}
        className='text-3xl md:text-4xl font-bold text-amber-600 mt-6'
        >
            Order Placed Successfully
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:30}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.4, delay:0.6}}
        className='text-gray-700 mt-3 md:text-base max-w-md'
        >
            Thank You for shopping with us! Your order has been placed and is being proxessed.You can track its 
            progress in your <span className='text-amber-600 font-semibold'>My Orders</span> section.
        </motion.p>
      
    </div>
  )
}

export default OrderSuccess
