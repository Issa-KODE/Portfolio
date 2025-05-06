"use client";

import { FAQ } from "@/lib/constants";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

export default function Faq() {
  const [indexBtn, setIndexBtn] = useState<number | null>(null);

  function handleClick(index: number) {
    setIndexBtn((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <ul className="mt-10 grid grid-cols-1 gap-y-10">
      {FAQ.map((f, index) => (
        <li
          key={f.title}
          className={`rounded-xl border border-gray-300 px-4 py-5 shadow overflow-hidden h-12 transition-all duration-500 ${indexBtn === index ? "h-auto" : "h-20"}`}
        >
          <div className="mb-5 flex justify-between items-center">
            <h2 className="font-semibold">{f.title}</h2>
            <button
              className={`${indexBtn === index ? "rotate-180" : ""} p-1 rounded bg-slate-50 shadow border border-gray-200 cursor-pointer hover:bg-slate-100`}
              onClick={() => handleClick(index)}
            >
              <ArrowDown />
            </button>
          </div>

          <p>{f.description}</p>
        </li>
      ))}
    </ul>
  );
}
