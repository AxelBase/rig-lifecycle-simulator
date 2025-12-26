<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
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

      <div class="position-relative ms-2" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn-coffee d-flex align-items-center gap-2" on:click={toggleDropdown} aria-label="Support us">
          <i class="bi bi-cup-hot-fill"></i>
          <span class="d-none d-md-inline">Coffee</span>
        </button>
        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass-card p-2" transition:slide>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" class="donation-link" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
    <span>&copy; {new Date().getFullYear()} AxelBase Rig Simulator</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
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
  .btn-coffee { background: #ffdd00; color: #3d3d3d; border: none; border-radius: 50px; padding: 5px 15px; font-weight: 700; font-size: 0.9rem; }
  .dropdown-menu-custom { position: absolute; top: 110%; left: 0; min-width: 100px; display: flex; flex-direction: column; z-index: 1000; }
  .donation-link { padding: 8px; text-align: center; color: var(--primary-lilac); text-decoration: none; font-weight: bold; border-radius: 10px; }
  .donation-link:hover { background: var(--primary-lilac); color: white; }
  .nav-link-custom { padding: 8px 15px; color: var(--color-text-muted); font-weight: 600; text-decoration: none; transition: 0.3s; }
  .nav-link-custom:hover { color: var(--primary-lilac); }
  .footer-link { text-decoration: none; color: inherit; }
  .footer-link:hover { color: var(--primary-lilac); }
</style>