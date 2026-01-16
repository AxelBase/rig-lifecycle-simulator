<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  let isDropdownOpen = false;

  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1050;">
  <nav class="container glass-card rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
    <div class="d-flex align-items-center gap-2">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" style="height: 32px;" />
        <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--primary-lilac);">AxelBase</span>
      </a>

      <button
        class="theme-btn ms-2"
        on:click={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <i class="bi {isDarkMode ? 'bi-sun-fill text-warning' : 'bi-moon-stars-fill text-primary'}"></i>
      </button>

      <!-- Buy Me a Coffee + Bitcoin Dropdown -->
      <div class="position-relative ms-2" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="btn-coffee d-flex align-items-center gap-2 shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support us"
        >
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline fw-semibold">Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown glass-card p-2 shadow"
            transition:slide
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              class="donation-link"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              class="donation-link"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              class="donation-link"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Big Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              class="donation-link custom-amount"
              on:click={closeDropdown}
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              class="donation-link custom-amount bitcoin-link"
              on:click={closeDropdown}
            >
              <i class="bi bi-currency-bitcoin me-1"></i> Bitcoin
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav d-none d-lg-flex align-items-center gap-2">
      <li><a class="nav-link-custom" href="{base}/">Home</a></li>
      <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
      <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
      <li class="ms-2"><a class="btn btn-primary btn-sm px-4" href="{base}/blog">Blog</a></li>
    </ul>

    <button class="btn d-lg-none p-0 border-0" aria-label="Open menu" style="color: var(--primary-lilac)">
      <i class="bi bi-grid-fill fs-2"></i>
    </button>
  </nav>
</header>

<main class="mt-5 pt-4">
  <slot />
</main>

<footer class="glass-card rounded-0 border-top py-3 mt-auto">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>© {new Date().getFullYear()} AxelBase Rig Simulator</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .btn-coffee {
    background: var(--primary-lilac);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 6px 16px;
    font-weight: 600;
    font-size: 0.92rem;
    transition: var(--transition-smooth);
  }

  .btn-coffee:hover {
    background: var(--primary-lilac-hover);
    transform: translateY(-1px);
  }

  .bmac-dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    min-width: 220px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    z-index: 1000;
  }

  .donation-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    color: var(--color-text-main);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: var(--transition-smooth);
  }

  .donation-link:hover {
    background: rgba(108, 70, 117, 0.12);
    color: var(--primary-lilac);
    padding-left: 22px;
  }

  .donation-link .amount {
    font-weight: 700;
    color: var(--primary-lilac);
    min-width: 42px;
  }

  .donation-link.custom-amount {
    justify-content: center;
    font-weight: 600;
    border-top: 1px solid var(--glass-border);
    margin-top: 4px;
    padding: 12px;
  }

  .bitcoin-link {
    color: #f7931a !important;
  }

  .bitcoin-link:hover {
    background: rgba(247, 147, 26, 0.08) !important;
    color: #f7931a !important;
  }

  .nav-link-custom {
    padding: 8px 15px;
    color: var(--color-text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s;
  }

  .nav-link-custom:hover {
    color: var(--primary-lilac);
  }

  .footer-link {
    text-decoration: none;
    color: inherit;
  }

  .footer-link:hover {
    color: var(--primary-lilac);
  }

  .theme-btn {
    background: var(--input-bg);
    border: 1px solid var(--glass-border);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-smooth);
  }
</style>