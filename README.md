# AI Manufacturing Engineer 🏭⚡

[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deployment-Edge--Native-2DD4BF?style=flat-square)](docs/ARCHITECTURE.md)
[![Security](https://img.shields.io/badge/Security-100%25%20Air--Gapped-34D399?style=flat-square)](docs/ARCHITECTURE.md)
[![Inference Latency](https://img.shields.io/badge/Inference-%3C5ms%20Local-F59E0B?style=flat-square)](docs/ARCHITECTURE.md)

> **Your factory has data. We turn it into autonomous engineering intelligence.**  
> An edge-first, physics-informed industrial AI platform that connects directly to legacy and modern factory PLCs, sensors, and SCADA historians to predict defects, diagnose process drift, and optimize yield in real time — with zero mandatory cloud dependencies.

---

## 📑 Table of Contents

- [Executive Overview](#-executive-overview)
- [Key Interactive Features](#-key-interactive-features)
- [Edge-First Architecture](#-edge-first-architecture)
- [Domain Grounding & MIT Research](#-domain-grounding--mit-research)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Supported Industrial Protocols](#-supported-industrial-protocols)
- [30-Day Factory Pilot Runbook](#-30-day-factory-pilot-runbook)
- [Documentation Links](#-documentation-links)

---

## 🔍 Executive Overview

Most manufacturing plants don't have a data problem — they have an **intelligence problem**. Billions of sensor readings sit trapped in isolated PLCs, standalone sensors, and disconnected CSV historians.

**AI Manufacturing Engineer** solves this with:
- **Zero Cloud Lock-in**: 100% on-premise inference inside your factory OT subnet.
- **Sub-5ms Inference**: Fast enough for closed-loop parameter stabilization.
- **Physics-Informed ML (PINNs)**: Models constrained by thermal, mechanical, and rheological laws, preventing spurious false alarms.
- **Non-Invasive Protocol Ingest**: Connects to 15-year-old legacy PLCs via read-only passive subscriber taps without stopping production lines.

---

## 🚀 Key Interactive Features

### 1. Live Interactive Edge Simulator (`LiveDemo.tsx`)
- **3 Manufacturing Scenarios**:
  - 🔬 **Optical Fiber Draw Tower**: Preform neck-down at 2000°C down to $125.0 \pm 0.5\,\mu\text{m}$ single-mode fiber at 1,800 m/min.
  - ⚙️ **5-Axis Precision CNC**: Spindle harmonic vibration & micro-tool wear on titanium blisks.
  - 🧪 **Continuous Polymer Extrusion**: Melt pressure, barrel zone thermal curves, and wall eccentricity.
- **Interactive Controls**:
  - `Inject Process Drift`: Simulates thermal boundary drift or tool chatter.
  - `AI Root-Cause Diagnostic`: Calculates real-time SHAP feature importance percentages.
  - `Apply AI Setpoint Optimization`: Computes closed-loop setpoint deltas and restores process $C_{pk}$.

### 2. Interactive Financial ROI & Scrap Model (`RoiCalculator.tsx`)
- Dynamic sliders for Annual Production Value ($2M to $100M), Baseline Scrap Rate (0.5% to 15%), and Unplanned Downtime.
- Real-time calculated annual savings ($35\%$ scrap reduction, $28\%$ downtime avoidance), payback timeline, and 1-click **Copy Financial Summary** export.

### 3. Interactive 4-Layer Edge Topology (`ArchitectureExplorer.tsx`)
- Drill down into Level 0/1 Field Machines, Level 2 DIN-rail Gateways, Level 3 On-Prem ML Runtime, and Level 4 Operator HUD.

### 4. 7-Stage Optical Fiber Digital Twin (`FiberCaseStudy.tsx`)
- Interactive step-by-step physical breakdown from $\text{SiO}_2$ soot deposition and consolidation sintering at 1450°C to high-speed tower draw and in-line laser gauging.

### 5. Multi-Step Plant Pilot Wizard (`PilotRequest.tsx`)
- 3-step structured intake configuring plant scale, communication protocols (OPC UA, Modbus, S7, CIP, MQTT), and target validation milestones.

---

## 🏛️ Edge-First Architecture

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Level 4: Plant Operations & Operator HUD                               │
│ • Real-time line telemetry dashboard (<10ms local websocket)           │
│ • Prescriptive operator advisory & 1-click setpoint confirmation       │
│ • Optional encrypted MQTT enterprise sync / shift PDF reports          │
└───────────────────────────────────▲────────────────────────────────────┘
                                    │ Local IPC / WebSocket
┌───────────────────────────────────┴────────────────────────────────────┐
│ Level 3: Physics-Informed ML Inference Engine (Local Edge Runtime)    │
│ • Sub-5ms deterministic ONNX / PyTorch Edge inference                  │
│ • Physics-informed autoencoders for non-linear multidimensional drift  │
│ • Real-time SHAP feature importance & root-cause attribution           │
│ • Local high-performance time-series cache (TimescaleDB / DuckDB)      │
└───────────────────────────────────▲────────────────────────────────────┘
                                    │ Low-latency IPC / Shared Memory
┌───────────────────────────────────┴────────────────────────────────────┐
│ Level 2: Industrial Edge Ingestion Gateway (DIN-Rail IPC)              │
│ • Multi-protocol industrial drivers: OPC UA, Modbus TCP, S7, MQTT     │
│ • Zero-allocation ring buffer (survives network jitter & dropouts)     │
│ • Microsecond sensor clock synchronization & deadband filtering        │
└───────────────────────────────────▲────────────────────────────────────┘
                                    │ Non-invasive OT Fieldbus / Passive Tap
┌───────────────────────────────────┴────────────────────────────────────┐
│ Level 0 / 1: Factory Floor Equipment & Physical Sensors                │
│ • PLCs: Siemens S7-1200/1500, Rockwell ControlLogix, Beckhoff, Omron   │
│ • Sensors: Laser micrometers (125μm ± 0.4μm), Pyrometers, Accelerometers│
│ • Machinery: Draw towers, 5-axis CNCs, polymer extruders, furnaces     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎓 Domain Grounding & MIT Research

Founded by **Vivek Singh**, with deep hands-on industrial manufacturing engineering and AI/ML domain expertise:
- **Industrial Experience at STL Technology Solutions**: Direct hands-on work on optical-fiber manufacturing covering core deposition, cladding deposition, sintering, soaking, and high-speed draw tower dynamics.
- **MIT Research Collaboration**: Collaborative research with **MIT's Device Realization Lab** under **Dr. Brian W. Anthony**, focusing on data-driven manufacturing, high-frequency sensing, and physics-informed control algorithms.

---

## 📂 Project Directory Structure

```text
ai-manufacturing-engineer/
├── app/
│   ├── components/                # Modular client & server UI components
│   │   ├── ArchitectureExplorer.tsx # Interactive L0-L4 layer inspector
│   │   ├── FaqSection.tsx          # Engineering & OT FAQ accordion
│   │   ├── FiberCaseStudy.tsx      # 7-stage optical fiber digital twin
│   │   ├── Footer.tsx              # Protocol badges & links
│   │   ├── Header.tsx              # Sticky glass topbar & status beacon
│   │   ├── Hero.tsx                # Hero section & live telemetry HUD
│   │   ├── HowItWorks.tsx          # 4-stage operational pipeline
│   │   ├── LiveDemo.tsx            # Interactive Edge AI Simulator
│   │   ├── PilotRequest.tsx        # 3-step pilot request wizard
│   │   ├── ProblemSolution.tsx     # Intelligence gap & comparison matrix
│   │   ├── RoiCalculator.tsx       # Interactive financial savings model
│   │   └── VisionRoadmap.tsx       # 6-tier maturity roadmap
│   ├── data/                      # Structured domain datasets
│   │   ├── architecture.ts         # Edge topology layers & specs
│   │   ├── comparison.ts           # Cloud IoT vs Edge AI comparison
│   │   ├── faqs.ts                 # Technical FAQ items
│   │   ├── fiberStudy.ts           # 7-stage optical fiber process data
│   │   ├── pipeline.ts             # 4-phase operational pipeline steps
│   │   ├── roadmap.ts              # Maturity levels L1 to L6
│   │   └── scenarios.ts            # Simulation scenarios & SHAP weights
│   ├── types/                     # TypeScript domain models & interfaces
│   │   └── index.ts                # Shared types definition
│   ├── globals.css                # Industrial dark precision design tokens
│   ├── layout.tsx                 # Root layout & SEO OpenGraph metadata
│   └── page.tsx                   # Main Next.js App page assembler
├── docs/                          # In-depth technical documentation
│   ├── ARCHITECTURE.md            # Complete edge runtime technical spec
│   └── PILOT_GUIDE.md             # 30-Day factory deployment runbook
├── static/                        # Standalone assets for zero-dependency viewing
│   └── styles.css                 # Standalone compiled CSS
├── index.html                     # Zero-dependency standalone HTML version
├── package.json                   # Dependencies & scripts (Next.js 15, React 19)
├── tsconfig.json                  # TypeScript compiler configuration
└── README.md                      # Project documentation
```

---

## ⚡ Getting Started

### 1. Next.js Web Application (Recommended)

```bash
# Clone the repository
git clone https://github.com/vivek-slngh/ai-manufacturing-engineer.git
cd ai-manufacturing-engineer

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Production Build & Verification
```bash
npm run build
npm run start
```

### 2. Standalone Zero-Dependency Static Version
Open [`index.html`](file:///home/vivek/hub/ai_manufacturing/ai-manufacturing-engineer/index.html) directly in any modern web browser or serve via any static file server:

```bash
npx serve .
```

---

## 🔌 Supported Industrial Protocols

| Protocol | Typical Equipment | Ingestion Mode |
| :--- | :--- | :--- |
| **OPC UA (IEC 62541)** | Modern PLCs, SCADA, CNCs | Binary TCP Client (DA/HA) |
| **Modbus TCP / RTU** | Energy meters, Pyrometers, VFDs | Read Holding Registers (FC 03/04) |
| **Siemens S7 Protocol** | S7-300 / 400 / 1200 / 1500 | Native ISO-on-TCP (DB read) |
| **EtherNet/IP (CIP)** | Rockwell ControlLogix / CompactLogix | Unconnected / Connected Messaging |
| **MQTT Sparkplug B** | IIoT Sensors & Edge Nodes | State-Aware Payload B Ingestion |
| **SCADA Historians** | OSIsoft PI, AspenTech, Wonderware | REST / SQL / OPC HDA connector |

---

## 📅 30-Day Factory Pilot Runbook

| Timeline | Milestone | Key Outcome |
| :--- | :--- | :--- |
| **Week 1** | Ingestion & OT Connection | Passive gateway deployed; 100Hz signals verified with zero downtime. |
| **Week 2** | Physics Baseline & Calibration | Time-series tensors aligned with part tolerances and lab QA logs. |
| **Week 3** | Live Anomaly & Operator Advisory | Real-time drift alerts & SHAP attribution live on control room HUDs. |
| **Week 4** | Cpk Signoff & Financial Review | Quantified scrap reduction ($25\text{--}40\%$) and executive ROI signoff. |

*See [`docs/PILOT_GUIDE.md`](docs/PILOT_GUIDE.md) for full deployment details.*

---

## 📚 Documentation Links

- 📐 [**Architecture Specification**](docs/ARCHITECTURE.md)
- 📋 [**30-Day Pilot Guide**](docs/PILOT_GUIDE.md)

---

## 📄 License & Intellectual Property

© 2026 AI Manufacturing Engineer. Built and architected by Vivek Singh. All rights reserved.
