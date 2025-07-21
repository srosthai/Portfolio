"use client";

import LinkPreviewDemo from "@/components/ui/link-preview-demo";

export default function LinkPreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="pt-20 pb-10">
          <h1 className="text-4xl font-bold text-center text-black dark:text-white">
            Link Preview with Screenshot
          </h1>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
            Hover over the links below to see website previews via screenshots
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-xl p-8">
          <LinkPreviewDemo />
        </div>
      </div>
    </div>
  );
} 