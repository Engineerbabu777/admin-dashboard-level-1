

import {mongooseConnect} from "@/database/connection";
import {Product} from "@/models/products/Product.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req:Request) {
  try {
    await mongooseConnect();

    const extractData = await req.json();
    const newlyCreatedProduct = await Product.create(extractData);

    if (newlyCreatedProduct) {
      return NextResponse.json({
        success: true,
        message: "Product added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "failed to add a product ! Please try after some time.",
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