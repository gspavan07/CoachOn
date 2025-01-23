// lib/cookies.js
import cookie from "cookie";

export function setCookie(res, name, value, options = {}) {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    ...options,
  };
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(name, stringValue, cookieOptions)
  );
}

export function getCookie(req, name) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const value = cookies[name];

  if (value?.startsWith("j:")) {
    return JSON.parse(value.slice(2));
  }
  return value;
}

export function removeCookie(res, name, options = {}) {
  setCookie(res, name, "", { ...options, maxAge: -1 });
}
