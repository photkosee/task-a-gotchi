import bcrypt from "bcryptjs";
import * as jose from "jose";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  if (!user) {
    return Response.json({ error: "Username does not exist", status: 400 });
  }

  const isValid = await bcrypt.compareSync(password, user.password);
  if (!isValid) {
    return Response.json({ error: "Incorrect password", status: 400 });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";
  
  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(user.id.toString())
    .sign(secret);

  return Response.json({ token: jwt, status: 200, username: user.username, profile: user.profile });
}