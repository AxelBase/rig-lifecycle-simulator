<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is the Rig Lifecycle Simulator?', description: 'An introduction to this client-side tool for projecting cryptocurrency mining rig profitability over 2–3 years.' },
    { href: '/blog/posts/post2', title: 'Understanding the ROI Calculation Model', description: 'Explore the core formula: how hash rate, difficulty, block rewards, and costs combine to compute monthly revenue and net profit.' },
    { href: '/blog/posts/post3', title: 'How Monthly Difficulty Increase Affects Projections', description: 'Learn why compounding difficulty growth is applied monthly and its impact on long-term mining rewards.' },
    { href: '/blog/posts/post4', title: 'Input Parameters Explained', description: 'A breakdown of key inputs like hash rate (TH/s), power consumption, electricity cost, coin price, and initial difficulty.' },
    { href: '/blog/posts/post5', title: 'Interpreting Simulation Results', description: 'Guidance on reading the monthly table, cumulative profit chart, and final ROI summary for informed decisions.' },
    { href: '/blog/posts/post6', title: 'Using Realistic Data for Accurate Simulations', description: 'Tips on sourcing current Bitcoin network difficulty, block reward, and price for meaningful 2025–2028 projections.' },
    { href: '/blog/posts/post7', title: 'Limitations and Assumptions of the Model', description: 'Discussion of constant assumptions (e.g., no hardware degradation, fixed coin price) and how they influence outcomes.' },
  ];
</script>

<svelte:head>
  <title>Blog | Rig Lifecycle Simulator Insights</title>
  <meta name="description" content="Articles and guides on using the Rig Lifecycle Simulator to model mining rig ROI under changing difficulty conditions." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Rig Lifecycle Simulator Insights</h1>
    <p class="subtitle">
      In-depth articles explaining the technical mechanics of the simulator, calculation methods, and best practices for projecting mining profitability in real-world scenarios.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: var(--primary-lilac);
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition-smooth);
    box-shadow: var(--glass-shadow);
  }

  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(108, 70, 117, 0.15);
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.5rem;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--primary-lilac);
    margin-bottom: 0.75rem;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .post-card:hover .post-title {
    color: var(--primary-lilac-hover);
  }

  .post-description {
    color: var(--color-text-muted);
    flex-grow: 1;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .read-more {
    color: var(--primary-lilac);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-smooth);
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
    color: var(--primary-lilac-hover);
  }
</style>