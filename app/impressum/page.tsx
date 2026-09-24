import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Impressum | NEXT LEVEL FAHRZEUGPFLEGE",
  description: "Rechtliche Angaben und Impressum gemäß § 5 TMG von NEXT LEVEL FAHRZEUGPFLEGE.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-syne text-white mb-2">Impressum</h1>
        <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-8">
          Angaben gemäß § 5 TMG
        </p>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed bg-neutral-950 p-8 rounded-2xl border border-white/10">
          <div>
            <h2 className="text-base font-bold text-white mb-2">Betreiber der Website</h2>
            <p>
              NEXT LEVEL FAHRZEUGPFLEGE<br />
              Inhaber: Max Mustermann<br />
              Musterstraße 12<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2">Kontakt</h2>
            <p>
              Telefon: +49 176 123 45 67<br />
              E-Mail: info@nextlevel-fahrzeugpflege.de<br />
              Instagram: @nextlevel_fahrzeugpflege
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789 (Muster)
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-white mb-2">Haftung für Inhalte und Links</h2>
            <p className="text-xs text-neutral-400">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, 
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
