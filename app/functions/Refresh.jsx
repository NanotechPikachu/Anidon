"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Refresh() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => { router.refresh(); console.log("+")}, 60);
    return () => clearTimeout(timeout);
  }, []);
  return null;
}