# GRID BR — portal de automobilismo

Projeto inicial responsivo feito com HTML, CSS e JavaScript sem framework. Inclui página inicial, busca e filtros de notícias, modal de leitura, tabela demonstrativa de pilotos/construtores, calendário ilustrativo e formulário de newsletter ainda não conectado.

## Importante antes de publicar
- Notícias, pontos, nomes e etapas são **dados de demonstração**, não resultados ou calendário oficial.
- Imagens são carregadas por URLs externas do Unsplash; para produção, confirme licença, disponibilidade e atribuição.
- O portal é independente e não afiliado à Formula 1, FIA ou equipes.
- O site não tem ainda login, painel administrativo, banco de dados conectado nem atualização ao vivo.

## Rodar localmente
1. Extraia o ZIP.
2. Abra `index.html` no navegador. Para uma experiência mais consistente, use a extensão Live Server do VS Code ou execute um servidor local simples.
3. Edite `app.js` para trocar os dados de demonstração por conteúdo próprio e apurado.

## Plano recomendado para publicar
### Fase 1 — site estático
1. Crie um repositório no GitHub e envie `index.html`, `styles.css` e `app.js`.
2. Em Settings → Pages, habilite a publicação a partir da branch principal e pasta `/root`.
3. Aguarde o endereço público fornecido pelo GitHub Pages.

### Fase 2 — banco de dados com Supabase
1. Crie um projeto no Supabase.
2. Abra SQL Editor e execute `database/schema.sql`.
3. Crie políticas RLS apropriadas antes de conectar a aplicação. Não coloque a `service_role` key no navegador.
4. Para leitura pública, permita `SELECT` apenas nos conteúdos publicados. Escrita deve ser restrita a administradores autenticados.
5. Como HTML estático não deve guardar segredos, use funções serverless ou um backend para operações administrativas e integrações protegidas.

### Fase 3 — conteúdo e recursos dinâmicos
- Criar login de administrador.
- Criar formulário seguro de publicação/edição de notícias.
- Integrar uma API licenciada para calendário, resultados e classificação.
- Guardar imagens em storage com direitos de uso confirmados.
- Adicionar SEO, política de privacidade, contato e monitoramento.

## Estrutura
- `index.html` — estrutura das páginas e componentes.
- `styles.css` — identidade visual e responsividade.
- `app.js` — conteúdo demonstrativo e interações.
- `database/schema.sql` — estrutura inicial de tabelas para Supabase.

## Esquema de dados
O SQL está em `database/schema.sql`. É uma base inicial; antes de produção, revise as políticas de acesso, autenticação e regras de validação.
