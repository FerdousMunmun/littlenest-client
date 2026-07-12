import { Input } from "@heroui/react";
import { Search } from "lucide-react";

import CenterCard from "@/components/CenterCard";
import { getCenters } from "@/services/center";
import { Center } from "@/types/center";

export default async function ChildCareCentersPage() {
  const centers: Center[] = await getCenters();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-block bg-rose-100 text-rose-600 px-5 py-2 rounded-full text-sm font-semibold">
          Child Care Centers
        </span>

        <h1 className="text-5xl font-bold mt-5">
          Find Your Perfect
          <span className="text-rose-500"> Child Care Center</span>
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Browse trusted child care centers, compare facilities, and book the
          best place for your child.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <Input
          placeholder="Search child care center..."
         
          radius="lg"
        />
      </div>

      {/* Cards */}
      {centers.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No Child Care Centers Found
          </h2>

          <p className="text-gray-500 mt-2">
            Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {centers.map((center) => (
            <CenterCard
              key={center._id}
              center={center}
            />
          ))}
        </div>
      )}
    </section>
  );
}