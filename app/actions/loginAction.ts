"use server";

export default async function loginAction(
  username: string | undefined,
  password: string | undefined
) {
  const res = await fetch(process.env.ROOT_URL + "/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const json = await res.json();

  return json;
}
