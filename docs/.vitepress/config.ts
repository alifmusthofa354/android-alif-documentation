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
        items: [
          {
            text: "0.1 Programming Logic",
            link: "/document/Level 1 BEGINNER/Fase 0 Pre-requisites/0.1 Programming Logic",
          },
          {
            text: "0.2 Version Control Basics",
            link: "/document/Level 1 BEGINNER/Fase 0 Pre-requisites/0.2 Version Control Basics",
          },
          {
            text: "0.3 Terminal Command Line",
            link: "/document/Level 1 BEGINNER/Fase 0 Pre-requisites/0.3 Terminal Command Line",
          },
        ],
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
