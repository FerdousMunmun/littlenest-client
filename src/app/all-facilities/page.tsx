import {
  ShieldCheck,
  Apple,
  GraduationCap,
  HeartPulse,
  Palette,
  Bus,
  Baby,
  Users,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    title: "Safe & Secure Environment",
    description:
      "24/7 CCTV monitoring, secure entry system, and child-friendly surroundings for complete peace of mind.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Healthy Meals",
    description:
      "Fresh and nutritious meals prepared daily to support every child's healthy growth.",
    icon: Apple,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Qualified Teachers",
    description:
      "Experienced early childhood educators providing engaging learning experiences.",
    icon: GraduationCap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Medical Support",
    description:
      "First aid support and emergency medical assistance available whenever needed.",
    icon: HeartPulse,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Creative Learning",
    description:
      "Interactive activities including art, storytelling, music, and educational games.",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Transportation",
    description:
      "Safe pick-up and drop-off services with trained and trusted staff members.",
    icon: Bus,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Child Friendly Care",
    description:
      "Warm, caring, and personalized attention that helps children feel safe and happy.",
    icon: Baby,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Parent Communication",
    description:
      "Regular updates, progress reports, and easy communication with teachers and caregivers.",
    icon: Users,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function AllFacilitiesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-100 py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="bg-rose-100 text-rose-600 px-5 py-2 rounded-full font-semibold">
            Our Facilities
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            Everything Your Child
            <span className="text-rose-500"> Needs To Grow</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            We provide a safe, nurturing, and engaging environment where every
            child can learn, play, and develop with confidence.
          </p>

          <div className="mt-10">
            <Link
              href="/child-care-centers"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Browse Child Care Centers
            </Link>
          </div>

        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-7xl mx-auto px-5 py-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Premium Child Care Facilities
          </h2>

          <p className="text-gray-500 mt-4">
            Everything we offer to ensure your child's comfort, safety, and
            development.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl duration-300 p-8 border"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${facility.color}`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {facility.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {facility.description}
                </p>
              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}