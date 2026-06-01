"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useTabAnimation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isTabActive = (index) => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return index <= activeIndex;
  };

  const progressWidth = () => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return `${(100 / (tabs.length * 2)) * (activeIndex * 2 + 1)}%`;
  };

  const circleClassName = (index) => {
    return `z-20 flex size-[0.9375rem] flex-none items-center justify-center rounded-full shadow-[0_0_0_8px_white] transition-colors duration-300 ${
      isTabActive(index) ? "bg-neutral-black" : "bg-neutral-light"
    }`;
  };

  const triggerClassName = (index) => {
    return `relative flex flex-1 flex-col items-center justify-center gap-2 border-0 px-0 transition-colors duration-300 data-[state=active]:bg-transparent ${
      isTabActive(index)
        ? "data-[state=active]:text-text-primary"
        : "text-neutral-light"
    }`;
  };

  return {
    activeTab,
    setActiveTab,
    progressWidth,
    circleClassName,
    triggerClassName,
  };
};

export function Timeline15() {
  const tabAnimation = useTabAnimation({
    tabs: [
      {
        value: "tab-one",
        trigger: "Schritt 1",
        content: {
          date: "Schritt 1",
          heading: "Erstgespräch & Beratung",
          description:
            "Wir kommen zu Ihnen vor Ort und besprechen kostenlos Ihren Bedarf. Ob Fenster, Türen, Tore oder Böden – wir hören zu und geben eine erste Einschätzung.",
          buttons: [
            { title: "Kontakt aufnehmen", variant: "secondary" },
            {
              title: "Mehr erfahren",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "/images/prozess/step1.png",
            alt: "Erstgespräch & Beratung",
          },
        },
      },
      {
        value: "tab-two",
        trigger: "Schritt 2",
        content: {
          date: "Schritt 2",
          heading: "Aufmaß & Angebot",
          description:
            "Wir nehmen exaktes Aufmaß, wählen gemeinsam Materialien aus und erstellen ein verbindliches Festpreisangebot – transparent und ohne versteckte Kosten.",
          buttons: [
            { title: "Angebot anfragen", variant: "secondary" },
            {
              title: "Mehr erfahren",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "/images/prozess/step2.png",
            alt: "Aufmaß & Angebot",
          },
        },
      },
      {
        value: "tab-three",
        trigger: "Schritt 3",
        content: {
          date: "Schritt 3",
          heading: "Vorbereitung & Planung",
          description:
            "Material wird bestellt, Lieferungen koordiniert und die Baustelle vorbereitet. Wir stimmen alle Termine eng mit Ihnen ab.",
          buttons: [
            { title: "Kontakt aufnehmen", variant: "secondary" },
            {
              title: "Mehr erfahren",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "/images/prozess/step3.png",
            alt: "Vorbereitung & Planung",
          },
        },
      },
      {
        value: "tab-four",
        trigger: "Schritt 4",
        content: {
          date: "Schritt 4",
          heading: "Montage & Ausführung",
          description:
            "Unsere Profis führen die Montagearbeiten sauber und pünktlich aus. Fenster, Türen, Tore und Böden werden fachgerecht eingebaut und laufend kontrolliert.",
          buttons: [
            { title: "Projekte ansehen", variant: "secondary" },
            {
              title: "Mehr erfahren",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "/images/prozess/step4.png",
            alt: "Montage & Ausführung",
          },
        },
      },
      {
        value: "tab-five",
        trigger: "Schritt 5",
        content: {
          date: "Schritt 5",
          heading: "Abnahme & Übergabe",
          description:
            "Gemeinsam nehmen wir die fertige Arbeit ab. Eventuelle Mängel werden garantiert beseitigt. Sie erhalten eine saubere Übergabe und vollständige Dokumentation.",
          buttons: [
            { title: "Jetzt anfragen", variant: "secondary" },
            {
              title: "Mehr erfahren",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "/images/prozess/step5.png",
            alt: "Abnahme & Übergabe",
          },
        },
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div
          className="absolute bottom-[99px] z-10 h-[3px] bg-neutral-black transition-[width] duration-300 md:bottom-[3.5625rem]"
          style={{ width: tabAnimation.progressWidth() }}
        />
        <Tabs
          defaultValue="tab-one"
          onValueChange={tabAnimation.setActiveTab}
          className="relative flex flex-col"
        >
          <TabsContent
            value="tab-one"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Schritt 1
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Erstgespräch & Beratung
              </h4>
              <p className="md:text-md">
                Wir kommen zu Ihnen vor Ort und besprechen kostenlos Ihren Bedarf.
                Ob Fenster, Türen, Tore oder Böden – wir hören zu und geben eine erste Einschätzung.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Kontakt aufnehmen" variant="secondary">
                  Kontakt aufnehmen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/prozess/step1.png"
                alt="Erstgespräch & Beratung"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Schritt 2
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Aufmaß & Angebot
              </h4>
              <p className="md:text-md">
                Wir nehmen exaktes Aufmaß, wählen gemeinsam Materialien aus und erstellen
                ein verbindliches Festpreisangebot – transparent und ohne versteckte Kosten.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Angebot anfragen" variant="secondary">
                  Angebot anfragen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/prozess/step2.png"
                alt="Aufmaß & Angebot"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Schritt 3
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Vorbereitung & Planung
              </h4>
              <p className="md:text-md">
                Material wird bestellt, Lieferungen koordiniert und die Baustelle vorbereitet.
                Wir stimmen alle Termine eng mit Ihnen ab.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Kontakt aufnehmen" variant="secondary">
                  Kontakt aufnehmen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/prozess/step3.png"
                alt="Vorbereitung & Planung"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Schritt 4
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Montage & Ausführung
              </h4>
              <p className="md:text-md">
                Unsere Profis führen die Montagearbeiten sauber und pünktlich aus.
                Fenster, Türen, Tore und Böden werden fachgerecht eingebaut und laufend kontrolliert.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Projekte ansehen" variant="secondary">
                  Projekte ansehen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/prozess/step4.png"
                alt="Montage & Ausführung"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-five"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Schritt 5
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Abnahme & Übergabe
              </h4>
              <p className="md:text-md">
                Gemeinsam nehmen wir die fertige Arbeit ab. Eventuelle Mängel werden garantiert
                beseitigt. Sie erhalten eine saubere Übergabe und vollständige Dokumentation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Jetzt anfragen" variant="secondary">
                  Jetzt anfragen
                </Button>
                <Button
                  title="Mehr erfahren"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/prozess/step5.png"
                alt="Abnahme & Übergabe"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsList className="no-scrollbar relative mb-12 ml-[-5vw] mt-16 flex w-screen items-center justify-start border-b border-b-transparent px-[5vw] md:mb-0 md:ml-0 md:w-auto md:justify-between md:px-0">
            <TabsTrigger
              value="tab-one"
              className={tabAnimation.triggerClassName(0)}
            >
              <div className="absolute left-0 top-3.5 z-20 h-[6px] w-16 bg-gradient-to-l from-transparent to-background-primary" />
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(0)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">01</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className={tabAnimation.triggerClassName(1)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(1)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">02</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className={tabAnimation.triggerClassName(2)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(2)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">03</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-four"
              className={tabAnimation.triggerClassName(3)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(3)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">04</span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-five"
              className={tabAnimation.triggerClassName(4)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(4)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">05</span>
              <div className="absolute right-0 top-3.5 z-0 h-2 w-16 bg-gradient-to-r from-transparent to-background-primary" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
