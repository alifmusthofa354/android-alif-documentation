# Tabel Lengkap Komponen UI Jetpack Compose & Material 3

## 1. TEXT & TYPOGRAPHY

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 1 | **Text** | Menampilkan text dengan styling Material | text, style, color, fontSize, fontWeight, maxLines, overflow, textAlign | `Text("Hello", style = MaterialTheme.typography.bodyLarge)` |
| 2 | **BasicText** | Text tanpa styling Material (lebih ringan) | text, style, onTextLayout, overflow, maxLines | `BasicText("Simple text")` |
| 3 | **ClickableText** | Text yang dapat diklik per karakter | text, onClick, style, maxLines | `ClickableText(annotatedString, onClick = { offset -> })` |
| 4 | **SelectionContainer** | Container untuk membuat text dapat diselect | content | `SelectionContainer { Text("Selectable") }` |

## 2. BUTTONS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 5 | **Button** | Tombol filled standar Material 3 | onClick, enabled, modifier, colors, elevation, content | `Button(onClick = {}) { Text("Click") }` |
| 6 | **ElevatedButton** | Tombol dengan elevasi/shadow | onClick, enabled, modifier, colors, elevation | `ElevatedButton(onClick = {}) { Text("Elevated") }` |
| 7 | **FilledTonalButton** | Tombol dengan warna tonal subtle | onClick, enabled, modifier, colors | `FilledTonalButton(onClick = {}) { Text("Tonal") }` |
| 8 | **OutlinedButton** | Tombol dengan border outline | onClick, enabled, modifier, colors, border | `OutlinedButton(onClick = {}) { Text("Outlined") }` |
| 9 | **TextButton** | Tombol tanpa background | onClick, enabled, modifier, colors | `TextButton(onClick = {}) { Text("Text") }` |
| 10 | **IconButton** | Tombol khusus untuk icon | onClick, enabled, modifier, colors | `IconButton(onClick = {}) { Icon(...) }` |
| 11 | **IconToggleButton** | Icon button dengan toggle state | checked, onCheckedChange, enabled | `IconToggleButton(checked, onCheckedChange = {}) { Icon(...) }` |
| 12 | **FilledIconButton** | Icon button dengan background filled | onClick, enabled, modifier, colors | `FilledIconButton(onClick = {}) { Icon(...) }` |
| 13 | **FilledTonalIconButton** | Icon button dengan background tonal | onClick, enabled, modifier, colors | `FilledTonalIconButton(onClick = {}) { Icon(...) }` |
| 14 | **OutlinedIconButton** | Icon button dengan outline | onClick, enabled, modifier, border | `OutlinedIconButton(onClick = {}) { Icon(...) }` |
| 15 | **FloatingActionButton** | FAB standar Material 3 | onClick, modifier, containerColor, elevation, content | `FloatingActionButton(onClick = {}) { Icon(...) }` |
| 16 | **SmallFloatingActionButton** | FAB ukuran kecil | onClick, modifier, containerColor, elevation | `SmallFloatingActionButton(onClick = {}) { Icon(...) }` |
| 17 | **LargeFloatingActionButton** | FAB ukuran besar | onClick, modifier, containerColor, elevation | `LargeFloatingActionButton(onClick = {}) { Icon(...) }` |
| 18 | **ExtendedFloatingActionButton** | FAB dengan text dan icon | onClick, text, icon, expanded, modifier | `ExtendedFloatingActionButton(onClick = {}, text = {}, icon = {})` |

## 3. INPUT FIELDS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 19 | **TextField** | Input field standar Material 3 | value, onValueChange, label, placeholder, leadingIcon, trailingIcon, supportingText, isError, keyboardOptions, singleLine, maxLines | `TextField(value, onValueChange = {}, label = { Text("Name") })` |
| 20 | **OutlinedTextField** | TextField dengan border outline | value, onValueChange, label, placeholder, leadingIcon, trailingIcon, supportingText, isError, keyboardOptions | `OutlinedTextField(value, onValueChange = {})` |
| 21 | **BasicTextField** | TextField tanpa styling Material | value, onValueChange, modifier, textStyle, keyboardOptions, singleLine, maxLines, decorationBox | `BasicTextField(value, onValueChange = {})` |
| 22 | **BasicSecureTextField** | TextField untuk password (secure) | value, onValueChange, modifier, textStyle | `BasicSecureTextField(value, onValueChange = {})` |

## 4. SELECTION CONTROLS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 23 | **Checkbox** | Checkbox untuk selection | checked, onCheckedChange, enabled, colors | `Checkbox(checked, onCheckedChange = {})` |
| 24 | **TriStateCheckbox** | Checkbox dengan 3 state | state, onClick, enabled, colors | `TriStateCheckbox(ToggleableState.On, onClick = {})` |
| 25 | **Switch** | Toggle switch on/off | checked, onCheckedChange, enabled, colors, thumbContent | `Switch(checked, onCheckedChange = {})` |
| 26 | **RadioButton** | Radio button untuk single selection | selected, onClick, enabled, colors | `RadioButton(selected, onClick = {})` |
| 27 | **Slider** | Slider untuk memilih nilai | value, onValueChange, valueRange, steps, enabled, colors | `Slider(value, onValueChange = {}, valueRange = 0f..100f)` |
| 28 | **RangeSlider** | Slider dengan 2 thumb untuk range | value, onValueChange, valueRange, steps, enabled | `RangeSlider(range, onValueChange = {})` |

## 5. CONTAINERS & SURFACES

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 29 | **Surface** | Container dasar dengan elevasi | modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, onClick, content | `Surface(tonalElevation = 2.dp) { }` |
| 30 | **Card** | Card standar Material 3 | modifier, shape, colors, elevation, border, onClick, content | `Card(modifier = Modifier.fillMaxWidth()) { }` |
| 31 | **ElevatedCard** | Card dengan elevasi lebih tinggi | modifier, shape, colors, elevation, onClick | `ElevatedCard { }` |
| 32 | **OutlinedCard** | Card dengan border outline | modifier, shape, colors, border, elevation, onClick | `OutlinedCard { }` |
| 33 | **Box** | Layout container sederhana | modifier, contentAlignment, propagateMinConstraints, content | `Box(Modifier.size(100.dp)) { }` |
| 34 | **Column** | Layout vertikal | modifier, verticalArrangement, horizontalAlignment, content | `Column { Text("1"); Text("2") }` |
| 35 | **Row** | Layout horizontal | modifier, horizontalArrangement, verticalAlignment, content | `Row { Text("1"); Text("2") }` |

## 6. NAVIGATION COMPONENTS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 36 | **NavigationBar** | Bottom navigation bar | modifier, containerColor, contentColor, tonalElevation, windowInsets, content | `NavigationBar { NavigationBarItem(...) }` |
| 37 | **NavigationBarItem** | Item dalam NavigationBar | selected, onClick, icon, label, alwaysShowLabel, enabled, colors | `NavigationBarItem(selected, onClick = {}, icon = {})` |
| 38 | **NavigationRail** | Navigasi vertikal untuk tablet | modifier, containerColor, contentColor, header, windowInsets, content | `NavigationRail { NavigationRailItem(...) }` |
| 39 | **NavigationRailItem** | Item dalam NavigationRail | selected, onClick, icon, label, alwaysShowLabel, enabled, colors | `NavigationRailItem(selected, onClick = {}, icon = {})` |
| 40 | **ModalNavigationDrawer** | Navigation drawer modal | drawerState, drawerContent, gesturesEnabled, scrimColor, content | `ModalNavigationDrawer(drawerContent = {}) { }` |
| 41 | **PermanentNavigationDrawer** | Navigation drawer permanen | drawerContent, modifier, content | `PermanentNavigationDrawer(drawerContent = {}) { }` |
| 42 | **DismissibleNavigationDrawer** | Navigation drawer dismissible | drawerState, drawerContent, gesturesEnabled, content | `DismissibleNavigationDrawer(drawerContent = {}) { }` |
| 43 | **NavigationDrawerItem** | Item dalam Navigation Drawer | label, selected, onClick, icon, badge, modifier, colors | `NavigationDrawerItem(label = {}, selected, onClick = {})` |
| 44 | **TabRow** | Row untuk tabs | selectedTabIndex, modifier, containerColor, contentColor, indicator, divider, tabs | `TabRow(selectedIndex) { Tab(...) }` |
| 45 | **ScrollableTabRow** | TabRow yang scrollable | selectedTabIndex, modifier, containerColor, contentColor, edgePadding, indicator, divider, tabs | `ScrollableTabRow(selectedIndex) { Tab(...) }` |
| 46 | **Tab** | Single tab dalam TabRow | selected, onClick, modifier, enabled, text, icon, selectedContentColor, unselectedContentColor | `Tab(selected, onClick = {}, text = { Text("Tab") })` |
| 47 | **LeadingIconTab** | Tab dengan leading icon | selected, onClick, text, icon, modifier, enabled | `LeadingIconTab(selected, onClick = {}, text = {}, icon = {})` |

## 7. APP BARS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 48 | **TopAppBar** | Top app bar standar | title, modifier, navigationIcon, actions, colors, scrollBehavior | `TopAppBar(title = { Text("Title") })` |
| 49 | **CenterAlignedTopAppBar** | Top app bar dengan title center | title, modifier, navigationIcon, actions, colors, scrollBehavior | `CenterAlignedTopAppBar(title = { Text("Title") })` |
| 50 | **MediumTopAppBar** | Top app bar medium (collapsible) | title, modifier, navigationIcon, actions, colors, scrollBehavior | `MediumTopAppBar(title = { Text("Title") })` |
| 51 | **LargeTopAppBar** | Top app bar large (collapsible) | title, modifier, navigationIcon, actions, colors, scrollBehavior | `LargeTopAppBar(title = { Text("Title") })` |
| 52 | **BottomAppBar** | Bottom app bar | modifier, containerColor, contentColor, tonalElevation, actions, floatingActionButton | `BottomAppBar(actions = {}, floatingActionButton = {})` |

## 8. DIALOGS & SHEETS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 53 | **AlertDialog** | Dialog alert standar | onDismissRequest, confirmButton, dismissButton, title, text, icon, shape, containerColor | `AlertDialog(onDismissRequest = {}, confirmButton = {})` |
| 54 | **BasicAlertDialog** | Dialog tanpa styling Material | onDismissRequest, modifier, properties, content | `BasicAlertDialog(onDismissRequest = {}) { }` |
| 55 | **ModalBottomSheet** | Bottom sheet modal | onDismissRequest, sheetState, shape, containerColor, dragHandle, windowInsets, content | `ModalBottomSheet(onDismissRequest = {}) { }` |
| 56 | **BottomSheetScaffold** | Scaffold dengan bottom sheet | sheetContent, modifier, scaffoldState, sheetPeekHeight, sheetShape, sheetContainerColor, content | `BottomSheetScaffold(sheetContent = {}) { }` |

## 9. LISTS & GRIDS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 57 | **LazyColumn** | List vertikal lazy loading | modifier, state, contentPadding, reverseLayout, verticalArrangement, horizontalAlignment, content | `LazyColumn { items(list) { } }` |
| 58 | **LazyRow** | List horizontal lazy loading | modifier, state, contentPadding, reverseLayout, horizontalArrangement, verticalAlignment, content | `LazyRow { items(list) { } }` |
| 59 | **LazyVerticalGrid** | Grid vertikal lazy loading | columns, modifier, state, contentPadding, verticalArrangement, horizontalArrangement, content | `LazyVerticalGrid(columns = GridCells.Fixed(2)) { }` |
| 60 | **LazyHorizontalGrid** | Grid horizontal lazy loading | rows, modifier, state, contentPadding, verticalArrangement, horizontalArrangement, content | `LazyHorizontalGrid(rows = GridCells.Fixed(2)) { }` |
| 61 | **LazyVerticalStaggeredGrid** | Staggered grid vertikal | columns, modifier, state, contentPadding, verticalItemSpacing, horizontalArrangement, content | `LazyVerticalStaggeredGrid(columns = StaggeredGridCells.Fixed(2)) { }` |
| 62 | **LazyHorizontalStaggeredGrid** | Staggered grid horizontal | rows, modifier, state, contentPadding, horizontalItemSpacing, verticalArrangement, content | `LazyHorizontalStaggeredGrid(rows = StaggeredGridCells.Fixed(2)) { }` |
| 63 | **ListItem** | List item standar Material 3 | headlineContent, modifier, overlineContent, supportingContent, leadingContent, trailingContent, colors | `ListItem(headlineContent = { Text("Title") })` |

## 10. PROGRESS INDICATORS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 64 | **LinearProgressIndicator** | Progress bar linear (determinate) | progress, modifier, color, trackColor, strokeCap | `LinearProgressIndicator(progress = 0.5f)` |
| 65 | **LinearProgressIndicator** | Progress bar linear (indeterminate) | modifier, color, trackColor, strokeCap | `LinearProgressIndicator()` |
| 66 | **CircularProgressIndicator** | Progress circular (determinate) | progress, modifier, color, strokeWidth, trackColor, strokeCap | `CircularProgressIndicator(progress = 0.5f)` |
| 67 | **CircularProgressIndicator** | Progress circular (indeterminate) | modifier, color, strokeWidth, trackColor, strokeCap | `CircularProgressIndicator()` |

## 11. MENUS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 68 | **DropdownMenu** | Dropdown menu standar | expanded, onDismissRequest, modifier, offset, properties, content | `DropdownMenu(expanded, onDismissRequest = {}) { }` |
| 69 | **DropdownMenuItem** | Item dalam dropdown menu | text, onClick, modifier, leadingIcon, trailingIcon, enabled, colors, contentPadding | `DropdownMenuItem(text = { Text("Option") }, onClick = {})` |
| 70 | **ExposedDropdownMenuBox** | Dropdown dengan text field | expanded, onExpandedChange, modifier, content | `ExposedDropdownMenuBox(expanded, onExpandedChange = {}) { }` |

## 12. CHIPS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 71 | **AssistChip** | Chip untuk aksi/assist | onClick, label, modifier, enabled, leadingIcon, trailingIcon, shape, colors, elevation, border | `AssistChip(onClick = {}, label = { Text("Assist") })` |
| 72 | **ElevatedAssistChip** | Assist chip dengan elevasi | onClick, label, modifier, enabled, leadingIcon, trailingIcon, shape, colors, elevation | `ElevatedAssistChip(onClick = {}, label = { Text("Elevated") })` |
| 73 | **FilterChip** | Chip untuk filtering | selected, onClick, label, modifier, enabled, leadingIcon, trailingIcon, shape, colors, elevation, border | `FilterChip(selected, onClick = {}, label = { Text("Filter") })` |
| 74 | **ElevatedFilterChip** | Filter chip dengan elevasi | selected, onClick, label, modifier, enabled, leadingIcon, trailingIcon, shape, colors, elevation | `ElevatedFilterChip(selected, onClick = {}, label = {})` |
| 75 | **InputChip** | Chip untuk user input | selected, onClick, label, modifier, enabled, leadingIcon, avatar, trailingIcon, shape, colors, elevation, border | `InputChip(selected, onClick = {}, label = { Text("Input") })` |
| 76 | **SuggestionChip** | Chip untuk suggestion | onClick, label, modifier, enabled, icon, shape, colors, elevation, border | `SuggestionChip(onClick = {}, label = { Text("Suggest") })` |
| 77 | **ElevatedSuggestionChip** | Suggestion chip dengan elevasi | onClick, label, modifier, enabled, icon, shape, colors, elevation | `ElevatedSuggestionChip(onClick = {}, label = {})` |

## 13. BADGES

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 78 | **Badge** | Badge untuk notifikasi | modifier, containerColor, contentColor, content | `Badge { Text("3") }` |
| 79 | **BadgedBox** | Container untuk badge + content | badge, modifier, content | `BadgedBox(badge = { Badge() }) { Icon(...) }` |

## 14. DIVIDERS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 80 | **HorizontalDivider** | Garis pemisah horizontal | modifier, thickness, color | `HorizontalDivider()` |
| 81 | **VerticalDivider** | Garis pemisah vertikal | modifier, thickness, color | `VerticalDivider()` |

## 15. ICONS & IMAGES

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 82 | **Icon** | Menampilkan icon | imageVector/painter/bitmap, contentDescription, modifier, tint | `Icon(Icons.Default.Favorite, contentDescription = "Fav")` |
| 83 | **Image** | Menampilkan gambar | painter/bitmap/imageVector, contentDescription, modifier, alignment, contentScale, alpha, colorFilter | `Image(painterResource(R.drawable.img), contentDescription)` |

## 16. SCAFFOLD & SNACKBAR

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 84 | **Scaffold** | Layout structure Material | modifier, topBar, bottomBar, snackbarHost, floatingActionButton, floatingActionButtonPosition, containerColor, content | `Scaffold(topBar = {}) { paddingValues -> }` |
| 85 | **Snackbar** | Snackbar untuk notifikasi | snackbarData/action/dismissAction, modifier, actionOnNewLine, shape, containerColor, contentColor | `Snackbar(snackbarData)` |
| 86 | **SnackbarHost** | Host untuk menampilkan snackbar | hostState, modifier, snackbar | `SnackbarHost(snackbarHostState)` |

## 17. DATE & TIME PICKERS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 87 | **DatePicker** | Date picker Material 3 | state, modifier, dateFormatter, title, headline, showModeToggle, colors | `DatePicker(state = rememberDatePickerState())` |
| 88 | **DatePickerDialog** | Date picker dalam dialog | onDismissRequest, confirmButton, dismissButton, modifier, shape, properties, content | `DatePickerDialog(onDismissRequest = {}, confirmButton = {}) { }` |
| 89 | **DateRangePicker** | Range date picker | state, modifier, dateFormatter, title, headline, showModeToggle, colors | `DateRangePicker(state = rememberDateRangePickerState())` |
| 90 | **TimePicker** | Time picker Material 3 | state, modifier, colors, layoutType | `TimePicker(state = rememberTimePickerState())` |

## 18. TOOLTIPS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 91 | **TooltipBox** | Container untuk tooltip | positionProvider, tooltip, state, modifier, focusable, enableUserInput, content | `TooltipBox(tooltip = { PlainTooltip{} }) { }` |
| 92 | **PlainTooltip** | Tooltip sederhana | modifier, contentColor, containerColor, shape, content | `PlainTooltip { Text("Tooltip") }` |
| 93 | **RichTooltip** | Tooltip dengan title & action | modifier, title, action, colors, shape, text | `RichTooltip(title = {}, action = {}) { Text("Rich") }` |

## 19. SEARCH

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 94 | **SearchBar** | Search bar Material 3 | query, onQueryChange, onSearch, active, onActiveChange, modifier, enabled, placeholder, leadingIcon, trailingIcon, colors, content | `SearchBar(query, onQueryChange = {}, onSearch = {}, active, onActiveChange = {}) { }` |
| 95 | **DockedSearchBar** | Search bar docked | query, onQueryChange, onSearch, active, onActiveChange, modifier, enabled, placeholder, leadingIcon, trailingIcon, colors, content | `DockedSearchBar(query, onQueryChange = {}, onSearch = {}, active, onActiveChange = {}) { }` |

## 20. CAROUSEL

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 96 | **HorizontalMultiBrowseCarousel** | Carousel horizontal multi-item | state, preferredItemWidth, modifier, itemSpacing, contentPadding, content | `HorizontalMultiBrowseCarousel(state, preferredItemWidth) { }` |
| 97 | **HorizontalUncontainedCarousel** | Carousel tanpa container | state, modifier, itemWidth, itemSpacing, contentPadding, content | `HorizontalUncontainedCarousel(state, itemWidth) { }` |

## 21. PULL TO REFRESH

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 98 | **PullToRefreshContainer** | Container pull to refresh | state, modifier, containerColor, contentColor | `PullToRefreshContainer(state)` |

## 22. SWIPE TO DISMISS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 99 | **SwipeToDismissBox** | Box dengan swipe dismiss | state, backgroundContent, modifier, enableDismissFromStartToEnd, enableDismissFromEndToStart, content | `SwipeToDismissBox(state, background = {}) { }` |

## 23. ACCESSIBILITY

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 100 | **semantics modifier** | Accessibility semantics | properties, mergeDescendants | `Modifier.semantics { contentDescription = "Button" }` |

## 24. **Modifier Extensions**

Compose juga menyediakan banyak modifier untuk customisasi:
- `clickable`, `combinedClickable`
- `background`, `border`
- `padding`, `size`, `fillMaxWidth/Height/Size`
- `clip`, `shadow`
- `scrollable`, `verticalScroll`, `horizontalScroll`
- `draggable`, `swipeable`
- `zIndex`, `alpha`
- `rotate`, `scale`, `offset`
- `animateContentSize`

## 25. **Animations**

- `AnimatedVisibility`
- `Crossfade`
- `animateDpAsState`, `animateFloatAsState`, dll
- `updateTransition`
- `AnimatedContent`

## 26. **Accessibility**

- `semantics` modifier untuk screen readers
- `contentDescription` untuk images/icons
- Support untuk TalkBack dan accessibility services

Semua komponen ini mengikuti **Material Design 3** guidelines dan dapat dikustomisasi melalui theming dengan `MaterialTheme.colorScheme`, `MaterialTheme.typography`, dan `MaterialTheme.shapes`.




# Komponen UI Jetpack Compose Selain Material 3

Ya, ada banyak komponen lain yang sering digunakan! Berikut tabelnya:

## 1. FOUNDATION COMPONENTS (androidx.compose.foundation)

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 1 | **Canvas** | Untuk menggambar custom graphics | modifier, onDraw | `Canvas(Modifier.size(100.dp)) { drawCircle(Color.Red) }` |
| 2 | **BasicText** | Text tanpa Material styling | text, modifier, style, onTextLayout, overflow, softWrap, maxLines | `BasicText("Hello", style = TextStyle(fontSize = 16.sp))` |
| 3 | **BasicTextField** | TextField tanpa Material styling | value, onValueChange, modifier, enabled, readOnly, textStyle, keyboardOptions, singleLine, maxLines, decorationBox | `BasicTextField(value, onValueChange = {})` |
| 4 | **Image** | Menampilkan gambar (versi foundation) | painter, contentDescription, modifier, alignment, contentScale, alpha, colorFilter | `Image(painterResource(R.drawable.logo), null)` |
| 5 | **AndroidView** | Embed Android View tradisional | factory, modifier, update, onReset, onRelease | `AndroidView(factory = { WebView(it) })` |
| 6 | **Spacer** | Ruang kosong untuk spacing | modifier | `Spacer(modifier = Modifier.height(16.dp))` |
| 7 | **Box** | Container layout dasar | modifier, contentAlignment, propagateMinConstraints | `Box(Modifier.fillMaxSize()) { }` |
| 8 | **Column** | Layout vertikal | modifier, verticalArrangement, horizontalAlignment | `Column { Text("1"); Text("2") }` |
| 9 | **Row** | Layout horizontal | modifier, horizontalArrangement, verticalAlignment | `Row { Text("1"); Text("2") }` |
| 10 | **clickable** | Modifier untuk click | enabled, onClickLabel, role, onClick | `Modifier.clickable { }` |
| 11 | **combinedClickable** | Click dengan long press | enabled, onClickLabel, onClick, onDoubleClick, onLongClick | `Modifier.combinedClickable(onLongClick = {}) { }` |
| 12 | **background** | Background color/brush | color/brush, shape, alpha | `Modifier.background(Color.Red)` |
| 13 | **border** | Border/outline | width, color/brush, shape | `Modifier.border(2.dp, Color.Black)` |
| 14 | **clip** | Memotong shape | shape | `Modifier.clip(CircleShape)` |
| 15 | **horizontalScroll** | Scroll horizontal | state, enabled, flingBehavior, reverseScrolling | `Modifier.horizontalScroll(rememberScrollState())` |
| 16 | **verticalScroll** | Scroll vertikal | state, enabled, flingBehavior, reverseScrolling | `Modifier.verticalScroll(rememberScrollState())` |
| 17 | **draggable** | Membuat draggable | state, orientation, enabled, startDragImmediately, onDragStarted, onDragStopped | `Modifier.draggable(state, Orientation.Horizontal)` |
| 18 | **scrollable** | Membuat scrollable | state, orientation, enabled, reverseDirection | `Modifier.scrollable(state, Orientation.Vertical)` |

## 2. LAYOUT COMPONENTS (androidx.compose.foundation.layout)

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 19 | **BoxWithConstraints** | Box dengan akses ke constraints | modifier, contentAlignment, propagateMinConstraints, content | `BoxWithConstraints { if (maxWidth > 600.dp) { } }` |
| 20 | **FlowRow** | Row yang wrap ke baris baru | modifier, horizontalArrangement, verticalArrangement, maxItemsInEachRow | `FlowRow { repeat(10) { Text("Item") } }` |
| 21 | **FlowColumn** | Column yang wrap ke kolom baru | modifier, verticalArrangement, horizontalArrangement, maxItemsInEachColumn | `FlowColumn { repeat(10) { Text("Item") } }` |
| 22 | **ConstraintLayout** | Layout dengan constraints | modifier, constraintSet, content | `ConstraintLayout { val (text, button) = createRefs() }` |
| 23 | **Arrangement.spacedBy** | Spacing antar item | space | `Row(horizontalArrangement = Arrangement.spacedBy(8.dp))` |
| 24 | **padding** | Padding modifier | all/start/top/end/bottom/horizontal/vertical | `Modifier.padding(16.dp)` |
| 25 | **size** | Ukuran fixed | width, height / size | `Modifier.size(100.dp)` |
| 26 | **fillMaxWidth** | Mengisi lebar maksimal | fraction | `Modifier.fillMaxWidth()` |
| 27 | **fillMaxHeight** | Mengisi tinggi maksimal | fraction | `Modifier.fillMaxHeight()` |
| 28 | **fillMaxSize** | Mengisi ukuran maksimal | fraction | `Modifier.fillMaxSize()` |
| 29 | **wrapContentSize** | Ukuran sesuai content | align, unbounded | `Modifier.wrapContentSize()` |
| 30 | **aspectRatio** | Ratio width/height | ratio, matchHeightConstraintsFirst | `Modifier.aspectRatio(16f / 9f)` |
| 31 | **weight** | Weight dalam Row/Column | weight, fill | `Modifier.weight(1f)` |

## 3. ANIMATION COMPONENTS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 32 | **AnimatedVisibility** | Animasi show/hide | visible, modifier, enter, exit, label, content | `AnimatedVisibility(visible) { Text("Hello") }` |
| 33 | **AnimatedContent** | Animasi pergantian content | targetState, modifier, transitionSpec, contentAlignment, label, content | `AnimatedContent(state) { Text("State: $it") }` |
| 34 | **Crossfade** | Crossfade animation | targetState, modifier, animationSpec, label, content | `Crossfade(currentPage) { page -> }` |
| 35 | **animateDpAsState** | Animasi Dp value | targetValue, animationSpec, label, finishedListener | `val size by animateDpAsState(if (big) 100.dp else 50.dp)` |
| 36 | **animateFloatAsState** | Animasi Float value | targetValue, animationSpec, visibilityThreshold, label, finishedListener | `val alpha by animateFloatAsState(if (visible) 1f else 0f)` |
| 37 | **animateColorAsState** | Animasi Color value | targetValue, animationSpec, label, finishedListener | `val color by animateColorAsState(if (active) Color.Red else Color.Gray)` |
| 38 | **animateIntAsState** | Animasi Int value | targetValue, animationSpec, label, finishedListener | `val count by animateIntAsState(targetCount)` |
| 39 | **updateTransition** | Transition untuk multiple values | targetState, label | `val transition = updateTransition(state)` |
| 40 | **rememberInfiniteTransition** | Infinite animation | label | `val infiniteTransition = rememberInfiniteTransition()` |
| 41 | **animateContentSize** | Animasi ukuran content | animationSpec, finishedListener | `Modifier.animateContentSize()` |

## 4. ACCOMPANIST LIBRARIES (Google - Popular Third Party)

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 42 | **Pager (HorizontalPager)** | ViewPager untuk Compose | pageCount, modifier, state, beyondBoundsPageCount, pageContent | `HorizontalPager(pageCount = 5) { page -> }` |
| 43 | **VerticalPager** | Vertical pager | pageCount, modifier, state, beyondBoundsPageCount, pageContent | `VerticalPager(pageCount = 5) { page -> }` |
| 44 | **PagerIndicator** | Indicator untuk pager | pagerState, modifier, activeColor, inactiveColor | `HorizontalPagerIndicator(pagerState)` |
| 45 | **SystemUiController** | Kontrol system UI (status bar, nav bar) | - | `systemUiController.setStatusBarColor(Color.Blue)` |
| 46 | **Placeholder** | Skeleton loading | visible, highlight, shape | `Modifier.placeholder(visible = loading)` |
| 47 | **SwipeRefresh** | Pull to refresh | state, onRefresh, indicator, content | `SwipeRefresh(refreshing, onRefresh = {}) { }` |
| 48 | **FlowLayout** | Layout flow (deprecated, use FlowRow) | modifier, mainAxisSpacing, crossAxisSpacing | `FlowRow { }` |
| 49 | **WebView** | WebView untuk Compose | state, modifier, onCreated, onDispose | `WebView(state = rememberWebViewState(url))` |
| 50 | **PermissionsRequired** | Handle permissions | permissions, onPermissionsGranted, content | `PermissionsRequired(permissions) { }` |

## 5. COIL / GLIDE - IMAGE LOADING

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 51 | **AsyncImage (Coil)** | Load image dari URL | model, contentDescription, modifier, placeholder, error, onSuccess, onError, contentScale | `AsyncImage(model = imageUrl, contentDescription = null)` |
| 52 | **SubcomposeAsyncImage** | AsyncImage dengan composable placeholder | model, contentDescription, modifier, loading, error, onSuccess, onError, contentScale | `SubcomposeAsyncImage(model = url, loading = { CircularProgressIndicator() })` |
| 53 | **rememberAsyncImagePainter** | Painter untuk async image | model, placeholder, error, onSuccess, onError | `Image(painter = rememberAsyncImagePainter(url))` |
| 54 | **GlideImage** | Glide image loader | model, contentDescription, modifier, contentScale | `GlideImage(model = url, contentDescription = null)` |

## 6. LOTTIE ANIMATIONS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 55 | **LottieAnimation** | Play Lottie animations | composition, progress/iterations, modifier, contentScale | `LottieAnimation(composition, iterations = LottieConstants.IterateForever)` |
| 56 | **rememberLottieComposition** | Load Lottie file | spec | `val composition by rememberLottieComposition(LottieCompositionSpec.RawRes(R.raw.animation))` |
| 57 | **rememberLottieAnimatable** | Controllable Lottie animation | - | `val animatable = rememberLottieAnimatable()` |

## 7. NAVIGATION COMPONENT

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 58 | **NavHost** | Container untuk navigation | navController, startDestination, modifier, route, builder | `NavHost(navController, startDestination = "home") { }` |
| 59 | **composable** | Define screen destination | route, arguments, deepLinks, content | `composable("details/{id}") { backStackEntry -> }` |
| 60 | **dialog** | Navigation dialog | route, arguments, deepLinks, dialogProperties, content | `dialog("confirm") { }` |
| 61 | **rememberNavController** | Create NavController | - | `val navController = rememberNavController()` |
| 62 | **navigation** | Nested navigation graph | startDestination, route, builder | `navigation(startDestination = "login", route = "auth") { }` |

## 8. PAGING 3 COMPOSE

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 63 | **LazyPagingItems** | Paging items untuk LazyList | - | `val lazyPagingItems = pagingData.collectAsLazyPagingItems()` |
| 64 | **items (Paging)** | Extension untuk paging items | lazyPagingItems, key, itemContent | `items(lazyPagingItems) { item -> }` |

## 9. COMPOSE RUNTIME

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 65 | **remember** | Remember value across recomposition | calculation | `val state = remember { mutableStateOf("") }` |
| 66 | **rememberSaveable** | Remember value dengan save state | stateSaver, key, init | `val text = rememberSaveable { mutableStateOf("") }` |
| 67 | **LaunchedEffect** | Run suspend functions | key, block | `LaunchedEffect(key) { delay(1000) }` |
| 68 | **DisposableEffect** | Effect dengan cleanup | key, effect | `DisposableEffect(key) { onDispose { } }` |
| 69 | **SideEffect** | Effect untuk non-Compose state | effect | `SideEffect { analyticsLog() }` |
| 70 | **derivedStateOf** | Derived state dari state lain | calculation | `val total = remember { derivedStateOf { items.sum() } }` |
| 71 | **produceState** | Produce state dari suspend function | initialValue, key, producer | `val state = produceState(0) { value = loadData() }` |
| 72 | **snapshotFlow** | Flow dari Compose state | block | `snapshotFlow { scrollState.value }.collect { }` |
| 73 | **rememberCoroutineScope** | CoroutineScope untuk composable | - | `val scope = rememberCoroutineScope()` |
| 74 | **rememberUpdatedState** | Capture latest value | newValue | `val currentOnClick by rememberUpdatedState(onClick)` |

## 10. COMPOSE UI GRAPHICS

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 75 | **drawBehind** | Draw behind content | onDraw | `Modifier.drawBehind { drawCircle(Color.Red) }` |
| 76 | **drawWithContent** | Draw with/around content | onDraw | `Modifier.drawWithContent { drawContent(); drawRect() }` |
| 77 | **graphicsLayer** | Graphics transformations | scaleX, scaleY, alpha, rotationZ, translationX, translationY, shadowElevation | `Modifier.graphicsLayer { alpha = 0.5f; rotationZ = 45f }` |
| 78 | **BlurredEdgeTreatment** | Blur effects | - | `Modifier.blur(radiusX = 10.dp, radiusY = 10.dp)` |
| 79 | **shadow** | Drop shadow | elevation, shape, clip, ambientColor, spotColor | `Modifier.shadow(4.dp, CircleShape)` |
| 80 | **rotate** | Rotate modifier | degrees | `Modifier.rotate(45f)` |
| 81 | **scale** | Scale modifier | scaleX, scaleY / scale | `Modifier.scale(1.5f)` |
| 82 | **offset** | Offset position | x, y | `Modifier.offset(x = 10.dp, y = 20.dp)` |
| 83 | **alpha** | Transparency | alpha | `Modifier.alpha(0.5f)` |

## 11. JETPACK COMPOSE TESTING

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 84 | **createComposeRule** | Testing rule | - | `val composeTestRule = createComposeRule()` |
| 85 | **onNodeWithText** | Find node by text | text, substring, ignoreCase | `composeTestRule.onNodeWithText("Hello").assertExists()` |
| 86 | **onNodeWithTag** | Find node by testTag | testTag, useUnmergedTree | `composeTestRule.onNodeWithTag("button").performClick()` |
| 87 | **onNodeWithContentDescription** | Find by content description | label, substring, ignoreCase | `composeTestRule.onNodeWithContentDescription("Icon")` |

## 12. WINDOW SIZE & ADAPTIVE

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 88 | **calculateWindowSizeClass** | Window size class | activity | `val windowSize = calculateWindowSizeClass(this)` |
| 89 | **WindowSizeClass** | Adaptive layout helper | widthSizeClass, heightSizeClass | `when (windowSize.widthSizeClass) { WindowWidthSizeClass.Compact -> }` |

## 13. CAMERA & MEDIA

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 90 | **CameraPreview** | Camera preview (CameraX) | - | Perlu implementasi custom dengan AndroidView |
| 91 | **VideoPlayer** | Video player | - | Perlu implementasi custom dengan AndroidView + ExoPlayer |

## 14. MAPS (Google Maps Compose)

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 92 | **GoogleMap** | Google Maps | modifier, cameraPositionState, uiSettings, properties, content | `GoogleMap(cameraPositionState = cameraState) { }` |
| 93 | **Marker** | Map marker | state, title, snippet, icon | `Marker(state = MarkerState(position = latLng))` |
| 94 | **Polyline** | Draw polyline on map | points, color, width | `Polyline(points = routePoints)` |
| 95 | **Polygon** | Draw polygon on map | points, fillColor, strokeColor | `Polygon(points = areaPoints)` |
| 96 | **Circle** | Draw circle on map | center, radius, fillColor, strokeColor | `Circle(center = latLng, radius = 1000.0)` |

## 15. CHARTS & GRAPHS (Third Party)

| No | Komponen | Deskripsi | Library | Contoh Penggunaan |
|----|----------|-----------|---------|-------------------|
| 97 | **LineChart** | Line chart | Vico, MPAndroidChart | `Chart(chart = lineChart, model = chartModel)` |
| 98 | **BarChart** | Bar chart | Vico, MPAndroidChart | `Chart(chart = barChart, model = chartModel)` |
| 99 | **PieChart** | Pie chart | Vico, MPAndroidChart | `PieChart(data = pieData)` |

## 16. MARKDOWN RENDERER

| No | Komponen | Deskripsi | Library | Contoh Penggunaan |
|----|----------|-----------|---------|-------------------|
| 100 | **Markdown** | Render markdown text | Markwon, Compose-Markdown | `Markdown(content = markdownText)` |

## 17. QR CODE & BARCODE

| No | Komponen | Deskripsi | Library | Contoh Penggunaan |
|----|----------|-----------|---------|-------------------|
| 101 | **QRCodeGenerator** | Generate QR code | ZXing | Custom implementation dengan Canvas |
| 102 | **BarcodeScanner** | Scan barcode | ML Kit | Custom implementation dengan CameraX |

## 18. PULL TO REFRESH (Native M3)

| No | Komponen | Deskripsi | Parameter Utama | Contoh Penggunaan |
|----|----------|-----------|-----------------|-------------------|
| 103 | **PullToRefreshContainer** | Pull refresh indicator | state, modifier, containerColor | Sudah dijelaskan di tabel Material 3 |

---

## Library Populer Tambahan:

### **Perlu Dependency Terpisah:**
- **Accompanist** (Google): Pager, SystemUiController, Permissions, dll
- **Coil**: Image loading dari URL
- **Lottie**: Animasi Lottie
- **Compose Destinations**: Type-safe navigation
- **Vico/MPAndroidChart**: Charts & graphs
- **Compose-Markdown**: Markdown rendering
- **Compose-Calendar**: Calendar component
- **Compose-RatingBar**: Rating bar
- **Landscapist**: Image loading (Glide/Coil wrapper)

Komponen-komponen ini sangat berguna untuk membangun aplikasi yang kompleks dan modern dengan Jetpack Compose!