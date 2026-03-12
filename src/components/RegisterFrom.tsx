import { ArrowLeft, EyeIcon, EyeOff, Leaf, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "motion/react"
type propType={
  previousStep:(s:number)=>void
}


const RegisterFrom = ({previousStep}:propType) => {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [showPassword, setShowPassword]=useState(false)
    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-6 bg-white relative'>
            <div className='absolute top-6 left-6 flex items-center gap-2 text-green-600 hover:text-green-800 cursor-pointer'
            onClick={()=>previousStep(1)}
            >
                <ArrowLeft className='w-s h-s'/>
                <span className='font-medium'>Back</span>
            </div>
            <motion.h1 
               initial={{
        opacity:0,
        y:20
      }}
      animate={{
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.6,
        delay:0.8
      }}
            className='text-4xl font-extrabold text-green-700 mb-2'>
                Create Account
            </motion.h1>
            <p className='flex text-gray-500 mt-5 items-center'>Join Snapcart
                 Today <Leaf className='w-5 h-5 text-green-600'/></p>
                 <motion.form 
                  initial={{
        opacity:0,
        y:20
      }}
      animate={{
        opacity:1,
        scale:1
      }}
      transition={{
        duration:0.6,
        delay:0.8
      }}className='flex flex-col gap-5 w-full max-w-sm'>
        <div className='relative'>
        <User className='absolute left-3 top-3.5 text-gray-400 w-s h-s hover:text-gray-400 '/>
        <input type="text" placeholder='Your Name' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />
        </div>
        <div className='relative'>
        <Mail className='absolute left-3 top-3.5 text-gray-400 w-s h-s hover:text-gray-400 '/>
        <input type="text" placeholder='Your Email' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        </div>
        <div className='relative'>
        <Lock className='absolute left-3 top-3.5 text-gray-400 w-s h-s hover:text-gray-400 '/>
        <input type={showPassword?"text":"password"} placeholder='Your password' className='w-full border border-gray-300 rounded-xl py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none' 
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
        {
          showPassword?<EyeOff className='absolute top-3.5 right-3 flex items-center gap-2 text-green-600 hover:text-green-800 cursor-pointer'
           onClick={()=>setShowPassword(false)}/>:<EyeIcon className='absolute top-3.5 right-3 flex items-center gap-2 text-green-600 hover:text-green-800 cursor-pointer'
           onClick={()=>setShowPassword(true)}/>
        }
        </div>

        {
          (()=>{
            const formValidation=name!==""&& name!==""&& name!==""
            return<button
            className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2{
              formValidation
              ? " bg-green-600 hover:bg-green-700 text-white"
              :"bg-gray-300 text-white cursor-not-allowed"
              }`}>
                
                Register</button>
          })()
        }
      </motion.form>
        </div>
    );
};

export default RegisterFrom;