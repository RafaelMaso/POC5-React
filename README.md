<h1 align="center" style="font-weight: bold;">POC 5 - React</h1>

![image-poc5](https://github.com/user-attachments/assets/f7f50581-f343-42a1-b004-3f5e1ceab154)

Desenvolvimento de uma POC (Prova de Conceito) que demonstra o funcionamento do framework React utilizando Next.js.

<h2 id="tecnologias">💻 Tecnologias</h2>

[![My Skills](https://skillicons.dev/icons?i=js,react,nextjs&theme=light)](https://skillicons.dev)

<h2 id="tecnologias">🚀 Estrutura de Projeto Next.js v15.0.1</h2>

<h3 id="tecnologias">Pastas de Nível Superior</h3>

Pastas de nível superior são usadas para organizar o código da sua aplicação e seus recursos estáticos.

| Pasta        | Finalidade                                     |
|--------------|------------------------------------------------|
| `app`        | Roteador de Aplicação                          |
| `pages`      | Roteador de Páginas                            |
| `public`     | Recursos estáticos a serem servidos            |
| `src`        | Pasta opcional de código-fonte da aplicação    |

<h3 id="tecnologias">Arquivos de Nível Superior</h3>

Arquivos de nível superior são usados para configurar a aplicação, gerenciar dependências, rodar middlewares, integrar ferramentas de monitoramento e definir variáveis de ambiente.

| Arquivo                | Finalidade                                                 |
|------------------------|------------------------------------------------------------|
| `next.config.js`       | Arquivo de configuração do Next.js                         |
| `package.json`         | Dependências do projeto e scripts                          |
| `instrumentation.ts`   | Arquivo de Instrumentação e OpenTelemetry                  |
| `middleware.ts`        | Middleware de requisição do Next.js                        |
| `.env`                 | Variáveis de ambiente                                      |
| `.env.local`           | Variáveis de ambiente local                                |
| `.env.production`      | Variáveis de ambiente de produção                          |
| `.env.development`     | Variáveis de ambiente de desenvolvimento                   |
| `.eslintrc.json`       | Arquivo de configuração do ESLint                          |
| `.gitignore`           | Arquivos e pastas do Git a serem ignorados                 |
| `next-env.d.ts`        | Arquivo de declaração TypeScript para o Next.js            |
| `tsconfig.json`        | Arquivo de configuração do TypeScript                      |
| `jsconfig.json`        | Arquivo de configuração do JavaScript                      |

Essa estrutura proporciona uma organização clara tanto para desenvolvimento quanto para produção, ajudando a otimizar a gestão e implantação de aplicações Next.js.

<h3 id="tecnologias">Convenções de Roteamento no app</h3>

As convenções de arquivos a seguir são usadas para definir rotas e gerenciar metadados no roteador de aplicativo.

| Arquivo           | Extensões                  | Finalidade                    |
|-------------------|----------------------------|--------------------------------|
| `layout`          | `.js` `.jsx` `.tsx`        | Layout                         |
| `page`            | `.js` `.jsx` `.tsx`        | Página                         |
| `loading`         | `.js` `.jsx` `.tsx`        | Interface de Carregamento      |
| `not-found`       | `.js` `.jsx` `.tsx`        | Interface de Página Não Encontrada |
| `error`           | `.js` `.jsx` `.tsx`        | Interface de Erro              |
| `global-error`    | `.js` `.jsx` `.tsx`        | Interface de Erro Global       |
| `route`           | `.js` `.ts`                | Endpoint de API                |
| `template`        | `.js` `.jsx` `.tsx`        | Layout re-renderizado          |
| `default`         | `.js` `.jsx` `.tsx`        | Página de fallback para rota paralela |

<h2 id="colabs">🤝 Colaboradores</h2>

- Rafael Trindade Dal Maso
- Fernando Lacava Olival Rodrigues
- Henrique Totti Ulbricht Lapa

<h2 id="contribue">📫 Contribue</h2>

1. **Clone o projeto**: `git clone https://github.com/RafaelMaso/POC5-React.git`
2. **Crie uma branch**: `git checkout -b feature/NAME`
