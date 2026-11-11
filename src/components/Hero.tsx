import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f9f7ff] via-[#fbfaff] to-[#f5f1ff] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      {/* Soft Ambient Background Glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 -translate-x-1/2 w-137.5 h-112.5 bg-purple-200/40 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-1/4 translate-x-1/2 w-137.5 h-112.5 bg-violet-200/35 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-187.5 h-87.5 bg-purple-100/50 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4effe] border border-[#e5d9fd] text-[#5b21f3] text-xs sm:text-sm font-medium shadow-xs">
          <svg
            className="w-4 h-4 text-[#5b21f3]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
          <span>Trusted by thousands of users</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.12]">
          Shorten Your URL
          <span className="block text-[#5b21f3] mt-1 sm:mt-2">in seconds</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-center text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Create short, memorable links that you can share anywhere.
          <br className="hidden sm:inline" /> Track every click with powerful analytics.
        </p>

        {/* Central Auth Prompt Card */}
        <div className="mt-10 sm:mt-12 w-full max-w-180 mx-auto bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl shadow-purple-900/5 border border-purple-100/70 text-center transition-all">
          {/* Lock Icon Circle */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#f4effe] flex items-center justify-center text-[#5b21f3]">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
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
          </div>

          {/* Card Title */}
          <h2 className="mt-5 text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Login to make your URL short
          </h2>

          {/* Card Description */}
          <p className="mt-2.5 text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5b21f3] hover:bg-[#4d1bd6] active:bg-[#4317be] text-white text-sm font-semibold transition-all shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/30"
            >
              <svg
                className="w-4 h-4 text-white"
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
              <span>Login to Make URL</span>
            </Link>

            <Link
              href="/signup"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#5b21f3] text-[#5b21f3] hover:bg-[#f4effe] active:bg-purple-100 text-sm font-semibold transition-all"
            >
              <span>Sign Up Free</span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

