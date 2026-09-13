# ALGORYX // CONTROL CENTER

> **Task 1: Frontend Internship Implementation**  
> Organization: **Algoryx Technologies**  
> Project: **Algoryx Control Center (Internal Technology Operations Platform)**  
> Architecture: **Modern React (Pure JavaScript), Vite, Tailwind CSS, Lucide Icons**

---

## ⚡ Overview & Design Direction

**ALGORYX // CONTROL CENTER** is a production-quality, human-designed React SaaS Admin Dashboard created for Algoryx Technologies.

The design adheres to a **Light Professional Theme**:
- **Main Canvas:** Crisp neutral cool-white background (`#F7F8FA`)
- **Card Containers:** Pure white `#FFFFFF` with refined borders (`#E5E7EB`) and subtle elevation (`shadow-xs`)
- **Primary Brand Color:** Official Algoryx technology blue (`#2563EB` / `#1D4ED8`)
- **Official Branding:** Integrated official high-resolution Algoryx logo (`/algoryx-symbol.png` and `/algoryx-logo.png`) with clean light-background visibility and responsive collapsed mode
- **Typography:** Refined Inter typography paired with monospace numerical tracking

---

## 🛠️ Technology Stack

- **Framework:** React 19 (Functional Components, React Hooks: `useState`, `useEffect`, `useMemo`, `useCallback`)
- **Language:** JavaScript (`.jsx` / `.js`) — Zero TypeScript in application components
- **Bundler & Dev Server:** Vite
- **Styling:** Tailwind CSS with light professional theme specifications
- **Iconography:** Lucide React (`lucide-react`)
- **Data Layer:** Realistic enterprise mock dataset in `src/data/dashboardData.js`

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── Sidebar.jsx              # Desktop collapsible sidebar & mobile slide-out drawer with Algoryx logo
│   ├── TopNavbar.jsx            # Breadcrumbs, global search trigger, system status, refresh, profile menu
│   ├── StatCard.jsx             # 4 Metric cards with live change percentage, subtitle, & SVG sparkline
│   ├── AnalyticsChart.jsx       # Interactive SVG chart with 7D/30D/90D/1Y timeframes, tooltips & metric toggles
│   ├── SystemPulse.jsx          # Live telemetry: API latency (42ms), CPU (38%), Memory (61%), Requests/sec (1,284)
│   ├── RecentActivity.jsx       # Audit trail table with search, status filtering, and mobile card transformation
│   ├── ProjectCard.jsx          # Realistic Algoryx projects: Breakpoint, 3D Asset Platform, Dev Tools, UI
│   ├── NotificationPanel.jsx    # Slide-out drawer with unread tracking, mark as read, and clear actions
│   ├── ProfileDropdown.jsx      # Developer profile card with account settings and sign-out controls
│   ├── SearchBar.jsx            # Working global modal with keyboard shortcut (Ctrl+K / Cmd+K)
│   └── ui/
│       ├── Badge.jsx            # Reusable status pill badges
│       └── Avatar.jsx           # User avatar initials
├── pages/
│   └── Dashboard.jsx            # Main dashboard orchestrator (greetings, metrics, charts, pulse, projects, table)
├── data/
│   └── dashboardData.js         # Centralized telemetry, metrics, project, and activity dataset
├── hooks/
│   └── useDashboard.js          # Unified state management hook
├── App.jsx                      # App root view orchestrator with tab routing
├── main.jsx                     # Entry React DOM mount
└── index.css                    # Tailwind CSS imports and light theme configuration
```

---

## 🌟 Key Features

1. **Brand Identity & Logo:**
   - Official Algoryx company logo in the sidebar and top navigation area.
   - Clear visibility on the light canvas. Responsive icon mode when collapsed.

2. **Top Navigation:**
   - Current page breadcrumb (`Algoryx / Overview`).
   - Quick search trigger with `⌘K` badge.
   - Live system operational status indicator with SLA guarantee.
   - Telemetry data refresh with animation.
   - Interactive notifications drawer with unread badge counter.
   - Developer profile menu with user details.

3. **4 Professional Metric Cards:**
   - **Total Revenue:** `₹84,240` (+18.4% vs last month) with custom SVG trend sparkline.
   - **Active Users:** `12,480` (+12.8% active platform accounts) with sparkline.
   - **Projects:** `248` (+24 across 14 cluster zones) with sparkline.
   - **System Uptime:** `99.99%` (+0.02% SLA guarantee met) with sparkline.

4. **Platform Performance Analytics:**
   - Time range selector (`7D`, `30D`, `90D`, `1Y`).
   - Metric toggles (`Requests`, `Users`, `Latency`).
   - Clean, lightweight SVG Area and Line visualization with hover tooltips and dashed gridlines.

5. **System Pulse Telemetry:**
   - API Latency: `42 ms` (Optimal, < 50ms SLA).
   - CPU Load: `38%` (32 Cores).
   - Memory Load: `61%` (24.4 GB / 40.0 GB).
   - Network Requests/sec: `1,284 req/s`.

6. **Active Projects:**
   - Realistic Algoryx projects: *Breakpoint* (WebGL Engine), *3D Asset Platform* (CAD & Spatial Runtime), *Developer Tools* (CLI & SDK), and *UI Integrations* (Design System).
   - Progress indicators, git branch tags, team avatars, and last updated timestamps.

7. **Recent Activity Audit Table:**
   - Live search input.
   - Status filtering (`All`, `Completed`, `In Progress`, `Pending`, `Failed`).
   - Automatic conversion to clean stacked cards on mobile to eliminate horizontal scrolling.

8. **Global Search Modal (`Ctrl + K` / `Cmd + K`):**
   - Live filtering across projects, audit trail, and team members.
   - Keyboard accessible (`Esc` to dismiss).
