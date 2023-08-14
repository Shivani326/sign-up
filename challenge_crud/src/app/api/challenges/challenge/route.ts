import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { title, description,id ,maxTeamMembers} = reqBody;

        const newChallenge = new Challenge ({
            title,
            description,
            id,
            maxTeamMembers
        })

        await newChallenge.save();
        return NextResponse.json({success: true, message: "Challenge added successfully."})
    } catch (error:any) {
        console.log({success: false, message: "Error occured."})
    }
}

//Get all method
export async function GET() {
    
    await connect();
    const challenges= await Challenge.find(); 
    return NextResponse.json({ challenges});
 
}

export async function PUT(request: NextRequest) {
    const obj_id = request.nextUrl.searchParams.get("id");
    const { title, description,id ,maxTeamMembers} = await request.json();
    await connect();  
    await Challenge.findByIdAndUpdate(obj_id, {title, description, id, maxTeamMembers});
    return NextResponse.json({success: true, message:"updated successfully"})
    

}
//Delete method
export async function DELETE(request: NextRequest) {
  const id =request.nextUrl.searchParams.get("id");
  await connect();
  await Challenge.findByIdAndDelete(id);
  return NextResponse.json({ message:"challenge deleted"},{ status: 200 });
}  


