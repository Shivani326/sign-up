import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/companyModel";
import Employee from "@/models/employeeModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      fullname,
      email,
      password,
      companyName,
      profile_image,
      points,
      bio,
      interests,
      fitness_information,
      selectedChallenges,
    } = reqBody;

    const company = await Company.findOne({ name: companyName });
    if (!company) {
      return NextResponse.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newEmployee = new Employee({
      fullname,
      email,
      password: hashedPassword,
      companyName,
      companyId: company._id,
      profile_image,
      points,
      bio,
      interests,
      fitness_information,
      selectedChallenges,
    });

    const savedEmployee = await newEmployee.save();
    console.log(savedEmployee);
    return NextResponse.json({
      success: true,
      message: "Employee registration successful.",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Registration failed",
    });
  }
}
