# 📝 Anotações de Estudo: Semana 01

**Foco Temático:** Fundamentos Essenciais (Lógica, OO e Sintaxe Java)  
**Período:** [Inserir Data de Início] a [Inserir Data de Fim]  
**Status da Semana:** 🟡 Em Andamento / 🟢 Concluído

---

## 🎯 Metas da Semana
1. Consolidar os conceitos de tipos de dados e lógica estruturada em Java.
2. Entender e aplicar os 4 pilares da Orientação a Objetos.
3. Analisar o código modelo `Internacao.java` para entender a organização de classes reais.

---

## 📓 Diário de Aprendizado

### Segunda-feira: [Título do Tópico]
*   **O que estudei:** [Descreva brevemente os tópicos abordados hoje]
*   **Principais sacadas (Insights):**
    > [!NOTE]
    > Registre aqui pontos chaves que facilitaram sua compreensão de determinado assunto.
*   **Dúvidas/Pontos a revisar:**
    *   [ ] Exemplo: Diferença prática entre herança e composição.

### Terça-feira: [Título do Tópico]
*   **O que estudei:** ...
*   **Insights:** ...

### Quarta-feira: [Título do Tópico]
*   **O que estudei:** ...

### Quinta-feira: [Título do Tópico]
*   **O que estudei:** ...

### Sexta-feira: [Título do Tópico]
*   **O que estudei:** ...

---

## 💻 Prática & Código da Semana

Use este espaço para colar pequenos snippets de código interessantes que você desenvolveu ou analisou (ex: baseado no `Internacao.java`).

```java
// Exemplo de uma classe simples em Java demonstrando Encapsulamento
public class Paciente {
    private String nome;
    private int idade;

    public Paciente(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }
}
```

---

## 🧠 Conceitos Mapeados (Dicionário Técnico)
*   **Encapsulamento**: Esconder os detalhes internos de funcionamento da classe e expor apenas métodos seguros.
*   **Polimorfismo**: Capacidade de um objeto ser referenciado de várias formas (ex: uma classe filha sendo instanciada sob a referência de sua classe mãe).
*   **Tipos Primitivos vs Tipos Wrapper**: [Escreva aqui suas observações].

---

## 🏁 Autoavaliação de Fim de Semana
*   **O que foi fácil:** [Escreva os tópicos em que se sentiu mais seguro]
*   **O que foi difícil:** [Escreva os maiores desafios ou dificuldades enfrentadas]
*   **Plano de Ação para recuperar atrasos:** [Se necessário, como vai compensar na próxima semana]

---
*Dica: Ao iniciar a Semana 2, duplique este arquivo na pasta `anotacoes/` com o nome `semana-02.md` e adapte os títulos!*
