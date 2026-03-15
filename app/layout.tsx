import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'ApexFactory.ai — Premium Enterprise AI Engineering | Peak Performance at Scale',
  description: 'ApexFactory.ai delivers precision-engineered enterprise AI systems. 200+ deployments, 99.99% uptime, $5B+ revenue impacted. Custom LLM solutions, AI platforms, intelligent automation, and AI infrastructure.',
  keywords: ['enterprise AI', 'AI engineering', 'custom AI solutions', 'AI consulting', 'AI infrastructure', 'custom LLM', 'enterprise AI platform', 'AI development company', 'premium AI development'],
  openGraph: {
    title: 'ApexFactory.ai — Peak Performance. Factory Scale.',
    description: 'Premium enterprise AI engineering. 200+ systems deployed, 99.99% uptime, $5B+ client revenue impacted.',
    type: 'website',
    url: 'https://apexfactoryai.com',
    siteName: 'ApexFactory.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexFactory.ai — Peak Performance. Factory Scale.',
    description: 'Premium enterprise AI engineering. 200+ systems deployed, 99.99% uptime.',
  },
  alternates: {
    canonical: 'https://apexfactoryai.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apexfactoryai.com/#organization",
      "name": "ApexFactory.ai",
      "url": "https://apexfactoryai.com",
      "description": "Premium AI engineering firm delivering peak-performance AI systems at factory scale for enterprise clients. 200+ deployments, 99.99% uptime, $5B+ revenue impacted.",
      "email": "hello@apexfactory.ai",
      "knowsAbout": [
        "Enterprise AI",
        "Artificial Intelligence Engineering",
        "Custom LLM Solutions",
        "AI Infrastructure",
        "Intelligent Automation",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "MLOps",
        "GPU-Optimized Pipelines"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://apexfactoryai.com/#website",
      "url": "https://apexfactoryai.com",
      "name": "ApexFactory.ai",
      "publisher": {
        "@id": "https://apexfactoryai.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Enterprise AI Platforms",
      "description": "End-to-end AI ecosystems designed for Fortune 500 complexity. Scalable architectures that grow with your ambition and withstand any load.",
      "provider": {
        "@id": "https://apexfactoryai.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Intelligent Automation Systems",
      "description": "Autonomous workflows that learn, adapt, and optimize over time. Transform manual processes into intelligent, self-improving systems.",
      "provider": {
        "@id": "https://apexfactoryai.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "Custom LLM Solutions",
      "description": "Purpose-built language models fine-tuned to your domain. Deeply integrated, proprietary AI — not off-the-shelf wrappers.",
      "provider": {
        "@id": "https://apexfactoryai.com/#organization"
      }
    },
    {
      "@type": "Service",
      "name": "AI Infrastructure",
      "description": "GPU-optimized pipelines, model serving at scale, and monitoring systems. The foundational layer that makes enterprise AI possible.",
      "provider": {
        "@id": "https://apexfactoryai.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ApexFactory.ai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ApexFactory.ai is a premium AI engineering firm that builds enterprise-grade AI systems. We specialize in custom AI platforms, intelligent automation, LLM solutions, and AI infrastructure for Fortune 500 and large enterprise clients. With over 200 AI systems deployed and $5B+ in client revenue impacted, we deliver peak performance at factory scale."
          }
        },
        {
          "@type": "Question",
          "name": "What makes ApexFactory.ai different from other AI companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three things set us apart: (1) Our dual AI-human engineering teams combine AI-assisted development with expert human oversight for unmatched quality and speed. (2) Factory-scale delivery — we handle up to 10 projects simultaneously without sacrificing quality. (3) Our track record: 200+ deployments, 99.99% uptime, 15ms average response time, and 100% client retention."
          }
        },
        {
          "@type": "Question",
          "name": "What is ApexFactory.ai's uptime guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain a 99.99% uptime SLA across all deployed systems. This translates to less than 52 minutes of downtime per year. Our systems are architected with redundancy, automatic failover, and comprehensive monitoring to ensure peak performance around the clock."
          }
        },
        {
          "@type": "Question",
          "name": "How many AI systems has ApexFactory.ai deployed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We have deployed over 200 AI systems across industries including financial services, healthcare, manufacturing, energy, defense, and telecommunications. These systems collectively impact over $5 billion in client revenue."
          }
        },
        {
          "@type": "Question",
          "name": "What types of AI solutions does ApexFactory.ai build?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build four categories of solutions: Enterprise AI Platforms (end-to-end AI ecosystems for large organizations), Intelligent Automation Systems (autonomous workflows that learn and optimize), Custom LLM Solutions (domain-specific language models fine-tuned to your business), and AI Infrastructure (GPU-optimized pipelines, model serving, and monitoring)."
          }
        },
        {
          "@type": "Question",
          "name": "Does ApexFactory.ai work with Fortune 500 companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Enterprise AI Platforms are specifically designed for Fortune 500 complexity. We build scalable architectures that handle the security requirements, compliance needs, and operational scale of the world's largest organizations."
          }
        },
        {
          "@type": "Question",
          "name": "What is ApexFactory.ai's development process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We follow our proprietary four-phase methodology: Commission (deep discovery and requirements mapping), Engineer (dual AI-human team development), Test (rigorous stress testing, adversarial QA, and performance benchmarking), and Deploy (zero-downtime deployment with ongoing optimization)."
          }
        },
        {
          "@type": "Question",
          "name": "How fast does ApexFactory.ai deliver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our factory-scale operations allow us to deliver up to 10 projects simultaneously. Our dual AI-human engineering approach typically accelerates delivery by 3-5x compared to traditional development. Average response time for deployed systems is 15ms."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
