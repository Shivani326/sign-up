import {PrismaClient} from "@prisma/client";
import { NextResponse } from "next/server";

const prisma =new PrismaClient({});

export async function POST(request){
    const {email,password}= await request.json();

    const existingUser = await prisma.user.findUnique({
        where: { email,password},
      });
      if(existingUser!==null){
        return NextResponse.json({message : "Welcome to Impactboard"})
      }
      else{
    
    return NextResponse.json({message : "Please check email and passwaord again!"})
}
}

