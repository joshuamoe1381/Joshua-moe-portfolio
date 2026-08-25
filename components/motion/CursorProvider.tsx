"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CursorLabel = string | null;

type CursorContextValue = {
  label: CursorLabel;
  setLabel: (label: CursorLabel) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [label, setLabelState] = useState<CursorLabel>(null);
  const setLabel = useCallback((next: CursorLabel) => {
    setLabelState(next);
  }, []);
  const value = useMemo(() => ({ label, setLabel }), [label, setLabel]);

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within CursorProvider");
  }
  return context;
}
