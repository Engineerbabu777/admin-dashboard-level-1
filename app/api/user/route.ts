


import { mongooseConnect } from "@/database/connection";
import { userModel } from "@/models/user/User.Model";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  try {
    await mongooseConnect();
    const { name, email } = await req.json();

    const newUser = await userModel.create({ name, email });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "User registered",
      });
    } else {
        return NextResponse.json({
            success: false,
            message: "failed to register the user ! Please try again",
          });  
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}