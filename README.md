# projeto-1

Aplicação web em **Next.js 16** (App Router) com **React 19**, **TypeScript** e **Tailwind CSS 4**, seguindo a abordagem _Server Components first_.

> Estado atual: estrutura inicial gerada com `create-next-app`. Ainda não há funcionalidades implementadas — apenas a página inicial padrão em `app/page.tsx`.

## Stack

| Camada       | Tecnologia                              | Status        |
| ------------ | --------------------------------------- | ------------- |
| Framework    | Next.js 16.4 (App Router, Turbopack)    | ✅ instalado  |
| UI           | React 19.3                              | ✅ instalado  |
| Linguagem    | TypeScript 5 (`strict`)                 | ✅ instalado  |
| Estilos      | Tailwind CSS 4 (`@tailwindcss/turbopack`) | ✅ instalado  |
| Lint         | ESLint 9 + `eslint-config-next`         | ✅ instalado  |
| Componentes  | shadcn/ui                               | ⏳ pendente   |
| Formulários  | React Hook Form + Zod                   | ⏳ pendente   |

## Pré-requisitos

- Node.js 20.9+ (testado com Node 24)
- npm

## Primeiros passos

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Quando o projeto passar a usar variáveis de ambiente, copie `.env.example` para `.env.local` (o arquivo de exemplo ainda não existe).

## Scripts

| Comando              | Descrição                                                        |
| -------------------- | ---------------------------------------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento na porta 3000                        |
| `npm run build`      | Build de produção                                                |
| `npm run start`      | Sobe o build de produção                                         |
| `npm run lint`       | Executa o ESLint                                                 |
| `npm run type-check` | Gera os tipos de rota (`next typegen`) e roda `tsc --noEmit`     |

Após uma série de mudanças, rode sempre:

```bash
npm run type-check && npm run lint
```

## Estrutura

```
app/              # Rotas (App Router); agrupar com (grupo)/
  layout.tsx      # Layout raiz (fontes Geist via next/font)
  page.tsx        # Página inicial
  globals.css     # Tailwind 4 + tokens de tema (@theme)
actions/          # Server Actions (mutações)
components/       # Componentes de feature
  ui/             # Primitivos reutilizáveis (shadcn)
lib/              # Helpers, clients e configurações
types/            # Tipos globais e schemas Zod compartilhados
public/           # Arquivos estáticos
next.config.ts    # Configuração do Next.js
```

As pastas `actions/`, `components/`, `lib/` e `types/` estão vazias por enquanto (mantidas com `.gitkeep`).

## Configuração relevante

- **Cache Components** e **Partial Prefetching** estão habilitados em `next.config.ts` (`cacheComponents`, `partialPrefetching`).
- **Tailwind 4** é configurado via CSS: os design tokens ficam no bloco `@theme` de `app/globals.css` — não há `tailwind.config.ts`.
- **Alias de import**: `@/*` aponta para a raiz do projeto (ex.: `import { x } from "@/lib/x"`).
- **Tema claro/escuro** segue `prefers-color-scheme`, via variáveis `--background` e `--foreground`.

## Convenções

- Server Components por padrão; `'use client'` só quando houver hooks, eventos ou APIs do browser.
- Mutações via Server Actions em `actions/` — nunca acessar o banco a partir de Client Components.
- Sem `any` explícito: use `unknown` + type guard.
- Apenas Tailwind para estilos (sem CSS inline ou styled-components).
- Arquivos em kebab-case; componentes em PascalCase.
- Segredos apenas no servidor; `NEXT_PUBLIC_*` só para valores seguros no client.
- Branches: `feat/`, `fix/`, `chore/` + descrição em kebab-case.
- Commits em inglês, no imperativo (ex.: `add OAuth callback handler`).

Detalhes completos em [`CLAUDE.md`](./CLAUDE.md) e [`AGENTS.md`](./AGENTS.md).

## Referências

- [Documentação do Next.js](https://nextjs.org/docs)
- Docs da versão instalada: `node_modules/next/dist/docs/`
- [Tailwind CSS v4](https://tailwindcss.com/docs)
