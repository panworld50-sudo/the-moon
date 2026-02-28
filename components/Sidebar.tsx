"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 p-4 overflow-y-auto text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">The Moon 🌕</h2>
      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="home" className="border-none">
          <AccordionTrigger className="hover:bg-gray-800">🏠 Home</AccordionTrigger>
          <AccordionContent className="pl-4"><Link href="/">Go Home</Link></AccordionContent>
        </AccordionItem>
        <AccordionItem value="news">
          <AccordionTrigger className="hover:bg-gray-800">📰 News</AccordionTrigger>
          <AccordionContent className="pl-4 space-y-1">
            <Link href="/news/national" className="block hover:text-yellow-400">National</Link>
            <Link href="/news/international" className="block hover:text-yellow-400">International</Link>
            <Link href="/news/bihar" className="block hover:text-yellow-400">Bihar</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="live">
          <AccordionTrigger className="hover:bg-gray-800">🔴 Live</AccordionTrigger>
          <AccordionContent className="pl-4"><Link href="/live">Live Ticker</Link></AccordionContent>
        </AccordionItem>
        <AccordionItem value="study">
          <AccordionTrigger className="hover:bg-gray-800">📚 Study</AccordionTrigger>
          <AccordionContent className="pl-4 space-y-1">
            <Link href="/study/10th" className="block hover:text-yellow-400">10th</Link>
            <Link href="/study/12th" className="block hover:text-yellow-400">12th</Link>
            <Link href="/study/govt-jobs" className="block hover:text-yellow-400">Govt Jobs (All India)</Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="commercial">
          <AccordionTrigger className="hover:bg-gray-800">💼 Commercial</AccordionTrigger>
          <AccordionContent className="pl-4 space-y-1">
            <Link href="/commercial/freelancing" className="block hover:text-yellow-400">Freelancing</Link>
            <Link href="/commercial/dropshipping" className="block hover:text-yellow-400">Dropshipping</Link>
            <Link href="/commercial/affiliate" className="block hover:text-yellow-400">Affiliate Marketing</Link>
            <Link href="/commercial/other" className="block hover:text-yellow-400">Anya Jaruri Chije</Link>
          </AccordionContent>
        </AccordionItem>
        {/* Add more like Tech, Health, etc. as needed */}
      </Accordion>
    </div>
  );
}
