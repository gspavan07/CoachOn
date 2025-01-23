import { setCookie } from "@/app/lib/cookies";
import { signToken } from "@/app/lib/jwt";
import dbConnect from "@/app/lib/mongoDB";
import UserModel from "@/app/models/userModel";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  await dbConnect();

  const { email, password } = await req.json();

  try {
    const user = await UserModel.findOne({ "email.address": email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }
    const token = signToken({ email });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: { token: token, user },
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
