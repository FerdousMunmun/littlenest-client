import Image from "next/image";
import { Button } from "@heroui/react";
import { MapPin, Star, Users } from "lucide-react";
import { getCenterById } from "@/services/center";
import BookingButton from "@/components/BookingButton";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CenterDetailsPage({ params }: Props) {
  const { id } = await params;

  const center = await getCenterById(id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={center.image}
            alt={center.name}
            className="w-full h-[450px] object-cover rounded-2xl"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{center.name}</h1>

          <div className="space-y-4 text-gray-600">

            <div className="flex items-center gap-2">
              <MapPin className="text-pink-500" size={20} />
              <span>{center.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-pink-500" size={20} />
              <span>{center.availableSeats} Seats Available</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500" size={20} />
              <span>{center.rating}</span>
            </div>

          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              Description
            </h2>

            <p className="text-gray-600 leading-8">
              {center.description}
            </p>
          </div>

          <div className="mt-10">
            <BookingButton center={center} />
          </div>
        </div>
      </div>
    </div>
  );
}