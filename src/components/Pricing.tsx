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
      className="w-full bg-[#fcfbfe] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            PRICING
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            No hidden fees. Start free, scale when you&apos;re ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.name}
                className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 lg:p-9 transition-all duration-300 ${isPro
                    ? "bg-[#5b21f3] text-white shadow-2xl shadow-purple-600/30 md:-translate-y-2 relative"
                    : "bg-white text-gray-900 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-purple-200"
                  }`}
              >
                <div>
                  {/* Plan Name */}
                  <span
                    className={`text-xs font-bold tracking-wider uppercase ${isPro ? "text-purple-200" : "text-gray-400"
                      }`}
                  >
                    {plan.name}
                  </span>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline">
                    <span
                      className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isPro ? "text-white" : "text-gray-950"
                        }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`ml-1.5 text-xs sm:text-sm font-medium ${isPro ? "text-purple-200" : "text-gray-400"
                        }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Plan Description */}
                  <p
                    className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${isPro ? "text-purple-100" : "text-gray-500"
                      }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-6 sm:mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-xs sm:text-sm"
                      >
                        <span
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${isPro
                              ? "bg-white/20 text-white"
                              : "bg-[#f4effe] text-[#5b21f3]"
                            }`}
                        >
                          <svg
                            className="w-2.5 h-2.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span
                          className={isPro ? "text-white/95" : "text-gray-700"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href={plan.buttonHref}
                    className={`w-full py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-1 shadow-xs ${isPro
                        ? "bg-white text-[#5b21f3] hover:bg-gray-50 active:bg-gray-100 font-bold"
                        : "bg-[#5b21f3] hover:bg-[#4d1bd6] active:bg-[#4317be] text-white"
                      }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

