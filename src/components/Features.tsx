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
    <section
      id="features"
      className="py-20 px-6"
      style={{ background: "rgb(248, 249, 252)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content & Checklist */}
        <div>
          <p
            style={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgb(91, 33, 243)",
              marginBottom: "12px",
            }}
          >
            Premium
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "rgb(26, 26, 26)",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Unlock powerful tools for serious growth.
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgb(107, 114, 128)",
              lineHeight: 1.75,
              marginBottom: "28px",
            }}
          >
            Go beyond basic shortening with a full suite of marketing and
            developer tools — custom branded links, UTM builders, deep
            analytics, QR codes, and a REST API for your apps.
          </p>

          <div className="flex flex-col gap-3">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(91, 33, 243, 0.12)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5b21f3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "rgb(26, 26, 26)",
                    fontWeight: 500,
                  }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Link Analytics Dashboard Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgb(91, 33, 243)",
            boxShadow: "rgba(91, 33, 243, 0.25) 0px 8px 30px",
          }}
        >
          <div className="flex items-center gap-2 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column lucide-bar-chart-3"
              aria-hidden="true"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "rgb(255, 255, 255)",
              }}
            >
              Link Analytics Dashboard
            </span>
          </div>

          {analyticsData.map((item, idx) => (
            <div
              key={item.link}
              className={idx === analyticsData.length - 1 ? "" : "mb-5"}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {item.link}
                </span>
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {item.clicks}
                </span>
              </div>
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(255, 255, 255, 0.12)" }}
              >
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    background: "rgba(255, 255, 255, 0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
