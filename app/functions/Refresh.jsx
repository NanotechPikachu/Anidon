"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Refresh() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setInterval(() => { router.refresh(); console.log("+") }, 60 * 1000);
    return () => clearInterval(timeout);
  }, []);
  return null;
}