# Mastermind Cloud-Native FunApp

> **A Full-Stack Showcase: Bridging Enterprise .NET Robustness with Modern Cloud Agility.**

This project demonstrates the evolution of a classic logic engine into a high-scale, cloud-native application. It showcases the reuse of a platform-agnostic C# business logic library across multiple delivery channels—starting from a Console CLI to a modern **Serverless API** with a **React** frontend.

## 🚀 Architectural Vision

The goal of this project was to implement a **decoupled, scalable architecture** that reflects real-world enterprise requirements in 2026. By utilizing **.NET 10** and **Azure Static Web Apps**, the solution maximizes performance while minimizing infrastructure overhead.

### Key Skills Demonstrated:
* **Full-Stack Development:** Seamless integration between a TypeScript frontend and a C# backend.
* **Cloud-Native Design:** Leveraging Azure Functions (Serverless) for event-driven logic.
* **Software Design Patterns:** Implementation of **Dependency Injection (DI)** and **Interface-based programming** to ensure testability and maintainability.
* **Modern Frontend:** Using **Vite**, **React**, and **TypeScript** for a type-safe, high-performance UI.
* **CI/CD:** Automated deployment pipelines using **GitHub Actions**.

---

## 🛠️ Tech Stack

### Backend
* **.NET 10 (Isolated Worker Model):** Utilizing the latest features of the C# ecosystem.
* **Azure Functions v4:** Providing a serverless REST API for game initialization and hint generation.
* **Dependency Injection:** Centralized service management in `Program.cs`.

### Frontend
* **React 19:** Functional components with modern hooks (`useState`, `useEffect`).
* **TypeScript:** Strict typing for API contracts to reduce runtime errors.
* **Vite:** Optimized build tooling for near-instant HMR (Hot Module Replacement).

### Core Logic
* **C# Class Library (.NET 10):** A standalone "Brain" (`Mastermind.Core`) that remains 100% decoupled from the UI, allowing it to be unit-tested and reused across any .NET entry point.

---

## 🏗️ Project Structure

```text
MastermindFunApp/
├── api/                # .NET 10 Azure Functions (Serverless API)
├── frontend/           # React + TypeScript (Vite SPA)
├── Mastermind.Core/    # Shared Business Logic (Game Engine)
└── .github/workflows/  # CI/CD (GitHub Actions)