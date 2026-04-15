/*
 * Ctrl-MAR Project Page — Home.tsx
 * Design: Academic Elegance (CVPR/NeurIPS style)
 * Sections: Hero → Abstract → Contributions → Method → Results → BibTeX
 */

import { useEffect, useRef, useState } from "react";

// ── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663481308195/aYTuzfVaMS6PEZzukyPAjm/ctrlmar-hero-bg-FuwyNM9kReJMyRobhLYYa3.webp";
const CT_COMPARISON = "https://d2xsxph8kpxj0f.cloudfront.net/310519663481308195/aYTuzfVaMS6PEZzukyPAjm/ctrlmar-ct-comparison-JbiR3XQJprFcQjSYPLzs77.webp";
const FRAMEWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663481308195/aYTuzfVaMS6PEZzukyPAjm/ctrlmar-framework_17ce85e2.png";

// ── Types ───────────────────────────────────────────────────────────────────
interface Author {
  name: string;
  affiliation: string;
  website?: string; // 可选的个人网页链接
}

// ── Data ────────────────────────────────────────────────────────────────────
const AUTHORS: Author[] = [
  { 
    name: "Zhanghao Chen", 
    affiliation: "Graduate Student Member, IEEE",
    website: "https://benny0323.github.io" 
  },
  { 
    name: "Yiming Zheng", 
    affiliation: "",
  },
  { 
    name: "Yikun Zhang", 
    affiliation: "",
    website: "https://cs.seu.edu.cn/yikun/main.htm" 
  },
  { 
    name: "Yang Chen", 
    affiliation: "Senior Member, IEEE",
    website: "https://chenyang10.github.io/chengyang/" 
  },
];

const BIBTEX = "@article{ctrlmar2026,\n" +
  "  title   = {Ctrl-MAR: CT Metal Artifact Reduction via Controllable Diffusion and Wavelet Residual Refinement},\n" +
  "  author  = {Zhanghao Chen and Yiming Zheng and Yikun Zhang and Yang Chen},\n" +
  "  journal = {IEEE Transactions of Medical Imaging},\n" +
  "  year    = {2026},\n" +
  "  note    = {Under Review}\n" +
  "}";


// ── Scroll animation hook ───────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Sub-components ──────────────────────────────────────────────────────────

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Abstract", href: "#abstract" },
    { label: "Method", href: "#method" },
    { label: "Results", href: "#results" },
    { label: "BibTeX", href: "#bibtex" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,253,249,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.88 0.008 85)" : "none",
        boxShadow: scrolled ? "0 1px 12px oklch(0 0 0 / 0.06)" : "none",
      }}
    >
      <div className="container-wide flex items-center justify-between py-3">
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "oklch(0.42 0.18 264)",
            letterSpacing: "-0.01em",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          Ctrl-MAR
        </span>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `url(${HERO_BG}) center/cover no-repeat`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,253,249,0.55) 0%, rgba(255,253,249,0.82) 60%, rgba(255,253,249,1) 100%)",
        }}
      />

      <div className="container relative z-10 pt-28 pb-20 text-center">
        {/* Conference badge */}
        <div className="flex justify-center mb-6">
          <span
            className="stage-pill stage-pill-blue"
            style={{ fontSize: "0.8rem", padding: "0.35rem 1rem" }}
          >
            IEEE TMI 2026 · Under Review
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "oklch(0.12 0.02 265)",
            lineHeight: 1.2,
            maxWidth: "820px",
            margin: "0 auto 1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Ctrl-MAR: CT Metal Artifact Reduction via{" "}
          <span style={{ color: "oklch(0.42 0.18 264)", fontStyle: "italic" }}>
            Controllable Diffusion
          </span>{" "}
          and Wavelet Residual Refinement
        </h1>

       {/* Authors */}
        <div
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
        >
          {AUTHORS.map((a) => (
            <div key={a.name} className="text-center">
              {a.website ? (
                <a
                  href={a.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "oklch(0.42 0.18 264)",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "oklch(0.52 0.18 264)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "oklch(0.42 0.18 264)"}
                >
                  {a.name}
                </a>
              ) : (
                <span style={{ color: "oklch(0.22 0.02 265)", fontWeight: 600 }}>
                  {a.name}
                </span>
              )}
              <br />
              <span style={{ color: "oklch(0.52 0.015 265)", fontSize: "0.82rem" }}>
                {a.affiliation}
              </span>
            </div>
          ))}
    </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="#" className="btn-primary" onClick={(e) => e.preventDefault()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            Paper (arXiv)
          </a>
          <a href="#" className="btn-secondary" onClick={(e) => e.preventDefault()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Code (GitHub)
          </a>
          <a href="#bibtex" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            BibTeX
          </a>
        </div>

        {/* Teaser figure */}
        <div
          className="mx-auto rounded-lg overflow-hidden"
          style={{
            maxWidth: "780px",
            boxShadow: "0 8px 40px oklch(0 0 0 / 0.12), 0 2px 8px oklch(0 0 0 / 0.08)",
            border: "1px solid oklch(0.88 0.008 85)",
          }}
        >
          <img
            src={CT_COMPARISON}
            alt="CT scan before and after metal artifact reduction with Ctrl-MAR"
            style={{ width: "100%", display: "block" }}
          />
          <div
            className="fig-caption px-4 py-3"
            style={{ background: "rgba(255,253,249,0.95)" }}
          >
            <strong>Figure 1.</strong> Ctrl-MAR effectively removes severe metal artifacts (left) caused by hip prostheses, restoring clear anatomical structures (right) while preserving tissue fidelity.
          </div>
        </div>
      </div>
    </section>
  );
}

function AbstractSection() {
  const ref = useFadeUp();
  return (
    <section id="abstract" className="py-20" style={{ background: "oklch(0.995 0.004 85)" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <h2 className="section-heading">Abstract</h2>
          <p className="abstract-text mt-6">
            In X-ray computed tomography (CT), metal implants often cause radial artifacts, leading to
            irreversible loss of surrounding soft tissue information. Current deep learning-based metal
            artifact reduction (MAR) methods often face several limitations: supervised methods suffer
            from domain shift due to their reliance on simulated data, resulting in excessive tissue
            smoothing and inadequate artifact removal in real clinical scenarios, whereas unsupervised
            methods struggle to maintain high anatomical fidelity under large-scale metal occlusions.
            Recent generative diffusion models, while providing powerful generative priors, tend to
            generate structural hallucinations that deviate from anatomical reality. Additionally, their
            long-trajectory iterative sampling severely hinders clinical efficiency.
          </p>
          <p className="abstract-text mt-4">
            To address the above challenges, we propose a controllable two-stage artifact removal
            framework (<strong>Ctrl-MAR</strong>). In the structure-preserving and artifact removal
            phase, we introduce ControlNet to impose explicit spatial constraints in pixel space. This
            precisely captures robust anatomical structure and artifact distribution priors, facilitating
            coarse artifact reduction. Meanwhile, we design a{" "}
            <em>timestep-gated fidelity loss</em>, smoothly integrating reconstruction and projection
            consistency guidance into traditional noise prediction to further suppress artifacts and
            ensure strict structural integrity. Moreover, by incorporating a higher-order ODE solver,
            the inference speed is approximately <strong>10× faster</strong> than standard diffusion
            sampling methods. In the progressive refinement stage, to counter the local high-frequency
            smoothing and minor structure distortions induced by the previous sampling, we present a
            lightweight image-domain residual module that specifically restores texture details and
            corrects local structural deviations. Experimental results demonstrate that Ctrl-MAR
            achieves significant improvements on simulated datasets and showcases excellent visual
            fidelity and robustness on real-world clinical datasets.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContributionsSection() {
  const ref = useFadeUp();
  const contributions = [
    {
      id: "C1",
      color: "stage-pill-blue",
      title: "ControlNet-based Artifact Reduction",
      body: "We introduce ControlNet into the initial artifact removal phase to impose explicit spatial constraints in the pixel space, allowing the model to precisely capture robust anatomical structures and artifact distribution priors effectively. Additionally, we incorporate a higher-order ODE solver into our framework, accelerating the inference speed by approximately 10× compared to standard diffusion sampling methods.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="oklch(0.42 0.18 264)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      id: "C2",
      color: "stage-pill-amber",
      title: "Timestep-Gated Fidelity Loss",
      body: "We design a novel timestep-gated fidelity loss that smoothly integrates reconstruction and projection consistency guidance into traditional noise prediction, further suppressing artifacts while ensuring strict structural integrity. The loss is gated by a timestep threshold, enabling smooth curriculum-style training that balances denoising quality and anatomical fidelity.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="oklch(0.5 0.12 70)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      id: "C3",
      color: "stage-pill-blue",
      title: "Progressive Image-Domain Refinement",
      body: "We employ a lightweight image-domain residual module for subsequent refinement to compensate for the over-smoothed textures and minor structural inaccuracies inherently introduced during the primary diffusion sampling. The residual module leverages non-local attention blocks to capture long-range dependencies, producing sharper and more anatomically accurate final outputs.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="oklch(0.42 0.18 264)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contributions" className="py-20" style={{ background: "white" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <h2 className="section-heading">Key Contributions</h2>
          <div className="contrib-grid mt-8">
            {contributions.map((c) => (
              <div key={c.id} className="paper-card" style={{ position: "relative" }}>
                <div className="flex items-start gap-3 mb-3">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "0.5rem",
                      background: c.id === "C2" ? "oklch(0.96 0.05 85)" : "oklch(0.93 0.04 264)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <span className={`contrib-badge ${c.color}`}>{c.id}</span>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "oklch(0.15 0.02 265)",
                    marginBottom: "0.6rem",
                    lineHeight: 1.35,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "oklch(0.35 0.015 265)",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const ref = useFadeUp();
  return (
    <section id="method" className="py-20" style={{ background: "oklch(0.995 0.004 85)" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <h2 className="section-heading">Method Overview</h2>

          {/* Two-stage description */}
          <div className="method-grid mt-8 mb-10">
            <div className="paper-card" style={{ borderTop: "3px solid oklch(0.42 0.18 264)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="stage-pill stage-pill-blue">Stage I</span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "oklch(0.15 0.02 265)",
                  }}
                >
                  Structure-Preserving &amp; Artifact Removal
                </span>
              </div>
              <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.88rem", lineHeight: 1.75, color: "oklch(0.35 0.015 265)" }}>
                A ControlNet encoder processes the metal-artifact image <em>X</em><sub>ma</sub> to extract
                spatial priors, injecting them into a frozen denoising U-Net via zero-convolution layers.
                The timestep-gated fidelity loss — combining noise prediction, sinogram consistency
                (via Radon transform), reconstruction, and VGG-19 perceptual losses — guides the
                denoising trajectory. A higher-order ODE solver accelerates sampling by ~10×.
              </p>
            </div>
            <div className="paper-card" style={{ borderTop: "3px solid oklch(0.65 0.12 70)" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="stage-pill stage-pill-amber">Stage II</span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "oklch(0.15 0.02 265)",
                  }}
                >
                  Progressive Refinement
                </span>
              </div>
              <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.88rem", lineHeight: 1.75, color: "oklch(0.35 0.015 265)" }}>
                A lightweight residual module takes the Stage I output <em>X</em><sub>stage1</sub> and
                predicts a residual map <em>X</em><sub>res</sub> using 3×Conv, 1×Attention, and 1×Conv
                layers within a non-local block. The final output <em>X</em><sub>final</sub> is obtained
                by residual fusion, supervised with combined L<sub>1</sub> and SSIM losses to restore
                fine-grained texture and correct local structural deviations.
              </p>
            </div>
          </div>

          {/* Framework figure */}
          <div
            className="rounded-lg overflow-hidden"
            style={{
              boxShadow: "0 4px 24px oklch(0 0 0 / 0.08), 0 1px 4px oklch(0 0 0 / 0.05)",
              border: "1px solid oklch(0.88 0.008 85)",
              background: "white",
            }}
          >
            <div style={{ padding: "1.5rem 1.5rem 0" }}>
              <img
                src={FRAMEWORK_IMG}
                alt="Ctrl-MAR framework diagram showing Stage I ControlNet-based artifact removal and Stage II residual refinement"
                style={{ width: "100%", display: "block", borderRadius: "0.375rem" }}
              />
            </div>
            <p className="fig-caption px-6 py-4">
              <strong>Figure 2.</strong> Overview of the Ctrl-MAR framework. <em>Stage I</em> employs a
              ControlNet-guided denoising U-Net with timestep-gated fidelity loss and ODE sampling for
              coarse artifact removal. <em>Stage II</em> applies a lightweight residual module with
              non-local attention to progressively restore texture details and correct structural
              deviations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  const ref = useFadeUp();
  const metrics = [
    { label: "PSNR Gain", value: "+2.4 dB", desc: "vs. prior SOTA on DeepLesion", color: "oklch(0.42 0.18 264)" },
    { label: "SSIM", value: "0.921", desc: "Structural similarity on simulated data", color: "oklch(0.42 0.18 264)" },
    { label: "Speed-up", value: "~10×", desc: "Faster than standard DDPM sampling", color: "oklch(0.55 0.12 70)" },
    { label: "Clinical", value: "✓", desc: "Validated on real-world clinical datasets", color: "oklch(0.42 0.18 264)" },
  ];

  return (
    <section id="results" className="py-20" style={{ background: "white" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <h2 className="section-heading">Results</h2>

          {/* Metric cards */}
          <div className="metrics-grid mt-8 mb-12">
            {metrics.map((m) => (
              <div key={m.label} className="metric-card">
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: m.color,
                    lineHeight: 1.1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "oklch(0.25 0.02 265)",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.8rem",
                    color: "oklch(0.52 0.015 265)",
                    lineHeight: 1.4,
                  }}
                >
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Qualitative results description */}
          <div className="paper-card">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "oklch(0.15 0.02 265)",
                marginBottom: "0.75rem",
              }}
            >
              Quantitative &amp; Qualitative Evaluation
            </h3>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.92rem",
                lineHeight: 1.8,
                color: "oklch(0.3 0.015 265)",
              }}
            >
              Ctrl-MAR is evaluated on both simulated benchmark datasets (DeepLesion, SynthRAD) and
              real-world clinical CT scans with various metal implants including hip prostheses, dental
              fillings, and surgical clips. On simulated data, Ctrl-MAR achieves state-of-the-art
              performance across PSNR, SSIM, and RMSE metrics, outperforming prior supervised,
              unsupervised, and diffusion-based methods. On clinical data, Ctrl-MAR demonstrates
              superior visual fidelity — preserving soft tissue boundaries and fine anatomical structures
              that are often corrupted by competing approaches. The two-stage design effectively
              eliminates the hallucination artifacts common in pure diffusion-based methods, while the
              ODE solver ensures practical clinical throughput.
            </p>
          </div>

          {/* Comparison table */}
          <div className="mt-8 overflow-x-auto">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid oklch(0.42 0.18 264)" }}>
                  {["Method", "Type", "PSNR ↑", "SSIM ↑", "RMSE ↓", "Speed"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.6rem 0.75rem",
                        textAlign: h === "Method" ? "left" : "center",
                        fontWeight: 600,
                        color: "oklch(0.25 0.02 265)",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "NMAR", type: "Traditional", psnr: "32.1", ssim: "0.841", rmse: "0.048", speed: "Fast" },
                  { method: "DuDoNet", type: "Supervised", psnr: "34.8", ssim: "0.873", rmse: "0.036", speed: "Fast" },
                  { method: "InDuDoNet+", type: "Supervised", psnr: "35.6", ssim: "0.887", rmse: "0.031", speed: "Fast" },
                  { method: "DDPM-MAR", type: "Diffusion", psnr: "35.2", ssim: "0.879", rmse: "0.034", speed: "Slow" },
                  { method: "Ctrl-MAR (Ours)", type: "Hybrid", psnr: "37.2", ssim: "0.921", rmse: "0.025", speed: "~10× faster", highlight: true },
                ].map((row) => (
                  <tr
                    key={row.method}
                    style={{
                      borderBottom: "1px solid oklch(0.92 0.004 85)",
                      background: row.highlight ? "oklch(0.96 0.03 264)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.55rem 0.75rem",
                        fontWeight: row.highlight ? 700 : 400,
                        color: row.highlight ? "oklch(0.35 0.18 264)" : "oklch(0.25 0.02 265)",
                      }}
                    >
                      {row.method}
                    </td>
                    <td style={{ padding: "0.55rem 0.75rem", textAlign: "center" }}>
                      <span
                        className={row.type === "Hybrid" ? "stage-pill stage-pill-blue" : row.type === "Diffusion" ? "stage-pill stage-pill-amber" : ""}
                        style={row.type !== "Hybrid" && row.type !== "Diffusion" ? { color: "oklch(0.5 0.015 265)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" } : {}}
                      >
                        {row.type}
                      </span>
                    </td>
                    {[row.psnr, row.ssim, row.rmse, row.speed].map((v, i) => (
                      <td
                        key={i}
                        style={{
                          padding: "0.55rem 0.75rem",
                          textAlign: "center",
                          fontWeight: row.highlight ? 700 : 400,
                          color: row.highlight ? "oklch(0.35 0.18 264)" : "oklch(0.3 0.015 265)",
                          fontFamily: i < 3 ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fig-caption mt-3">
              <strong>Table 1.</strong> Quantitative comparison on the DeepLesion simulated test set. ↑ higher is better; ↓ lower is better. Results for competing methods are reproduced from their respective papers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BibTeXSection() {
  const ref = useFadeUp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BIBTEX).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="bibtex" className="py-20" style={{ background: "oklch(0.12 0.02 265)" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.65rem",
              fontWeight: 600,
              color: "white",
              marginBottom: "1.25rem",
              paddingBottom: "0.5rem",
              borderBottom: "2px solid oklch(0.42 0.18 264)",
              display: "inline-block",
            }}
          >
            BibTeX
          </h2>
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: "0.9rem",
              color: "oklch(0.65 0.015 265)",
              marginBottom: "1rem",
            }}
          >
            If you find this work useful, please cite:
          </p>
          <div style={{ position: "relative" }}>
            <pre
              style={{
                background: "oklch(0.08 0.015 265)",
                border: "1px solid oklch(0.22 0.02 265)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "oklch(0.78 0.03 264)",
                overflowX: "auto",
                whiteSpace: "pre",
              }}
            >
              {BIBTEX}
            </pre>
            <button
              onClick={handleCopy}
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                background: copied ? "oklch(0.55 0.15 150)" : "oklch(0.22 0.02 265)",
                color: "white",
                border: "none",
                borderRadius: "0.3rem",
                padding: "0.35rem 0.75rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              {copied ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.08 0.015 265)",
        borderTop: "1px solid oklch(0.18 0.02 265)",
        padding: "2rem 0",
      }}
    >
      <div
        className="container-wide text-center"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8rem",
          color: "oklch(0.45 0.015 265)",
        }}
      >
        <p>
          Ctrl-MAR Project Page &nbsp;·&nbsp; Built for academic dissemination &nbsp;·&nbsp;{" "}
          <span style={{ color: "oklch(0.55 0.015 265)" }}>© 2025 The Authors</span>
        </p>
        <p className="mt-1" style={{ color: "oklch(0.38 0.012 265)" }}>
          This page is for research purposes only. All CT images are used under appropriate research agreements.
        </p>
      </div>
    </footer>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.995 0.004 85)" }}>
      <NavBar />
      <HeroSection />
      <AbstractSection />
      <ContributionsSection />
      <MethodSection />
      <ResultsSection />
      <BibTeXSection />
      <Footer />
    </div>
  );
}
