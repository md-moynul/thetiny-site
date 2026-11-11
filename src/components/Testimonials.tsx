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
    <section className="w-full bg-[#f8f9fc] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            TESTIMONIALS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-xs hover:border-purple-200 hover:shadow-md transition-all"
            >
              <div>
                {/* 5 Purple Stars */}
                <div className="flex items-center gap-1 text-[#5b21f3]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-sm sm:text-base font-medium text-gray-900 leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

