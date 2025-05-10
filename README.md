# 🚀 Next.js App Router + FSD Starter Template

This is a simple starter template for quickly bootstrapping a modern **Next.js** application using the **App Router** and **Feature-Sliced Design (FSD)** architecture.

---

## 📦 Tech Stack

- ✅ **Next.js** with `app/` router
- ✅ **TypeScript**
- ✅ **ESLint** — for code linting
- ✅ **Prettier** — for formatting
- ✅ **Stylelint** — for style checking
- ✅ **Feature-Sliced Design (FSD)** — for scalable modular architecture

---

## 📁 Project Structure

```
├── app/ # App Router entry point (layouts, pages, etc.)
├── pages/ # ⚠️ Must exist but stay empty (see note below)
├── src/
│ ├── entities/ # Business entities
│ ├── features/ # Use-case specific features
│ ├── shared/ # Shared UI, libs, config
│ ├── widgets/ # Composite UI parts (built from features/entities)
│ └── pages/ # FSD-level pages (not Next.js routes!)
```

---

## ⚠️ `pages/` Directory — Do Not Remove

The `pages/` directory **must exist**, or some tools and environments may break (especially with FSD tooling).  
However, since this project uses the App Router (`app/`), the `pages/` folder **must remain empty**.

📄 See [`pages/README.md`](./pages/README.md) for more details.

---

## 🛠 Getting Started

```bash
npm install
npm run dev
```

---

## ✅ Linting & Formatting

```bash
npm run lint        # ESLint
npm run lint:css    # Stylelint
```

---

## 🧩 Feature-Sliced Design

This project follows [Feature-Sliced Design](https://feature-sliced.github.io/documentation/) principles for modular, scalable architecture.