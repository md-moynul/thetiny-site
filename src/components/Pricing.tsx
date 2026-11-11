import Link from "next/link";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "FREE",
    price: "$0",
    period: "/forever",
    description: "Great for individuals and casual use.",
    features: [
      "Unlimited link shortening",
      "Basic click counter",
      "HTTPS security",
      "QR code (basic)",
      "Cross-device support",
    ],
    buttonText: "Get Started Free →",
    buttonHref: "/signup",
    isPopular: false,
  },
  {
    name: "PRO",
    price: "$9",
    period: "/per month",
    description: "For creators, marketers, and power users.",
    features: [
      "Everything in Free",
      "Custom short links",
      "Advanced analytics",
      "UTM builder",
      "QR code (custom)",
      "Browser extension",
      "Priority support",
    ],
    buttonText: "Start 14-Day Trial →",
    buttonHref: "/signup?plan=pro",
    isPopular: true,
  },
  {
    name: "BUSINESS",
    price: "$29",
    period: "/per month",
    description: "For teams and growing companies.",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Developer API",
      "Bulk link creation",
      "White-label domain",
      "App integrations",
      "Dedicated support",
    ],
    buttonText: "Subscribe Now →",
    buttonHref: "/signup?plan=business",
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-6"
      style={{ background: "rgb(255, 255, 255)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
            PRICING
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
              color: "rgb(26, 26, 26)",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgb(107, 114, 128)" }}>
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.name}
                className={`flex flex-col justify-between rounded-2xl p-8 transition-all ${
                  isPro
                    ? "bg-[#5b21f3] text-white shadow-2xl shadow-purple-600/30 md:-translate-y-2 relative"
                    : "bg-white text-gray-900 border border-[#e5e7eb] hover:shadow-md transition-shadow"
                }`}
              >
                <div>
                  {/* Plan Name */}
                  <p
                    className={`text-xs font-bold tracking-wider mb-2 uppercase ${
                      isPro ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-4xl font-extrabold ${
                        isPro ? "text-white" : "text-[#0a0a14]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-xs ${
                        isPro ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 ${
                      isPro ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2.5 text-sm font-medium ${
                          isPro ? "text-white" : "text-gray-800"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isPro ? "bg-white/20" : "bg-[#5b21f3]/10"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={isPro ? "#ffffff" : "#5b21f3"}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <Link
                  href={plan.buttonHref}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 transition-all text-center ${
                    isPro
                      ? "bg-white text-[#5b21f3] hover:bg-white/95"
                      : "bg-[#5b21f3] text-white hover:opacity-90"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
