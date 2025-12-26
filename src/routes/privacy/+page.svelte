<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Rig Lifecycle Simulator</title>
  <meta name="description" content="The Rig Lifecycle Simulator is a fully client-side tool that collects no personal data, ensuring complete privacy for your mining profitability simulations." />
  <meta property="og:title" content="Privacy Policy | Rig Lifecycle Simulator" />
  <meta property="og:description" content="The Rig Lifecycle Simulator is a fully client-side tool that collects no personal data, ensuring complete privacy for your mining profitability simulations." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 27, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Rig Lifecycle Simulator</strong>, a client-side web utility ("we," "us," or "our"). This Privacy Policy explains our approach to user privacy when using this tool, which allows cryptocurrency miners to project rig profitability over 2–3 years by modeling network difficulty increases and economic factors. We prioritize <strong>privacy by design</strong>: the simulator runs entirely in your browser, and <strong>we do not collect, store, or transmit any personal data</strong>. All inputs and calculations remain on your device, ensuring transparency and control.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>As a stateless static application, the Rig Lifecycle Simulator gathers no information. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Identifiable Information (PII)</strong>: No names, emails, IP addresses, or device identifiers.</li>
      <li><strong>Usage or Analytics Data</strong>: No tracking of visits, simulation runs, browser details, or location.</li>
      <li><strong>Input Data</strong>: Parameters like rig cost, hash rate, power consumption, or difficulty settings are processed locally and never sent to servers.</li>
      <li><strong>Cookies or Trackers</strong>: No cookies, localStorage persistence, or third-party analytics (e.g., Google Analytics).</li>
    </ul>
    <p>Your simulations—whether using current Bitcoin data (difficulty ~148 trillion, price ~$88,000, block reward 3.125 BTC)—stay private on your device.</p>

    <h2>3. How the Tool Operates</h2>
    <p>The simulator uses JavaScript for all computations:</p>
    <ul>
      <li><strong>Local Processing</strong>: Inputs are handled in-browser; revenue calculations (hash rate share of rewards) and difficulty compounding occur client-side.</li>
      <li><strong>No Transmission</strong>: Results tables, charts (via Chart.js), and exports happen locally without network requests beyond initial page load.</li>
      <li><strong>External Libraries</strong>: Bootstrap and Chart.js load via CDN for styling and visualization, but these do not track users.</li>
    </ul>
    <p>This ensures <strong>zero data exposure</strong>, ideal for sensitive financial modeling.</p>

    <h2>4. Third-Party Services</h2>
    <p>We avoid data-collecting integrations. CDN-hosted libraries are static and non-tracking. Any external links (e.g., to data sources) open in new tabs under user control.</p>

    <h2>5. Security and User Responsibility</h2>
    <p>Since no data is collected, risks are minimal. Users should:</p>
    <ul>
      <li>Use updated browsers.</li>
      <li>Avoid public devices for sensitive inputs.</li>
    </ul>

    <h2>6. Changes and Contact</h2>
    <p>This policy may update; check the effective date. Questions? Refer to the tool's open-source nature.</p>

    <p class="italic-note">Your privacy is protected by design—<strong>no data leaves your browser</strong>.</p>
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