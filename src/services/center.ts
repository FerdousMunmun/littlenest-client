
const API = process.env.NEXT_PUBLIC_API_URL;

export async function getCenters() {
  const res = await fetch(`${API}/centers`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch centers");
  }

  return res.json();
}


export async function getCenterById(id: string) {
  const res = await fetch(`${API}/centers/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch center");
  }

  return res.json();
}