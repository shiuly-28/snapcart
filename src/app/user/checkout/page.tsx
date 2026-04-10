'use client'
import { RootState } from "@/redux/store"
import { ArrowLeft, Building, Building2, Home, MapPin, Phone, Search, User } from "lucide-react"
import { motion, number } from "framer-motion" // motion/react এর বদলে framer-motion চেক করুন যদি এরর দেয়
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import MapVeiw from "@/components/MapVeiw"

function Checkout() {
  const router = useRouter()
  const { userData } = useSelector((state: RootState) => state.user)
  
  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    city: "",
    state: "",
    pincode: "",
    fullAddress: ""
  })

  const[position,setPosition]=useState<[number,number]|null>(null)
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude,longitude}=pos.coords
        setPosition([latitude,longitude])
      })
    }
  },[])

  useEffect(()=>{
    if(userData){
      setAddress((prev)=>({...prev,fullName:userData?.name || ""}))
      setAddress((prev)=>({...prev,mobile:userData?.mobile || ""}))
    }
  },[])
 return (
    <div className='w-[92%] md:w-[80%] mx-auto py-10 relative'>
      {/* Back Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="absolute left-0 top-2 flex items-center gap-2 text-amber-600 font-semibold"
        onClick={() => router.push("/user/cart")}
      >
        <ArrowLeft size={16} />
        <span>Back to Cart</span>
      </motion.button>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center text-amber-500 mb-10"
      >
        Checkout
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <MapPin className="text-amber-600" size={20} /> Delivery Address
          </h2>

          <div className="space-y-4">
            {/* Full Name */}
            <div className="relative flex items-center">
              <User className="absolute left-3 text-amber-500 pointer-events-none" size={18} />
              <input
                type="text"
                value={address.fullName}
                onChange={(e) =>setAddress((prev)=>({...prev,fullName:address.fullName || ""}))}
                className="pl-10 w-full h-11 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:border-amber-500 transition-all"
                placeholder="Full Name"
              />
            </div>

            {/* Mobile */}
            <div className="relative flex items-center">
              <Phone className="absolute left-3 text-amber-500 pointer-events-none" size={18} />
              <input
                type="text"
                value={address.mobile}
                onChange={(e) =>setAddress((prev)=>({...prev,mobile:address.mobile || ""}))}
                className="pl-10 w-full h-11 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:border-amber-500 transition-all"
                placeholder="Mobile Number"
              />
            </div>

            {/* Full Address */}
            <div className="relative flex items-center">
              <Home className="absolute left-3 text-amber-500 pointer-events-none" size={18} />
              <input
                type="text"
                value={address.fullAddress}
                onChange={(e) =>setAddress((prev)=>({...prev,fullAddress:address.fullAddress || ""}))}
                className="pl-10 w-full h-11 border border-gray-300 rounded-xl text-sm bg-white focus:outline-none focus:border-amber-500 transition-all"
                placeholder="Full Address"
              />
            </div>

            {/* City, State, Pincode Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="relative flex items-center">
                <Building className="absolute left-2 text-amber-500 pointer-events-none" size={16} />
                <input
                  type="text"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) =>setAddress((prev)=>({...prev,city:address.city || ""}))}
                  className="pl-8 w-full h-11 border border-gray-300 rounded-xl text-xs bg-white focus:outline-none"
                />
              </div>
              <div className="relative flex items-center">
                <Building2 className="absolute left-2 text-amber-500 pointer-events-none" size={16} />
                <input
                  type="text"
                  placeholder="State"
                  value={address.state}
                  onChange={(e) =>setAddress((prev)=>({...prev,state:address.state || ""}))}
                  className="pl-8 w-full h-11 border border-gray-300 rounded-xl text-xs bg-white focus:outline-none"
                />
              </div>
              <div className="relative flex items-center">
                <Search className="absolute left-2 text-amber-500 pointer-events-none" size={16} />
                <input
                  type="text"
                  placeholder="Pincode"
                  value={address.pincode}
                  onChange={(e) =>setAddress((prev)=>({...prev,pincode:address.pincode || ""}))}
                  className="pl-8 w-full h-11 border border-gray-300 rounded-xl text-xs bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Search Section */}
            <div className="flex gap-2 pt-2">
              <input 
                type="text" 
                placeholder="Search city or area..."
                className="flex-1 border-2 border-amber-500 rounded-xl px-4 py-2 text-sm focus:outline-none"
              />
              <button className="bg-amber-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-amber-700 transition-all shadow-md">
                Search
              </button>
            </div>
            <div className="relative mt-6 h-[330px] rounded-xl overflow-hidden border 
            border-gray-200 shadow-inner">
              <MapVeiw position={position}/>
            </div>
          </div>
        </motion.div>

        {/* <div className="hidden md:block"> */}
          {/* Right side summary can go here */}
        </div>
      </div>
    // </div>
  )
}

export default Checkout