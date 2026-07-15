const API = process.env.NEXT_PUBLIC_API_URL;
import { authClient } from "@/lib/auth-client";
export async function createBooking(data: any) {
   const { data: token } = await authClient.token();
  const res = await fetch(`${API}/bookings`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token?.token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
}


export async function getMyBookings(email: string) {
  const res = await fetch(
    `${API}/bookings?email=${email}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}


export async function checkBooking(
  userEmail: string,
  centerId: string
) {
  const res = await fetch(
    `${API}/bookings/check?userEmail=${userEmail}&centerId=${centerId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}