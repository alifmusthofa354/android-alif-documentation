# Roadmap Android Developer Modern 2025

## LEVEL 1: BEGINNER (0-3 Bulan)

### Fase 0: Pre-requisites (Minggu 0)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 0.1 | Programming Logic | Algoritma dasar, problem solving | - | 3 hari | ⭐⭐⭐ | Foundation berpikir |
| 0.2 | Version Control Basics | Git basics (clone, commit, push, pull) | - | 2 hari | ⭐⭐⭐ | Essential skill |
| 0.3 | Terminal/Command Line | Basic command line navigation | - | 2 hari | ⭐⭐ | Developer workflow |

### Fase 1: Programming Fundamentals (Minggu 1-4)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 1.1 | Bahasa Pemrograman | **Kotlin** (Basics: variables, functions, classes, objects) | Java untuk project baru | 2 minggu | ⭐⭐⭐ | Wajib, fokus syntax Kotlin |
| 1.2 | Kotlin Advanced | Null safety, Extension functions, Higher-order functions, Lambda | - | 1 minggu | ⭐⭐⭐ | Foundation penting |
| 1.3 | Collections & Generics | Kotlin Collections (List, Set, Map), Sequences | Java Collections API | 3 hari | ⭐⭐ | Praktik manipulasi data |
| 1.4 | OOP Concepts | Classes, Inheritance, Interfaces, Abstract, Data classes | - | 4 hari | ⭐⭐⭐ | Fundamental architecture |
| 1.5 | Scope Functions | let, run, with, apply, also | - | 2 hari | ⭐⭐ | Kotlin idioms |

### Fase 2: Android Basics (Minggu 5-8)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 2.1 | Setup Environment | Android Studio (Hedgehog+), Gradle Kotlin DSL | Eclipse, Gradle Groovy | 2 hari | ⭐⭐⭐ | Install & konfigurasi |
| 2.2 | Android Project Structure | Modern folder structure, Gradle basics | - | 2 hari | ⭐⭐ | Memahami struktur project |
| 2.3 | Activity & Lifecycle | Activity lifecycle, savedInstanceState | - | 3 hari | ⭐⭐⭐ | Core concept |
| 2.4 | Intent & Navigation | Explicit/Implicit intent, startActivity | - | 2 hari | ⭐⭐⭐ | Navigasi antar screen |
| 2.5 | Resources & Assets | strings.xml, colors.xml, dimens.xml, drawable | Hardcoded values | 2 hari | ⭐⭐ | Best practices |
| 2.6 | Permissions Basic | Runtime permissions (Android 6+) | Manifest-only permissions | 2 hari | ⭐⭐⭐ | Privacy & security |
| 2.7 | Modern Permissions (Android 13-15) | POST_NOTIFICATIONS, Exact alarm, Foreground service types, Nearby WiFi | Old permission model | 3 hari | ⭐⭐⭐ | 2025 compliance |
| 2.8 | Debugging | Logcat, Breakpoints, Android Profiler | println debugging | 2 hari | ⭐⭐ | Essential skill |
| 2.9 | Fragments | Fragment lifecycle, Fragment transactions | - | 3 hari | ⭐⭐ | Modular UI components |
| 2.10 | Configuration Changes | Handle rotation, multi-window | - | 2 hari | ⭐⭐ | App stability |

### Fase 3: Jetpack Compose Basics (Minggu 9-12)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 3.1 | Compose Fundamentals | **Jetpack Compose**, @Composable functions | XML Layouts, View-based UI | 1 minggu | ⭐⭐⭐ | Future of Android UI |
| 3.2 | Basic Composables | Text, Image, Button, Column, Row, Box | TextView, ImageView, LinearLayout | 4 hari | ⭐⭐⭐ | Building blocks |
| 3.3 | Layouts & Modifiers | LazyColumn, LazyRow, Spacer, Modifier | RecyclerView, ConstraintLayout | 4 hari | ⭐⭐⭐ | UI composition |
| 3.4 | State Management | remember, mutableStateOf, rememberSaveable | findViewById, view binding | 3 hari | ⭐⭐⭐ | Core Compose concept |
| 3.5 | Material Design 3 | Material 3 components, Theme, Colors | Material Design 1 | 3 hari | ⭐⭐⭐ | Modern UI design |
| 3.6 | User Input | TextField, Button, onClick, Checkbox | EditText, Button XML | 2 hari | ⭐⭐⭐ | Interactivity |
| 3.7 | Lists & Grids | LazyColumn, LazyVerticalGrid, items() | RecyclerView adapter | 3 hari | ⭐⭐⭐ | Efficient lists |
| 3.8 | Compose Previews | @Preview annotation, preview parameters | Run app untuk melihat UI | 2 hari | ⭐⭐ | Fast iteration |
| 3.9 | Dialogs, Snackbar, BottomSheet | Material 3 Composables (AlertDialog, Snackbar, BottomSheet) | Custom dialogs | 2 hari | ⭐⭐⭐ | Standard communication |
| 3.10 | Custom Fonts & Icons | Typography, Icon Composables | Default fonts/icons | 1 hari | ⭐⭐ | Branding & UI detail |
| 3.11 | Scaffold & AppBar | Scaffold, TopAppBar, BottomAppBar | Custom app bar implementation | 2 hari | ⭐⭐⭐ | Standard screen structure |

**Project Beginner:** Buat aplikasi sederhana (To-Do List atau Kalkulator) menggunakan Compose

---

## LEVEL 2: INTERMEDIATE (3-6 Bulan)

### Fase 4: Architecture & Design Patterns (Minggu 13-16)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 4.1 | MVVM Architecture | **ViewModel**, **StateFlow**, State management | MVP, MVC, LiveData | 1 minggu | ⭐⭐⭐ | Industry standard |
| 4.2 | Repository Pattern | Repository layer, Data source separation | Direct API calls in UI | 3 hari | ⭐⭐⭐ | Clean architecture |
| 4.3 | Use Cases | Domain layer, Business logic separation | Logic in ViewModel | 3 hari | ⭐⭐ | Optional tapi recommended |
| 4.4 | Clean Architecture | Layers: Presentation, Domain, Data | Monolithic architecture | 1 minggu | ⭐⭐⭐ | Scalability |
| 4.5 | SOLID Principles | Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion | - | 3 hari | ⭐⭐⭐ | Code quality foundation |
| 4.6 | Design Patterns | Factory, Builder, Observer, Singleton, Adapter patterns | - | 4 hari | ⭐⭐ | Reusable solutions |

### Fase 5: Networking & API (Minggu 17-20)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 5.1 | REST API Basics | HTTP methods, JSON, REST principles | SOAP | 2 hari | ⭐⭐⭐ | Understanding APIs |
| 5.2 | Retrofit | **Retrofit 2**, OkHttp, Interceptors | Volley, AsyncTask | 1 minggu | ⭐⭐⭐ | Standard networking |
| 5.3 | JSON Serialization | **Kotlinx Serialization**, Moshi | Gson | 3 hari | ⭐⭐⭐ | Data parsing |
| 5.4 | Error Handling | Try-catch, Result wrapper, sealed classes | Ignoring errors | 3 hari | ⭐⭐⭐ | Production-ready |
| 5.5 | Advanced Networking | Exponential backoff retry, API throttling, Cache-Control headers | Simple retry | 3 hari | ⭐⭐⭐ | Production reliability |
| 5.6 | Image Loading | **Coil** (Compose-first) | Picasso, Glide untuk project baru | 2 hari | ⭐⭐⭐ | Efficient image handling |
| 5.7 | API Authentication | JWT, OAuth 2.0, Bearer tokens | Basic auth | 3 hari | ⭐⭐⭐ | Secure APIs |
| 5.8 | Offline-First | Caching strategies, Network/Cache policy | Online-only apps | 3 hari | ⭐⭐ | Better UX |
| 5.9 | GraphQL (Optional) | **Apollo Client 4**, queries, mutations | REST only | 4 hari | ⭐ | Modern alternative |
| 5.10 | Real-time Communication | WebSocket, Server-Sent Events (SSE) | Polling | 3 hari | ⭐⭐ | Live updates |

### Fase 6: Local Data & Storage (Minggu 21-24)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 6.1 | Room Database | **Room**, DAO, Entity, Database | Raw SQLite | 1 minggu | ⭐⭐⭐ | Local persistence |
| 6.2 | DataStore | **Preferences DataStore**, Proto DataStore | SharedPreferences | 4 hari | ⭐⭐⭐ | Modern key-value storage |
| 6.3 | Room Relations | One-to-many, Many-to-many | Multiple tables tanpa relation | 3 hari | ⭐⭐ | Complex data |
| 6.4 | Migration | Database migration strategies | Uninstall-reinstall | 2 hari | ⭐⭐ | Production necessity |
| 6.5 | File Storage | Internal/External storage, Caching strategies | - | 3 hari | ⭐⭐ | File management |

### Fase 7: Asynchronous Programming (Minggu 25-28)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 7.1 | Kotlin Coroutines | **Coroutines**, suspend functions, CoroutineScope | AsyncTask, Thread, Handler | 1 minggu | ⭐⭐⭐ | Modern async |
| 7.2 | Coroutine Dispatchers | Dispatchers.Main, IO, Default | Thread pools manual | 3 hari | ⭐⭐⭐ | Thread management |
| 7.3 | Kotlin Flow | **Flow**, StateFlow, SharedFlow | LiveData, RxJava | 1 minggu | ⭐⭐⭐ | Reactive streams |
| 7.4 | Flow Operators | map, filter, combine, collectLatest | RxJava operators | 4 hari | ⭐⭐⭐ | Data transformation |
| 7.5 | Exception Handling | CoroutineExceptionHandler, supervisorScope | Unhandled crashes | 3 hari | ⭐⭐⭐ | Production stability |
| 7.6 | Cancellability & Concurrency | Job hierarchy, Cancellation, Structured concurrency | Unstructured concurrency | 3 hari | ⭐⭐⭐ | Clean Architecture patterns |

### Fase 7.5: Additional Jetpack Components (Minggu 28.5-30)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 7.6 | Paging 3 | **Paging 3** dengan Compose, RemoteMediator | Manual pagination | 1 minggu | ⭐⭐⭐ | Efficient lists |
| 7.7 | ViewModel SavedStateHandle | SavedStateHandle untuk process death | Manual state saving | 2 hari | ⭐⭐ | State restoration |
| 7.8 | Lifecycle Components | lifecycleScope, repeatOnLifecycle | Manual lifecycle handling | 2 hari | ⭐⭐⭐ | Lifecycle-aware |
| 7.9 | WebView & Chrome Custom Tabs | WebView best practices, Chrome Custom Tabs | WebView tanpa security | 3 hari | ⭐⭐ | Web content integration |

### Fase 7.75: Data Validation & Error Handling (Minggu 30.5-31)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 7.10 | Input Validation | Form validation, regex patterns | No validation | 2 hari | ⭐⭐⭐ | Data integrity |
| 7.11 | Error States | Loading, Error, Success states, Empty states | No error handling | 3 hari | ⭐⭐⭐ | Better UX |
| 7.12 | Logging Strategy | **Timber**, Kermit, structured logging | println everywhere | 2 hari | ⭐⭐⭐ | Debugging efficiency |
| 7.13 | Crash Handling | Global exception handler, Thread.setDefaultUncaughtExceptionHandler | Unhandled crashes | 2 hari | ⭐⭐⭐ | Production stability |
| 7.14 | Coroutine Exception | CoroutineExceptionHandler, supervisorScope deep dive | Swallowed exceptions | 2 hari | ⭐⭐⭐ | Async error handling |
| 7.15 | ANR Prevention | ANR troubleshooting, StrictMode, main thread detection | Ignoring ANRs | 3 hari | ⭐⭐⭐ | App responsiveness |

**Project Intermediate:** Aplikasi News atau Weather App dengan API, Room, dan MVVM

---

## LEVEL 3: ADVANCED (6-12 Bulan)

### Fase 8: Dependency Injection (Minggu 29-32)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 8.1 | DI Concepts | Dependency Injection principles | Manual instantiation | 2 hari | ⭐⭐⭐ | Design principle |
| 8.2 | Hilt Setup | **Hilt**, @HiltAndroidApp, @AndroidEntryPoint | Dagger 2 | 4 hari | ⭐⭐⭐ | Google recommended |
| 8.3 | Hilt Modules | @Module, @Provides, @Binds | Manual factory | 4 hari | ⭐⭐⭐ | Provide dependencies |
| 8.4 | Hilt Scopes | @Singleton, @ActivityScoped, @ViewModelScoped | - | 3 hari | ⭐⭐ | Lifecycle management |
| 8.5 | Testing with Hilt | @HiltAndroidTest, test modules | - | 3 hari | ⭐⭐ | Testable code |
| 8.6 | KSP (Kotlin Symbol Processing) | **Kotlin Symbol Processing**, KSP for code generation | Annotation Processing | 3 hari | ⭐⭐ | Modern code generation |

### Fase 9: Advanced Compose (Minggu 33-36)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 9.1 | Navigation Compose | **Navigation Compose**, NavHost, NavController | Navigation Component XML | 1 minggu | ⭐⭐⭐ | Type-safe navigation |
| 9.2 | Navigation State Restoration | Multi-backstack, SaveableStateHolder, re-entry handling | Lost state on navigation | 3 hari | ⭐⭐⭐ | Complex navigation |
| 9.3 | Side Effects | LaunchedEffect, DisposableEffect, SideEffect | - | 4 hari | ⭐⭐⭐ | Lifecycle awareness |
| 9.4 | State Hoisting Advanced | rememberSaveable custom keys, deep UI trees, state hoisting patterns | State scattered everywhere | 3 hari | ⭐⭐⭐ | Compose best practice |
| 9.5 | Custom Layouts | Custom Layout, SubcomposeLayout | Custom Views | 4 hari | ⭐⭐ | Advanced UI |
| 9.6 | Animations | AnimatedVisibility, animateContentSize, Transition | View animations | 4 hari | ⭐⭐ | Smooth UX |
| 9.7 | Canvas & Graphics | Canvas, DrawScope, Path, Shaders (Skia backend) | Custom View onDraw | 4 hari | ⭐⭐ | Custom graphics |
| 9.8 | Theming & Styling | Dynamic theming, Dark mode, custom colors | Hardcoded colors | 3 hari | ⭐⭐⭐ | Professional UI |
| 9.9 | Accessibility | Semantics, contentDescription, accessibility actions | Ignoring accessibility | 3 hari | ⭐⭐⭐ | Inclusive design |
| 9.10 | State Hoisting | State hoisting pattern, unidirectional data flow | State in composables | 2 hari | ⭐⭐⭐ | Compose best practice |
| 9.11 | CompositionLocal | Providing values down the tree | Prop drilling | 2 hari | ⭐⭐ | Dependency provision |
| 9.12 | Compose Stability | Stable classes, immutability, @Immutable | Unstable recompositions | 2 hari | ⭐⭐ | Performance |
| 9.13 | Graphics Layer Optimization | Compose Graphics Layer, image decoding efficiency | Unoptimized rendering | 2 hari | ⭐⭐ | Advanced performance |
| 9.14 | Navigation Component (View-based) | Navigation XML, Safe Args | Fragment transactions | 4 hari | ⭐⭐ | For legacy View apps |

### Fase 10: Testing (Minggu 37-40)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 10.1 | Unit Testing | **JUnit 5**, Truth assertions | JUnit 4 | 4 hari | ⭐⭐⭐ | Quality assurance |
| 10.2 | Mocking | **MockK**, mockk, every, verify | Mockito | 4 hari | ⭐⭐⭐ | Kotlin-friendly |
| 10.3 | Flow Testing | **Turbine** | - | 3 hari | ⭐⭐ | Test reactive code |
| 10.4 | Compose Testing | Compose test rules, semantics | Espresso | 4 hari | ⭐⭐⭐ | UI testing |
| 10.5 | Test Architecture | Repository tests, ViewModel tests, fake data | - | 5 hari | ⭐⭐⭐ | Comprehensive testing |
| 10.6 | Integration Testing | End-to-end testing, Hilt testing | - | 3 hari | ⭐⭐ | Full flow testing |
| 10.7 | Screenshot Testing | Paparazzi, Roborazzi | Manual visual testing | 3 hari | ⭐⭐ | Visual regression |
| 10.8 | Test Coverage | JaCoCo, coverage reports | No coverage tracking | 2 hari | ⭐⭐ | Code quality metrics |

### Fase 11: Background Work (Minggu 41-44)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 11.1 | WorkManager Basic | **WorkManager**, OneTime/Periodic work | JobScheduler, AlarmManager | 4 hari | ⭐⭐⭐ | Background tasks |
| 11.2 | WorkManager Advanced | Chaining workers, UniqueWork, ExistingWorkPolicy, Constraints | Manual task management | 4 hari | ⭐⭐⭐ | Production patterns |
| 11.3 | Expedited Jobs | Expedited WorkManager (Android 12+) | Long delays | 2 hari | ⭐⭐ | Fast background work |
| 11.4 | Foreground Services | Foreground service + notification, service types (Android 14) | Background services | 4 hari | ⭐⭐⭐ | Long-running tasks |
| 11.5 | Foreground Service Restrictions | Android 14+ restrictions, alternatives | Old behavior | 2 hari | ⭐⭐⭐ | Compliance |
| 11.6 | Notifications | NotificationCompat, Channels, POST_NOTIFICATIONS permission | Old notification API | 3 hari | ⭐⭐⭐ | User engagement |
| 11.7 | Firebase Cloud Messaging | **FCM**, push notifications, notification pipeline | GCM | 3 hari | ⭐⭐⭐ | Push messaging |
| 11.8 | Deep Links & App Links | Deep linking, Android App Links | - | 3 hari | ⭐⭐ | Navigation from external |

### Fase 11.5: Media & Camera (Minggu 44.5-46)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 11.6 | CameraX | **CameraX API**, Preview, ImageCapture | Camera2 API, Camera API | 1 minggu | ⭐⭐ | Modern camera |
| 11.7 | ExoPlayer/Media3 | **Media3 (ExoPlayer)** | MediaPlayer | 4 hari | ⭐⭐ | Video/audio playback |
| 11.8 | MediaStore | MediaStore API, Scoped Storage | Direct file access | 3 hari | ⭐⭐ | File access (Android 10+) |

### Fase 11.75: Data Sync & Offline-First (Minggu 46.5-48)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 11.9 | Offline-First Architecture | Local-first, sync strategies | Online-only | 1 minggu | ⭐⭐⭐ | Better UX |
| 11.10 | Conflict Resolution | Merge strategies, last-write-wins | Overwrite always | 3 hari | ⭐⭐ | Data integrity |
| 11.11 | Background Sync | WorkManager periodic sync, constraints | Unreliable sync | 3 hari | ⭐⭐⭐ | Data consistency |

### Fase 12: MVI Architecture (Minggu 45-48)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 12.1 | MVI Concepts | **MVI (Model-View-Intent)**, Unidirectional data flow | - | 4 hari | ⭐⭐ | Modern architecture |
| 12.2 | State Management | Single source of truth, immutable state | Mutable state | 4 hari | ⭐⭐ | Predictable UI |
| 12.3 | Intent Handling | User intents, action processing | Multiple LiveData | 4 hari | ⭐⭐ | Event handling |
| 12.4 | MVI Implementation | Implement MVI dengan Flow dan Compose | - | 1 minggu | ⭐⭐ | Complete pattern |

**Project Advanced:** E-commerce app atau Social media app dengan fitur lengkap

---

## LEVEL 4: EXPERT (12+ Bulan)

### Fase 13: Performance & Optimization (Minggu 49-52)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 13.1 | App Startup | **App Startup library**, lazy initialization | Manual initialization | 3 hari | ⭐⭐ | Fast app launch |
| 13.2 | Baseline Profiles | **Baseline Profiles**, Macrobenchmark | Manual optimization | 4 hari | ⭐⭐ | Performance boost |
| 13.3 | Memory Management | LeakCanary 2.x, Profiler | Manual leak detection | 3 hari | ⭐⭐⭐ | Avoid crashes |
| 13.4 | Compose Performance | Recomposition optimization, remember, derivedStateOf | - | 4 hari | ⭐⭐ | Smooth UI |
| 13.5 | ProGuard/R8 | Code shrinking, obfuscation | No optimization | 3 hari | ⭐⭐⭐ | APK size & security |
| 13.6 | Image Optimization | WebP, vector drawables, adaptive icons | PNG/JPG heavy images | 2 hari | ⭐⭐ | Reduce APK size |
| 13.7 | Network Optimization | Caching strategies, OkHttp cache, retry policies | No caching | 3 hari | ⭐⭐⭐ | Better UX |
| 13.8 | Battery Optimization | Doze mode, App Standby, JobScheduler best practices | Background drain | 3 hari | ⭐⭐ | Battery efficiency |
| 13.9 | ML Kit & AI Integration | **ML Kit** (on-device), **TensorFlow Lite**, **MediaPipe** | Server-side processing only | 4 hari | ⭐⭐ | On-device AI features |

### Fase 14: Modularization (Minggu 53-56)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 14.1 | Module Strategy | Feature modules, layer modules | Monolithic app | 4 hari | ⭐⭐ | Scalability |
| 14.2 | Gradle Configuration | Convention plugins, buildSrc, Version catalogs | Duplicate configs | 4 hari | ⭐⭐ | Maintainability |
| 14.3 | Module Dependencies | Dependency management antar modules | Tight coupling | 4 hari | ⭐⭐ | Clean separation |
| 14.4 | Dynamic Feature | Dynamic delivery, on-demand modules | Monolithic APK | 4 hari | ⭐ | Advanced feature |

### Fase 14.5: Internationalization & Localization (Minggu 56.5-57)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 14.5 | Multi-language Support | strings.xml per locale, plurals | Hardcoded strings | 3 hari | ⭐⭐⭐ | Global apps |
| 14.6 | RTL Support | Right-to-left layout support | LTR only | 2 hari | ⭐⭐ | Arabic, Hebrew markets |
| 14.7 | Date & Number Formatting | Locale-specific formatting | Hardcoded formats | 2 hari | ⭐⭐ | Cultural adaptation |

### Fase 15: Security (Minggu 57-60)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 15.1 | Data Encryption | **Jetpack Security**, EncryptedSharedPreferences | Manual encryption | 4 hari | ⭐⭐⭐ | Protect user data |
| 15.2 | Android Keystore | Keystore advanced usage, key generation | Hardcoded keys | 3 hari | ⭐⭐⭐ | Secure key storage |
| 15.3 | Biometric Auth | BiometricPrompt API | Fingerprint API | 3 hari | ⭐⭐ | Modern authentication |
| 15.4 | Network Security | Certificate pinning, SSL/TLS, SSL debugging (Charles Proxy) | HTTP tanpa encryption | 4 hari | ⭐⭐⭐ | Secure communication |
| 15.5 | Code Obfuscation | R8 full mode, ProGuard rules | No protection | 3 hari | ⭐⭐ | Reverse engineering protection |
| 15.6 | API Key Security | Secrets in native code, environment variables | Hardcoded keys | 3 hari | ⭐⭐⭐ | Prevent key exposure |
| 15.7 | Play Integrity & DeviceCheck | **Play Integrity API**, DeviceCheck (SafetyNet replacement) | SafetyNet (deprecated) | 3 hari | ⭐⭐ | Device verification |
| 15.8 | Anti-Tampering | Integrity detection, tamper prevention, root detection | No protection | 3 hari | ⭐⭐ | App security |
| 15.9 | CTS/STS Compliance | Compatibility Test Suite, Security Test Suite | - | 2 hari | ⭐ | Enterprise apps |

### Fase 15.5: Analytics & Monitoring (Minggu 60.5-62)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 15.7 | Firebase Analytics | **Firebase Analytics**, custom events | Manual logging | 3 hari | ⭐⭐⭐ | User behavior tracking |
| 15.8 | Crashlytics | **Firebase Crashlytics**, crash reporting | Fabric Crashlytics | 3 hari | ⭐⭐⭐ | Error monitoring |
| 15.9 | Performance Monitoring | Firebase Performance, custom traces | - | 3 hari | ⭐⭐ | App performance insights |
| 15.10 | Remote Config | Firebase Remote Config, A/B testing | Hardcoded configs | 3 hari | ⭐⭐ | Feature flags |
| 15.11 | Mobile Observability | Log aggregation (DataDog, Sentry), ANR deep analysis, StrictMode policies | Basic logging | 4 hari | ⭐⭐ | Enterprise monitoring |
| 15.12 | Performance Baseline | Baseline monitoring for CI/CD, regression detection | No monitoring | 2 hari | ⭐⭐ | Quality gates |

### Fase 16: CI/CD & DevOps (Minggu 61-64)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 16.1 | Version Control | Git, GitHub/GitLab | SVN | 2 hari | ⭐⭐⭐ | Collaboration |
| 16.2 | GitHub Actions | **GitHub Actions**, automated workflows | Jenkins | 1 minggu | ⭐⭐⭐ | Modern CI/CD |
| 16.3 | Fastlane | **Fastlane** untuk automation | Manual deployment | 4 hari | ⭐⭐ | Release automation |
| 16.4 | App Distribution | Firebase App Distribution, Play Console internal testing | Email APK | 3 hari | ⭐⭐ | Beta testing |
| 16.5 | Build Variants | Debug, Release, Staging builds, flavors | Single build type | 3 hari | ⭐⭐⭐ | Environment management |
| 16.6 | Signed APK/Bundle | Keystore management, signing configs | Unsigned builds | 2 hari | ⭐⭐⭐ | Production release |

### Fase 17: Advanced Android Features (Minggu 65-68)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 17.1 | Large Screens | Adaptive layouts, Foldables support | Phone-only design | 1 minggu | ⭐⭐ | Tablet & foldables |
| 17.2 | Widgets | Glance for Jetpack Compose widgets | RemoteViews | 4 hari | ⭐⭐ | Home screen widgets |
| 17.3 | App Shortcuts | Dynamic shortcuts, Pinned shortcuts | - | 2 hari | ⭐ | Quick actions |
| 17.4 | Photo Picker API | **Photo Picker** | Custom gallery picker | 2 hari | ⭐⭐ | Privacy-friendly |
| 17.5 | Predictive Back | Predictive back gesture (Android 14+) | Standard back | 3 hari | ⭐⭐ | Modern navigation |
| 17.6 | Bluetooth & NFC | Bluetooth LE, NFC API | Classic Bluetooth | 4 hari | ⭐ | Device communication |
| 17.7 | Sensors & Location | Location API, Sensors (accelerometer, gyroscope) | Deprecated location APIs | 4 hari | ⭐⭐ | Context-aware apps |

### Fase 17.5: In-App Payments & Monetization (Minggu 68.5-70)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 17.8 | Google Play Billing | **Play Billing Library 6+**, subscriptions | Old billing API | 1 minggu | ⭐⭐ | Monetization |
| 17.9 | AdMob | Google AdMob, Rewarded ads | - | 3 hari | ⭐ | Ad monetization |
| 17.10 | In-App Review | **In-App Review API** | Manual review prompts | 2 hari | ⭐⭐ | User feedback |

### Fase 17.75: App Quality & Publishing (Minggu 70.5-72)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 17.11 | Google Play Console | App publishing, release management | - | 3 hari | ⭐⭐⭐ | Distribution |
| 17.12 | App Signing | Play App Signing, key management | Manual signing | 2 hari | ⭐⭐⭐ | Security |
| 17.13 | Release Tracks | Internal, Closed, Open testing, Production | Direct production release | 2 hari | ⭐⭐⭐ | Staged rollout |
| 17.14 | Pre-launch Reports | Firebase Test Lab, automated testing | No automated testing | 2 hari | ⭐⭐ | Quality assurance |
| 17.15 | App Bundle Delivery | Dynamic delivery, conditional delivery | Single APK | 3 hari | ⭐⭐ | Optimized downloads |
| 17.16 | Play Store Listing | Screenshots, descriptions, ASO optimization | Poor listing | 2 hari | ⭐⭐⭐ | Marketing |
| 17.17 | Play Store Policies | Data Safety Form, Privacy Manifest, Family Policy, Target API planning | Ignoring policies | 3 hari | ⭐⭐⭐ | Compliance 2025 |

### Fase 18: Kotlin Multiplatform (Opsional - Minggu 69-76)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 18.1 | KMP Basics | **Kotlin Multiplatform (KMP)**, expect/actual | Platform-specific code duplication | 1 minggu | ⭐ | Cross-platform |
| 18.2 | Shared Logic | Shared ViewModels, repositories | Duplicate business logic | 1 minggu | ⭐ | Code reuse |
| 18.3 | Ktor Client | **Ktor Client** multiplatform | Platform-specific networking | 4 hari | ⭐ | Unified networking |
| 18.4 | Compose Multiplatform | **Compose Multiplatform** | Platform-specific UI | 2 minggu | ⭐ | Shared UI |

### Fase 19: Specialized Platforms (Opsional - Minggu 77-84)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 19.1 | Wear OS | **Wear Compose**, Health Services API | Wear OS 2.0 | 2 minggu | ⭐ | Smartwatch apps |
| 19.2 | Android TV | Leanback library, TV Compose | - | 1 minggu | ⭐ | TV apps |
| 19.3 | Android Auto | Android Auto framework | - | 1 minggu | ⭐ | Car apps |

### Fase 20: Soft Skills & Career (Minggu 85-88)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 20.1 | Git Advanced | Branching strategies, Git flow, rebase, trunk-based development | - | 4 hari | ⭐⭐⭐ | Team collaboration |
| 20.2 | Code Review | PR best practices, reviewing code | - | 2 hari | ⭐⭐⭐ | Quality assurance |
| 20.3 | Documentation | KDoc, README, ADR (Architecture Decision Records), RFC (Request for Comments) | No documentation | 3 hari | ⭐⭐⭐ | Knowledge sharing |
| 20.4 | Agile/Scrum | Sprint planning, daily standups, retrospectives | Waterfall | 3 hari | ⭐⭐ | Project management |
| 20.5 | Technical Writing | Writing technical articles, blog posts | - | 3 hari | ⭐⭐ | Personal branding |
| 20.6 | Open Source | Contributing to open source projects | - | Ongoing | ⭐⭐ | Community & portfolio |
| 20.7 | Team Engineering | Technical debt management, Feature toggles, Distributed git workflows, On-call mobile engineering | - | 4 hari | ⭐⭐ | Large team practices |

### Fase 21: Interview Preparation & Career Growth (Minggu 89-92)

| No | Topik | Teknologi Modern | Teknologi Ditinggalkan | Waktu | Prioritas | Catatan |
|----|-------|------------------|------------------------|-------|-----------|---------|
| 21.1 | Data Structures | Arrays, LinkedList, Stack, Queue, Trees, Graphs | - | 1 minggu | ⭐⭐⭐ | Interview prep |
| 21.2 | Algorithms | Sorting, searching, recursion, dynamic programming | - | 1 minggu | ⭐⭐⭐ | Problem solving |
| 21.3 | System Design General | Design scalable systems, architecture discussions | - | 4 hari | ⭐⭐⭐ | Senior interviews |
| 21.4 | Mobile System Design | Caching (LRU, Disk, Memory), Feed architecture, Sync architecture, Image pipeline, Notification pipeline, Database sharding | Generic system design | 1 minggu | ⭐⭐⭐ | Mobile-specific interviews |
| 21.5 | Android-Specific Questions | Activity lifecycle, memory leaks, performance | - | 4 hari | ⭐⭐⭐ | Technical interviews |
| 21.6 | Behavioral Questions | STAR method, leadership, teamwork | - | 2 hari | ⭐⭐⭐ | Soft skills |
| 21.7 | Portfolio Preparation | GitHub polish, LinkedIn, resume | - | 3 hari | ⭐⭐⭐ | Job hunting |
| 21.8 | Salary Negotiation | Market research, negotiation tactics | - | 1 hari | ⭐⭐ | Career advancement |

---

## Prioritas Legend
- ⭐⭐⭐ = Wajib dikuasai (Essential)
- ⭐⭐ = Sangat direkomendasikan (Highly Recommended)
- ⭐ = Opsional/Nice to have (Optional)

## Tips Pembelajaran

1. **Jangan skip fundamental** - Kotlin & Compose adalah foundation
2. **Praktik setiap fase** - Buat mini project untuk setiap topik baru
3. **Fokus depth over breadth** - Kuasai core concepts sebelum lanjut
4. **Baca official documentation** - developer.android.com adalah sumber terbaik
5. **Join community** - r/androiddev, Kotlin Slack, Stack Overflow
6. **Stay updated** - Subscribe Android Developers YouTube & Android Weekly
7. **Build portfolio** - Minimal 3-5 project di GitHub
8. **Code review** - Minta feedback dari developer lain

## Topik Tambahan yang Bisa Dipelajari (Beyond Roadmap)

### Backend untuk Android Developer
- Firebase Suite lengkap (Firestore, Realtime DB, Auth, Storage)
- GraphQL dengan Apollo Client (sudah di roadmap utama)
- WebSocket & Real-time communication (sudah di roadmap utama)
- Backend as a Service (BaaS): Supabase, Appwrite
- gRPC untuk high-performance APIs

### Advanced Topics
- Custom Gradle Plugins
- Annotation Processing (KSP - Kotlin Symbol Processing)
- Jetpack WindowManager untuk foldables
- Health Connect API
- **ML Kit & AI (PENTING 2025)**
- On-device LLAMA/KotlinDL
- TensorFlow Lite Model Maker
- MediaPipe (gesture & face detection)
- Federated Learning concepts
- ARCore untuk Augmented Reality
- App Bundle optimization techniques
- Android NDK (Native Development Kit)
- Custom Lint Rules
- Compose compiler metrics & stability
- Memory profiling advanced techniques
- Chrome DevTools untuk debugging WebViews
- **Audio Recording & Processing** (AudioRecord, Acoustic Echo Cancellation, Media3 Recorder)

### Advanced Architecture Patterns
- Clean Architecture dengan multiple layers (sudah ada)
- Hexagonal Architecture (Ports & Adapters)
- CQRS (Command Query Responsibility Segregation)
- Event-Driven Architecture
- Modular monolith strategies
- Modular monorepo strategies (large teams)

### Quality Assurance
- Espresso untuk legacy View testing
- UI Automator untuk cross-app testing
- Detox untuk E2E testing
- Monkey testing untuk stress testing
- Performance testing dengan Macrobenchmark (sudah ada)
- Accessibility testing dengan Accessibility Scanner

### Design & UX
- Material Design guidelines mendalam
- Design Systems
- Prototyping dengan Figma
- User research & usability testing
- Animation principles (motion design)
- Responsive design untuk berbagai screen sizes
- Dark mode best practices

### Business & Product
- App Store Optimization (ASO) - sudah ada
- User acquisition strategies
- Analytics interpretation
- Product management basics
- Understanding business metrics (DAU, MAU, retention, ARPU)
- **A/B Testing & Experimentation**
- **Funnel analysis**
- **Growth metrics interpretation**
- **Marketing attribution**

### DevOps & Infrastructure
- Docker untuk Android build environments
- Kubernetes untuk scalable builds
- Terraform untuk infrastructure as code
- Mobile Device Management (MDM)
- Enterprise app distribution
- **Canary releases & progressive rollouts**

### Legal & Compliance
- GDPR compliance
- Data privacy best practices
- App store guidelines (Google Play policies) - sudah ada
- Copyright & licensing
- Terms of Service & Privacy Policy

### Emerging Technologies
- Jetpack Compose for Desktop
- Compose for Web (experimental)
- Android on Chrome OS
- Foldable & dual-screen optimization
- 5G optimization techniques
- Edge computing for mobile
- WebAssembly on Android

## Milestone Projects

### Beginner Projects
- To-Do List App (Compose + Room)
- Calculator App (Compose)
- Note Taking App (Compose + Room + DataStore)

### Intermediate Projects
- Weather App (API + MVVM + Compose)
- News Reader (Retrofit + Room + Paging)
- Movie Database (TMDB API + Clean Architecture)

### Advanced Projects
- E-commerce App (Full feature dengan payment)
- Social Media App (Firebase + Real-time updates)
- Fitness Tracker (Sensors + WorkManager + Room)

### Expert Projects
- Multi-module App dengan KMP
- App dengan Wear OS companion
- Open source library contribution