"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleConsent(accepted: boolean) {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-light/10 bg-dark px-6 py-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center font-secondary text-sm text-light/80 sm:text-left">
          Tento web používá cookies pro zajištění nejlepšího zážitku.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => handleConsent(false)}
            className="cursor-pointer rounded-full border border-light/20 px-5 py-2 font-secondary text-sm font-bold text-light/60 transition-colors hover:border-light/40 hover:text-light"
          >
            Odmítnout
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="cursor-pointer rounded-full bg-accent px-5 py-2 font-secondary text-sm font-bold text-dark transition-opacity hover:opacity-80"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  );
}
