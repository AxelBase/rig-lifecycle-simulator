<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Rig Lifecycle Simulator</title>
  <meta name="description" content="Terms of use for the Rig Lifecycle Simulator, a free client-side tool for mining ROI projections—not financial advice." />
  <meta property="og:title" content="Terms and Conditions | Rig Lifecycle Simulator" />
  <meta property="og:description" content="Terms of use for the Rig Lifecycle Simulator, a free client-side tool for mining ROI projections—not financial advice." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 27, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Rig Lifecycle Simulator</strong> ("the Tool"), a free, client-side web utility, you agree to these Terms and Conditions. If you do not agree, please refrain from using the Tool. We reserve the right to update these terms; continued use constitutes acceptance of changes.</p>

    <h2>2. Description of the Tool</h2>
    <p>The Tool is a browser-based simulator for projecting cryptocurrency mining rig profitability over 24–36 months. It factors in inputs like hash rate, power costs, difficulty growth, coin price, and block rewards (currently 3.125 BTC post-2024 halving). All processing is local; no data is stored or transmitted.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted uses include:</p>
    <ul>
      <li>Entering custom parameters for ROI simulations.</li>
      <li>Viewing results tables and charts.</li>
      <li>Bookmarking or sharing simulation URLs (query parameters).</li>
    </ul>
    <p>Prohibited: Automated scraping, redistribution as a service, or any unlawful activity.</p>

    <h2>4. No Financial Advice</h2>
    <p><strong>The Tool provides estimates only and is not financial, investment, or tax advice</strong>. Projections assume constant conditions (e.g., fixed price ~$88,000, difficulty ~148 trillion) and exclude variables like fees, degradation, or volatility. Actual mining outcomes may vary significantly. Use at your own risk; consult professionals for decisions.</p>

    <h2>5. Intellectual Property</h2>
    <p>The Tool's code, design, and content are open-source where applicable but subject to copyright. You may not modify, reverse-engineer, or claim ownership without permission.</p>

    <h2>6. Disclaimer of Warranties</h2>
    <p>The Tool is provided "as is" without warranties of accuracy, completeness, or fitness for purpose. We do not guarantee uninterrupted access or error-free operation.</p>

    <h2>7. Limitation of Liability</h2>
    <p>We are not liable for any damages arising from use, including lost profits or data loss. Maximum liability is limited to $0, as the Tool is free.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by applicable laws; disputes resolved in relevant jurisdictions.</p>

    <h2>9. Changes and Contact</h2>
    <p>Terms may update; check periodically. Questions? Review the Tool's documentation.</p>

    <p class="italic-note"><strong>Use responsibly</strong>—simulations are educational tools, not guarantees.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
    margin: 0 auto;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--color-text-muted);
  }

  .breadcrumbs a {
    color: var(--primary-lilac);
    text-decoration: none;
    transition: var(--transition-smooth);
  }

  .breadcrumbs a:hover {
    text-decoration: underline;
    color: var(--primary-lilac-hover);
  }

  .breadcrumbs p {
    margin: 0;
    color: var(--color-text-main);
  }

  .prose {
    line-height: 1.8;
    color: var(--color-text-main);
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
  }

  .prose h1,
  .prose h2 {
    color: var(--primary-lilac);
    font-weight: 700;
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--color-text-main);
    margin-bottom: 1.2rem;
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--color-text-main);
  }

  .prose ul li::marker {
    color: var(--primary-lilac);
  }

  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }

</style>