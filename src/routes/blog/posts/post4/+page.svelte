<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Input Parameters Explained | Rig Lifecycle Simulator Blog</title>
  <meta name="description" content="A comprehensive guide to every input parameter in the Rig Lifecycle Simulator and how each affects mining profitability projections." />
  <meta property="og:title" content="Input Parameters Explained | Rig Lifecycle Simulator Blog" />
  <meta property="og:description" content="A comprehensive guide to every input parameter in the Rig Lifecycle Simulator and how each affects mining profitability projections." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Input Parameters Explained</p>
  </div>

  <article class="prose">
    <h1>Input Parameters Explained</h1>
   
    <p class="post-meta">Published: December 27, 2025</p>
   
    <p>The Rig Lifecycle Simulator relies on a set of user-provided inputs to generate accurate profitability projections. Each parameter plays a specific role in modeling real-world mining conditions, from hardware specifications to economic factors. Understanding these inputs enables users to create meaningful simulations tailored to their own rigs and market outlook.</p>
   
    <p>At the core are hardware-related values. Rig cost represents the initial purchase price, serving as the baseline for ROI calculations. Hash rate, measured in terahashes per second, determines the rig's computational power and directly influences revenue—the higher the hash rate, the greater the share of network rewards captured.</p>
   
    <h2>Operational Costs</h2>
    <p>Power consumption in watts and electricity cost per kilowatt-hour are critical for calculating monthly expenses. A typical modern ASIC miner consumes between 3000 and 4000 watts. At $0.12 per kilowatt-hour, this translates to roughly $300–$400 monthly, a fixed cost that remains constant while revenue fluctuates with difficulty.</p>
   
    <h2>Market and Network Factors</h2>
    <p>Coin price converts earned cryptocurrency into dollar revenue. As of late December 2025, Bitcoin trades near $88,000, significantly amplifying returns for efficient rigs. Initial difficulty reflects the current network state—around 148 trillion—and sets the starting point for reward distribution.</p>
   
    <h2>Projection Controls</h2>
    <p>The monthly difficulty increase percentage is one of the most impactful inputs. Users can set conservative (1–2 percent) or aggressive (5+ percent) rates based on historical trends or future expectations. The simulation period offers 24 or 36 months, aligning with typical rig operational lifecycles before major upgrades or obsolescence.</p>
   
    <h2>Advanced Settings</h2>
    <p>Block reward and blocks per day allow customization beyond Bitcoin defaults. The current post-2024 halving reward is 3.125 BTC, with approximately 144 blocks mined daily. Adjusting these supports modeling other proof-of-work chains or hypothetical future halvings.</p>
   
    <p>Accurate inputs lead to reliable outputs. Sourcing real-time difficulty and price data ensures projections reflect current conditions, while varying the difficulty growth rate reveals sensitivity to network expansion.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Where can I find current Bitcoin difficulty?</summary>
      <p>Sites like Blockchain.com or BTC.com provide up-to-date network statistics.</p>
    </details>
    <details>
      <summary>Should I include shipping or taxes in rig cost?</summary>
      <p>Yes, for the most accurate ROI, include the total upfront investment.</p>
    </details>
    <details>
      <summary>How does hash rate unit conversion work?</summary>
      <p>Inputs in TH/s are internally converted to hashes per second for precise reward calculations.</p>
    </details>
   
    <p class="italic-note">Experiment with different input combinations to understand your rig's potential under various market scenarios.</p>
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

  .prose details {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: var(--transition-smooth);
  }

  .prose details[open] {
    background: rgba(108, 70, 117, 0.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--primary-lilac);
    list-style: none;
    padding: 0.5rem 0;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--primary-lilac);
    font-weight: bold;
    display: inline-block;
    width: 1.2em;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--primary-lilac);
    color: var(--color-text-muted);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-text-muted);
    text-align: center;
    margin-top: 3rem;
    font-size: 1.1rem;
  }

  /* Dark mode enhancements (already handled by root variables) */
  @media (prefers-color-scheme: dark) {
    .prose details[open] {
      background: rgba(108, 70, 117, 0.15);
    }
  }
</style>