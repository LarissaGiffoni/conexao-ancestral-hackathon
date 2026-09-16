# 🌱 Conexão Ancestral — Petronect Inteligente

> **Hackathon Conexão Ancestral** · Equipe 08 · Setembro de 2026

**Transformando comportamento em oportunidades de negócio.**

---

## 📌 Sobre o Projeto

A Petronect é o maior marketplace B2B do Brasil para as cadeias de suprimentos de óleo e gás. Hoje, a plataforma sabe **quantos cliques** acontecem no Portal, mas não sabe **quem acessa**, **onde clica primeiro**, **o que procura** e **com que frequência volta**.

O **Petronect Inteligente** é uma solução que acompanha toda a jornada digital do fornecedor, identifica padrões de comportamento e recomenda ações automáticas de reengajamento — transformando dados de navegação em decisões estratégicas para a Petronect.

---

## 🎯 O Desafio

> *Como identificar os acessos ao Portal Petronect e usar esse conhecimento para reengajar o usuário certo, no momento certo?*

Sem visibilidade da jornada do fornecedor, a Petronect não consegue responder:

- Quais oportunidades despertam mais interesse?
- Quais fornecedores estão mais engajados?
- Quem iniciou uma proposta e desistiu no meio?
- Quem deixou de acessar e corre risco de abandono?

**Consequência:** comunicação genérica, decisões reativas e oportunidades de negócio perdidas.

---

## 💡 A Solução

A solução é dividida em **4 pilares**:

### 1. Perfil Declarado
No primeiro acesso, o fornecedor informa segmento, estado, categorias de fornecimento e temas de interesse.

### 2. Jornada Comportamental
O sistema monitora toda a navegação:
- Páginas mais acessadas
- Buscas realizadas
- Oportunidades visualizadas
- Propostas iniciadas e abandonadas
- Frequência e recência de acesso

### 3. Inteligência de Reengajamento
Cruzando **perfil declarado + comportamento real**, o sistema:
- Classifica fornecedores em **Engajado**, **Em Risco** e **Inativo**
- Calcula um **Score de Engajamento**
- Recomenda ações automáticas de comunicação

### 4. Mensuração para a Petronect
Dashboard com visão completa de comportamento, engajamento e oportunidades.

---

## 🖥️ Estrutura do Repositório

```
conexao-ancestral-hackathon/
├── back/
│   ├── pages/
│   │   ├── index.html        → Login e Cadastro (wizard de 4 etapas)
│   │   ├── home/             → Tela Principal (Home)
│   │   └── minha-area/       → Minha Área de Interesse
│   ├── scripts/
│   │   └── script.js         → Lógica do Login/Cadastro
│   └── styles/
│       └── styles.css        → Estilos base
├── dashboard/                → Dashboard Streamlit (em integração)
└── README.md
```

---

## 🔗 Solução Online

| Recurso | Link |
|---------|------|
| **Dashboard (Streamlit)** | [hackathon-petronect-1.streamlit.app](https://hackathon-petronect-1.streamlit.app/) |
| **Protótipo (Login, Home, Minha Área)** | Abrir `back/pages/index.html` com Live Server |

---

## 🚀 Como Rodar o Protótipo

1. Clone o repositório:
   ```bash
   git clone https://github.com/LarissaGiffoni/conexao-ancestral-hackathon.git
   ```

2. Abra a pasta no **VS Code**

3. Instale a extensão **Live Server**

4. Clique com o botão direito em `back/pages/index.html` → **Open with Live Server**

5. Navegue pelo fluxo:
   - **Login** → clique em "Entrar no portal"
   - **Home** → clique em "Ir para Minha Área de Interesse"
   - **Minha Área** → clique nos cards para ver o tracking funcionando

---

## 📊 Demonstração (Simulação)

Na base simulada foram registrados:

| Métrica | Valor |
|---------|-------|
| Total de acessos | 291 |
| Propostas iniciadas | 147 |
| Propostas abandonadas | 48 |
| Propostas enviadas | 57 |
| Fornecedores engajados | 27 |
| Fornecedores em risco | 16 |
| Fornecedores inativos | 7 |
| **Elegíveis para reengajamento** | **34** |

**Principais buscas:** Engenharia, Equipamentos, FPSO, Manutenção

---

## 🎯 Caso Prático — Fornecedor em Atenção

**Empresa Delta** (FORN034)
- Segmento: Engenharia
- Estado: BA
- Interesse declarado: Licitações
- Interesse identificado: Oportunidades
- Frequência: 1 acesso
- Dias sem acesso: 21
- Score: 0
- **Status: Inativo**

**Ação recomendada:** Enviar comunicação personalizada de retorno ao portal.

---

## 🛠️ Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Front-end | HTML, CSS, JavaScript |
| Dashboard | Streamlit (Python) + Pandas |
| Protótipo | HTML estático + tracking simulado |
| Visualização | Gráficos interativos |

**Solução simples, viável, escalável e de rápida implementação — sem necessidade de IA ou Big Data.**

---

## 🏆 Resultados Esperados

- **+20% a 30%** em acessos recorrentes
- **-25%** de usuários inativos após reengajamento
- **+15% a 25%** em propostas enviadas
- Decisões baseadas em dados reais de comportamento

---

## 👥 Equipe 08

| Integrante | Função |
|-----------|--------|
| **Tayná Goes** | Tela Principal (Home) |
| **Elvira Gomes da Silva** | Documentação e Organização |
| **Mariana Honorato** | Login e Cadastro |
| **Larissa Giffoni** | Minha Área de Interesse e Integração |
| **Fernanda Capela** | Dashboard e Reengajamento Inteligente |

---

## 📜 Licença

Projeto desenvolvido durante o **Hackathon Conexão Ancestral** — Petronect + KODIE Academy, setembro de 2026.

---

> *"O fornecedor entra no portal. A Petronect entende sua jornada. As informações geram relacionamento, o relacionamento gera oportunidades e as oportunidades geram resultados."*
