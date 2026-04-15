"use client"
import {motion} from 'motion/react'
import { IOrder } from '@/models/order.model'
import React from 'react'

function UserOrderCard({order}:{order:IOrder}) {
  const getStatusColor=(status:string)=>{
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
        case "out of delivery":
          return "bg-blue-100 text-blue-700 border-blue-300"
        case "delivered":
          return "bg-amber-100 text-amber-700 border-amber-4300"
    
      default:
        return "bg-gray-100 text-600 border-gray-300"
    }
  }
  return (
    <motion.div 
    initial={{opacity:0, y:15}}
    animate={{opacity:1, y:0}}
    transition={{duration: 0.4}}
    className='bg-white rounded-2xl border border-gray-100 shadow-md 
    hover:shadow-lg transition-all duration-300 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center
      gap-3 border-b border-gray-100 px-5 py-4 bg-linear-to-r from-amber-50 to-white'>
        <div>
          <h3 className='text-lg font-semibold text-gray-800'>Order<span className='text-amber-600 font-bold'> #{order?._id?.toString()?.slice(-6)}</span></h3>
          <p className='text-gray-600'>{new Date(order.createdAt!).toLocaleString()}</p>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <span 
          className={`px-3 py-1 text-xs font-semibold rounded-full border ${
            order.isPaid
            ?"bg-amber-100 text-amber-600 border-amber-500"
            :"bg-red-100 text-red-700 border-amber-300"
          }`}
          >
            {order.isPaid?"Paid":"unpaid"}
          </span>
          <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getStatusColor(
            order.status
          )}`}>
            {order.status}
          </span>
        </div>

      </div>
      <div className='p-5 space-y-4'>
        <div className='flex items-center gap-2 text-amber-500 text-sm '>
          {order.paymentMethod}
        </div>
      </div>
    </motion.div>
  )
}

export default UserOrderCard
