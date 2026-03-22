import { Search } from 'lucide-react'
import mongoose from 'mongoose'
import Link from 'next/link'
import React from 'react'
interface IUser{
    _id:mongoose.Types.ObjectId
    name:string
    email:string
    password?:string
    mobile:string
    role:"user" | "deliveryBoy" | "admin"
    image?:string
}

function Navber({user}:{user:IUser}) {
    console.log(user)
  return (
    <div className='w-[95%] fixed top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-orange-300 to-orange-500 rounded-2xl shadow-lg shadow-black/30 flex justify-between items-center h-20 px-4 md:px z-50'>
      <Link href={"/"} className='text-white font-extrabold text-2xl sm:text-3xl tracking-wide hover:scale-105 transitions-transform'>
      SwiftPick
      </Link>
      <form className='hidden md:flex items-center bg-white rounded-full px-4 py-2 w-1/2 max-w-lg shadowmd'>
         <Search className='text-gray-500 w-5 h-5 mr-2'/>
         <input type="text" placeholder='Search groceries...' />
      </form>
    </div>
  )
}

export default Navber
