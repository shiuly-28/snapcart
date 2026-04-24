import connectDb from "@/lib/db";
import Order from "@/models/order.model";
import User from "@/models/user.models";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest,{params}:{params:{orderId:string}}){
    try{
        await connectDb()
        const {orderId}=await params
        const {status}=await req.json()
        const order=await Order.findById(orderId).populate("user")
        if(!order){
            return NextResponse.json(
                {message:"order not found"},
                {status:400}
            )
        }
        order.status=status
        
        let availableDeliveryBoys:any=[]
        if(status==="out of delivery" && !order.assignment){
            const {latitude, longitude}=order.address
            const nearByDeliveryBoys=await User.find({
                role:"deliveryBoy",
                location:{
                    $near:{
                        $geometry:{type:"Point", coordinates:[Number(longitude),Number(latitude)]},
                        $maxDistance:10000
                    }
                }
            })
        }
    }catch(error){

    }
}