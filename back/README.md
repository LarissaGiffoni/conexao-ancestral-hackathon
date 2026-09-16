# Portal Petronect — Login e Cadastro

Protótipo de tela de login e cadastro (wizard de 4 etapas) do fornecedor, feito para o Hackathon Conexão Ancestral.

## Estrutura

```
petronect-project/
├── pages/
│   └── index.html      → tela principal (login + cadastro)
├── styles/
│   └── styles.css       → todo o CSS
├── scripts/
│   └── script.js        → toda a lógica (troca de aba, wizard, pills, checkboxes)
└── README.md
```

## Como abrir

Basta abrir `pages/index.html` no navegador (duplo clique ou "Open with Live Server" no VS Code).
Não precisa de build, servidor ou instalação — é HTML/CSS/JS puro.

## O que tem nas telas

- **Entrar**: e-mail + senha.
- **Criar cadastro** (4 passos):
  1. Dados da empresa (nome, segmento, estado, CNPJ, porte)
  2. Categorias de fornecimento (pills, com opção de adicionar categoria própria)
  3. Categorias de oportunidades de interesse + Interesses (Licitações, Leilões, Treinamentos, Cadastro Petrobras, Oportunidades)
  4. Conta de acesso (responsável, e-mail, senha) + nota de LGPD

Tudo é front-end estático — os botões "Entrar" e "Concluir cadastro" mostram um alerta de exemplo no lugar de uma chamada de API real.
