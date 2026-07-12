import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { MapPin, Users, Star } from "lucide-react";

import { Center } from "@/types/center";

interface CenterCardProps {
  center: Center;
}

export default function CenterCard({ center }: CenterCardProps) {
  return (
    <Card className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={center.image}
          alt={center.name}
          width={500}
          height={300}
          className="w-full h-60 object-cover"
        />

        <div className="absolute top-4 right-4 bg-rose-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
          {center.availableSeats} Seats
        </div>
      </div>

      <Card className="space-y-4">
        {/* Name */}
        <h2 className="text-2xl font-bold text-slate-900">
          {center.name}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} className="text-rose-500" />
          <span>{center.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-semibold">
            {center.rating}
          </span>
        </div>

        {/* Seats */}
        <div className="flex items-center gap-2 text-gray-600">
          <Users size={18} className="text-rose-500" />
          <span>{center.availableSeats} Available Seats</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 line-clamp-3">
          {center.description}
        </p>

        {/* Button */}
        <Link href={`/child-care-centers/${center._id}`}>
  <Button className="w-full bg-pink-500 text-white">
    View Details
  </Button>
</Link>
      </Card>
    </Card>
  );
}