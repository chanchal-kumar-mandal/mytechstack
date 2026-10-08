# 🚀 MyTechStack

**MyTechStack** is a premium, modern, frontend-only web application designed for **Frontend Engineers** to manage their professional profile, technical subjects, interview questions, answers, and learning/reference content in one place.

The application is built with **React + TypeScript + Tailwind CSS** and works entirely with **dummy/local data**.

> **No backend. No database. Frontend only.**

---

## ✨ Overview

MyTechStack provides an organized and fully editable technical knowledge platform where a Frontend Engineer can maintain:

* 👤 Professional profile
* 📄 Resume
* 🔗 LinkedIn profile
* ⚡ JavaScript questions & answers
* 🔷 TypeScript questions & answers
* ⚛️ React.js questions & answers
* 🟣 Redux questions & answers
* 🧪 Unit Testing questions & answers
* 🌐 HTML questions & answers
* 🎨 CSS questions & answers
* ▲ Next.js questions & answers

Everything is designed to be easily editable from the application UI.

---

## 🧩 Application Structure

```text
🚀 MyTechStack
│
├── 📁 shared
│   └── 👤 MyProfile
│
├── ⚡ Javascript
├── 🔷 TypeScript
├── ⚛️ Reactjs
├── 🟣 Redux
├── 🧪 UnitTestcases
├── 🌐 HTML
├── 🎨 CSS
└── ▲ Nextjs
```

---

## 📖 Demo

<img width="1581" height="695" alt="mytechstack" src="https://github.com/user-attachments/assets/d9188afb-743a-48c2-8715-ad4ed0241110" />

## 🎯 Key Features

### 👤 Professional Profile

The profile section displays important professional information such as:

* Name
* Designation
* Resume
* LinkedIn profile
* Other relevant profile information

The default designation is:

**Frontend Engineer**

All profile information is editable.

---

### 📚 Technical Topics

Each technology is maintained as an individual topic/page.

Currently supported topics include:

* JavaScript
* TypeScript
* React.js
* Redux
* Unit Test Cases
* HTML
* CSS
* Next.js

The architecture is designed so additional technologies can be added easily.

---

### ❓ Q&A Management

Each topic can contain multiple questions and answers.

Users can:

* ➕ Add questions
* ✏️ Edit questions
* 🗑️ Delete questions
* ✏️ Edit answers
* 🗑️ Delete answers
* 📖 View answers

Example:

```text
React.js
│
├── What is React?
├── What is Virtual DOM?
├── What is reconciliation?
├── What is React Fiber?
└── What are React Hooks?
```

---

### 📝 Rich Content Answers

Answers can contain different types of content, including:

* Formatted text
* Links
* Code snippets
* Syntax-highlighted code
* Images
* Technical explanations
* Examples

This makes the application useful not only for interview preparation but also as a personal technical knowledge base.

---

### 📖 Accordion Q&A Layout

Questions are displayed using an accordion interface.

By default:

```text
▼ What is React?
▼ What is Virtual DOM?
▼ What are React Hooks?
▼ What is Redux?
```

When a question is selected:

```text
▼ What is React?

  React is a JavaScript library for building
  user interfaces...

  Example:

  const App = () => {
    return <h1>Hello React</h1>;
  };
```

The answer is revealed with a smooth animation.

---

## ✏️ Fully Editable

The application is designed around complete editability.

Users can manage:

* Profile information
* Technologies
* Questions
* Answers
* Links
* Code examples
* Images
* Other technical content

---

# 🛠️ Tech Stack

### Core

* ⚛️ React
* 🔷 TypeScript
* ⚡ Vite

### UI

* 🎨 Tailwind CSS
* 🧩 Lucide React
* ✨ Animate.css

### Development & Quality

* ESLint
* Prettier
* React Hook Form
* Zod
* @hookform/resolvers

Additional libraries can be introduced when they provide meaningful value to the application.

---

# 🏗️ Architecture

MyTechStack follows a clean and reusable component-based architecture.

```text
src/
│
├── components/
│   ├── Logo/
│   ├── Layout/
│   ├── Sidebar/
│   ├── Header/
│   ├── Accordion/
│   ├── QuestionForm/
│   ├── AnswerEditor/
│   └── ...
│
├── pages/
│   ├── MyProfile/
│   ├── Javascript/
│   ├── TypeScript/
│   ├── Reactjs/
│   ├── Redux/
│   ├── UnitTestcases/
│   ├── HTML/
│   ├── CSS/
│   └── Nextjs/
│
├── data/
│   └── dummyData.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

The exact structure can evolve as the application grows.

---

# 🎨 UI & Design Principles

MyTechStack is intended to have a **premium-quality modern developer dashboard experience**.

### Responsive Design

The UI must work properly across:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop
* 🖥️ Large screens

---

### Modern UI

The application should use:

* Clean layouts
* Consistent spacing
* Modern typography
* Professional color system
* Subtle animations
* Clear visual hierarchy
* Accessible interactions
* Responsive navigation
* Reusable UI components

---

# 📋 Development Rules

The project follows these development rules.

### 1. Responsive UI

Every component must be responsive.

```text
Mobile → Tablet → Desktop → Large Screen
```

---

### 2. Form Validation

All forms must be properly validated.

For complex forms, use:

* React Hook Form
* Zod
* @hookform/resolvers

---

### 3. Console Form Values

Every form submission must log the submitted values.

```typescript
const onSubmit = (values: FormValues) => {
  console.log(values);
};
```

---

### 4. Tailwind CSS Only

Do not create custom CSS unless absolutely required.

Use Tailwind CSS utility classes for styling.

```tsx
<div className="flex items-center gap-4 rounded-xl p-6">
  ...
</div>
```

Avoid creating separate custom CSS files for component styling.

---

### 5. Clean Code

Follow clean and maintainable development patterns:

* Reusable components
* Proper TypeScript types
* Meaningful naming
* Small focused components
* Avoid unnecessary duplication
* Clear separation of concerns
* Consistent folder structure

---

### 6. Full Component Code

When implementing or modifying a component, provide the **complete component code**, not partial snippets.

---

### 7. Component-Focused Development

Development should focus only on the component currently being requested.

> **From now design only the given component.**

This prevents unnecessary changes to unrelated parts of the application.

---

# 💾 Data Architecture

MyTechStack is currently a **frontend-only application**.

There is:

* ❌ No backend
* ❌ No database
* ❌ No API server
* ❌ No authentication server
* ❌ No external data service

The application uses:

* Dummy data
* Local state
* Frontend components
* Local/static assets

A backend/database can potentially be introduced in the future without changing the overall UI architecture.

---

# 🚀 Getting Started

## 1. Create React + TypeScript Project

Using Git Bash:

```bash
npm create vite@latest mytechstack -- --template react-ts
```

Navigate into the project:

```bash
cd mytechstack
```

Install dependencies:

```bash
npm install
```

---

## 2. Install Required Packages

```bash
npm install lucide-react animate.css react-hook-form zod @hookform/resolvers
```

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 3. Start Development Server

```bash
npm run dev
```

The application will be available through the local Vite development server.

---

# 🧪 Development Commands

### Start development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

# 🔮 Future Possibilities

Although the current version is intentionally frontend-only, the architecture can later be extended with:

* Backend API
* Database
* User authentication
* Cloud storage
* Persistent Q&A data
* Markdown editor
* Advanced code editor
* Search
* Tags
* Favorites
* Interview preparation mode
* AI-powered Q&A
* Import/export functionality
* Dark/light theme
* Multi-user support

These features are **not required for the current version**.

---

# 🎯 Project Goal

The primary goal of MyTechStack is to create a **personal technical knowledge and interview preparation platform** for a Frontend Engineer.

It combines:

```text
Professional Profile
        +
Technical Knowledge
        +
Interview Q&A
        +
Code Examples
        +
Rich Content
        +
Easy Editing
        ↓
    MyTechStack
```

---

## 👨‍💻 Designed For

**Frontend Engineers**

Especially developers working with:

* JavaScript
* TypeScript
* React
* Redux
* Next.js
* HTML
* CSS
* Testing

---

## 📌 Current Scope

> **MyTechStack is currently a frontend-only React application using dummy data, with no backend and no database.**

The focus is on building a **premium, responsive, maintainable, and recruiter-quality frontend experience**.

---

## 📄 License

This project is intended for personal and educational use.
