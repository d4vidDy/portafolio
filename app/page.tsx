"use client";

import { useEffect, useRef } from "react";
import { background, swell } from "asciify-engine/kit";

export default function Portfolio() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const backdrop = background(container.current, { preset: swell });
    return () => backdrop.destroy();
  }, []);

  return <main ref={container} className="background" aria-hidden="true" />;
}
