import { authClient } from "@/lib/auth-client";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function updateProfile(id: string, data: any) {
  const { data: token } = await authClient.token();
  const res = await fetch(`${API}/profile/${id}`, {
    method: "PATCH",
     headers: {
    authorization: `Bearer ${token?.token}`,
  },
    body: JSON.stringify(data),
  });

  return res.json();
}