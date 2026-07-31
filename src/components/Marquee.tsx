import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/LanguageContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import baccio from "@/assets/marquee/baccio.svg";
import bullRider from "@/assets/marquee/bull-rider.svg";
import capacitea from "@/assets/marquee/capacitea.svg";
import centro208 from "@/assets/marquee/centro-208.svg";
import circusGlobal from "@/assets/marquee/circus-global.svg";
import dew from "@/assets/marquee/dew.svg";
import diceup from "@/assets/marquee/diceup.svg";
import femcolab from "@/assets/marquee/femcolab.svg";
import heytax from "@/assets/marquee/heytax.svg";
import iceHawk from "@/assets/marquee/ice-hawk.svg";
import mediderma from "@/assets/marquee/mediderma.svg";
import naturnavia from "@/assets/marquee/naturnavia.svg";
import nerdFitness from "@/assets/marquee/nerd-fitness.svg";
import northernStrike from "@/assets/marquee/northern-strike.svg";
import oshun from "@/assets/marquee/oshun.svg";
import promusic from "@/assets/marquee/promusic.svg";
import sesderma from "@/assets/marquee/sesderma.svg";
import squad from "@/assets/marquee/squad.svg";

// Altura base para que todos los logos queden visualmente equilibrados.
const BASE_HEIGHT = 48; // px
const SPEED = 50; // px/segundo

type LogoKey =
  | "baccio" | "bullRider" | "capacitea" | "centro208" | "circusGlobal"
  | "dew" | "diceup" | "femcolab" | "heytax" | "iceHawk" | "mediderma"
  | "naturnavia" | "nerdFitness" | "northernStrike" | "oshun" | "promusic"
  | "sesderma" | "squad";

const logos: { src: string; alt: string; key: LogoKey; scale?: number }[] = [
  { src: baccio, alt: "Baccio", key: "baccio", scale: 1.1 },
  { src: bullRider, alt: "Bull Rider", key: "bullRider", scale: 1.1 },
  { src: capacitea, alt: "Capacitea", key: "capacitea", scale: 0.95 },
  { src: centro208, alt: "Centro 208", key: "centro208", scale: 1.2 },
  { src: circusGlobal, alt: "Circus Global", key: "circusGlobal", scale: 1 },
  { src: dew, alt: "DEW", key: "dew", scale: 1 },
  { src: diceup, alt: "DiceUp", key: "diceup", scale: 1 },
  { src: femcolab, alt: "FemCoLab", key: "femcolab", scale: 0.95 },
  { src: heytax, alt: "HeyTax", key: "heytax", scale: 0.7 },
  { src: iceHawk, alt: "Ice Hawk", key: "iceHawk", scale: 1.2 },
  { src: mediderma, alt: "Medi+derma News", key: "mediderma", scale: 0.9 },
  { src: naturnavia, alt: "Naturnavia", key: "naturnavia", scale: 0.9 },
  { src: nerdFitness, alt: "Nerd Fitness", key: "nerdFitness", scale: 0.95 },
  { src: northernStrike, alt: "Northern Strike", key: "northernStrike", scale: 1.05 },
  { src: oshun, alt: "Oshun", key: "oshun", scale: 1.15 },
  { src: promusic, alt: "ProMusic", key: "promusic", scale: 0.95 },
  { src: sesderma, alt: "Sesderma", key: "sesderma", scale: 1.1 },
  { src: squad, alt: "Squad", key: "squad", scale: 0.95 },
];

export const Marquee = () => {
  const t = useT();
  const loop = [...logos, ...logos];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const movedRef = useRef(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  // Auto-scroll loop infinito
  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    let rafId = 0;
    let lastTime = performance.now();

    const halfWidth = () => track.scrollWidth / 2;

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!pausedRef.current && !draggingRef.current) {
        scroller.scrollLeft += SPEED * dt;
      }
      // Loop infinito en ambas direcciones
      const half = halfWidth();
      if (half > 0) {
        if (scroller.scrollLeft >= half) {
          scroller.scrollLeft -= half;
        } else if (scroller.scrollLeft < 0) {
          scroller.scrollLeft += half;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Drag con ratón / touch
  const onPointerDown = (e: React.PointerEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    draggingRef.current = true;
    movedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = scroller.scrollLeft;
    scroller.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const dx = e.clientX - dragStartXRef.current;
    if (Math.abs(dx) > 4) movedRef.current = true;
    scroller.scrollLeft = dragStartScrollRef.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const scroller = scrollerRef.current;
    if (scroller && scroller.hasPointerCapture(e.pointerId)) {
      scroller.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="bg-foreground text-background border-y-2 border-foreground">
      <h2 className="text-center font-mono uppercase tracking-widest text-sm sm:text-base py-4 text-background/80">
        {t.marquee.heading}
      </h2>
      <TooltipProvider delayDuration={150}>
        <div
          ref={scrollerRef}
          className="overflow-x-auto overflow-y-visible pb-6 scrollbar-none cursor-grab active:cursor-grabbing select-none touch-pan-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="flex items-center"
            style={{ width: "max-content" }}
          >
            {loop.map((logo, i) => {
              const scale = logo.scale ?? 1;
              return (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label={logo.alt}
                      onClick={(e) => {
                        if (movedRef.current) {
                          e.preventDefault();
                          e.stopPropagation();
                        }
                      }}
                      className="flex items-center justify-center px-10 shrink-0 bg-transparent border-0 outline-none"
                      style={{ height: `${BASE_HEIGHT * 1.3}px` }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        draggable={false}
                        style={{ height: `${BASE_HEIGHT * scale}px` }}
                        className="w-auto pointer-events-none select-none"
                        loading="lazy"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="max-w-xs text-center whitespace-normal bg-background text-foreground border-2 border-foreground z-[100]"
                  >
                    <p className="font-bold mb-1">{logo.alt}</p>
                    <p className="text-xs leading-snug">{t.marqueeDesc[logo.key]}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};
