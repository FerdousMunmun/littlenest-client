import {
  ShieldCheck,
  MapPin,
  Star,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Child Care Centers",
    description:
      "Every listed center is carefully verified to ensure a safe and trusted environment for your child.",
  },
  {
    icon: MapPin,
    title: "Find Nearby Centers",
    description:
      "Search and discover quality child care centers near your location in just a few clicks.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description:
      "Read genuine parent reviews and ratings before choosing the perfect child care center.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Parents",
    description:
      "Thousands of families trust LittleNest to find caring, reliable, and professional providers.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-500 font-semibold">
            Why Choose LittleNest
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Safe Child Care Starts Here
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            LittleNest helps parents discover trusted child care providers
            with verified information, honest reviews, and an easy search
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;