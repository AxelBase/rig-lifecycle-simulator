<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { simulateROI } from '$lib/simulator';
  import { fade, fly } from 'svelte/transition';

  let monthlyData = [];
  let totalROI = 0;

  $: backUrl = `${base}/`;

  onMount(() => {
    const params = $page.url.searchParams;
    const inputs = {
      rigCost: parseFloat(params.get('rigCost')) || 1000,
      hashRate: parseFloat(params.get('hashRate')) || 100,
      powerConsumption: parseFloat(params.get('powerConsumption')) || 3000,
      electricityCost: parseFloat(params.get('electricityCost')) || 0.1,
      coinPrice: parseFloat(params.get('coinPrice')) || 60000,
      initialDifficulty: parseFloat(params.get('initialDifficulty')) || 1000000000000,
      difficultyIncreasePct: parseFloat(params.get('difficultyIncreasePct')) || 5,
      periodMonths: parseInt(params.get('periodMonths')) || 24,
      blockReward: parseFloat(params.get('blockReward')) || 6.25,
      blocksPerDay: parseFloat(params.get('blocksPerDay')) || 144
    };

    const result = simulateROI(inputs);
    monthlyData = result.monthlyData;
    totalROI = result.totalROI;

    const ctx = document.getElementById('roiChart')?.getContext('2d');
    if (ctx && typeof Chart !== 'undefined') {
      const isDark = document.body.dataset.bsTheme === 'dark';
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: monthlyData.map(d => `Month ${d.month}`),
          datasets: [{
            label: 'Cumulative Profit ($)',
            data: monthlyData.map(d => d.cumulativeProfit),
            borderColor: '#AC8EB8',
            backgroundColor: 'rgba(172, 142, 184, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { grid: { color: 'rgba(255,255,255,0.05)' } },
            x: { grid: { display: false } }
          }
        }
      });
    }
  });
</script>

<main class="container py-5">
  <div class="d-flex justify-content-between align-items-center mb-4" in:fade>
    <h1 class="fw-bold" style="color: var(--primary-lilac);">Simulation Results</h1>
    <a href={backUrl} class="btn btn-outline-secondary rounded-pill px-4 hover-back">
      <i class="bi bi-arrow-left me-2"></i>Edit Parameters
    </a>
  </div>

  <div class="glass-card p-4 mb-4 result-summary" in:fly={{ y: 20, duration: 800 }}>
    <div class="row text-center g-4">
      <div class="col-md-6">
        <p class="text-muted small text-uppercase mb-1 fw-bold">Projected ROI</p>
        <h2 class="display-5 fw-bold {(totalROI * 100) >= 0 ? 'text-success' : 'text-danger'}">
          {(totalROI * 100).toFixed(2)}%
        </h2>
      </div>
      <div class="col-md-6">
        <p class="text-muted small text-uppercase mb-1 fw-bold">Breakeven Status</p>
        <h2 class="display-5 fw-bold" style="color: var(--primary-lilac);">
          {totalROI >= 0 ? 'Reached' : 'In Progress'}
        </h2>
      </div>
    </div>
  </div>

  <div class="glass-card p-4 mb-5 chart-container-glow" in:fade={{ delay: 300 }}>
    <div style="height: 350px;">
      <canvas id="roiChart"></canvas>
    </div>
  </div>

  <h3 class="fw-bold mb-3" style="color: var(--primary-lilac);">Detailed Breakdown</h3>
  <div class="glass-card overflow-hidden" in:fly={{ y: 30, duration: 800, delay: 500 }}>
    <div class="table-responsive">
      <table class="table table-hover mb-0">
        <thead class="bg-lilac-gradient text-white">
          <tr>
            <th class="px-4 py-3">Month</th>
            <th class="py-3">Difficulty</th>
            <th class="py-3">Revenue</th>
            <th class="py-3">Net Profit</th>
            <th class="px-4 py-3 text-end">Cumulative</th>
          </tr>
        </thead>
        <tbody>
          {#each monthlyData as row, i}
            <tr class="align-middle fade-in-row" style="animation-delay: {i * 50}ms">
              <td class="px-4 fw-bold">{row.month}</td>
              <td class="font-monospace small">{row.difficulty.toExponential(2)}</td>
              <td>${row.revenue.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
              <td class="fw-bold {row.netProfit >= 0 ? 'text-success' : 'text-danger'}">
                ${row.netProfit.toFixed(2)}
              </td>
              <td class="px-4 fw-bold text-end {row.cumulativeProfit >= 0 ? 'text-success' : 'text-danger'}">
                ${row.cumulativeProfit.toLocaleString(undefined, {minimumFractionDigits: 2})}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</main>

<style>
  .bg-lilac-gradient {
    background: linear-gradient(90deg, var(--primary-lilac), #9d7bb0);
  }

  .result-summary {
    border-left: 5px solid var(--primary-lilac);
    box-shadow: 0 0 30px rgba(172, 142, 184, 0.1) !important;
  }

  .chart-container-glow:hover {
    box-shadow: 0 0 40px rgba(172, 142, 184, 0.15) !important;
    transition: box-shadow 0.5s ease;
  }

  .hover-back:hover {
    background-color: var(--primary-lilac);
    color: white !important;
    border-color: var(--primary-lilac);
    transform: translateX(-5px);
  }

  .fade-in-row {
    animation: fadeIn 0.5s ease forwards;
    opacity: 0;
    transform: translateY(10px);
  }

  @keyframes fadeIn {
    to { opacity: 1; transform: translateY(0); }
  }

  .table tr {
    transition: background-color 0.2s ease;
  }

  .table tr:hover {
    background-color: rgba(172, 142, 184, 0.05) !important;
  }
</style>