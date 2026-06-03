// --- DATA & TEMPLATES ---
const weeksData = [
    {
        id: 1,
        num: "Semana 1",
        foco: "Fundamentos Sólidos",
        desc: "Lógica, OO e Sintaxe Java",
        resources: [
            { tag: "📖 Curso", name: "Formação Java Fundamentals", desc: "Sintaxe, tipos primitivos, condicionais e loops.", url: "https://web.dio.me/track/formacao-java" },
            { tag: "▶️ YouTube", name: "Loiane Groner - Java OO", desc: "Playlist completa de orientação a objetos em Java.", url: "https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3v" },
            { tag: "📁 Código Local", name: "Internacao.java", desc: "Análise da modelagem estrutural de classes e atributos.", url: "" }
        ],
        template: `# 📝 Anotações de Estudo: Semana 01

**Foco Temático:** Fundamentos Essenciais (Lógica, OO e Sintaxe Java)  
**Período:** [Inserir Data de Início] a [Inserir Data de Fim]  
**Status da Semana:** 🟡 Em Andamento

---

## 🎯 Metas da Semana
1. Consolidar os conceitos de tipos de dados e lógica estruturada em Java.
2. Entender e aplicar os 4 pilares da Orientação a Objetos.
3. Analisar o código modelo \`Internacao.java\` para entender a organização de classes reais.

---

## 📓 Diário de Aprendizado

### Segunda-feira: [Título do Tópico]
*   **O que estudei:** [Descreva brevemente os tópicos abordados hoje]
*   **Principais sacadas (Insights):**
    > **Aviso:** Registre aqui pontos chaves que facilitaram sua compreensão de determinado assunto.
*   **Dúvidas/Pontos a revisar:**
    *   [ ] Exemplo: Diferença prática entre herança e composição.

### Terça-feira: [Título do Tópico]
*   **O que estudei:** ...

### Quarta-feira: [Título do Tópico]
*   **O que estudei:** ...

### Quinta-feira: [Título do Tópico]
*   **O que estudei:** ...

### Sexta-feira: [Título do Tópico]
*   **O que estudei:** ...

---

## 💻 Prática & Código da Semana

Use este espaço para colar snippets de código desenvolvidos ou analisados (ex: baseado no \`Internacao.java\`).

\`\`\`java
// Exemplo de classe simples demonstrando Encapsulamento
public class Paciente {
    private String nome;
    private int idade;

    public Paciente(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public int getIdade() { return idade; }
    public void setIdade(int idade) { 
        if(idade >= 0) this.idade = idade; 
    }
}
\`\`\`

---

## 🧠 Dicionário Técnico (Conceitos Mapeados)
*   **Encapsulamento**: Esconder detalhes internos de funcionamento da classe e expor métodos públicos seguros.
*   **Polimorfismo**: Capacidade de um objeto ser referenciado de múltiplas formas.

---

## 🏁 Autoavaliação de Fim de Semana
*   **O que foi fácil:** [Escreva aqui]
*   **O que foi difícil:** [Escreva aqui]`
    },
    {
        id: 2,
        num: "Semana 2",
        foco: "Java Moderno e Dados",
        desc: "Collections, Streams e SQL puro",
        resources: [
            { tag: "📖 Livro", name: "Livro Algaworks Spring Boot v3", desc: "Capítulos iniciais de estrutura e dados.", url: "https://www.algaworks.com/livro/" },
            { tag: "🌐 Site", name: "H2 Database Console", desc: "Banco de dados em memória para prática local.", url: "https://h2database.com/" },
            { tag: "▶️ YouTube", name: "Código Fonte TV - SQL Completo", desc: "SQL do zero ao avançado de forma prática.", url: "https://www.youtube.com/watch?v=dpghZFN6Bns" }
        ],
        template: `# 📝 Anotações de Estudo: Semana 02

**Foco Temático:** Java Moderno e Persistência (Collections, Lambdas, Streams e SQL)  
**Período:** [Inserir Data de Início] a [Inserir Data de Fim]  
**Status da Semana:** 🟡 Em Andamento

---

## 🎯 Metas da Semana
1. Dominar a Collections API (List, Set e Map).
2. Compreender a utilidade de expressar filtros em streams utilizando Lambdas.
3. Configurar tabelas locais com SQL utilizando comandos estruturais de dados.

---

## 📓 Diário de Aprendizado

### Segunda-feira: Collections API
*   **O que estudei:** Diferença entre List, Set e Map.
*   **Anotações:**

### Terça-feira: Lambdas & Functional Interfaces
*   **O que estudei:**

### Quarta-feira: Streams API
*   **O que estudei:** Uso de \`filter()\`, \`map()\` e \`collect()\`.

### Quinta-feira: Introdução ao Banco de Dados SQL
*   **O que estudei:** Estruturas de dados relacionais e instalação do Postgres/H2.

### Sexta-feira: Consultas com DDL e DML
*   **O que estudei:**

---

## 💻 Prática & Código da Semana

\`\`\`java
// Exemplo de Streams API para filtrar uma lista
List<String> nomes = Arrays.asList("Claudio", "Java", "Spring", "Antigravity");
List<String> filtrados = nomes.stream()
    .filter(n -> n.startsWith("J"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(filtrados); // Saída: [JAVA]
\`\`\`

\`\`\`sql
-- Script SQL Praticado
CREATE TABLE paciente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT
);

INSERT INTO paciente (nome, idade) VALUES ('Claudio Moreira Sampaio', 30);
SELECT * FROM paciente WHERE idade >= 30;
\`\`\`

---

## 🧠 Dicionário Técnico
*   **Streams API**: Sequência de elementos que apoia operações agregadas sequenciais e paralelas de forma declarativa.
*   **DDL (Data Definition Language)**: Comandos SQL que definem o esquema do banco, como CREATE, ALTER e DROP.`
    },
    {
        id: 3,
        num: "Semana 3",
        foco: "Framework Spring Boot",
        desc: "DI, Spring Data JPA e APIs RESTful",
        resources: [
            { tag: "📖 Livro", name: "Livro Algaworks Spring Boot v3", desc: "Leitura crítica: Capítulo 3.10 (JpaRepository).", url: "https://www.algaworks.com/livro/" },
            { tag: "🌐 Site", name: "Spring Boot Docs Oficial", desc: "Documentação oficial do Spring Boot em inglês.", url: "https://spring.io/projects/spring-boot" },
            { tag: "▶️ YouTube", name: "Fernanda Kipper - Spring Boot", desc: "Tutoriais práticos de Spring Boot do zero.", url: "https://www.youtube.com/@kipperdev" }
        ],
        template: `# 📝 Anotações de Estudo: Semana 03

**Foco Temático:** Framework Spring Boot Core (DI, MVC e Spring Data JPA)  
**Período:** [Inserir Data de Início] a [Inserir Data de Fim]  
**Status da Semana:** 🟡 Em Andamento

---

## 🎯 Metas da Semana
1. Entender o Container de Inversão de Controle do Spring.
2. Criar repositórios inteligentes estendendo \`JpaRepository\`.
3. Modelar e estruturar uma API REST completa para receber dados em JSON.

---

## 📓 Diário de Aprendizado

### Segunda-feira: Inversão de Controle & Injeção de Dependências
*   **O que estudei:** Conceitos de Acoplamento Fraco e anotações como \`@Autowired\`.

### Terça-feira: Spring Data JPA & Entidades
*   **O que estudei:** Mapeamento de objetos com \`@Entity\`, \`@Id\`, etc.

### Quarta-feira: O Poder do JpaRepository (Algaworks Cap 3.10)
*   **O que estudei:** Criando consultas sem SQL com as assinaturas de Query Methods do Spring.

### Quinta-feira: Spring MVC & Controllers REST
*   **O que estudei:** Criação de rotas HTTP com \`@RestController\`.

### Sexta-feira: Ciclo de Requisição & Resposta (Guia Cap 3)
*   **O que estudei:**

---

## 💻 Prática & Código da Semana

\`\`\`java
// Exemplo de Controller REST no Spring Boot
@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    @Autowired
    private PacienteRepository repository;

    @GetMapping
    public List<Paciente> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Paciente criar(@RequestBody Paciente paciente) {
        return repository.save(paciente);
    }
}
\`\`\`

---

## 🧠 Dicionário Técnico
*   **Injeção de Dependência**: Padrão de projeto no qual o container do Spring fornece automaticamente as dependências de uma classe.
*   **REST (Representational State Transfer)**: Estilo arquitetural para sistemas hipermídia distribuídos, operando sobre o protocolo HTTP.`
    },
    {
        id: 4,
        num: "Semana 4",
        foco: "IA, Git e Portfólio",
        desc: "Git/GitHub, Automação n8n e IA",
        resources: [
            { tag: "🌐 Site", name: "n8n - Automação", desc: "Ferramenta de automação com workflows visuais.", url: "https://n8n.io/" },
            { tag: "▶️ YouTube", name: "Rafaella Ballerini - Git & GitHub", desc: "Guia completo de versionamento com Git para iniciantes.", url: "https://www.youtube.com/@rafaellaballerini" },
            { tag: "🌐 Site", name: "GitHub Docs", desc: "Documentação oficial do GitHub para organizar seu portfólio.", url: "https://docs.github.com/" }
        ],
        template: `# 📝 Anotações de Estudo: Semana 04

**Foco Temático:** Produtividade e Portfólio (Git, n8n e Integrações com IA)  
**Período:** [Inserir Data de Início] a [Inserir Data de Fim]  
**Status da Semana:** 🟡 Em Andamento

---

## 🎯 Metas da Semana
1. Dominar versionamento profissional no GitHub com READMEs atraentes.
2. Criar e publicar workflows automatizados usando a ferramenta n8n.
3. Construir o projeto final de Assistente Virtual integrado com inteligência artificial.

---

## 📓 Diário de Aprendizado

### Segunda-feira: Versionamento Profissional com Git
*   **O que estudei:** Comandos básicos e fluxo de ramificação (branching).

### Terça-feira: Estrutura de Portfólio no GitHub
*   **O que estudei:** Escrever READMEs atrativos e organizar projetos.

### Quarta-feira: Automação com n8n (DevQuest)
*   **O que estudei:** Criação de webhooks e conectores automáticos.

### Quinta-feira: Integrando IAs em Aplicações Java/Back-end
*   **O que estudei:** Consumo de APIs de IA para gerar conteúdo inteligente.

### Sexta-feira: Projeto Final: Assistente Virtual
*   **O que estudei:** Junção de Spring Boot, banco de dados, Git e inteligência artificial.

---

## 💻 Prática & Código da Semana

Use este espaço para documentar a lógica do seu assistente de IA ou o design dos fluxos do n8n.

\`\`\`json
// Exemplo estrutural de configuração de webhook simples do n8n
{
  "name": "Webhook IA Receiver",
  "nodes": [
    {
      "parameters": {
        "path": "assistente",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ]
}
\`\`\`

---

## 🧠 Dicionário Técnico
*   **Webhook**: Mecanismo de notificação HTTP em tempo real, disparando dados de um sistema para outro imediatamente quando um evento acontece.
*   **n8n**: Ferramenta de automação flexível e extensível de código aberto com interface baseada em nós.`
    }
];

// --- STATE MANAGEMENT ---
let currentWeekId = 1;
let userNotes = {};
let userStatus = {};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    loadCustomWeekMeta(); // load custom week names/resources before rendering
    initializeSidebars();
    selectWeek(1);
    
    // Event Listeners
    document.getElementById("markdown-editor").addEventListener("input", handleEditorInput);
    document.getElementById("week-status-select").addEventListener("change", handleStatusChange);
    document.getElementById("btn-save").addEventListener("click", saveNotes);
    document.getElementById("btn-copy").addEventListener("click", copyToClipboard);
    document.getElementById("btn-download").addEventListener("click", downloadMarkdownFile);
    document.getElementById("btn-reset").addEventListener("click", resetToTemplate);

    // Editable Header Fields persistence
    const userEl = document.getElementById("editable-user-name");
    const userElMobile = document.getElementById("editable-user-name-mobile");

    function syncUserName(name) {
        localStorage.setItem("javanauta_user_name", name);
        if (userEl && userEl.innerText !== name) userEl.innerText = name;
        if (userElMobile && userElMobile.innerText !== name) userElMobile.innerText = name;
    }

    if (userEl) {
        userEl.addEventListener("blur", () => {
            syncUserName(userEl.innerText.trim());
            showToast("Nome do estudante atualizado!");
        });
        userEl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                userEl.blur();
            }
        });
    }

    if (userElMobile) {
        userElMobile.addEventListener("blur", () => {
            syncUserName(userElMobile.innerText.trim());
            showToast("Nome do estudante atualizado!");
        });
        userElMobile.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                userElMobile.blur();
            }
        });
    }

    // Configure Marked parser to parse checklists correctly and render GitHub alerts
    marked.setOptions({
        gfm: true,
        breaks: true
    });
});

// --- LOCAL STORAGE ---
function loadFromLocalStorage() {
    try {
        const savedNotes = localStorage.getItem("javanauta_study_notes");
        const savedStatus = localStorage.getItem("javanauta_study_status");
        const savedLogoText = localStorage.getItem("javanauta_logo_text");
        const savedUserName = localStorage.getItem("javanauta_user_name");
        
        if (savedNotes) {
            userNotes = JSON.parse(savedNotes);
        } else {
            // Populate with defaults
            weeksData.forEach(w => {
                userNotes[w.id] = w.template;
            });
        }

        if (savedStatus) {
            userStatus = JSON.parse(savedStatus);
        } else {
            weeksData.forEach(w => {
                userStatus[w.id] = "doing"; // default: in progress / doing
            });
        }

        if (savedUserName) {
            const el = document.getElementById("editable-user-name");
            if (el) el.innerText = savedUserName;
            const elMobile = document.getElementById("editable-user-name-mobile");
            if (elMobile) elMobile.innerText = savedUserName;
        }
    } catch (e) {
        console.error("Erro ao carregar dados do LocalStorage:", e);
        // Fallbacks
        weeksData.forEach(w => {
            userNotes[w.id] = w.template;
            userStatus[w.id] = "doing";
        });
    }
    updateOverallProgress();
}

function saveToLocalStorage() {
    try {
        localStorage.setItem("javanauta_study_notes", JSON.stringify(userNotes));
        localStorage.setItem("javanauta_study_status", JSON.stringify(userStatus));
    } catch (e) {
        console.error("Erro ao gravar dados no LocalStorage:", e);
    }
    updateOverallProgress();
}

// --- UI DRAWING & NAV ---
function initializeSidebars() {
    const listContainer = document.getElementById("week-list-container");
    listContainer.innerHTML = "";

    weeksData.forEach(w => {
        const li = document.createElement("li");
        li.className = `week-card ${w.id === currentWeekId ? 'active' : ''}`;
        li.id = `week-card-${w.id}`;
        // Clicking the card body (not the edit btn) selects the week
        li.onclick = (e) => {
            if (!e.target.closest('.week-edit-btn')) selectWeek(w.id);
        };

        const status = userStatus[w.id] || "todo";
        let badgeClass = "status-todo";
        let badgeText = "Não Iniciado";
        if (status === "doing") {
            badgeClass = "status-doing";
            badgeText = "Em Andamento";
        } else if (status === "done") {
            badgeClass = "status-done";
            badgeText = "Concluído";
        }

        li.innerHTML = `
            <div class="week-header">
                <span class="week-num">${w.num}</span>
                <div style="display:flex;align-items:center;gap:6px;">
                    <span class="status-badge ${badgeClass}" id="badge-${w.id}">${badgeText}</span>
                    <button class="week-edit-btn" title="Editar semana" onclick="openWeekEditModal(${w.id})">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            </div>
            <div class="week-foco">${w.foco}</div>
        `;
        listContainer.appendChild(li);
    });
}

// --- MODALS ---
function openWeekEditModal(weekId) {
    const w = weeksData.find(x => x.id === weekId);
    if (!w) return;

    // Remove existing modal if any
    const old = document.getElementById('edit-modal-overlay');
    if (old) old.remove();

    const overlay = document.createElement('div');
    overlay.id = 'edit-modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box" id="edit-modal-box">
            <div class="modal-header">
                <h3><i class="fa-solid fa-pen-to-square"></i> Editar Semana ${weekId}</h3>
                <button class="modal-close-btn" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal-body">
                <label class="modal-label">Nome da Semana</label>
                <input id="modal-week-num" class="modal-input" type="text" value="${w.num}" placeholder="Ex: Semana 1" />

                <label class="modal-label">Tema / Foco</label>
                <input id="modal-week-foco" class="modal-input" type="text" value="${w.foco}" placeholder="Ex: Fundamentos Sólidos" />

                <label class="modal-label">Tópicos (subtítulo)</label>
                <input id="modal-week-desc" class="modal-input" type="text" value="${w.desc}" placeholder="Ex: Lógica, OO e Sintaxe Java" />
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
                <button class="btn btn-primary" onclick="saveWeekEdit(${weekId})"><i class="fa-solid fa-floppy-disk"></i> Salvar</button>
            </div>
        </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('modal-visible'));
}

function saveWeekEdit(weekId) {
    const w = weeksData.find(x => x.id === weekId);
    if (!w) return;

    w.num  = document.getElementById('modal-week-num').value.trim()  || w.num;
    w.foco = document.getElementById('modal-week-foco').value.trim() || w.foco;
    w.desc = document.getElementById('modal-week-desc').value.trim() || w.desc;

    // Persist custom week metadata
    saveCustomWeekMeta();

    // Refresh sidebar and header if this is the active week
    initializeSidebars();
    if (currentWeekId === weekId) {
        document.getElementById('active-week-title').innerText   = `${w.num} - ${w.foco}`;
        document.getElementById('active-week-subtitle').innerText = `Tópicos: ${w.desc}`;
    }

    closeModal();
    showToast('Semana atualizada com sucesso!');
}

function openResourcesModal(weekId) {
    const w = weeksData.find(x => x.id === weekId);
    if (!w) return;

    const old = document.getElementById('edit-modal-overlay');
    if (old) old.remove();

    // Build resource rows HTML
    let rowsHtml = w.resources.map((r, i) => `
        <div class="resource-edit-row" id="res-row-${i}">
            <div class="resource-edit-header">
                <span class="resource-edit-index">Recurso ${i + 1}</span>
                <button class="modal-close-btn" style="width:24px;height:24px;font-size:0.7rem;" onclick="removeResourceRow(${i})" title="Remover">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="resource-edit-grid">
                <div>
                    <label class="modal-label">Tipo / Tag</label>
                    <input class="modal-input res-tag" type="text" value="${r.tag}" placeholder="Ex: 🌐 Site" />
                </div>
                <div>
                    <label class="modal-label">Nome</label>
                    <input class="modal-input res-name" type="text" value="${r.name}" placeholder="Nome do recurso" />
                </div>
            </div>
            <label class="modal-label">Descrição</label>
            <input class="modal-input res-desc" type="text" value="${r.desc}" placeholder="Breve descrição" />
            <label class="modal-label">URL (site ou YouTube)</label>
            <input class="modal-input res-url" type="url" value="${r.url || ''}" placeholder="https://..." />
        </div>
    `).join('');

    const overlay = document.createElement('div');
    overlay.id = 'edit-modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-box modal-box-wide" id="edit-modal-box">
            <div class="modal-header">
                <h3><i class="fa-solid fa-book-bookmark"></i> Editar Recursos — ${w.num}</h3>
                <button class="modal-close-btn" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal-body" id="resources-edit-body">${rowsHtml}</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="addResourceRow(${weekId})"><i class="fa-solid fa-plus"></i> Adicionar Recurso</button>
                <div style="display:flex;gap:8px;">
                    <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
                    <button class="btn btn-primary" onclick="saveResourcesEdit(${weekId})"><i class="fa-solid fa-floppy-disk"></i> Salvar</button>
                </div>
            </div>
        </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('modal-visible'));
    // Store week id for add row
    overlay.dataset.weekId = weekId;
}

function addResourceRow(weekId) {
    const body = document.getElementById('resources-edit-body');
    const rows = body.querySelectorAll('.resource-edit-row');
    const i = rows.length;
    const div = document.createElement('div');
    div.className = 'resource-edit-row';
    div.id = `res-row-${i}`;
    div.innerHTML = `
        <div class="resource-edit-header">
            <span class="resource-edit-index">Recurso ${i + 1}</span>
            <button class="modal-close-btn" style="width:24px;height:24px;font-size:0.7rem;" onclick="removeResourceRow(${i})" title="Remover">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="resource-edit-grid">
            <div>
                <label class="modal-label">Tipo / Tag</label>
                <input class="modal-input res-tag" type="text" value="" placeholder="Ex: 🌐 Site" />
            </div>
            <div>
                <label class="modal-label">Nome</label>
                <input class="modal-input res-name" type="text" value="" placeholder="Nome do recurso" />
            </div>
        </div>
        <label class="modal-label">Descrição</label>
        <input class="modal-input res-desc" type="text" value="" placeholder="Breve descrição" />
        <label class="modal-label">URL (site ou YouTube)</label>
        <input class="modal-input res-url" type="url" value="" placeholder="https://..." />
    `;
    body.appendChild(div);
}

function removeResourceRow(index) {
    const row = document.getElementById(`res-row-${index}`);
    if (row) row.remove();
}

function saveResourcesEdit(weekId) {
    const w = weeksData.find(x => x.id === weekId);
    if (!w) return;

    const body = document.getElementById('resources-edit-body');
    const rows = body.querySelectorAll('.resource-edit-row');
    const newResources = [];

    rows.forEach(row => {
        const tag  = row.querySelector('.res-tag')?.value.trim()  || '';
        const name = row.querySelector('.res-name')?.value.trim() || '';
        const desc = row.querySelector('.res-desc')?.value.trim() || '';
        const url  = row.querySelector('.res-url')?.value.trim()  || '';
        if (name) newResources.push({ tag, name, desc, url });
    });

    w.resources = newResources;
    saveCustomWeekMeta();
    renderResources(w.resources);
    closeModal();
    showToast('Recursos atualizados com sucesso!');
}

function saveCustomWeekMeta() {
    const meta = weeksData.map(w => ({
        id: w.id,
        num: w.num,
        foco: w.foco,
        desc: w.desc,
        resources: w.resources
    }));
    localStorage.setItem('javanauta_week_meta', JSON.stringify(meta));
}

function loadCustomWeekMeta() {
    try {
        const saved = localStorage.getItem('javanauta_week_meta');
        if (!saved) return;
        const meta = JSON.parse(saved);
        meta.forEach(m => {
            const w = weeksData.find(x => x.id === m.id);
            if (w) {
                w.num = m.num;
                w.foco = m.foco;
                w.desc = m.desc;
                w.resources = m.resources;
            }
        });
    } catch(e) {
        console.error('Erro ao carregar metadados das semanas:', e);
    }
}

function closeModal() {
    const overlay = document.getElementById('edit-modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('modal-visible');
    setTimeout(() => overlay.remove(), 250);
}

function selectWeek(id) {
    // Remove active class from old card
    const oldCard = document.getElementById(`week-card-${currentWeekId}`);
    if (oldCard) oldCard.classList.remove("active");

    currentWeekId = id;
    
    // Add active class to new card
    const newCard = document.getElementById(`week-card-${currentWeekId}`);
    if (newCard) newCard.classList.add("active");

    // Update workspace headers
    const week = weeksData.find(w => w.id === id);
    document.getElementById("active-week-title").innerText = `${week.num} - ${week.foco}`;
    document.getElementById("active-week-subtitle").innerText = `Tópicos: ${week.desc}`;

    // Load Notes into Editor
    const editor = document.getElementById("markdown-editor");
    editor.value = userNotes[id] || week.template;

    // Load Status
    const statusSelect = document.getElementById("week-status-select");
    statusSelect.value = userStatus[id] || "todo";

    // Render Preview
    renderPreview(editor.value);

    // Load Resources Widget
    renderResources(week.resources);
}

// Render Preview function
function renderPreview(markdownText) {
    const previewContainer = document.getElementById("preview-output");
    
    // Custom parsing for GitHub style alerts (Note, Tip, Important)
    let formattedMD = markdownText;
    
    // Custom alert box wrappers before passing to marked.js
    formattedMD = formattedMD.replace(/>\s*\[!NOTE\]\s*\n(.*?)(?=\n\n|\n[^\s>])/gs, '> **Nota:** $1');
    formattedMD = formattedMD.replace(/>\s*\[!TIP\]\s*\n(.*?)(?=\n\n|\n[^\s>])/gs, '> **Dica:** $1');
    formattedMD = formattedMD.replace(/>\s*\[!IMPORTANT\]\s*\n(.*?)(?=\n\n|\n[^\s>])/gs, '> **Importante:** $1');

    // Render Markdown
    const html = marked.parse(formattedMD);
    previewContainer.innerHTML = html;

    // Apply special styling class to alerts (blockquotes containing specific words)
    const blockquotes = previewContainer.getElementsByTagName("blockquote");
    for (let b of blockquotes) {
        const text = b.innerText.toLowerCase();
        if (text.includes("nota:")) {
            b.classList.add("alert-note");
        } else if (text.includes("dica:")) {
            b.classList.add("alert-tip");
        } else if (text.includes("importante:")) {
            b.classList.add("alert-important");
        }
    }

    // Force Prism to highlight new code elements
    Prism.highlightAllUnder(previewContainer);
}

function renderResources(resources) {
    const container = document.getElementById("resources-container");
    container.innerHTML = "";

    resources.forEach((r, index) => {
        const item = document.createElement("div");
        item.className = "resource-item";
        const nameHtml = r.url
            ? `<a class="resource-link" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem;"></i></a>`
            : `<span class="resource-name">${r.name}</span>`;
        item.innerHTML = `
            <span class="resource-tag">${r.tag}</span>
            ${nameHtml}
            <span class="resource-desc">${r.desc}</span>
        `;
        container.appendChild(item);
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-secondary";
    editBtn.style.cssText = "margin-top:10px; font-size:0.72rem; padding: 6px 10px;";
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Editar Recursos`;
    editBtn.onclick = () => openResourcesModal(currentWeekId);
    container.appendChild(editBtn);
}

function updateOverallProgress() {
    let doneCount = 0;
    weeksData.forEach(w => {
        if (userStatus[w.id] === "done") doneCount++;
    });
    
    const text = `<i class="fa-solid fa-calendar-check" style="color: var(--primary);"></i> Progresso: <strong>${doneCount}/4</strong> semanas concluídas`;
    
    const el = document.getElementById("overall-progress");
    if (el) el.innerHTML = text;
    
    const elMobile = document.getElementById("overall-progress-mobile");
    if (elMobile) elMobile.innerHTML = text;
}

// --- ACTIONS ---
function handleEditorInput(e) {
    const text = e.target.value;
    userNotes[currentWeekId] = text;
    renderPreview(text);
}

function handleStatusChange(e) {
    const newStatus = e.target.value;
    userStatus[currentWeekId] = newStatus;
    
    // Update Card Badge
    const badge = document.getElementById(`badge-${currentWeekId}`);
    if (badge) {
        badge.className = `status-badge status-${newStatus}`;
        
        let badgeText = "Não Iniciado";
        if (newStatus === "doing") badgeText = "Em Andamento";
        else if (newStatus === "done") badgeText = "Concluído";
        
        badge.innerText = badgeText;
    }

    saveToLocalStorage();
    showToast("Status da semana atualizado!");
}

function saveNotes() {
    saveToLocalStorage();
    showToast("Anotações salvas localmente com sucesso!", "success");
}

function copyToClipboard() {
    const text = document.getElementById("markdown-editor").value;
    navigator.clipboard.writeText(text).then(() => {
        showToast("Markdown copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
        showToast("Erro ao copiar para área de transferência.", "danger");
    });
}

function downloadMarkdownFile() {
    const text = document.getElementById("markdown-editor").value;
    const week = weeksData.find(w => w.id === currentWeekId);
    const fileName = `semana-0${currentWeekId}.md`;
    
    const blob = new Blob([text], { type: "text/markdown;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Arquivo ${fileName} baixado com sucesso!`);
}

function resetToTemplate() {
    if (confirm("Tem certeza que deseja apagar suas anotações atuais desta semana e retornar ao modelo em branco padrão do PDF?")) {
        const week = weeksData.find(w => w.id === currentWeekId);
        userNotes[currentWeekId] = week.template;
        
        const editor = document.getElementById("markdown-editor");
        editor.value = week.template;
        
        renderPreview(week.template);
        saveToLocalStorage();
        showToast("Modelo original restaurado!");
    }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
    const toast = document.getElementById("save-toast");
    const toastMsg = document.getElementById("toast-message");
    
    toastMsg.innerText = message;
    
    if (type === "success") {
        toast.style.background = "rgba(16, 185, 129, 0.95)";
    } else if (type === "danger") {
        toast.style.background = "rgba(239, 68, 68, 0.95)";
    }

    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
