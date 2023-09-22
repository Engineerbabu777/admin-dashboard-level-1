

import {mongooseConnect} from "@/database/connection";
import {Product} from "@/models/products/Product.Model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req:Request) {
  try {
    await mongooseConnect();
    const getAllProducts = await Product.find({});

    if (getAllProducts) {
      return NextResponse.json({
        success: true,
        data: getAllProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "failed to fetch the products ! Please try again after some time",
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