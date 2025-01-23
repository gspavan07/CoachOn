import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your_secret_key";

export function signToken(payload) {
  return jwt.sign(payload, secret);
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
