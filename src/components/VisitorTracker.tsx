"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    fetch("/api/notify", {
      method: "POST",
    });
  }, []);

  return null;
}