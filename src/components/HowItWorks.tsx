"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPinned,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Search",
    description:
      "Search child care centers by location, category, or your family's needs.",
    icon: Search,
  },
  {
    id: "02",
    title: "Compare",
    description:
      "Compare facilities, ratings, reviews, and available services before deciding.",
    icon: MapPinned,
  },
  {
    id: "03",
    title: "Connect",
    description:
      "Contact providers directly and ask questions to find the best fit for your child.",
    icon: HeartHandshake,
  },
  {
    id: "04",
    title: "Enroll",
    description:
      "Choose your preferred center and begin your child's learning journey with confidence.",
    icon: BadgeCheck,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="bg-rose-100 text-rose-500 px-5 py-2 rounded-full font-semibold">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
            Finding Trusted Child Care
            <span className="block text-rose-500">
              Has Never Been Easier
            </span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            Just follow four simple steps to discover trusted child care
            centers that match your family's needs.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="relative bg-rose-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                {/* Step Number */}

                <div className="absolute right-5 top-5 text-5xl font-black text-rose-100">
                  {step.id}
                </div>

                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;