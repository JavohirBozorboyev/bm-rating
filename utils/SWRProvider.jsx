"use client"; // Bu Client Component bo'lishi kerak

import { SWRConfig } from "swr";
import axios from "axios";

axios.defaults.baseURL = "https://schools-crm-node-1.onrender.com";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function SWRProvider({ children }) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
