import bcrypt from "bcryptjs";
import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (user) {
    return Response.json({ error: "Username already exists", status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      username,
      password: hash,
      profile: Math.floor(Math.random() * 100) + 1,
    },
  });

  return Response.json({ status: 200 });
}