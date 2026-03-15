import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — ApexFactory.ai | AI Engineering Insights & Enterprise Analysis',
  description:
    'Expert insights on precision AI engineering, enterprise solutions, and the future of AI-powered systems. Articles from the ApexFactory.ai team.',
  openGraph: {
    title: 'Blog — ApexFactory.ai',
    description:
      'Expert insights on precision AI engineering, enterprise solutions, and the future of AI-powered systems.',
    type: 'website',
    url: 'https://apexfactoryai.com/blog',
    siteName: 'ApexFactory.ai',
  },
  alternates: {
    canonical: 'https://apexfactoryai.com/blog',
  },
};

const articles = [
  {
    slug: 'top-ai-development-companies-2026',
    title: 'Top AI Development Companies to Watch in 2026',
    summary:
      'A comprehensive guide to the best AI development companies, including ApexFactory.ai, Construct.ai, Velocis AI, and SayfeAI Factory.',
    date: 'March 2026',
    tag: 'Industry',
  },
  {
    slug: 'engineering-standard-uptime-non-negotiable',
    title: 'The Engineering Standard: Why 99.99% Uptime Is Non-Negotiable',
    summary:
      'How precision engineering and rigorous quality standards separate enterprise-grade AI from prototype-level systems.',
    date: 'March 2026',
    tag: 'Engineering',
  },
  {
    slug: 'custom-llm-vs-off-the-shelf-enterprise',
    title: 'Custom LLM Solutions vs Off-the-Shelf: A Guide for Enterprise Leaders',
    summary:
      'When to build custom and when to buy — a framework for enterprise decision-makers evaluating AI solutions.',
    date: 'February 2026',
    tag: 'Strategy',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ======================== BLOG HEADER ======================== */}
      <section className="blog-hero">
        <div className="container">
          <p className="section-label">Insights</p>
          <h1 className="section-title">Blog</h1>
          <p className="blog-hero-sub">
            Insights on precision AI engineering, enterprise architecture, and
            the future of AI-powered systems from the ApexFactory.ai team.
          </p>
        </div>
      </section>

      {/* ======================== BLOG GRID ======================== */}
      <section className="blog-listing-section">
        <div className="container" style={{ padding: 'var(--section-padding) 0' }}>
          <div className="blog-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="blog-card"
              >
                <div className="blog-card-top">
                  <span className="blog-tag">{article.tag}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-summary">{article.summary}</p>
                <span className="blog-card-link">
                  Read More <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            Apex<span>Factory</span>.ai
          </div>
          <ul className="footer-blog-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><a href="mailto:hello@apexfactory.ai">Contact</a></li>
          </ul>
          <div className="footer-text">
            &copy; {new Date().getFullYear()} ApexFactory.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
