'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Bike, User, UserCog } from 'lucide-react';

function EditRoleMobile() {
  const [roles, setRoles]=useState([
    {id:"admin", label:"admin", icon:UserCog},
    {id:"user", label:"User", icon:User},
    {id:"deliveryBoy", label:"Delivery Boy", icon:Bike},
  ])
  const [selectedRole, setSelectedRole]=useState("")
  return (
    <div className='flex flex-col min-h-screen p-6 w-full '>
      <motion.h1
       initial={{
        opacity:0,
        y:-20
      }}
      animate={{
        opacity:1,
        y:0
      }}
      transition={{
        duration:2
      }}
      className='text-3xl md:text-4xl font-extrabold text-orange-500 text-center mt-8'
      >Select Your Role</motion.h1>
      <div className='flex flex-col md:flex-row justify-center gap-6 mt-10'>
      {roles.map((role)=>{
        const Icon=role.icon
        const isSelected=selectedRole==role.id
        return(
          <motion.div
          whileTap={{scale:0.96}}
          key={role.id}
          onClick={()=>setSelectedRole(role.id)}
          className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 transition-all ${
            isSelected
            ?"border-orange-600 bg-orange-100 shadow-lg"
            :"border-gray-300 bg-white hover:bg-orange-400"
          }`}
          >
            <Icon></Icon>
            <span>{role.label}</span>
          </motion.div>
        )
      })}
      </div>
    </div>
  )
}

export default EditRoleMobile
