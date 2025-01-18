import dbConnect from "@/app/lib/mongoDB";
import UserModel from "@/app/models/userModel";
import bcrypt from "bcryptjs";
// Import bcrypt for password comparison
export const POST = async (req) => {
  await dbConnect();
  // Ensure database connection is established
  const { email, password } = await req.json();
  // Fetching email and password from JSON request body
  try {
    // Find user by email
    const user = await UserModel.findOne({ "email.address": email });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 400,
      });
    }
    // Successful login (you might want to create a session or JWT token here)
    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
