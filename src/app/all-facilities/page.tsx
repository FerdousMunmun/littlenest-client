// import {
//   ShieldCheck,
//   Apple,
//   GraduationCap,
//   HeartPulse,
//   Palette,
//   Bus,
//   Baby,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// const facilities = [
//   {
//     title: "Safe & Secure Environment",
//     description:
//       "24/7 CCTV monitoring, secure entry system, and child-friendly surroundings for complete peace of mind.",
//     icon: ShieldCheck,
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     title: "Healthy Meals",
//     description:
//       "Fresh and nutritious meals prepared daily to support every child's healthy growth.",
//     icon: Apple,
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     title: "Qualified Teachers",
//     description:
//       "Experienced early childhood educators providing engaging learning experiences.",
//     icon: GraduationCap,
//     color: "bg-yellow-100 text-yellow-600",
//   },
//   {
//     title: "Medical Support",
//     description:
//       "First aid support and emergency medical assistance available whenever needed.",
//     icon: HeartPulse,
//     color: "bg-red-100 text-red-600",
//   },
//   {
//     title: "Creative Learning",
//     description:
//       "Interactive activities including art, storytelling, music, and educational games.",
//     icon: Palette,
//     color: "bg-purple-100 text-purple-600",
//   },
//   {
//     title: "Transportation",
//     description:
//       "Safe pick-up and drop-off services with trained and trusted staff members.",
//     icon: Bus,
//     color: "bg-orange-100 text-orange-600",
//   },
//   {
//     title: "Child Friendly Care",
//     description:
//       "Warm, caring, and personalized attention that helps children feel safe and happy.",
//     icon: Baby,
//     color: "bg-pink-100 text-pink-600",
//   },
//   {
//     title: "Parent Communication",
//     description:
//       "Regular updates, progress reports, and easy communication with teachers and caregivers.",
//     icon: Users,
//     color: "bg-cyan-100 text-cyan-600",
//   },
// ];

// export default function AllFacilitiesPage() {
//   return (
//     <main>

//       {/* Hero */}
//       <section className="bg-gradient-to-r from-rose-50 to-pink-100 py-24">
//         <div className="max-w-7xl mx-auto px-5 text-center">

//           <span className="bg-rose-100 text-rose-600 px-5 py-2 rounded-full font-semibold">
//             Our Facilities
//           </span>

//           <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
//             Everything Your Child
//             <span className="text-rose-500"> Needs To Grow</span>
//           </h1>

//           <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
//             We provide a safe, nurturing, and engaging environment where every
//             child can learn, play, and develop with confidence.
//           </p>

//           <div className="mt-10">
//             <Link
//               href="/child-care-centers"
//               className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold transition"
//             >
//               Browse Child Care Centers
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* Facilities */}
//       <section className="max-w-7xl mx-auto px-5 py-24">

//         <div className="text-center mb-16">

//           <h2 className="text-4xl font-bold">
//             Premium Child Care Facilities
//           </h2>

//           <p className="text-gray-500 mt-4">
//             Everything we offer to ensure your child's comfort, safety, and
//             development.
//           </p>

//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {facilities.map((facility, index) => {
//             const Icon = facility.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl shadow-md hover:shadow-xl duration-300 p-8 border"
//               >
//                 <div
//                   className={`w-16 h-16 rounded-2xl flex items-center justify-center ${facility.color}`}
//                 >
//                   <Icon size={32} />
//                 </div>

//                 <h3 className="text-xl font-bold mt-6">
//                   {facility.title}
//                 </h3>

//                 <p className="text-gray-500 mt-4 leading-7">
//                   {facility.description}
//                 </p>
//               </div>
//             );
//           })}

//         </div>

//       </section>

//     </main>
//   );
// }









"use client";

import {
    UtensilsCrossed,
    BookOpenText,
    Stethoscope,
    GraduationCap,
    ShieldCheck,
    Gamepad2,
    Bus,
    Camera,
} from "lucide-react";

const facilities = [
    {
        icon: UtensilsCrossed,
        title: "Nutritious Meals",
        description:
            "Freshly prepared, balanced meals and snacks every day, planned by nutrition experts to keep children healthy and energetic.",
        color: "from-pink-500 to-rose-400",
    },
    {
        icon: BookOpenText,
        title: "Smart Classrooms",
        description:
            "Bright, well-equipped classrooms designed for age-appropriate learning, creativity, and hands-on activities.",
        color: "from-orange-500 to-amber-400",
    },
    {
        icon: Stethoscope,
        title: "Medical Care",
        description:
            "On-site first aid and regular health checkups from qualified medical staff to ensure every child's safety and wellbeing.",
        color: "from-rose-500 to-pink-400",
    },
    {
        icon: GraduationCap,
        title: "Qualified Teachers",
        description:
            "Experienced, caring, and certified teachers dedicated to guiding each child's growth with patience and expertise.",
        color: "from-purple-500 to-pink-400",
    },
    {
        icon: ShieldCheck,
        title: "24/7 Security",
        description:
            "CCTV monitoring, secure entry systems, and trained staff to keep the environment completely safe at all times.",
        color: "from-emerald-500 to-teal-400",
    },
    {
        icon: Gamepad2,
        title: "Play & Recreation",
        description:
            "Dedicated indoor and outdoor play areas that encourage physical activity, teamwork, and joyful learning.",
        color: "from-sky-500 to-blue-400",
    },
    {
        icon: Bus,
        title: "Safe Transportation",
        description:
            "Reliable pickup and drop-off service with trained drivers and GPS tracking for complete peace of mind.",
        color: "from-yellow-500 to-orange-400",
    },
    {
        icon: Camera,
        title: "Live Monitoring",
        description:
            "Parents can stay connected through live camera access, watching their little ones anytime during the day.",
        color: "from-fuchsia-500 to-purple-400",
    },
];

export default function AllFacilitiesPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-14 px-5">
            <div className="max-w-6xl mx-auto">

                {/* Hero */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-100 via-rose-100 to-orange-100 px-6 py-16 text-center mb-16">
                    <span className="inline-block bg-white text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-sm">
                        Our Facilities
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Everything Your Child{" "}
                        <span className="text-pink-500">Needs To Grow</span>
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        We provide a safe, nurturing, and engaging environment
                        where every child can learn, play, and develop with
                        confidence.
                    </p>
                </div>

                {/* Section title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">
                        Premium Child Care Facilities
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Everything we offer to ensure your child&apos;s
                        comfort, safety, and development.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
                            >
                                <div
                                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-5 shadow-md`}
                                >
                                    <Icon className="text-white" size={28} />
                                </div>

                                <h3 className="text-lg font-bold mb-2">
                                    {facility.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-white rounded-3xl shadow-lg p-10">
                    <h3 className="text-2xl font-bold mb-3">
                        Ready to give your child the best start?
                    </h3>
                    <p className="text-gray-500 mb-6">
                        Explore our verified child care centers and find the
                        perfect fit for your family.
                    </p>
                    
                         <a href="/child-care-centers"
                        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  
                       > Browse Child Care Centers
                    </a>
                </div>

            </div>
        </div>
    );
}