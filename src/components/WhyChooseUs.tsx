import React from "react";

interface ReasonItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasons: ReasonItem[] = [
  {
    title: "Lightning Fast",
    description: "Shorten URLs instantly with our optimized infrastructure",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Detailed Analytics",
    description: "Track clicks, referrers, locations, and devices",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Global CDN",
    description: "Fast redirects from anywhere in the world",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "QR Codes",
    description: "Generate QR codes for any shortened link",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="6" height="6" x="3" y="3" rx="1" />
        <rect width="6" height="6" x="15" y="3" rx="1" />
        <rect width="6" height="6" x="3" y="15" rx="1" />
        <path d="M21 16h-3a2 2 0 0 0-2 2v4" />
        <path d="M21 21v.01" />
        <path d="M12 7v3a2 2 0 0 1-2 2H7" />
        <path d="M3 12h.01" />
        <path d="M12 3h.01" />
        <path d="M12 16v.01" />
        <path d="M16 12h1" />
        <path d="M21 12v.01" />
        <path d="M12 21v-1" />
      </svg>
    ),
  },
  {
    title: "Secure",
    description: "All links are encrypted and malware scanned",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Expiration Control",
    description: "Set expiry dates or click limits",
    icon: (
      <svg
        className="w-6 h-6 text-[#5b21f3]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "rgb(255, 255, 255)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "rgb(26, 26, 26)",
              lineHeight: 1.2,
              marginBottom: "8px",
            }}
          >
            Why Choose Our Platform?
          </h2>
          <p style={{ color: "rgb(107, 114, 128)", fontSize: "1rem" }}>
            Everything you need to manage and track your links
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
            >
              <div>{item.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
