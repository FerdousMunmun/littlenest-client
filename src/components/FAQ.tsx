"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const faqs = [
  {
    id: "01",
    question: "How do I find a child care center?",
    answer:
      "Search child care centers by location, services, ratings, and availability. Compare different providers before making your decision.",
  },
  {
    id: "02",
    question: "Are all child care centers verified?",
    answer:
      "Yes. Every listed child care center goes through a verification process before appearing on LittleNest.",
  },
  {
    id: "03",
    question: "Can I read reviews from other parents?",
    answer:
      "Absolutely. Parents can leave ratings and reviews to help other families choose trusted child care providers.",
  },
  {
    id: "04",
    question: "Is LittleNest free for parents?",
    answer:
      "Yes. Searching, comparing, and viewing child care centers is completely free for all parents.",
  },
  {
    id: "05",
    question: "How can I register my child care center?",
    answer:
      "Create a provider account, complete your profile, submit your documents, and wait for approval from our admin team.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-rose-100 text-rose-500 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-5xl font-bold mt-6">
            Have Questions?
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Everything you need to know about LittleNest.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {faqs.map((faq) => (
            <SwiperSlide key={faq.id}>
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border hover:shadow-xl transition">

                <div className="w-14 h-14 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-xl mb-6">
                  {faq.id}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {faq.question}
                </h3>

                <p className="text-gray-600 leading-8">
                  {faq.answer}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}