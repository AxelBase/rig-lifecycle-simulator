<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Limitations and Assumptions of the Model | Rig Lifecycle Simulator Blog</title>
  <meta name="description" content="An honest look at what the Rig Lifecycle Simulator includes and excludes in its mining profitability projections." />
  <meta property="og:title" content="Limitations and Assumptions of the Model | Rig Lifecycle Simulator Blog" />
  <meta property="og:description" content="An honest look at what the Rig Lifecycle Simulator includes and excludes in its mining profitability projections." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Limitations and Assumptions of the Model</p>
  </div>

  <article class="prose">
    <h1>Limitations and Assumptions of the Model</h1>
   
    <p class="post-meta">Published: December 27, 2025</p>
   
    <p>While the Rig Lifecycle Simulator provides valuable insights into mining profitability, it operates under specific assumptions that users should understand. These simplifications make the tool accessible and fast but necessarily omit certain real-world complexities for the sake of clarity and performance.</p>
   
    <p>The model assumes constant coin price throughout the projection period. In reality, cryptocurrency prices fluctuate dramatically, potentially amplifying or eroding profits far beyond difficulty changes. Similarly, electricity costs remain fixed, ignoring potential rate changes or hosting contract variations.</p>
   
    <h2>Hardware and Operational Simplifications</h2>
    <p>Hardware degradation is not modeled. Over years, efficiency may decline due to dust, heat, or component wear, increasing effective power use or reducing hash rate. The simulator treats rig performance as constant from day one to the final month.</p>
   
    <h2>Network and Reward Assumptions</h2>
    <p>Only block subsidies are included in revenue calculations—transaction fees, which can vary significantly, are excluded. Pool fees, typically 1–2 percent, are also omitted. The model uses a fixed 144 blocks per day, approximating Bitcoin's ten-minute target without accounting for temporary deviations.</p>
   
    <h2>Scope Limitations</h2>
    <p>External factors like regulatory changes, new mining algorithms, or technological breakthroughs are beyond scope. The linear monthly difficulty increase, while useful for trend analysis, does not capture the actual biweekly adjustments or potential difficulty drops during miner capitulation events.</p>
   
    <h2>Using Results Wisely</h2>
    <p>Projections represent a single scenario based on user inputs. Extreme positive ROI in current conditions reflects today's high prices and efficient hardware, not guaranteed future performance. Treat outputs as directional guides rather than precise predictions, testing multiple scenarios to understand risk ranges.</p>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why exclude transaction fees?</summary>
      <p>They vary unpredictably; focusing on subsidies provides a stable baseline.</p>
    </details>
    <details>
      <summary>Does it account for halvings?</summary>
      <p>Users can manually adjust block reward for future halvings in long projections.</p>
    </details>
    <details>
      <summary>Can the model predict exact profits?</summary>
      <p>No—too many variables exist; it offers informed estimates under defined assumptions.</p>
    </details>
   
    <p class="italic-note">Combine simulator results with broader research for comprehensive mining decisions.</p>
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