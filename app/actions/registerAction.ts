"use server";

export default async function registerAction(username: string | undefined, password: string | undefined) {
  const res = await fetch(process.env.ROOT_URL + "/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const json = await res.json();

  return json;
}