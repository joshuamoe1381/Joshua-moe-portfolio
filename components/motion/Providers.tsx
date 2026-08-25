"use client";

import { CursorProvider } from "@/components/motion/CursorProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CursorProvider>
      <SmoothScroll>
        {children}
        <CustomCursor />
      </SmoothScroll>
    </CursorProvider>
  );
}
