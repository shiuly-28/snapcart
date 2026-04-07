
"use client"
import axios from 'axios'
import React, { useEffect } from 'react'

function useGetMe() {
  useEffect(() =>{
    const getMe=async ()=>{
        try{
            const result=await axios("/api/me")
            console.log(result.data)
        }
        catch(error){

        }
    }
    getMe()

  }, [])
   
}

export default useGetMe
