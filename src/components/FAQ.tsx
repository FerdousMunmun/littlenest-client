"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ = () => {
  return (
    <section className="py-24 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-500 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Got Questions?
          </h2>

          <p className="text-gray-600 mt-5">
            Find answers to the most common questions about LittleNest.
          </p>
        </motion.div>

        {/* FAQ */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm p-6"
        >
          <Accordion variant="splitted">

            <AccordionItem
              key="1"
              aria-label="1"
              title="How do I find a child care center?"
            >
              Use our search feature to browse verified child care centers by
              location, services, and ratings.
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="2"
              title="Are all child care centers verified?"
            >
              Yes. Every listed center is reviewed before being published to
              ensure accurate and trustworthy information.
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="3"
              title="Can I read parent reviews?"
            >
              Absolutely. Parents can leave ratings and reviews after their
              experience to help other families make informed decisions.
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label="4"
              title="Is LittleNest free to use?"
            >
              Yes. Parents can search, compare, and explore child care centers
              completely free of charge.
            </AccordionItem>

            <AccordionItem
              key="5"
              aria-label="5"
              title="How can I register my child care center?"
            >
              Create a provider account, complete your profile, and submit your
              center for verification. Once approved, it will appear on the
              platform.
            </AccordionItem>

          </Accordion>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;