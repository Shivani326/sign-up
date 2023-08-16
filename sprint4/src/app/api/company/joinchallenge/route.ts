// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import Company from "@/models/companyModel";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database
connect();

// Define the route handler for the POST request
export async function POST(request: NextRequest) {
  try {
    // Extract company_id and selectedChallengeIds from the request body
    const { company_id, selectedChallengeIds } = await request.json();

    // Log company_id and selectedChallengeIds for debugging
    console.log("company_id:", company_id);
    console.log("selectedChallengeIds:", selectedChallengeIds);

    // Retrieve the company from the database
    const company = await Company.findById(company_id);

    // Check if company exists
    if (!company) {
      return NextResponse.json({
        success: false,
        message: "Company not found",
      });
    }

    // Log company for debugging
    console.log("Company:", company);

    // Retrieve the selected challenges from the database
    const selectedChallenges = await Challenge.find({
      _id: { $in: selectedChallengeIds },
    });

    // Check if any selected challenge is not found
    if (selectedChallenges.length !== selectedChallengeIds.length) {
      return NextResponse.json({
        success: false,
        message: "One or more selected challenges not found",
      });
    }

    // Log selected challenges for debugging
    console.log("Selected Challenges:", selectedChallenges);

    // Update the company's selected challenges
    if (!Array.isArray(company.selectedChallenges)) {
      company.selectedChallenges = [];
    }

    // Add the selected challenge IDs to the company's list
    company.selectedChallenges.push(...selectedChallengeIds);
    await company.save();

    // Log updated company for debugging
    console.log("Updated Company:", company);

    return NextResponse.json({
      success: true,
      message: "Successfully joined the challenges.",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error joining the challenges.",
    });
  }
}
