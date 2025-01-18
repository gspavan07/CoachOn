import dbConnect from "@/app/lib/mongoDB";
import UserModel from "@/app/models/userModel"; // Adjust this path as necessary
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const data = await UserModel.find({});
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
