import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 min-h-[70vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-500 font-medium mb-5">
              Trusted Child Care Platform
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Find The Perfect
              <span className="block text-rose-500">
                Child Care Center
              </span>
              For Your Family
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Discover trusted daycare centers, preschools, babysitters,
              and child care providers near you. Safe, verified and loved by parents.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/centers">
                <Button
                  size="lg"
                  className="bg-rose-500 text-white font-semibold px-8"
                >
                  Explore Centers
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  size="lg"
                  variant="bordered"
                  className="border-rose-500 text-rose-500 px-8"
                >
                  Become a Provider
                </Button>
              </Link>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  250+
                </h3>
                <p className="text-gray-500">
                  Child Care Centers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  1,500+
                </h3>
                <p className="text-gray-500">
                  Happy Parents
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  4.9★
                </h3>
                <p className="text-gray-500">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 bg-rose-100 rounded-full blur-3xl opacity-60"></div>

            <Image
              src="/hero-banner.png"
              alt="Child Care"
              width={600}
              height={600}
              priority
              className="relative z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;