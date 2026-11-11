interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "100K+", label: "Links Created" },
  { value: "1M+", label: "Total Clicks" },
  { value: "180+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="py-12 px-6" style={{ background: "rgb(91, 33, 243)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p
              style={{
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                color: "rgb(255, 255, 255)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.75)",
                marginTop: "6px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
