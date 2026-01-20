import React from "react";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lucidsystems.vercel.app/#organization",
        "name": "Lucid Systems",
        "url": "https://lucidsystems.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lucidsystems.vercel.app/apple-touch-icon.png",
          "width": 180,
          "height": 180
        },
        "sameAs": [
          "https://twitter.com/lucidtheeagle"
        ],
        "description": "AI Systems Architect for High-Volume Operations. We provide clarity where there is blur, fog, and smoke."
      },
      {
        "@type": "WebSite",
        "@id": "https://lucidsystems.vercel.app/#website",
        "url": "https://lucidsystems.vercel.app",
        "name": "Lucid Systems",
        "publisher": {
          "@id": "https://lucidsystems.vercel.app/#organization"
        }
      },
      {
        "@type": "Service",
        "name": "AI Systems Architecture",
        "provider": {
          "@id": "https://lucidsystems.vercel.app/#organization"
        },
        "description": "Deployment of Prism, Sentry, and Overwatch systems to automate high-volume business operations.",
        "areaServed": "Global",
        "serviceType": "Operational Automation"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}