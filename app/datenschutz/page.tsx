import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Datenschutzerklärung | NEXT LEVEL FAHRZEUGPFLEGE",
  description: "Datenschutzerklärung gemäß DSGVO von NEXT LEVEL FAHRZEUGPFLEGE.",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#E5C358] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </Link>

        <h1 className="text-3xl sm:text-5xl font-black tracking-normal text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-xs sm:text-sm text-[#D4AF37] uppercase tracking-wider font-semibold mb-8">
          Informationen nach Art. 13 DSGVO
        </p>

        <div className="space-y-6 text-base text-neutral-300 leading-relaxed bg-[#0a0a0a] p-8 sm:p-10 rounded-2xl border border-white/10">
          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-normal text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher 
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG).
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-normal text-white mb-2">2. Verantwortliche Stelle</h2>
            <p>
              NEXT LEVEL FAHRZEUGPFLEGE<br />
              Musterstraße 12, 12345 Musterstadt<br />
              E-Mail: info@nextlevel-fahrzeugpflege.de<br />
              Telefon: +49 176 123 45 67
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-normal text-white mb-2">3. Datenerfassung & Terminanfragen</h2>
            <p>
              Wenn Sie per Formular oder WhatsApp Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten 
              (Name, Telefonnummer, Fahrzeugmodell, Wunschleistung) zwecks Bearbeitung der Anfrage und für 
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold tracking-normal text-white mb-2">4. Ihre Rechte</h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, 
              Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer 
              Daten gegen das Datenschutzrecht verstößt, können Sie sich an die Aufsichtsbehörde wenden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
