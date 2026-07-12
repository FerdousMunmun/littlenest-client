"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { createBooking } from "@/services/booking";

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

  const handleBooking = async () => {
    if (!session?.user) {
      alert("Please login first.");
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
      await createBooking(bookingData);

      alert("Booking Successful!");

      router.push("/my-bookings");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Booking Failed");
    }
  };

  return (
    <Button
      onClick={handleBooking}
      className="bg-pink-500 text-white px-10 py-6 rounded-xl text-lg"
    >
      Book Now
    </Button>
  );
}