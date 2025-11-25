# 🧠 Buddy Script App — Frontend

A social site web application built with **Next.js**,  so that user can like, post,comment and reply to other comments.

---

## 🚀 Features

### 👤 User & Team Management
- User authentication (register & login)
- Create post
- Do comment,replies,likes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js (App Router)** | Frontend framework |
| **TypeScript** | Type safety |
| **TailwindCSS + Shadcn UI** | Modern UI components |
| **React Server Actions** | Secure API interactions |
| **JWT Auth** | Secure session handling |


---
## 🧰 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/I-am-MoRsHeD/buddy-script-client.git
cd buddy-script-client
```

### 2️⃣ Install dependencies

```bash
bun install
# or
npm install
```

### 3️⃣ Add environment variables
```bash
NEXT_PUBLIC_BASE_URL=https://your-backend-api-url.com/api
JWT_ACCESS_SECRET=access-secret
```
### 4️⃣ Run the development server
```bash
bun run dev
# or
npm run dev
```
### 4️⃣ Build for production
```bash
bun run build
bun start
# or
npm run build
npm start
```
