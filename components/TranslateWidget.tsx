"use client";

import { useEffect } from "react";

export default function TranslateWidget() {
  useEffect(() => {
    function googleTranslateElementInit() {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "hi", includedLanguages: "hi,en", autoDisplay: false },
        "google_translate_element"
      );
    }

    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="google_translate_element" className="fixed top-4 right-4 z-50 bg-gray-800 p-2 rounded" />;
}
