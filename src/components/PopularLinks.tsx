"use client";

import { useState } from "react";
import QRModal from "./QRModal";

interface PopularLink {
  id: string;
  shortUrl: string;
  originalUrl: string;
  displayUrl: string;
  clicks: number;
}

const popularLinks: PopularLink[] = [
  {
    id: "1",
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+partner+of+bangla+puzzle",
    displayUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
    clicks: 433,
  },
  {
    id: "2",
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    displayUrl: "https://leena45945.softr.app",
    clicks: 276,
  },
  {
    id: "3",
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code-campaign-feature-for-bangladesh",
    displayUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: 91,
  },
  {
    id: "4",
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBIiGp4uunkBsQVLy_zLWcwkWhILOqEYa45tVdHsO38Xrg/viewform",
    displayUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBIiGp4uunkBsQVLy_zLWcwkWh...",
    clicks: 73,
  },
  {
    id: "5",
    shortUrl: "https://thetiny.site/wXcB7y",
    originalUrl: "https://maps.app.goo.gl/3ezKFEhd5CHg1TzG7",
    displayUrl: "https://maps.app.goo.gl/3ezKFEhd5CHg1TzG7",
    clicks: 41,
  },
];

export default function PopularLinks() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedQrLink, setSelectedQrLink] = useState<PopularLink | null>(null);

  const handleCopy = async (id: string, url: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <>
      <section className="py-16 px-6" style={{ background: "rgb(255, 255, 255)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                marginBottom: "12px",
                color: "rgb(10, 10, 20)",
              }}
            >
              Most Popular Links
            </h2>
            <p style={{ color: "rgb(107, 114, 128)" }}>
              Check out the most clicked links on our platform
            </p>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-4">
            {popularLinks.map((link) => (
              <div
                key={link.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl hover:shadow-md transition-shadow"
                style={{
                  background: "rgb(249, 250, 251)",
                  border: "1px solid rgb(229, 231, 235)",
                }}
              >
                {/* Left Column: URLs */}
                <div className="flex-1 min-w-0">
                  <a
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm inline-block hover:underline"
                    style={{
                      color: "rgb(91, 33, 243)",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {link.shortUrl}
                  </a>
                  <div className="mt-1 group relative">
                    <p
                      className="text-xs text-gray-400 truncate"
                      title={link.originalUrl}
                    >
                      {link.displayUrl}
                    </p>
                    {link.originalUrl.length > 50 && (
                      <div className="hidden sm:block invisible group-hover:visible absolute left-0 top-full mt-1 z-10 p-2 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-normal max-w-md">
                        {link.originalUrl}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Clicks pill + Copy + QR */}
                <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                  {/* Clicks Counter Pill */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mouse-pointer-click"
                      aria-hidden="true"
                    >
                      <path d="M14 4.1 12 6" />
                      <path d="m5.1 8-2.9-.8" />
                      <path d="m6 12-1.9 2" />
                      <path d="M7.2 2.2 8 5.1" />
                      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">
                      {link.clicks} clicks
                    </span>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => handleCopy(link.id, link.shortUrl)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 cursor-pointer"
                    style={{
                      background: "rgb(91, 33, 243)",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    {copiedId === link.id ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-copy"
                          aria-hidden="true"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* QR Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedQrLink(link)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 cursor-pointer"
                    title="Generate QR Code"
                    style={{
                      background: "rgb(229, 231, 235)",
                      color: "rgb(91, 33, 243)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-qr-code"
                      aria-hidden="true"
                    >
                      <rect width="5" height="5" x="3" y="3" rx="1" />
                      <rect width="5" height="5" x="16" y="3" rx="1" />
                      <rect width="5" height="5" x="3" y="16" rx="1" />
                      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                      <path d="M21 21v.01" />
                      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                      <path d="M3 12h.01" />
                      <path d="M12 3h.01" />
                      <path d="M12 16v.01" />
                      <path d="M16 12h1" />
                      <path d="M21 12v.01" />
                      <path d="M12 21v-1" />
                    </svg>
                    <span>QR</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Modal (Independent extracted component) */}
      {selectedQrLink && (
        <QRModal
          isOpen={!!selectedQrLink}
          onClose={() => setSelectedQrLink(null)}
          url={selectedQrLink.shortUrl}
          title={selectedQrLink.shortUrl}
        />
      )}
    </>
  );
}
