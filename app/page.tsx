"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Navigation ── */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container">
          <a href="#" className="nav-logo" aria-label="ApexFactory.ai home">
            Apex<span>Factory</span>.ai
          </a>
          <div className="nav-links">
            <a href="#standard">Standard</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#numbers">Results</a>
          </div>
          <a href="#contact" className="nav-cta">
            Get Started
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">ApexFactory.ai</p>
            <h1 className="hero-title">
              <span className="line text-gold">Peak Performance.</span>
              <span className="line text-gold">Factory Scale.</span>
            </h1>
            <p className="hero-subtitle">
              Where elite AI engineering meets industrial-scale delivery. Every
              solution precision-crafted. Every deployment battle-tested.
            </p>
            <a href="mailto:hello@apexfactory.ai" className="hero-cta">
              Enter the Factory
            </a>
          </div>
          <div className="hero-scroll-indicator" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ── The Apex Standard ── */}
        <section className="standard" id="standard">
          <div className="container">
            <div className="standard-header reveal">
              <p className="section-label">The Apex Standard</p>
              <h2 className="section-title">
                Three Pillars of <span className="text-gold">Excellence</span>
              </h2>
            </div>
            <div className="standard-grid">
              <div className="pillar reveal reveal-delay-1">
                <div className="pillar-number">01</div>
                <h3 className="pillar-title">Precision Engineering</h3>
                <p className="pillar-text">
                  Every line of code reviewed by AI and human engineers in
                  tandem. No shortcuts. No compromises. Only solutions built to
                  the exact tolerances your business demands.
                </p>
              </div>
              <div className="pillar reveal reveal-delay-2">
                <div className="pillar-number">02</div>
                <h3 className="pillar-title">Factory Scale</h3>
                <p className="pillar-text">
                  Deliver 10 projects simultaneously without sacrificing an
                  ounce of quality. Our systems and processes are built for
                  volume, engineered for consistency.
                </p>
              </div>
              <div className="pillar reveal reveal-delay-3">
                <div className="pillar-number">03</div>
                <h3 className="pillar-title">Peak Performance</h3>
                <p className="pillar-text">
                  99.99% uptime. Sub-100ms response times. Every system we
                  deploy operates at the absolute ceiling of what modern
                  infrastructure allows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What We Forge ── */}
        <section className="forge" id="services">
          <div className="container">
            <div className="forge-header reveal">
              <p className="section-label">What We Forge</p>
              <h2 className="section-title">
                Built for the <span className="text-gold">Enterprise</span>
              </h2>
              <hr className="divider" />
            </div>
            <div className="forge-grid">
              <div className="forge-card reveal reveal-delay-1">
                <div className="forge-card-icon">&loz;</div>
                <h3 className="forge-card-title">Enterprise AI Platforms</h3>
                <p className="forge-card-text">
                  End-to-end AI ecosystems designed for Fortune 500 complexity.
                  Scalable architectures that grow with your ambition and
                  withstand any load.
                </p>
              </div>
              <div className="forge-card reveal reveal-delay-2">
                <div className="forge-card-icon">&#9678;</div>
                <h3 className="forge-card-title">
                  Intelligent Automation Systems
                </h3>
                <p className="forge-card-text">
                  Transform manual processes into autonomous workflows. Our
                  automation solutions learn, adapt, and optimize themselves
                  over time.
                </p>
              </div>
              <div className="forge-card reveal reveal-delay-3">
                <div className="forge-card-icon">&Delta;</div>
                <h3 className="forge-card-title">Custom LLM Solutions</h3>
                <p className="forge-card-text">
                  Purpose-built language models fine-tuned to your domain. Not
                  off-the-shelf wrappers&mdash;deeply integrated, proprietary AI
                  that speaks your language.
                </p>
              </div>
              <div className="forge-card reveal reveal-delay-4">
                <div className="forge-card-icon">&#9632;</div>
                <h3 className="forge-card-title">AI Infrastructure</h3>
                <p className="forge-card-text">
                  The foundational layer that makes everything possible.
                  GPU-optimized pipelines, model serving at scale, and
                  monitoring systems that never sleep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Process ── */}
        <section className="process" id="process">
          <div className="container">
            <div className="process-header reveal">
              <p className="section-label">The Process</p>
              <h2 className="section-title">
                Engineered <span className="text-gold">Methodology</span>
              </h2>
            </div>
            <div className="process-steps">
              <div className="step reveal reveal-delay-1">
                <div className="step-number">I</div>
                <p className="step-label">Phase 01</p>
                <h3 className="step-title">Commission</h3>
                <p className="step-text">
                  Deep discovery sessions to map your requirements with
                  surgical precision. We define scope, success metrics, and
                  architectural constraints.
                </p>
              </div>
              <div className="step reveal reveal-delay-2">
                <div className="step-number">II</div>
                <p className="step-label">Phase 02</p>
                <h3 className="step-title">Engineer</h3>
                <p className="step-text">
                  Our dual AI-human teams architect and build your solution
                  with factory-floor discipline and Silicon Valley innovation.
                </p>
              </div>
              <div className="step reveal reveal-delay-3">
                <div className="step-number">III</div>
                <p className="step-label">Phase 03</p>
                <h3 className="step-title">Test</h3>
                <p className="step-text">
                  Rigorous stress testing, adversarial QA, and performance
                  benchmarking. Nothing ships until it meets the Apex
                  standard.
                </p>
              </div>
              <div className="step reveal reveal-delay-4">
                <div className="step-number">IV</div>
                <p className="step-label">Phase 04</p>
                <h3 className="step-title">Deploy</h3>
                <p className="step-text">
                  Zero-downtime deployment with comprehensive monitoring.
                  Ongoing optimization ensures peak performance in
                  perpetuity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── By The Numbers ── */}
        <section className="numbers" id="numbers">
          <div className="container">
            <div className="numbers-header reveal">
              <p className="section-label">By The Numbers</p>
              <h2 className="section-title">
                Results That <span className="text-gold">Speak</span>
              </h2>
            </div>
            <div className="numbers-grid reveal">
              <div className="stat">
                <div className="stat-value">$5B+</div>
                <div className="stat-label">Client Revenue Impacted</div>
              </div>
              <div className="stat">
                <div className="stat-value">200+</div>
                <div className="stat-label">AI Systems Deployed</div>
              </div>
              <div className="stat">
                <div className="stat-value">15ms</div>
                <div className="stat-label">Average Response Time</div>
              </div>
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="faq-header reveal">
              <p className="section-label">Answers</p>
              <h2 className="section-title">
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
              <hr className="divider" />
            </div>
            <div className="faq-grid">
              <div className="faq-item reveal reveal-delay-1">
                <h3 className="faq-question">What is ApexFactory.ai?</h3>
                <p className="faq-answer">
                  ApexFactory.ai is a premium AI engineering firm that builds
                  enterprise-grade AI systems. We specialize in custom AI
                  platforms, intelligent automation, LLM solutions, and AI
                  infrastructure for Fortune 500 and large enterprise clients.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-2">
                <h3 className="faq-question">
                  What makes ApexFactory.ai different from other AI companies?
                </h3>
                <p className="faq-answer">
                  Our dual AI-human engineering teams combine AI-assisted
                  development with expert human oversight. We deliver at factory
                  scale&mdash;up to 10 projects simultaneously&mdash;with 200+
                  deployments, 99.99% uptime, and 100% client retention.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-3">
                <h3 className="faq-question">
                  What is ApexFactory.ai&rsquo;s uptime guarantee?
                </h3>
                <p className="faq-answer">
                  We maintain a 99.99% uptime SLA across all deployed systems.
                  That translates to less than 52 minutes of downtime per year,
                  backed by redundancy, automatic failover, and comprehensive
                  monitoring.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-4">
                <h3 className="faq-question">
                  How many AI systems has ApexFactory.ai deployed?
                </h3>
                <p className="faq-answer">
                  Over 200 AI systems across financial services, healthcare,
                  manufacturing, energy, defense, and telecommunications.
                  These systems collectively impact over $5 billion in client
                  revenue.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-1">
                <h3 className="faq-question">
                  What types of AI solutions does ApexFactory.ai build?
                </h3>
                <p className="faq-answer">
                  We build Enterprise AI Platforms, Intelligent Automation
                  Systems, Custom LLM Solutions, and AI Infrastructure.
                  Each solution is precision-engineered for your specific
                  domain&mdash;never off-the-shelf.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-2">
                <h3 className="faq-question">
                  Does ApexFactory.ai work with Fortune 500 companies?
                </h3>
                <p className="faq-answer">
                  Yes. Our platforms are specifically designed for Fortune 500
                  complexity, handling enterprise security requirements,
                  compliance needs, and operational scale.
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-3">
                <h3 className="faq-question">
                  What is ApexFactory.ai&rsquo;s development process?
                </h3>
                <p className="faq-answer">
                  Our four-phase methodology: Commission (discovery and
                  requirements), Engineer (dual AI-human development), Test
                  (stress testing and adversarial QA), and Deploy
                  (zero-downtime with ongoing optimization).
                </p>
              </div>
              <div className="faq-item reveal reveal-delay-4">
                <h3 className="faq-question">
                  How fast does ApexFactory.ai deliver?
                </h3>
                <p className="faq-answer">
                  Our dual AI-human approach accelerates delivery by 3&ndash;5x
                  compared to traditional development. We handle up to 10
                  projects simultaneously with an average deployed response
                  time of 15ms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Footer ── */}
        <section className="cta-footer" id="contact">
          <div className="container">
            <div className="cta-footer-content reveal">
              <p className="section-label">Begin</p>
              <h2 className="cta-footer-title">
                Excellence isn&rsquo;t optional.
                <br />
                <span className="text-gold">It&rsquo;s engineered.</span>
              </h2>
              <p className="cta-footer-subtitle">
                Ready to build AI systems that set the standard? Let&rsquo;s
                discuss what peak performance looks like for your organization.
              </p>
              <a href="mailto:hello@apexfactory.ai" className="cta-button">
                Commission Your Project
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            Apex<span>Factory</span>.ai
          </div>
          <ul className="footer-blog-links">
            <li><a href="/#standard">Standard</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#process">Process</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="mailto:hello@apexfactory.ai">Contact</a></li>
          </ul>
          <div className="footer-text">
            &copy; {new Date().getFullYear()} ApexFactory.ai. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
