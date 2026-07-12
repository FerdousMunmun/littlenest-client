"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Mother of Two",
    image: "/images/testimonials/parent1.jpg",
    review:
      "LittleNest made finding a trusted daycare so easy. We found the perfect center within a day.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Working Parent",
    image: "/images/testimonials/parent2.jpg",
    review:
      "The reviews helped us choose confidently. Our daughter loves her new preschool.",
  },
  {
    id: 3,
    name: "Ayesha Rahman",
    role: "Parent",
    image: "/images/testimonials/parent3.jpg",
    review:
      "Excellent platform. Safe, verified and very easy to use. Highly recommended for every family.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-500 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            What Parents Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thousands of parents trust LittleNest to find safe and reliable
            child care providers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-rose-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill="#f43f5e"
                    color="#f43f5e"
                  />
                ))}

              </div>

              <p className="text-gray-600 leading-8 mt-6">
                "{item.review}"
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;