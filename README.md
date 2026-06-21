# 🚀 Cypress API Test

Projeto de automação de testes de API utilizando **Cypress**, com foco na validação dos principais métodos HTTP e no tratamento de erros.

---

## 📌 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar testes automatizados de APIs REST utilizando Cypress.

A API utilizada no projeto foi a [Restful API](https://restful-api.dev/).

Foram validados os principais métodos HTTP:

- ✅ GET
- ✅ POST
- ✅ PUT
- ✅ DELETE

Também foram testados cenários negativos da API:

- ❌ Erro 404 ao tentar deletar um ID inexistente
- ❌ Erro 400 ao enviar um body inexistente no POST

---

## 🛠️ Tecnologias utilizadas

- Cypress
- Node.js
- JavaScript

---

## ⚙️ Funcionalidades testadas

### GET
- Consulta de dados na API
- Validação de status code
- Validação do response body

### POST
- Criação de registros
- Validação da resposta da API
- Testes de erro (400) com body inexistente

### PUT
- Atualização de registros existentes
- Validação dos dados atualizados

### DELETE
- Remoção de registros
- Validação de exclusão
- Teste de erro (404) ao deletar ID inexistente

---

## 📦 Fixtures

Os payloads utilizados nos testes foram organizados na pasta `fixtures` em arquivos JSON, permitindo:

- Reutilização de dados
- Melhor organização dos testes
- Facilidade de manutenção

---

## 🔧 Custom Commands

O projeto utiliza **Custom Commands do Cypress** no arquivo `commands.js`, permitindo:

- Reutilização de código
- Testes mais limpos
- Melhor organização e legibilidade

---

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram praticados:

- Automação de testes de API
- Métodos HTTP (GET, POST, PUT, DELETE)
- Validação de status code
- Validação de response body
- Testes negativos
- Uso de Fixtures
- Custom Commands
- Boas práticas de organização no Cypress

---

## 📥 Instalação e execução

### 1. Clone o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
```

### 2. Acesse a pasta do projeto

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Abra o Cypress

```bash
npx cypress open
```

### 5. Execute os testes em modo headless (opcional)

```bash
npx cypress run
```

## 🎯 Observação

Este projeto tem fins educacionais e foi desenvolvido para prática de automação de testes de API com Cypress.
