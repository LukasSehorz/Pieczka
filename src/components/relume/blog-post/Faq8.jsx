"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">
            Häufige Fragen zu Montage & Renovierung im südöstlichen Bayern
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontakt" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Wie lange dauert eine Montage oder Renovierung?
            </h2>
            <p>
              Die Dauer hängt vom Umfang des Projekts ab. Wir erstellen vorab
              einen klaren Zeitplan und halten ihn verbindlich ein. Bei
              Fensterbau, Türenmontage oder Bodenverlegung sind viele Projekte
              innerhalb weniger Tage abgeschlossen.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Was passiert, wenn sich die Kosten erhöhen?
            </h2>
            <p>
              Wir arbeiten mit klaren Festpreisangeboten. Änderungen auf
              Kundenwunsch werden vor Ausführung separat besprochen und
              schriftlich festgehalten. Keine versteckten Kosten, keine
              Nachüberraschungen.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              In welchen Regionen arbeiten Sie?
            </h2>
            <p>
              Wir sind im südöstlichen Bayern tätig – mit Schwerpunkt im Raum
              Marklkofen, Dingolfing, Landshut und Umgebung. Sprechen Sie uns
              an, wenn Sie unsicher sind, ob Ihr Standort dabei ist.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Kann ich abgeschlossene Projekte besichtigen?
            </h2>
            <p>
              Ja. Auf unserer Projektseite finden Sie Referenzen aus
              Fensterbau, Türenmontage, Metalltore und Bodenverlegung. Auf
              Wunsch nennen wir Ihnen auch persönliche Referenzen.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Was beinhaltet eine Erstberatung?
            </h2>
            <p>
              Wir hören zu, besichtigen bei Bedarf das Objekt, besprechen
              Budget und Zeitrahmen und erklären den Ablauf. Keine Verpflichtung,
              kein Verkaufsdruck – Sie verlassen das Gespräch mit einem klaren
              Überblick über die nächsten Schritte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
