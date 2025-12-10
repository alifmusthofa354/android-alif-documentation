Berikut **daftar komponen UI Jetpack Compose (Kotlin)** yang paling lengkap dan terstruktur, mencakup:

* **Jetpack Compose Core UI Components**
* **Material 3 Components**
* **Foundation & Layouts**
* **Animation**
* **Navigation**
* **Modifier, Gesture, Graphics**
* **Accompanist (Tambahan UI populer)**
* **Compose Desktop & Multiplatform (opsional)**

Saya buat se-detail mungkin agar bisa dijadikan referensi lengkap.

---

# ⭐ **1. Jetpack Compose – Core UI Components**

Komponen dasar dari `androidx.compose.ui` & `androidx.compose.foundation`.

## 📌 **Text & Display**

* `Text`
* `ClickableText`
* `SelectionContainer`
* `BasicText` (lebih rendah levelnya)

## 📌 **Image**

* `Image`
* `AsyncImage` (Coil / Accompanist)
* `Painter`, `BitmapPainter`, `VectorPainter`

## 📌 **Input Components**

* `TextField`
* `OutlinedTextField`
* `BasicTextField`
* `Switch`
* `Checkbox`
* `TriStateCheckbox`
* `RadioButton`
* `Slider`
* `RangeSlider`
* `Button` (core)
* `IconButton`
* `OutlinedButton`
* `TextButton`

## 📌 **Containers**

* `Box`
* `Row`
* `Column`
* `LazyRow`
* `LazyColumn`
* `LazyVerticalGrid` (Foundation)
* `LazyHorizontalGrid`
* `FlowRow` / `FlowColumn` (Accompanist)
* `Spacer`
* `Surface`

## 📌 **Scrollable**

* `ScrollableColumn` (deprecated)
* `VerticalScroll`
* `HorizontalScroll`
* `LazyColumn` / `LazyRow`
* `Pager` (Accompanist)

## 📌 **Draw & Canvas**

* `Canvas`
* `drawBehind`
* `drawWithContent`
* `drawIntoCanvas`
* Shape API (`RoundedCornerShape`, `CutCornerShape`)

---

# ⭐ **2. Material 3 Components (Material Design 3 / M3)**

Paket: `androidx.compose.material3.*`

## 📌 **Buttons**

* `Button`
* `ElevatedButton`
* `FilledTonalButton`
* `OutlinedButton`
* `TextButton`
* `IconButton`
* `FilledIconButton`
* `FilledTonalIconButton`
* `OutlinedIconButton`

## 📌 **Segmented Buttons** (Material 3 terbaru)

* `SegmentedButton`
* `SingleChoiceSegmentedButtonWrapper`
* `MultiChoiceSegmentedButtonWrapper`

## 📌 **Navigation & Top App Bars**

* `TopAppBar`
* `CenterAlignedTopAppBar`
* `MediumTopAppBar`
* `LargeTopAppBar`
* `NavigationBar`
* `NavigationRail`
* `NavigationDrawer`
* `ModalNavigationDrawer`
* `DismissibleNavigationDrawer`

## 📌 **FAB (Floating Action Button)**

* `FloatingActionButton`
* `SmallFloatingActionButton`
* `LargeFloatingActionButton`
* `ExtendedFloatingActionButton`

## 📌 **Cards**

* `Card`
* `ElevatedCard`
* `OutlinedCard`

## 📌 **Lists & Containers**

* `ListItem`
* `Divider`
* `Surface`
* `Badge` & `BadgedBox`

## 📌 **Dialogs & Menus**

* `AlertDialog`
* `ModalBottomSheet`
* `BottomSheetScaffold`
* `DropdownMenu`
* `DropdownMenuItem`
* `ExposedDropdownMenuBox`
* `DatePicker`
* `DatePickerDialog`
* `DateRangePicker`
* `TimePicker`
* `TooltipBox`
* `PlainTooltip`
* `RichTooltip`

## 📌 **Text Inputs**

* `TextField`
* `OutlinedTextField`
* `BasicTextField`
* `BasicSecureTextField` (untuk password)
* `SearchBar`
* `DockedSearchBar`
* `ExposedDropdownMenuBox`
* `ExposedDropdownMenu`

## 📌 **Progress & Indicators**

* `CircularProgressIndicator`
* `LinearProgressIndicator`
* `PullToRefreshContainer`
* `SwipeRefresh` (Accompanist)

## 📌 **Chips** (Material 3)

* `AssistChip`
* `ElevatedAssistChip`
* `FilterChip`
* `ElevatedFilterChip`
* `InputChip`
* `SuggestionChip`
* `ElevatedSuggestionChip`

## 📌 **Carousels** (Material 3)

* `HorizontalMultiBrowseCarousel`
* `HorizontalUncontainedCarousel`

## 📌 **Lists & Grids Extended**

* `LazyColumn`
* `LazyRow`
* `LazyVerticalGrid`
* `LazyHorizontalGrid`
* `LazyVerticalStaggeredGrid`
* `LazyHorizontalStaggeredGrid`
* `ListItem`
* `SwipeToDismissBox`

## 📌 **Windows Insets & System UI**

* `WindowInsets`
* `Spacer`
* `PaddingValues`
* `rememberWindowInsets`

## 📌 **Snackbars**

* `SnackbarHost`
* `SnackbarHostState`
* `Snackbar`

## 📌 **Material 3 Typography**

* `Typography` (DisplayLarge, HeadlineMedium, BodySmall, dll)
* Font scaling, dynamic type

## 📌 **Material 3 Color System**

* `ColorScheme`
* `lightColorScheme()`
* `darkColorScheme()`
* Dynamic Color (Android 12+)

## 📌 **Material 3 Shapes**

* `Shapes`
* `ExtraSmall`, `Small`, `Medium`, `Large`, `ExtraLarge`

---

# ⭐ **3. Foundation Layouts & Tools**

## 📌 **Layout Primitives**

* `Box`, `BoxWithConstraints`
* `Row`
* `Column`
* `ConstraintLayout` (Compose ConstraintLayout library)
* `FlowRow` / `FlowColumn` (Accompanist)
* `LazyVerticalGrid`
* `LazyHorizontalGrid`
* `SubcomposeLayout` (advanced)

## 📌 **Alignment & Arrangement**

* `Alignment`
* `Arrangement`
* `ContentScale`

## 📌 **Modifiers (Paling Penting)**

* `padding`
* `background`
* `fillMaxSize`
* `fillMaxWidth`
* `width`, `height`, `size`
* `clip`
* `border`
* `clickable`
* `scrollable`
* `rotate`
* `scale`
* `graphicsLayer`
* `alpha`

---

# ⭐ **4. Animation**

Paket: `androidx.compose.animation.*`

## 📌 **Animation High-level**

* `AnimatedVisibility`
* `Crossfade`
* `AnimateContentSize`
* `AnimatedContent`

## 📌 **Low-level Animation**

* `animateFloatAsState`
* `animateDpAsState`
* `updateTransition`
* `Transition`
* `Animatable`
* `InfiniteTransition`

## 📌 **Gesture + Animation**

* `swipeable`
* `draggable`
* `scrollable`

---

# ⭐ **5. Navigation Components (Compose Navigation)**

Paket: `androidx.navigation.compose.*`

* `NavHost`
* `NavController`
* `composable`
* `navigation`
* `dialog`
* `AnimatedNavHost` (dari Accompanist Navigation Animation)

---

# ⭐ **6. Gesture, Input, Interaction**

* `pointerInput`
* `detectTapGestures`
* `draggable`
* `scrollable`
* `transformable` (zoom / rotate)

---

# ⭐ **6. State Management & Performance**

## 📌 **State Management**

* `mutableStateOf`
* `remember`
* `rememberSaveable`
* `rememberLazyListState`
* `derivedStateOf`
* `produceState`
* `LaunchedEffect`
* `DisposableEffect`
* `SideEffect`
* `rememberCoroutineScope`
* `rememberUpdatedState`
* `snapshotFlow`
* `rememberInteractedState`

## 📌 **Performance Optimization**

* `@Stable` annotation
* `@Immutable` annotation
* `@NonRestartableComposable`
* `key()` untuk LazyColumn items
* `CompositionLocal`
* `CompositionLocalProvider`
* `LocalInspectionMode`
* `@ComposableTarget`

## 📌 **Custom Layouts**

* `Layout`
* `SubcomposeLayout`
* `LookaheadScope`
* `MeasurementScope`
* `BoxWithConstraints`

## 📌 **Testing & Accessibility**

* `createComposeRule`
* `onNodeWithText`, `onNodeWithTag`, `onNodeWithContentDescription`
* `Modifier.semantics`
* `Modifier.clearAndSetSemantics`
* `Modifier.testTag`
* `contentDescription`

# ⭐ **7. Accompanist (Tambahan Populer)**

Paket dari Google untuk fitur sementara yang belum masuk Compose core.

## 📌 **Accompanist Libraries**

* **System UI Controller** → ubah status bar dan navigation bar
* **Coil / Glide Image** → `AsyncImage`
* **Insets** → safe area + window insets
* **Navigation Animation** → animated transitions
* **Pager** → HorizontalPager, VerticalPager
* **Flow Layout** → FlowRow, FlowColumn
* **Permissions** → `rememberPermissionState`
* **Placeholder** → shimmer effect

---

# ⭐ **7. Accompanist (Tambahan Populer)**

| Kategori         | Komponen                  | Deskripsi             |
| ---------------- | ------------------------- | --------------------- |
| **Images**       | `AsyncImage`              | Load gambar via Coil. |
| **System UI**    | `SystemUiController`      | Ubah status bar.      |
| **Navigation**   | `AnimatedNavHost`         | Navigasi animasi.     |
| **Pager**        | `HorizontalPager`         | Pager horizontal.     |
|                  | `VerticalPager`           | Pager vertikal.       |
| **Permissions**  | `rememberPermissionState` | Izin runtime.         |
| **Placeholders** | `placeholder`             | Skeleton loading.     |
| **Insets**       | `ProvideWindowInsets`     | Safe area.            |

---

# ⭐ **8. Advanced Topics & Libraries**

## 📌 **State Management Libraries**

* **Molecule** - Presenter pattern dari Twitter
* **Orbit MVI** - Model-View-Intent architecture
* **Decompose** - Navigation & lifecycle management
* **Revue** - Redux-like state management

## 📌 **Image Loading Libraries**

* **Coil** - `AsyncImage`, `SubcomposeAsyncImage`
* **Landscapist** - Wrapper untuk Glide/Coil
* **GlideImage** - Direct Glide integration

## 📌 **Charts & Graphs**

* **Vico** - Modern charts library
* **MPAndroidChart** - Classic charts with Compose support
* **LineChart, BarChart, PieChart**

## 📌 **Animations Advanced**

* **Lottie** - Animasi Lottie files
* **Compose Shaders** - Custom GPU shaders
* **Dynamic Theme** - Theme berdasarkan context

## 📌 **Compose Multiplatform / Desktop / Web**

Jika kamu juga ingin:

### 📌 Desktop Components

* `Window`
* `MenuBar`
* `Tooltip`
* `Scrollbar`
* `Dialog`
* `Tray`

---



Ya — **UI/UX Android mobile tidak hanya soal komponen UI saja**. Ada *banyak elemen lain* yang termasuk dalam perancangan UI/UX modern.
Berikut daftar **paling lengkap**, mulai dari konsep desain, pola navigasi, interaksi, hingga prinsip UX:

---

# ⭐ **1. Patterns / Pola UI di Android**

Ini adalah pola standar yang digunakan aplikasi Android:

### **Navigasi**

* Bottom Navigation
* Navigation Drawer
* Top App Bar
* Navigation Rail (Tablet)
* Tab Navigation (Scrollable/Fixed Tabs)
* Gesture Navigation

### **Layout Patterns**

* Master–Detail Layout
* Feed / Timeline
* Dashboard / Card Grid
* Forms & Input Screens
* List + Detail
* Onboarding Screens
* Splash Screen & App Startup

---

# ⭐ **2. Prinsip UX (User Experience)**

UI bagus bisa rusak kalau UX jelek. Prinsip utama:

### **Usability**

* Konsisten
* Mudah dipahami
* Teks terbaca
* Navigasi jelas
* Tidak membuat user bingung

### **Accessibility (A11Y)**

* Kontras warna memadai
* Ukuran teks mengikuti dynamic font scaling
* Komponen memiliki `contentDescription`
* Dukungan TalkBack
* Hit target minimal 48dp

### **Minimal Cognitive Load**

* Informasi tidak berlebihan
* Satu layar fokus pada satu tugas

---

# ⭐ **3. Visual Design Guidance**

### **Typography**

* Mengikuti Material 3 typography scale
* Prioritas: Headline → Title → Body → Label

### **Color System**

* Menggunakan Material You (Dynamic Color)
* Kombinasi warna: *primary, onPrimary, surface, background*
* Kontras tinggi untuk teks penting

### **Spacing**

* Gunakan 4dp grid
* Spasi yang konsisten membuat layout rapi

### **Elevation & Shadows**

* Menunjukkan hierarchy (siapa di atas siapa)
* Card, FAB, Top Bar punya elevation default

### **Shape**

* Material 3 memakai large-rounded shape (40dp)
* Gunakan shape konsisten

---

# ⭐ **4. UX Writing**

Tuliasan (copywriting) dalam aplikasi:

* Gunakan kalimat pendek
* Gunakan verb-action: “Simpan”, “Lanjutkan”, “Kirim”
* Hindari error message yang menyalahkan pengguna
* Tampilkan solusi dalam pesan error

---

# ⭐ **5. Interaksi (Interaction Design)**

### **Gestures**

* Tap
* Swipe
* Long-press
* Drag
* Pinch-to-zoom

### **Motion & Animation**

* Motion untuk memberi feedback
* Hindari animasi terlalu cepat/lambat
* Animation harus punya tujuan, bukan hiasan

### **Haptic Feedback**

* Getaran kecil ketika tombol ditekan
* Memberi rasa fisik pada interaksi

---

# ⭐ **6. Micro-interactions**

Hal yang membuat aplikasi terasa “hidup”:

* Animation saat tombol ditekan
* Loading shimmer
* Placeholder
* Ripple effect
* Progress bar saat proses terjadi
* Snackbar untuk aksi cepat

---

# ⭐ **7. Responsiveness & Adaptive UI**

UI harus adaptif:

### Ukuran perangkat:

* Phone portrait
* Phone landscape
* Tablet / Large display
* Foldable

### Breakpoints Material 3:

* Compact
* Medium
* Expanded

---

# ⭐ **8. UX Research (Tahap sebelum desain)**

* User Interviews
* Persona
* Wireframes
* User Journey Map
* Information Architecture (IA)
* Usability Testing

---

# ⭐ **9. Prototyping Tools**

UI/UX tidak dibuat langsung di Compose dulu.

Biasanya dibuat di:

* Figma (paling umum)
* Adobe XD
* Sketch
* Pen & kertas + wireframe

---

# ⭐ **10. Guidelines Resmi**

Jika bicara UI Android, wajib memahami:

1. **Material Design 3 Guidelines**
2. **Android Developer UX Guidelines**
3. **Human Interface Guidelines (jika mau lintas platform)**

---

# ✔️ **Kesimpulan**

UI/UX Android **bukan hanya komponen**, tapi meliputi:

### 🎨 UI (User Interface)

* Komponen visual
* Layout
* Warna
* Typography
* Spacing
* Animasi

### 🧠 UX (User Experience)

* Navigasi
* Flow pengguna
* Usability & accessibility
* Micro-interactions
* UX writing
* Motion & gestures
* Struktur informasi
* Testing & validasi

---

# ⭐ **11. Best Practices Summary**

## 📌 **Performance Tips**

1. **Gunakan `remember` dengan keys yang tepat**
   ```kotlin
   // Good
   val result by remember(key1, key2) { expensiveOperation() }

   // Bad
   val result by remember { expensiveOperation() } // Key tidak update
   ```

2. **Gunakan `@Stable` dan `@Immutable` untuk data class**
   ```kotlin
   @Stable
   data class UIState(
       val isLoading: Boolean,
       val items: List<Item>
   )
   ```

3. **Prefer `LazyColumn` daripada `Column` dengan scroll**

4. **Gunakan `key()` untuk LazyColumn items**
   ```kotlin
   LazyColumn {
       items(items, key = { it.id }) { item ->
           ItemComposable(item)
       }
   }
   ```

5. **Gunakan `derivedStateOf` untuk derived calculations**

## 📌 **State Management Guidelines**

1. **State Hoisting** - Pindahkan state ke parent terdekat
2. **Immutable State** - Jangan mutate state langsung
3. **Single Source of Truth** - Satu tempat untuk setiap state
4. **Separate State from Events** - Gunakan callback untuk events

## 📌 **Architecture Patterns**

1. **Unidirectional Data Flow (UDF)**
   ```
   UI Event → ViewModel → State Update → UI
   ```

2. **MVVM with Compose**
   ```kotlin
   @Composable
   fun MyScreen(
       viewModel: MyViewModel = viewModel()
   ) {
       val state by viewModel.uiState.collectAsState()

       MyContent(
           state = state,
           onEvent = { viewModel.handleEvent(it) }
       )
   }
   ```

3. **MVI (Model-View-Intent)**
   - Dengan libraries seperti Orbit MVI

## 📌 **Testing Best Practices**

1. **Test behavior, bukan implementation**
2. **Gunakan testTags untuk testing**
3. **Test edge cases dan error states**
4. **Use Compose Testing rules**

## 📌 **Accessibility Guidelines**

1. **Gunakan `contentDescription` untuk images/icons**
2. **Minimum touch target 48dp**
3. **Support dynamic font scaling**
4. **Test dengan TalkBack**

---
