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
        items: [{ text: "Roadmaps", link: "/document/getstarted/roadmaps" }],
      },
      {
        text: "LEVEL 1 BEGINNER",
        collapsed: true,
        items: [
          {
            text: "Fase 0 Pre-requisites",
            collapsed: true,
            items: [
              {
                text: "0.1 Programming Logic",
                link: "/document/LEVEL 1 BEGINNER/Fase 0 Pre-requisites/0.1 Programming Logic",
              },
              {
                text: "0.2 Version Control Basics",
                link: "/document/LEVEL 1 BEGINNER/Fase 0 Pre-requisites/0.2 Version Control Basics",
              },
              {
                text: "0.3 Terminal Command Line",
                link: "/document/LEVEL 1 BEGINNER/Fase 0 Pre-requisites/0.3 Terminal Command Line",
              },
            ],
          },
          {
            text: "Fase 1 Programming Fundamentals",
            collapsed: true,
            items: [
              {
                text: "1.1 Bahasa Pemrograman Kotlin Dasar",
                link: "/document/LEVEL 1 BEGINNER/Fase 1 Programming Fundamentals/1.1 Bahasa Pemrograman Kotlin Dasar",
              },
              {
                text: "1.2 Kotlin Advanced",
                link: "/document/LEVEL 1 BEGINNER/Fase 1 Programming Fundamentals/1.2 Kotlin Advanced",
              },
              {
                text: "1.3 Collections & Generics",
                link: "/document/LEVEL 1 BEGINNER/Fase 1 Programming Fundamentals/1.3 Collections & Generics",
              },
              {
                text: "1.4 OOP Concepts",
                link: "/document/LEVEL 1 BEGINNER/Fase 1 Programming Fundamentals/1.4 OOP Concepts",
              },
              {
                text: "1.5 Scope Functions",
                link: "/document/LEVEL 1 BEGINNER/Fase 1 Programming Fundamentals/1.5 Scope Functions",
              },
            ],
          },
          {
            text: "Fase 2 Android Basics",
            collapsed: true,
            items: [
              {
                text: "2.1 Setup Environment",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.1 Setup Environment",
              },
              {
                text: "2.2 Android Project Structure",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.2 Android Project Structure",
              },
              {
                text: "2.3 Activity & Lifecycle",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.3 Activity & Lifecycle",
              },
              {
                text: "2.4 Intent & Navigation",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.4 Intent & Navigation",
              },
              {
                text: "2.5 Resources & Assets",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.5 Resources & Assets",
              },
              {
                text: "2.6 Permissions Basic",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.6 Permissions Basic",
              },
              {
                text: "2.7 Modern Permissions Android 13-15",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.7 Modern Permissions Android 13-15",
              },
              {
                text: "2.8 Debugging",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.8 Debugging",
              },
              {
                text: "2.9 Fragments",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.9 Fragments",
              },
              {
                text: "2.10 Configuration Changes",
                link: "/document/LEVEL 1 BEGINNER/Fase 2 Android Basics/2.10 Configuration Changes",
              },
            ],
          },
          {
            text: "Fase 3 Jetpack Compose Basics",
            collapsed: true,
            items: [
              {
                text: "3.1 Compose Fundamentals",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.1 Compose Fundamentals",
              },
              {
                text: "3.2 Basic Composables",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.2 Basic Composables",
              },
              {
                text: "3.3 Layouts & Modifiers",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.3 Layouts & Modifiers",
              },
              {
                text: "3.4 State Management",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.4 State Management",
              },
              {
                text: "3.5 Material Design 3",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.5 Material Design 3",
              },
              {
                text: "3.6 User Input",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.6 User Input",
              },
              {
                text: "3.7 Lists & Grids",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.7 Lists & Grids",
              },
              {
                text: "3.8 Compose Previews",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.8 Compose Previews",
              },
              {
                text: "3.9 Dialogs Snackbar BottomSheet",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.9 Dialogs Snackbar BottomSheet",
              },
              {
                text: "3.10 Custom Fonts & Icons",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.10 Custom Fonts & Icons",
              },
              {
                text: "3.11 Scaffold & AppBar",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/3.11 Scaffold & AppBar",
              },
              {
                text: "gpt",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/ui-gpt",
              },
              {
                text: "claude-table",
                link: "/document/LEVEL 1 BEGINNER/Fase 3 Jetpack Compose Basics/ui-claudetable",
              },
            ],
          },
        ],
      },
      {
        text: "LEVEL 2 INTERMEDIATE",
        collapsed: true,
        items: [
          {
            text: "Fase 4 Architecture & Design Patterns",
            collapsed: true,
            items: [
              {
                text: "4.1 MVVM Architecture",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.1 MVVM Architecture",
              },
              {
                text: "4.2 Repository Pattern",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.2 Repository Pattern",
              },
              {
                text: "4.3 Use Cases",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.3 Use Cases",
              },
              {
                text: "4.4 Clean Architecture",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.4 Clean Architecture",
              },
              {
                text: "4.5 SOLID Principles",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.5 SOLID Principles",
              },
              {
                text: "4.6 Design Patterns",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 4 Architecture & Design Patterns/4.6 Design Patterns",
              },
            ],
          },
          {
            text: "Fase 5 Networking & API",
            collapsed: true,
            items: [
              {
                text: "5.1 REST API Basics",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.1 REST API Basics",
              },
              {
                text: "5.2 Retrofit",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.2 Retrofit",
              },
              {
                text: "5.3 JSON Serialization",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.3 JSON Serialization",
              },
              {
                text: "5.4 Error Handling",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.4 Error Handling",
              },
              {
                text: "5.5 Advanced Networking",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.5 Advanced Networking",
              },
              {
                text: "5.6 Image Loading",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.6 Image Loading",
              },
              {
                text: "5.7 API Authentication",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.7 API Authentication",
              },
              {
                text: "5.8 Offline-First",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.8 Offline-First",
              },
              {
                text: "5.9 GraphQL Optional",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.9 GraphQL Optional",
              },
              {
                text: "5.10 Real-time Communication",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 5 Networking & API/5.10 Real-time Communication",
              },
            ],
          },
          {
            text: "Fase 6 Local Data & Storage",
            collapsed: true,
            items: [
              {
                text: "6.1 Room Database",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 6 Local Data & Storage/6.1 Room Database",
              },
              {
                text: "6.2 DataStore",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 6 Local Data & Storage/6.2 DataStore",
              },
              {
                text: "6.3 Room Relations",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 6 Local Data & Storage/6.3 Room Relations",
              },
              {
                text: "6.4 Migration",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 6 Local Data & Storage/6.4 Migration",
              },
              {
                text: "6.5 File Storage",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 6 Local Data & Storage/6.5 File Storage",
              },
            ],
          },
          {
            text: "Fase 7 Asynchronous Programming",
            collapsed: true,
            items: [
              {
                text: "7.1 Kotlin Coroutines",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.1 Kotlin Coroutines",
              },
              {
                text: "7.2 Coroutine Dispatchers",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.2 Coroutine Dispatchers",
              },
              {
                text: "7.3 Kotlin Flow",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.3 Kotlin Flow",
              },
              {
                text: "7.4 Flow Operators",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.4 Flow Operators",
              },
              {
                text: "7.5 Exception Handling",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.5 Exception Handling",
              },
              {
                text: "7.6 Cancellability & Concurrency",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7 Asynchronous Programming/7.6 Cancellability & Concurrency",
              },
            ],
          },
          {
            text: "Fase 7.5 Additional Jetpack Components",
            collapsed: true,
            items: [
              {
                text: "7.7 Paging 3",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.5 Additional Jetpack Components/7.7 Paging 3",
              },
              {
                text: "7.8 ViewModel SavedStateHandle",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.5 Additional Jetpack Components/7.8 ViewModel SavedStateHandle",
              },
              {
                text: "7.9 Lifecycle Components",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.5 Additional Jetpack Components/7.9 Lifecycle Components",
              },
              {
                text: "7.10 WebView & Chrome Custom Tabs",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.5 Additional Jetpack Components/7.10 WebView & Chrome Custom Tabs",
              },
            ],
          },
          {
            text: "Fase 7.75 Data Validation & Error Handling",
            collapsed: true,
            items: [
              {
                text: "7.11 Input Validation",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.11 Input Validation",
              },
              {
                text: "7.12 Error States",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.12 Error States",
              },
              {
                text: "7.13 Logging Strategy",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.13 Logging Strategy",
              },
              {
                text: "7.14 Crash Handling",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.14 Crash Handling",
              },
              {
                text: "7.15 Coroutine Exception",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.15 Coroutine Exception",
              },
              {
                text: "7.16 ANR Prevention",
                link: "/document/LEVEL 2 INTERMEDIATE/Fase 7.75 Data Validation & Error Handling/7.16 ANR Prevention",
              },
            ],
          },
        ],
      },
      {
        text: "LEVEL 3 ADVANCED",
        collapsed: true,
        items: [
          {
            text: "Fase 8 Dependency Injection",
            collapsed: true,
            items: [
              {
                text: "8.1 DI Concepts",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.1 DI Concepts",
              },
              {
                text: "8.2 Hilt Setup",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.2 Hilt Setup",
              },
              {
                text: "8.3 Hilt Modules",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.3 Hilt Modules",
              },
              {
                text: "8.4 Hilt Scopes",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.4 Hilt Scopes",
              },
              {
                text: "8.5 Testing with Hilt",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.5 Testing with Hilt",
              },
              {
                text: "8.6 KSP Kotlin Symbol Processing",
                link: "/document/LEVEL 3 ADVANCED/Fase 8 Dependency Injection/8.6 KSP Kotlin Symbol Processing",
              },
            ],
          },
          {
            text: "Fase 9 Advanced Compose",
            collapsed: true,
            items: [
              {
                text: "9.1 Navigation Compose",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.1 Navigation Compose",
              },
              {
                text: "9.2 Navigation State Restoration",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.2 Navigation State Restoration",
              },
              {
                text: "9.3 Side Effects",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.3 Side Effects",
              },
              {
                text: "9.4 State Hoisting Advanced",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.4 State Hoisting Advanced",
              },
              {
                text: "9.5 Custom Layouts",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.5 Custom Layouts",
              },
              {
                text: "9.6 Animations",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.6 Animations",
              },
              {
                text: "9.7 Canvas & Graphics",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.7 Canvas & Graphics",
              },
              {
                text: "9.8 Theming & Styling",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.8 Theming & Styling",
              },
              {
                text: "9.9 Accessibility",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.9 Accessibility",
              },
              {
                text: "9.10 State Hoisting",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.10 State Hoisting",
              },
              {
                text: "9.11 CompositionLocal",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.11 CompositionLocal",
              },
              {
                text: "9.12 Compose Stability",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.12 Compose Stability",
              },
              {
                text: "9.13 Graphics Layer Optimization",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.13 Graphics Layer Optimization",
              },
              {
                text: "9.14 Navigation Component View-based",
                link: "/document/LEVEL 3 ADVANCED/Fase 9 Advanced Compose/9.14 Navigation Component View-based",
              },
            ],
          },
          {
            text: "Fase 10 Testing",
            collapsed: true,
            items: [
              {
                text: "10.1 Unit Testing",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.1 Unit Testing",
              },
              {
                text: "10.2 Mocking",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.2 Mocking",
              },
              {
                text: "10.3 Flow Testing",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.3 Flow Testing",
              },
              {
                text: "10.4 Compose Testing",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.4 Compose Testing",
              },
              {
                text: "10.5 Test Architecture",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.5 Test Architecture",
              },
              {
                text: "10.6 Integration Testing",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.6 Integration Testing",
              },
              {
                text: "10.7 Screenshot Testing",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.7 Screenshot Testing",
              },
              {
                text: "10.8 Test Coverage",
                link: "/document/LEVEL 3 ADVANCED/Fase 10 Testing/10.8 Test Coverage",
              },
            ],
          },
          {
            text: "Fase 11 Background Work",
            collapsed: true,
            items: [
              {
                text: "11.1 WorkManager Basic",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.1 WorkManager Basic",
              },
              {
                text: "11.2 WorkManager Advanced",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.2 WorkManager Advanced",
              },
              {
                text: "11.3 Expedited Jobs",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.3 Expedited Jobs",
              },
              {
                text: "11.4 Foreground Services",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.4 Foreground Services",
              },
              {
                text: "11.5 Foreground Service Restrictions",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.5 Foreground Service Restrictions",
              },
              {
                text: "11.6 Notifications",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.6 Notifications",
              },
              {
                text: "11.7 Firebase Cloud Messaging",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.7 Firebase Cloud Messaging",
              },
              {
                text: "11.8 Deep Links & App Links",
                link: "/document/LEVEL 3 ADVANCED/Fase 11 Background Work/11.8 Deep Links & App Links",
              },
            ],
          },
          {
            text: "Fase 11.5 Media & Camera",
            collapsed: true,
            items: [
              {
                text: "11.9 CameraX",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.5 Media & Camera/11.9 CameraX",
              },
              {
                text: "11.10 ExoPlayer Media3",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.5 Media & Camera/11.10 ExoPlayer Media3",
              },
              {
                text: "11.11 MediaStore",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.5 Media & Camera/11.11 MediaStore",
              },
            ],
          },
          {
            text: "Fase 11.75 Data Sync & Offline-First",
            collapsed: true,
            items: [
              {
                text: "11.12 Offline-First Architecture",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.75 Data Sync & Offline-First/11.12 Offline-First Architecture",
              },
              {
                text: "11.13 Conflict Resolution",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.75 Data Sync & Offline-First/11.13 Conflict Resolution",
              },
              {
                text: "11.14 Background Sync",
                link: "/document/LEVEL 3 ADVANCED/Fase 11.75 Data Sync & Offline-First/11.14 Background Sync",
              },
            ],
          },
          {
            text: "Fase 12 MVI Architecture",
            collapsed: true,
            items: [
              {
                text: "12.1 MVI Concepts",
                link: "/document/LEVEL 3 ADVANCED/Fase 12 MVI Architecture/12.1 MVI Concepts",
              },
              {
                text: "12.2 State Management",
                link: "/document/LEVEL 3 ADVANCED/Fase 12 MVI Architecture/12.2 State Management",
              },
              {
                text: "12.3 Intent Handling",
                link: "/document/LEVEL 3 ADVANCED/Fase 12 MVI Architecture/12.3 Intent Handling",
              },
              {
                text: "12.4 MVI Implementation",
                link: "/document/LEVEL 3 ADVANCED/Fase 12 MVI Architecture/12.4 MVI Implementation",
              },
            ],
          },
        ],
      },
      {
        text: "LEVEL 4 EXPERT",
        collapsed: true,
        items: [
          {
            text: "Fase 13 Performance & Optimization",
            collapsed: true,
            items: [
              {
                text: "13.1 App Startup",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.1 App Startup",
              },
              {
                text: "13.2 Baseline Profiles",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.2 Baseline Profiles",
              },
              {
                text: "13.3 Memory Management",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.3 Memory Management",
              },
              {
                text: "13.4 Compose Performance",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.4 Compose Performance",
              },
              {
                text: "13.5 ProGuard R8",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.5 ProGuard R8",
              },
              {
                text: "13.6 Image Optimization",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.6 Image Optimization",
              },
              {
                text: "13.7 Network Optimization",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.7 Network Optimization",
              },
              {
                text: "13.8 Battery Optimization",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.8 Battery Optimization",
              },
              {
                text: "13.9 ML Kit & AI Integration",
                link: "/document/LEVEL 4 EXPERT/Fase 13 Performance & Optimization/13.9 ML Kit & AI Integration",
              },
            ],
          },
          {
            text: "Fase 14 Modularization",
            collapsed: true,
            items: [
              {
                text: "14.1 Module Strategy",
                link: "/document/LEVEL 4 EXPERT/Fase 14 Modularization/14.1 Module Strategy",
              },
              {
                text: "14.2 Gradle Configuration",
                link: "/document/LEVEL 4 EXPERT/Fase 14 Modularization/14.2 Gradle Configuration",
              },
              {
                text: "14.3 Module Dependencies",
                link: "/document/LEVEL 4 EXPERT/Fase 14 Modularization/14.3 Module Dependencies",
              },
              {
                text: "14.4 Dynamic Feature",
                link: "/document/LEVEL 4 EXPERT/Fase 14 Modularization/14.4 Dynamic Feature",
              },
            ],
          },
          {
            text: "Fase 14.5 Internationalization & Localization",
            collapsed: true,
            items: [
              {
                text: "14.5 Multi-language Support",
                link: "/document/LEVEL 4 EXPERT/Fase 14.5 Internationalization & Localization/14.5 Multi-language Support",
              },
              {
                text: "14.6 RTL Support",
                link: "/document/LEVEL 4 EXPERT/Fase 14.5 Internationalization & Localization/14.6 RTL Support",
              },
              {
                text: "14.7 Date & Number Formatting",
                link: "/document/LEVEL 4 EXPERT/Fase 14.5 Internationalization & Localization/14.7 Date & Number Formatting",
              },
            ],
          },
          {
            text: "Fase 15 Security",
            collapsed: true,
            items: [
              {
                text: "15.1 Data Encryption",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.1 Data Encryption",
              },
              {
                text: "15.2 Android Keystore",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.2 Android Keystore",
              },
              {
                text: "15.3 Biometric Auth",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.3 Biometric Auth",
              },
              {
                text: "15.4 Network Security",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.4 Network Security",
              },
              {
                text: "15.5 Code Obfuscation",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.5 Code Obfuscation",
              },
              {
                text: "15.6 API Key Security",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.6 API Key Security",
              },
              {
                text: "15.7 Play Integrity & DeviceCheck",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.7 Play Integrity & DeviceCheck",
              },
              {
                text: "15.8 Anti-Tampering",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.8 Anti-Tampering",
              },
              {
                text: "15.9 CTS STS Compliance",
                link: "/document/LEVEL 4 EXPERT/Fase 15 Security/15.9 CTS STS Compliance",
              },
            ],
          },
          {
            text: "Fase 15.5 Analytics & Monitoring",
            collapsed: true,
            items: [
              {
                text: "15.10 Firebase Analytics",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.10 Firebase Analytics",
              },
              {
                text: "15.11 Crashlytics",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.11 Crashlytics",
              },
              {
                text: "15.12 Performance Monitoring",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.12 Performance Monitoring",
              },
              {
                text: "15.13 Remote Config",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.13 Remote Config",
              },
              {
                text: "15.14 Mobile Observability",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.14 Mobile Observability",
              },
              {
                text: "15.15 Performance Baseline",
                link: "/document/LEVEL 4 EXPERT/Fase 15.5 Analytics & Monitoring/15.15 Performance Baseline",
              },
            ],
          },
          {
            text: "Fase 16 CI CD & DevOps",
            collapsed: true,
            items: [
              {
                text: "16.1 Version Control",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.1 Version Control",
              },
              {
                text: "16.2 GitHub Actions",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.2 GitHub Actions",
              },
              {
                text: "16.3 Fastlane",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.3 Fastlane",
              },
              {
                text: "16.4 App Distribution",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.4 App Distribution",
              },
              {
                text: "16.5 Build Variants",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.5 Build Variants",
              },
              {
                text: "16.6 Signed APK Bundle",
                link: "/document/LEVEL 4 EXPERT/Fase 16 CI CD & DevOps/16.6 Signed APK Bundle",
              },
            ],
          },
          {
            text: "Fase 17 Advanced Android Features",
            collapsed: true,
            items: [
              {
                text: "17.1 Large Screens",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.1 Large Screens",
              },
              {
                text: "17.2 Widgets",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.2 Widgets",
              },
              {
                text: "17.3 App Shortcuts",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.3 App Shortcuts",
              },
              {
                text: "17.4 Photo Picker API",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.4 Photo Picker API",
              },
              {
                text: "17.5 Predictive Back",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.5 Predictive Back",
              },
              {
                text: "17.6 Bluetooth & NFC",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.6 Bluetooth & NFC",
              },
              {
                text: "17.7 Sensors & Location",
                link: "/document/LEVEL 4 EXPERT/Fase 17 Advanced Android Features/17.7 Sensors & Location",
              },
            ],
          },
          {
            text: "Fase 17.5 In-App Payments & Monetization",
            collapsed: true,
            items: [
              {
                text: "17.8 Google Play Billing",
                link: "/document/LEVEL 4 EXPERT/Fase 17.5 In-App Payments & Monetization/17.8 Google Play Billing",
              },
              {
                text: "17.9 AdMob",
                link: "/document/LEVEL 4 EXPERT/Fase 17.5 In-App Payments & Monetization/17.9 AdMob",
              },
              {
                text: "17.10 In-App Review",
                link: "/document/LEVEL 4 EXPERT/Fase 17.5 In-App Payments & Monetization/17.10 In-App Review",
              },
            ],
          },
          {
            text: "Fase 17.75 App Quality & Publishing",
            collapsed: true,
            items: [
              {
                text: "17.11 Google Play Console",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.11 Google Play Console",
              },
              {
                text: "17.12 App Signing",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.12 App Signing",
              },
              {
                text: "17.13 Release Tracks",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.13 Release Tracks",
              },
              {
                text: "17.14 Pre-launch Reports",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.14 Pre-launch Reports",
              },
              {
                text: "17.15 App Bundle Delivery",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.15 App Bundle Delivery",
              },
              {
                text: "17.16 Play Store Listing",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.16 Play Store Listing",
              },
              {
                text: "17.17 Play Store Policies",
                link: "/document/LEVEL 4 EXPERT/Fase 17.75 App Quality & Publishing/17.17 Play Store Policies",
              },
            ],
          },
          {
            text: "Fase 18 Kotlin Multiplatform",
            collapsed: true,
            items: [
              {
                text: "18.1 KMP Basics",
                link: "/document/LEVEL 4 EXPERT/Fase 18 Kotlin Multiplatform/18.1 KMP Basics",
              },
              {
                text: "18.2 Shared Logic",
                link: "/document/LEVEL 4 EXPERT/Fase 18 Kotlin Multiplatform/18.2 Shared Logic",
              },
              {
                text: "18.3 Ktor Client",
                link: "/document/LEVEL 4 EXPERT/Fase 18 Kotlin Multiplatform/18.3 Ktor Client",
              },
              {
                text: "18.4 Compose Multiplatform",
                link: "/document/LEVEL 4 EXPERT/Fase 18 Kotlin Multiplatform/18.4 Compose Multiplatform",
              },
            ],
          },
          {
            text: "Fase 19 Specialized Platforms",
            collapsed: true,
            items: [
              {
                text: "19.1 Wear OS",
                link: "/document/LEVEL 4 EXPERT/Fase 19 Specialized Platforms/19.1 Wear OS",
              },
              {
                text: "19.2 Android TV",
                link: "/document/LEVEL 4 EXPERT/Fase 19 Specialized Platforms/19.2 Android TV",
              },
              {
                text: "19.3 Android Auto",
                link: "/document/LEVEL 4 EXPERT/Fase 19 Specialized Platforms/19.3 Android Auto",
              },
            ],
          },
          {
            text: "Fase 20 Soft Skills & Career",
            collapsed: true,
            items: [
              {
                text: "20.1 Git Advanced",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.1 Git Advanced",
              },
              {
                text: "20.2 Code Review",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.2 Code Review",
              },
              {
                text: "20.3 Documentation",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.3 Documentation",
              },
              {
                text: "20.4 Agile Scrum",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.4 Agile Scrum",
              },
              {
                text: "20.5 Technical Writing",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.5 Technical Writing",
              },
              {
                text: "20.6 Open Source",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.6 Open Source",
              },
              {
                text: "20.7 Team Engineering",
                link: "/document/LEVEL 4 EXPERT/Fase 20 Soft Skills & Career/20.7 Team Engineering",
              },
            ],
          },
          {
            text: "Fase 21 Interview Preparation & Career Growth",
            collapsed: true,
            items: [
              {
                text: "21.1 Data Structures",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.1 Data Structures",
              },
              {
                text: "21.2 Algorithms",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.2 Algorithms",
              },
              {
                text: "21.3 System Design General",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.3 System Design General",
              },
              {
                text: "21.4 Mobile System Design",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.4 Mobile System Design",
              },
              {
                text: "21.5 Android-Specific Questions",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.5 Android-Specific Questions",
              },
              {
                text: "21.6 Behavioral Questions",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.6 Behavioral Questions",
              },
              {
                text: "21.7 Portfolio Preparation",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.7 Portfolio Preparation",
              },
              {
                text: "21.8 Salary Negotiation",
                link: "/document/LEVEL 4 EXPERT/Fase 21 Interview Preparation & Career Growth/21.8 Salary Negotiation",
              },
            ],
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
