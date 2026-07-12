"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", centers: 35 },
  { month: "Feb", centers: 55 },
  { month: "Mar", centers: 80 },
  { month: "Apr", centers: 120 },
  { month: "May", centers: 165 },
  { month: "Jun", centers: 220 },
];

const stats = [
  {
    title: "Child Care Centers",
    value: "250+",
  },
  {
    title: "Happy Parents",
    value: "1,500+",
  },
  {
    title: "Verified Providers",
    value: "320+",
  },
  {
    title: "Average Rating",
    value: "4.9★",
  },
];

const Statistics = () => {
  return (
    <section className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="px-5 py-2 rounded-full bg-rose-100 text-rose-500 font-semibold">
            Our Statistics
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Trusted By Thousands
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            LittleNest helps thousands of parents discover trusted child care
            centers every month.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {stats.map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-sm p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-rose-500">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Chart */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-sm mt-16 p-8"
        >

          <h3 className="text-2xl font-bold text-center mb-8">
            Monthly Platform Growth
          </h3>

          <div className="h-[380px]">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={data}>

                <defs>

                  <linearGradient
                    id="growth"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#f43f5e"
                      stopOpacity={0.45}
                    />

                    <stop
                      offset="95%"
                      stopColor="#f43f5e"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                />

                <XAxis dataKey="month" />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="centers"
                  stroke="#f43f5e"
                  strokeWidth={4}
                  fill="url(#growth)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Statistics;