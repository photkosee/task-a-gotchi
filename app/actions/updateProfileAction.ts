"use server";

export default async function updateProfileAction(
  profile : string,
  token : string
) {
  const res = await fetch(process.env.ROOT_URL + "/api/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ profile }),
  });
  console.log(res);

  const json = await res.json();

  return json;
}
