"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center flex-col px-4 py-8">
      <div className="mb-8 text-center">
        <div className="inline-block bg-gray-100 dark:bg-neutral-800 rounded-lg px-4 py-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
          Hover over the highlighted links to see the preview
        </div>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-300 text-xl md:text-3xl max-w-3xl mx-auto mb-10 leading-relaxed">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      
      <p className="text-neutral-600 dark:text-neutral-300 text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
      
      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
        Try it with different links to see the dynamic previews
      </div>
    </div>
  );
} 