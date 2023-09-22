
import {mongooseConnect} from "@/database/connection";
import Visitor from "@/models/visitors/Visitors.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req:Request) {
  try {
    await mongooseConnect();

    const extractData = await req.json();
    const newlyCreatedVisitorsInfo = await Visitor.create(extractData);

    if (newlyCreatedVisitorsInfo) {
      return NextResponse.json({
        success: true,
        message: "Visitors data added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "failed to add a visitor ! Please try after some time.",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}