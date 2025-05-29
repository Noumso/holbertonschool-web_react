# 🚀 TypeScript Project — Holberton School Web React

---

## 🔍 Project Overview

Master core **TypeScript** concepts by building interfaces, classes, generics, namespaces, and more — all integrated into a real-world setup with **Webpack** and tested via **Jest**. This step-by-step project sharpens your skills with clean, type-safe code and practical TS features.

---

## ⚙️ Requirements & Setup

- Recommended editors: `VSCode`, `vim`, `emacs`  
- All files must end with a newline  
- Target environment: **Ubuntu 18.04**  
- Tests run with **Jest v24.9**  
- Use `.ts` extension only  
- No TypeScript errors or warnings allowed  
- Use provided configs:  
  - `package.json`  
  - `tsconfig.json`  
  - `.eslintrc.js`  
  - `webpack.config.js`

---

## 📂 Task Breakdown

| # | Description                                              | Folder  | Key Files                       |
|---|----------------------------------------------------------|---------|--------------------------------|
| 0 | `Student` interface + render HTML table (Vanilla JS)    | `task_0`| `js/main.ts` + configs          |
| 1 | `Teacher` interface with optional props & index sig.   | `task_1`| `js/main.ts` + configs          |
| 2 | Extend `Teacher` with `Directors`, add `printTeacher`  | `task_1`| `js/main.ts`                   |
| 3 | `StudentClass` with `workOnHomework` & `displayName`   | `task_1`| `js/main.ts`                   |
| 4 | `Director` & `Teacher` classes with specific methods    | `task_2`| `js/main.ts` + configs          |
| 5 | Type predicate functions + conditional execution        | `task_2`| `js/main.ts`                   |
| 6 | Literal types + `teachClass` function                    | `task_2`| `js/main.ts`                   |
| 7 | Ambient namespace for external `crud.js` lib            | `task_3`| `js/interface.ts`, `js/crud.d.ts`, `js/main.ts` |
| 8 | Namespace + declaration merging for subjects & teachers | `task_4`| `js/subjects/*.ts`             |
| 9 | Nominal typing with Brand convention                     | `task_5`| `js/main.ts` + configs          |

---

## 💻 Installation

```bash
npm install
npm run build
npm test
npm run start-dev