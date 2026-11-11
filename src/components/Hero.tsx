import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="pt-28 pb-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, rgb(248, 249, 252) 0%, rgb(238, 240, 255) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Header Block */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{
              background: "rgba(91, 33, 243, 0.08)",
              border: "1px solid rgba(91, 33, 243, 0.2)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b21f3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up"
              aria-hidden="true"
            >
              <path d="M16 7h6v6" />
              <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "rgb(91, 33, 243)",
              }}
            >
              Trusted by thousands of users
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "20px",
              color: "rgb(10, 10, 20)",
            }}
          >
            Shorten Your URL
            <br />
            <span style={{ color: "rgb(91, 33, 243)" }}>in seconds</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgb(107, 114, 128)",
              lineHeight: 1.6,
              maxWidth: "520px",
              margin: "0px auto 36px",
            }}
          >
            Create short, memorable links that you can share anywhere. Track
            every click with powerful analytics.
          </p>
        </div>

        {/* Central Auth Prompt Card */}
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: "rgb(255, 255, 255)",
            boxShadow: "rgba(91, 33, 243, 0.1) 0px 4px 40px",
            border: "1px solid rgb(229, 231, 235)",
            maxWidth: "720px",
            margin: "0px auto",
          }}
        >
          {/* Lock Icon Circle */}
          <div
            className="inline-flex items-center justify-center rounded-full mb-5"
            style={{
              width: "64px",
              height: "64px",
              background: "rgba(91, 33, 243, 0.1)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5b21f3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock"
              aria-hidden="true"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <h3
            style={{
              fontWeight: 800,
              fontSize: "1.4rem",
              marginBottom: "10px",
              color: "rgb(26, 26, 26)",
            }}
          >
            Login to make your URL short
          </h3>

          <p
            style={{
              fontSize: "0.95rem",
              color: "rgb(107, 114, 128)",
              lineHeight: 1.6,
              maxWidth: "440px",
              margin: "0px auto 26px",
            }}
          >
            Sign in or create a free account to start shortening links,
            generating QR codes, and tracking every click in real time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:opacity-90 transition-opacity"
              style={{
                background: "rgb(91, 33, 243)",
                color: "rgb(255, 255, 255)",
                borderRadius: "10px",
                padding: "12px 28px",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow: "rgba(91, 33, 243, 0.3) 0px 4px 14px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Login to Make URL</span>
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-50 transition-colors"
              style={{
                border: "1.5px solid rgb(229, 231, 235)",
                borderRadius: "10px",
                padding: "12px 28px",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "rgb(26, 26, 26)",
                background: "rgb(255, 255, 255)",
              }}
            >
              <span>Sign Up Free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
