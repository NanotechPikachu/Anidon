"use client";

import { useEffect } from 'react';
import { refresh } from './refresh-action.js';

export function Refresh() {
  useEffect(() => {
    const interval = setInterval(() => { refresh(); console.log("+") }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return null;
}