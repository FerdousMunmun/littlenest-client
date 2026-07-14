"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getMyBookings } from "@/services/booking";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";


type Booking = {
  _id: string;
  centerId: string;
  centerName: string;
  centerImage: string;
  location: string;
  bookingDate: string;
  status: string;
};

export default function MyBookingsPage() {
  const { data: session } = authClient.useSession();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      if (!session?.user?.email) return;

      try {
        const data = await getMyBookings(session.user.email);
        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, [session]);

  if (loading) {
    return (
      <div className="py-24 text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-3">
            No Booking Found
          </h2>

          <p className="text-gray-500 mb-8">
            You haven't booked any child care center yet.
          </p>

          <Link
            href="/child-care-centers"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg"
          >
            Browse Centers
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300"
            >
              <img
                src={booking.centerImage}
                alt={booking.centerName}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold mb-4">
                  {booking.centerName}
                </h2>

                <div className="space-y-3 text-gray-600">

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-pink-500" />
                    {booking.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={18}
                      className="text-pink-500"
                    />

                    {new Date(
                      booking.bookingDate
                    ).toLocaleDateString()}
                  </div>

                  <div>
                    Status :

                    <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {booking.status}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/child-care-centers/${booking.centerId}`}
                  className="block mt-6"
                >
                  <button className="w-full bg-rose-400 text-white py-3 rounded-xl hover:bg-pink-600">
                    View Center
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}