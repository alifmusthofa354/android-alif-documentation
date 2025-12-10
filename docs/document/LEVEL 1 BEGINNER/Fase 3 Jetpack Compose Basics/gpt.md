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
* `DatePicker`
* `TimePicker`

## 📌 **Text Inputs**

* `TextField`
* `OutlinedTextField`
* `SearchBar`
* `SearchView` (terbaru M3)
* `ExposedDropdownMenuBox`
* `ExposedDropdownMenu`

## 📌 **Progress & Indicators**

* `CircularProgressIndicator`
* `LinearProgressIndicator`
* `PullToRefreshContainer`
* `SwipeRefresh` (Accompanist)

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

# ⭐ **8. Compose Multiplatform / Desktop / Web**

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
