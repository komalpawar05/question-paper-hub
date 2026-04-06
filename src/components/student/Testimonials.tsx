import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const data = [
    {
      name: "Priya S.",
      role: "Engineering Student",
      message:
        "QuestionHub helped me prepare effectively for my exams. The papers are authentic and the download process is super smooth!",
    },
    {
      name: "Rahul M.",
      role: "MBA Student",
      message:
        "Best platform for previous year papers! Saved me so much time and the prices are very reasonable.",
    },
    {
      name: "Anjali K.",
      role: "Medical Student",
      message:
        "Excellent collection of papers from various universities. The payment process is very secure.",
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
          What Students Say
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;