interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: "100K+",
    label: "Links Created",
  },
  {
    value: "1M+",
    label: "Total Clicks",
  },
  {
    value: "180+",
    label: "Countries",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#5b21f3] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/85 mt-1 sm:mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

