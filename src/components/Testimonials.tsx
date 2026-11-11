interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    quote: '"A good platform for Link management."',
    name: "Nadim Majid",
    role: "User",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6"
      style={{ background: "rgb(248, 249, 252)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgb(156, 163, 175)",
              marginBottom: "8px",
            }}
          >
            TESTIMONIALS
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "rgb(26, 26, 26)",
              lineHeight: 1.2,
            }}
          >
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonials List */}
        <div className="flex justify-start">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-xs sm:max-w-sm bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* 5 Purple Stars */}
              <div className="flex items-center gap-1 text-[#5b21f3]">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-3 mb-4 text-sm font-semibold text-gray-900 leading-relaxed">
                {item.quote}
              </p>

              {/* Author */}
              <div>
                <p className="text-sm font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
