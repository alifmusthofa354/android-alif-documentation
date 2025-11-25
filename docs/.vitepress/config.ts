import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "Android",
  description: "Android Alif Private Documentation.",

  themeConfig: {
    darkModeSwitchLabel: "Mode Gelap",

    // Menambahkan sosial link di header
    socialLinks: [
      {
        icon: "github",
        link: "",
      },
      // Anda bisa menambahkan ikon lain seperti 'twitter', 'linkedin', dll.
    ],

    // Tombol untuk mengedit halaman
    editLink: {
      pattern: "",
      text: "Edit halaman ini di GitHub",
    },

    sidebar: [
      {
        text: "Get Started",
        collapsed: true,
        items: [{ text: "Roadmps", link: "/document/getstarted/roadmaps" }],
      },
      {
        text: "Fase 0 Pre-requisites",
        collapsed: true,
        items: [{ text: "Roadmps", link: "/document/getstarted/roadmaps" }],
      },
      {
        text: "Fase 1 Programming Fundamentals",
        collapsed: true,
        items: [{ text: "Roadmps", link: "/document/getstarted/roadmaps" }],
      },
      {
        text: "Fase 2 Android Basics",
        collapsed: true,
        items: [{ text: "Roadmps", link: "/document/getstarted/roadmaps" }],
      },
      {
        text: "Fase 3 Jetpack Compose Basics",
        collapsed: true,
        items: [{ text: "Roadmps", link: "/document/getstarted/roadmaps" }],
      },
    ],

    // Konfigurasi sidebar kanan (outline/daftar isi) yang diperbaiki
    outline: {
      level: [2, 6], // <--- 'level' harus berada di dalam objek
      label: "Daftar Isi Halaman",
    },

    search: {
      provider: "local",
    },

    footer: {
      message: "Dirilis di bawah Lisensi MIT.",
      copyright: "Hak Cipta © 2025, Muhammad Alif Musthofa - Chat GPT",
    },
  },
});
