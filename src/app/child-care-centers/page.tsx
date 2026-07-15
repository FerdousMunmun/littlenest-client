
"use client";
import { Input } from "@heroui/react";
import { Search } from "lucide-react";

import CenterCard from "@/components/CenterCard";
import { getCenters } from "@/services/center";
import { Center } from "@/types/center";
import { useEffect, useState } from "react";


export default function ChildCareCentersPage() {

  const [centers, setCenters] = useState<Center[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function loadCenters() {
      const data = await getCenters();
      setCenters(data);
    }

    loadCenters();
  }, []);

    const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || center.location === location;

    return matchesSearch && matchesLocation;
  });
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
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      </div>
      <div className="max-w-xl mx-auto mb-8">
  <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full rounded-lg border p-3"
  >
    <option value="">All Locations</option>
    <option value="Dhaka">Dhaka</option>
    <option value="Chattogram">Chattogram</option>
    <option value="Sylhet">Sylhet</option>
    <option value="Rajshahi">Rajshahi</option>
  </select>
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
          {filteredCenters.map((center) => (
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