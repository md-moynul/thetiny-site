"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export default function QRModal({
  isOpen,
  onClose,
  url,
  title = "QR Code",
}: QRModalProps) {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !url) return null;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    url
  )}`;

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const downloadUrl = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(
        url
      )}`;
      const res = await fetch(downloadUrl);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      const slug = url.split("/").filter(Boolean).pop() || "link";
      a.download = `qr-${slug}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback
      window.open(qrImageUrl, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <h3
          id="qr-modal-title"
          className="text-xl font-bold text-gray-900 tracking-tight"
        >
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Scan with your phone to open this link
        </p>

        {/* QR Code Container */}
        <div className="mt-5 p-4 bg-[#faf8ff] border border-purple-100 rounded-2xl inline-flex items-center justify-center shadow-inner">
          <Image
            src={qrImageUrl}
            alt={`QR code for ${url}`}
            width={200}
            height={200}
            unoptimized
            className="w-48 h-48 rounded-lg"
          />
        </div>

        {/* Short Link Display Pill */}
        <div className="mt-4 flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-200/80 rounded-xl">
          <span className="text-xs font-semibold text-[#5b21f3] truncate mr-2">
            {url}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs font-semibold text-gray-600 hover:text-[#5b21f3] shrink-0 cursor-pointer transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl bg-[#5b21f3] hover:bg-[#4d1bd6] active:bg-[#4317be] text-white shadow-xs transition-colors cursor-pointer disabled:opacity-50"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{isDownloading ? "Saving..." : "Download"}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

