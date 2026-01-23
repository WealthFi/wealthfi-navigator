# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Desenvolvimento local 🚀

Você pode rodar este projeto localmente no seu computador para inspeção ou desenvolvimento.

Requisitos mínimos:

- Node.js (recomendado >= 18)
- Git
- Opcional: Bun (há um `bun.lockb` se preferir usar Bun)

Passos rápidos:

```sh
# 1. Clone o repositório
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Instale dependências (escolha um)
# Com npm
npm install
# Ou, se usar bun
# bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou (com bun)
# bun run dev

# O site ficará disponível por padrão em http://localhost:8080/
```

Comandos úteis:

- Build de produção: `npm run build`
- Visualizar build localmente: `npm run preview`
- Executar testes: `npm test`
- Linter: `npm run lint`

> Observação: Em caso de problemas com dependências, rode `npm audit fix` ou use o gerenciador de pacotes da sua preferência.

**Edit a file directly in GitHub**
**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Tecnologias usadas 🧰

Este projeto foi desenvolvido com as seguintes tecnologias:

- **Vite** (bundler e servidor de desenvolvimento)
- **React 18** com **TypeScript**
- **Tailwind CSS** (+ animações via `tailwindcss-animate`)
- **shadcn-ui** e **Radix UI** (sistema de componentes)
- **@tanstack/react-query** (gerenciamento de dados assíncronos)
- **react-router-dom** (rotas)
- **@vitejs/plugin-react-swc** (integração React + SWC para builds rápidos)
- **Vitest** e Testing Library (testes)
- **ESLint** (linting) e ferramentas de build como PostCSS

Também são usadas várias bibliotecas auxiliares: `recharts`, `lucide-react`, `zod`, `date-fns`, `sonner`, entre outras.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
