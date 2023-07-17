<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
</script>

<template>
  <div class="sponsor-topbar">💖 Sponsors</div>
  <div class="sponsor-list">
    <a
      class="sponsor-item"
      href="https://intellibar.app/"
      target="_blank"
      rel="noreferrer"
    >
      <img src="../assets/intellibar.webp" />
    </a>
  </div>
  <div class="sponsor-desc">Electron⚡️Vite is free and open source, made possible by wonderful sponsors.</div>
  <div class="action">
    <a
      class="sponsor"
      href="https://github.com/sponsors/electron-vite"
      target="_blank"
      rel="noreferrer"
    >
      Sponsor Electron⚡️Vite
    </a>
    <a
      class="sponsor"
      href="https://github.com/sponsors/caoxiemeihao"
      target="_blank"
      rel="noreferrer"
    >
      Sponsor 草鞋没号
    </a>
  </div>
</template>

<style scoped>
.sponsor-topbar {
  border-top: 1px solid var(--vp-c-gutter);
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
}

.sponsor-desc {
  padding: 1rem 0;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
}

.sponsor-list {
  display: flex;
  width: 100%;
  justify-content: center;
}

.sponsor-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 10px 30px;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: var(--vp-button-sponsor-border);
  background-color: var(--vp-c-bg-soft);
  background-color: white;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  cursor: pointer;
}

.sponsor-item:hover {
  border-color: var(--vp-button-sponsor-hover-border);
}

.sponsor-item img {
  object-fit: contain;
}

.action {
  display: flex;
  justify-content: center;
  gap: 1rem;
  /* padding-top: 4rem; */
}

.sponsor {
  /* .VPButton */
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  /* .VPButton.medium */
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  /* .VPButton.sponsor */
  border-color: var(--vp-button-sponsor-border);
  color: var(--vp-button-sponsor-text);
  background-color: var(--vp-button-sponsor-bg);
}

.sponsor:hover {
  /* .VPButton.sponsor:hover */
  border-color: var(--vp-button-sponsor-hover-border);
  color: var(--vp-button-sponsor-hover-text);
  background-color: var(--vp-button-sponsor-hover-bg);
}
</style>
