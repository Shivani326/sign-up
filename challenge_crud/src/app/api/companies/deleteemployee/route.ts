import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Employee from "@/models/employeeModel";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return NextResponse.json({ success: false, message: "Employee not found" });
    }

    return NextResponse.json({ success: true, message: "Employee deleted successfully" });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ success: false, message: "Error deleting employee" });
  }
}
