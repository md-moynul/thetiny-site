"use client";

import { useState } from "react";
import QRModal from "./QRModal";

interface PopularLink {
  id: string;
  shortUrl: string;
  originalUrl: string;
  clicks: number;
}

const popularLinks: PopularLink[] = [
  {
    id: "1",
    shortUrl: "https://thetiny.site/ARLSeN",
    originalUrl:
      "https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...",
    clicks: 433,
  },
  {
    id: "2",
    shortUrl: "https://thetiny.site/BArxCj",
    originalUrl: "https://leena45945.softr.app",
    clicks: 276,
  },
  {
    id: "3",
    shortUrl: "https://thetiny.site/kLrnXd",
    originalUrl:
      "https://supportersframe.com/blog/supportersframecom-introduces-qr-code...",
    clicks: 91,
  },
  {
    id: "4",
    shortUrl: "https://thetiny.site/qQNTp0",
    originalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3aBIiGp4uunkBsQVLy_zLWcwkWhILOqEYa45tVdHsO38Xrg/viewform",
    clicks: 73,
  },
  {
    id: "5",
    shortUrl: "https://thetiny.site/wXcB7y",
    originalUrl: "https://maps.app.goo.gl/3ezKFEhd5CHg1TzG7",
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
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="w-full bg-[#fcfbfe] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Most Popular Links
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-500">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-3.5 sm:space-y-4">
          {popularLinks.map((link) => (
            <div
              key={link.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-purple-200 hover:shadow-md transition-all shadow-xs"
            >
              {/* Left Column: URLs */}
              <div className="min-w-0 flex-1">
                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold text-[#5b21f3] hover:underline block truncate"
                >
                  {link.shortUrl}
                </a>
                <p className="text-xs text-gray-400 truncate mt-1">
                  {link.originalUrl}
                </p>
              </div>

              {/* Right Column: Clicks & Action Buttons */}
              <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                {/* Click Count */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 9 5 12 1.8-5.2L21 14Z" />
                    <path d="M7.2 2.2 8 5.1" />
                    <path d="m5.1 8-2.9-.8" />
                    <path d="M14 4.1 12 6" />
                    <path d="m6 12-1.9 2" />
                  </svg>
                  <span>{link.clicks} clicks</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => handleCopy(link.id, link.shortUrl)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#5b21f3] hover:bg-[#4d1bd6] active:bg-[#4317be] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                    aria-label={`Copy link ${link.shortUrl}`}
                  >
                    {copiedId === link.id ? (
                      <>
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
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect
                            width="14"
                            height="14"
                            x="8"
                            y="8"
                            rx="2"
                            ry="2"
                          />
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-[#5b21f3] border border-purple-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    aria-label={`View QR code for ${link.shortUrl}`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
            </div>
          ))}
        </div>
      </div>

      {/* Reusable QR Code Modal Component */}
      <QRModal
        isOpen={Boolean(selectedQrLink)}
        onClose={() => setSelectedQrLink(null)}
        url={selectedQrLink?.shortUrl ?? ""}
      />
    </section>
  );
}
