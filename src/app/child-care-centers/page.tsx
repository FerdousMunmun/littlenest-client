
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
  const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 8

  useEffect(() => {
    async function loadCenters() {
      const data = await getCenters();
      setCenters(data);
    }

    loadCenters();
  }, []);
// 👇 এখানে


useEffect(() => {
  setCurrentPage(1);
}, [search, location]);
const locations = [
  ...new Set(
    centers.map((center) => {
      return center.location.split(",").pop()?.trim() || "";
    })
  ),
];
    const filteredCenters = centers.filter((center) => {
    const matchesSearch =
      center.name.toLowerCase().includes(search.toLowerCase());

   const matchesLocation =
  location === "" ||
  center.location.toLowerCase().includes(location.toLowerCase());

    return matchesSearch && matchesLocation;
  });


  const totalPages = Math.ceil(filteredCenters.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;

const paginatedCenters = filteredCenters.slice(
  startIndex,
  startIndex + itemsPerPage
);
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

  {locations.map((loc) => (
    <option key={loc} value={loc}>
      {loc}
    </option>
  ))}
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
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {paginatedCenters.map((center) => (
        <CenterCard
          key={center._id}
          center={center}
        />
      ))}
    </div>

    {totalPages > 1 && (
      <div className="flex justify-center items-center gap-3 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 rounded-lg font-semibold transition ${
              currentPage === index + 1
                ? "bg-rose-500 text-white"
                : "border hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Next
        </button>
      </div>
    )}
  </>
)}
    </section>
  );
}