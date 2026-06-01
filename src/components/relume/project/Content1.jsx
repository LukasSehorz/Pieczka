"use client";

import React from "react";

export function Content1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Sauber ausgeführt – von Anfang bis Ende
            </h2>
            <div className="prose">
              <div>
                <p>
                  Montage & Renovierungen Pieczka steht für handwerkliche
                  Qualität in Fensterbau, Türenmontage, Metalltore und
                  Bodenbeläge. Jedes Projekt wird sorgfältig geplant und
                  termintreu umgesetzt – im südöstlichen Bayern.
                </p>
                <p>
                  Von der ersten Beratung bis zur Übergabe begleitet Adrian
                  Pieczka seine Kunden persönlich. Klare Kommunikation,
                  transparente Preise und Arbeit ohne Kompromisse bei der
                  Qualität sind der Maßstab für jedes Projekt.
                </p>
                <p>
                  Ob Neubau, Sanierung oder Einzelmaßnahme: Pieczka liefert
                  zuverlässige Montage- und Renovierungsleistungen aus einer
                  Hand – pünktlich, sauber und mit echtem Handwerks­stolz.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/munich-residential.jpg"
                className="w-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
