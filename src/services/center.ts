
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

export async function createCenter(data: any) {
  const res = await fetch(`${API}/centers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getMyCenters(email: string) {
  const res = await fetch(
    `${API}/my-centers?email=${email}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export async function updateCenter(id: string, data: any) {
  const res = await fetch(`${API}/centers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}