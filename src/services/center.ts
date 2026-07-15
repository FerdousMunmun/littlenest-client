
const API = process.env.NEXT_PUBLIC_API_URL;

import { authClient } from "@/lib/auth-client";

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

  const { data: token } = await authClient.token();
  const res = await fetch(`${API}/centers`, {


    method: "POST",
    headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
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
  const { data: token } = await authClient.token();
  const res = await fetch(`${API}/centers/${id}`, {
    method: "PATCH",
    headers: {
    authorization: `Bearer ${token?.token}`,
  },
    body: JSON.stringify(data),
  });

  return res.json();
}


export async function deleteCenter(id: string) {
  const { data: token } = await authClient.token();
  const res = await fetch(`${API}/centers/${id}`, {
    method: "DELETE",
        headers: {
    authorization: `Bearer ${token?.token}`,
  },
  });

  return res.json();
}