const API = process.env.NEXT_PUBLIC_API_URL;

export async function updateProfile(id: string, data: any) {
  const res = await fetch(`${API}/profile/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}