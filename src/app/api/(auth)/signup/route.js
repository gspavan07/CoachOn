import dbConnect from "@/app/lib/mongoDB";
import UserModel from "@/app/models/userModel";
import bcrypt, { genSalt } from "bcryptjs";

export const POST = async (req) => {
  const { name, email, mobile, password } = await req.json();
  await dbConnect();

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({
      $or: [{ "email.address": email }, { "mobile.number": mobile }],
    });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 7);

    // Create and save the new user
    const newUser = new UserModel({
      name,
      email: {
        address: email,
        verified: false,
      },
      mobile: {
        number: mobile,
        verified: false,
      },
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify({ message: "Signup successful" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
