interface FeatureItem {
  text: string;
}

const features: FeatureItem[] = [
  { text: "Custom branded short links" },
  { text: "UTM parameter builder" },
  { text: "Powerful analytics dashboard" },
  { text: "QR Code generator (PNG/SVG)" },
  { text: "REST API with full documentation" },
];

interface AnalyticsRow {
  link: string;
  clicks: string;
  percentage: number;
}

const analyticsData: AnalyticsRow[] = [
  { link: "shorturl.bd/ig9Kp2", clicks: "1,247", percentage: 100 },
  { link: "shorturl.bd/yt3Nm8", clicks: "589", percentage: 48 },
  { link: "shorturl.bd/lk7Rv1", clicks: "312", percentage: 26 },
  { link: "shorturl.bd/fb2Wx9", clicks: "198", percentage: 17 },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content & Feature Checklist */}
          <div>
            <span className="text-xs font-bold tracking-wider text-[#5b21f3] uppercase mb-3 inline-block">
              PREMIUM
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Unlock powerful tools for serious growth.
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
              Go beyond basic shortening with a full suite of marketing and
              developer tools — custom branded links, UTM builders, deep
              analytics, QR codes, and a REST API for your apps.
            </p>

            {/* Checklist */}
            <ul className="mt-7 sm:mt-8 space-y-3.5">
              {features.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-3 text-sm sm:text-base font-medium text-gray-800"
                >
                  <span className="w-5 h-5 rounded-full bg-[#f4effe] text-[#5b21f3] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Link Analytics Dashboard Card */}
          <div className="w-full">
            <div className="w-full bg-[#5b21f3] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-purple-600/25 text-white">
              {/* Card Header with typing cursor */}
              <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-white mb-6 sm:mb-8">
                <span>Link Analytics Dashboard</span>
              </div>

              {/* Rows */}
              <div className="space-y-6 sm:space-y-7">
                {analyticsData.map((item) => (
                  <div key={item.link}>
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-tight">
                      <span className="text-purple-100 font-medium">
                        {item.link}
                      </span>
                      <span className="text-white font-bold">{item.clicks}</span>
                    </div>

                    {/* Proportional visual bar */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div
                        className="bg-white/30 h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
