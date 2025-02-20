"use client"; // Bu Client Component bo'lishi kerak

import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SWRProvider({ children }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
