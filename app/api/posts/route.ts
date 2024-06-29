// import * as jose from "jose";
// import prisma from "@/app/lib/prisma";

// export async function POST(request: Request) {
//   const token = request.headers.get("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return Response.json({ error: "No token", status: 400 });
//   }

//   const body = await request.json();
//   const { title, description, category, time, location } = body;

//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   try {
//     const { payload } = await jose.jwtVerify(token, secret, {});
//     if (!payload || !payload.sub) {
//       return Response.json({ error: "Unauthorized", status: 400 });
//     }
//     const userId = payload.sub.toString();
//     try {
//       const newPost = await prisma.post.create({
//         data: { title, description, category, time, location, userId },
//       });
//       return Response.json({ status: 200, post: newPost });
//     } catch (error) {
//       return Response.json({ error: "Unable to create a new post", status: 400 });
//     }
//   } catch (error) {
//     return Response.json({ error: "Your token is expired", status: 400 });
//   }
// }

// export async function GET(request: Request) {
//   const token = request.headers.get("Authorization")?.replace("Bearer ", "");
//   if (!token) {
//     return Response.json({ error: "No token", status: 400 });
//   }

//   const secret = new TextEncoder().encode(process.env.JWT_SECRET);
//   try {
//     const { payload } = await jose.jwtVerify(token, secret, {});
//     if (!payload || !payload.sub) {
//       return Response.json({ error: "Unauthorized", status: 400 });
//     }
//     try {
//       const posts = await prisma.post.findMany({
//         take: 6,
//       });
//       return Response.json({ status: 200, posts: posts });
//     } catch (error) {
//       return Response.json({ error: "Unable to create a new post", status: 400 });
//     }
//   } catch (error) {
//     return Response.json({ error: "Your token is expired", status: 400 });
//   }
// }
