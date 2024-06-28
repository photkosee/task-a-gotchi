import * as jose from "jose";
import prisma from "@/app/lib/prisma";

export async function PUT(request: Request) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return Response.json({ error: "No token", status: 400 });
  }

  const body = await request.json();
  const { profile } = body;

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jose.jwtVerify(token, secret, {});
    if (!payload || !payload.sub) {
      return Response.json({ error: "Unauthorized", status: 400 });
    }
    try {
      await prisma.user.update({
        where: {
          id: payload.sub,
        },
        data: {
          profile: parseInt(profile),
        },
      });
      return Response.json({ status: 200, profile: profile });
    } catch (error) {
      return Response.json({ error: "Update failed", status: 400 });
    }
  } catch (error) {
    return Response.json({ error: "Your token is expired", status: 400 });
  }
}
