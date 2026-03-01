"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-gray-800 p-4 overflow-y-auto text-white">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">The Moon 🌕</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="news">
          <AccordionTrigger>📰 News</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              <li><Link href="/news/national">National</Link></li>
              <li><Link href="/news/international">International</Link></li>
              <li><Link href="/news/bihar">Bihar</Link></li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="live">
          <AccordionTrigger>🔴 Live</AccordionTrigger>
          <AccordionContent><Link href="/live">Live Updates</Link></AccordionContent>
        </AccordionItem>
        <AccordionItem value="study">
          <AccordionTrigger>📚 Study</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              <li><Link href="/study/10th">10th</Link></li>
              <li><Link href="/study/12th">12th</Link></li>
              <li><Link href="/study/govt-jobs">Govt Jobs</Link></li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="commercial">
          <AccordionTrigger>💼 Commercial</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              <li><Link href="/commercial/freelancing">Freelancing</Link></li>
              <li><Link href="/commercial/dropshipping">Dropshipping</Link></li>
              <li><Link href="/commercial/affiliate">Affiliate Marketing</Link></li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
