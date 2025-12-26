<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding the ROI Calculation Model | Rig Lifecycle Simulator Blog</title>
  <meta name="description" content="Dive into the core mathematics behind the Rig Lifecycle Simulator's ROI projections, including revenue from block rewards and cost deductions." />
  <meta property="og:title" content="Understanding the ROI Calculation Model | Rig Lifecycle Simulator Blog" />
  <meta property="og:description" content="Dive into the core mathematics behind the Rig Lifecycle Simulator's ROI projections, including revenue from block rewards and cost deductions." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding the ROI Calculation Model</p>
  </div>

  <article class="prose">
    <h1>Understanding the ROI Calculation Model</h1>
   
    <p class="post-meta">Published: December 27, 2025</p>
   
    <p>The Rig Lifecycle Simulator employs a precise mathematical model to forecast mining profitability. At its heart is the calculation of monthly revenue derived from block rewards, adjusted for network difficulty, minus ongoing electricity costs. This approach provides a clear picture of how return on investment evolves over time in a dynamic mining environment.</p>
   
    <p>Revenue begins with the rig's share of daily block rewards. With Bitcoin producing approximately 144 blocks per day and a current subsidy of 3.125 BTC per block, the total daily issuance is around 450 BTC. A rig's contribution is proportional to its hash rate relative to the entire network. For example, a 200 TH/s rig against a network difficulty of 148 trillion captures a tiny but valuable fraction, translating to significant dollar revenue when Bitcoin trades near $88,000.</p>
   
    <h2>The Revenue Formula Explained</h2>
    <p>Daily rewards are computed as (rig hash rate in hashes per second divided by network difficulty) multiplied by total daily blocks and the block reward. Hash rate in TH/s is converted by multiplying by one trillion to match the scale. This yields coins earned per day, multiplied by 30 for monthly figures and then by coin price for dollar revenue.</p>
   
    <h2>Accounting for Costs</h2>
    <p>Electricity costs are calculated straightforwardly: power consumption in watts divided by 1000 to kilowatts, multiplied by 24 hours, 30 days, and the user's electricity rate. This fixed monthly expense is subtracted from revenue to get net profit. Over time, as difficulty compounds monthly, revenue declines while costs remain constant, often leading to breakeven points or losses in conservative scenarios.</p>
   
    <h2>Cumulative Profit and ROI</h2>
    <p>Net profits are accumulated month by month to track total earnings above costs. Final ROI is derived by subtracting the initial rig cost from cumulative profit, then dividing by the rig cost. Positive values indicate profit multiples, while negative shows loss percentages. In current conditions, efficient rigs often show extraordinary ROI due to high coin prices outweighing difficulty growth.</p>
   
    <h2>Why This Model Matters</h2>
    <p>Unlike simplistic daily calculators, this monthly compounding captures real-world trends where difficulty adjustments erode margins. It helps miners anticipate when a rig pays for itself and whether it remains viable through future halvings or price fluctuations.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>How accurate is the revenue share calculation?</summary>
      <p>It assumes proportional reward distribution based on hash rate, matching solo mining or pool payouts before fees.</p>
    </details>
    <details>
      <summary>Does it include transaction fees?</summary>
      <p>The model focuses on block subsidies; transaction fees can add variability but are often minor compared to the subsidy.</p>
    </details>
    <details>
      <summary>Can ROI be negative?</summary>
      <p>Yes, if cumulative costs exceed revenue, common in high-difficulty-growth or low-price scenarios.</p>
    </details>
   
    <p class="italic-note">Use the simulator to test different assumptions and refine your mining strategy.</p>
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