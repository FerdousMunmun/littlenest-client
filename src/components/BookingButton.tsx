"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import {
  createBooking,
  checkBooking,
} from "@/services/booking";
import toast from "react-hot-toast";

type BookingButtonProps = {
  center: {
    _id: string;
    name: string;
    image: string;
    location: string;
  };
};

export default function BookingButton({
  
  center,
}: BookingButtonProps) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
const [alreadyBooked, setAlreadyBooked] = useState(false);


useEffect(() => {
  async function checkAlreadyBooked() {
    if (!session?.user?.email) return;

    try {
      const result = await checkBooking(
        session.user.email,
        center._id
      );

      setAlreadyBooked(result.booked);
    } catch (error) {
      console.error(error);
    }
  }

  checkAlreadyBooked();
}, [session, center._id]);
  const handleBooking = async () => {
    if (!session?.user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    const bookingData = {
      centerId: center._id,
      centerName: center.name,
      centerImage: center.image,
      location: center.location,

      userId: session.user.id,
      userName: session.user.name,
      userEmail: session.user.email,

      bookingDate: new Date().toISOString(),
      status: "Pending",
    };

    try {
  toast.loading("Booking center...", {
    id: "booking",
  });

  await createBooking(bookingData);

  toast.success("Booking Successful!", {
    id: "booking",
  });

  router.push("/my-bookings");
  router.refresh();

} catch (error) {
  console.error(error);

  toast.error("Booking Failed!", {
    id: "booking",
  });
}
  };

  return alreadyBooked ? (
  <Button
    onClick={() => router.push("/my-bookings")}
    className="bg-green-500 text-white px-10 py-6 rounded-xl text-lg"
  >
    Already Booked ✓
  </Button>
) : (
  <Button
    onClick={handleBooking}
    className="bg-pink-500 text-white px-10 py-6 rounded-xl text-lg"
  >
    Book Now
  </Button>
);
}