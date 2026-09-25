"use client";

import React, { useState } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";

interface StickyWhatsAppProps {
  onOpenBookingModal?: () => void;
}

export default function StickyWhatsApp({ onOpenBookingModal }: StickyWhatsAppProps) {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const defaultMsg = encodeURIComponent(
    "Hallo NEXT LEVEL FAHRZEUGPFLEGE, ich möchte einen unverbindlichen Aufbereitungstermin für mein Fahrzeug anfragen."
  );

  return (
    <aside aria-label="WhatsApp Buchung" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip Badge */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-neutral-950/90 border border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(0,0,0,0.8)] backdrop-blur-md animate-in fade-in slide-in-from-right duration-300">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[11px] tracking-wide text-neutral-200 font-medium">
            Express-Termin per WhatsApp
          </span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-neutral-500 hover:text-white ml-1"
            title="Schließen"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/491761234567?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#0F0F0F] to-[#1F1F1F] border-2 border-[#D4AF37] text-white shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="WhatsApp Direktkontakt: +49 176 123 45 67"
      >
        {/* Pulsating Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/20 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-200 fill-[#D4AF37]/10" />

        {/* Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#050505]" />
      </a>
    </aside>
  );
}
