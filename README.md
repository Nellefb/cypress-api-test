🚀 Cypress API Test - QAzando

Projeto de automação de testes de API utilizando Cypress, com foco na validação dos principais métodos HTTP e tratamento de erros.

📌 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar testes automatizados de APIs REST utilizando Cypress.

Foram realizados testes dos métodos:

✅ GET
✅ POST
✅ PUT
✅ DELETE

Além disso, também foram testados cenários de erro da API:

❌ Erro 404 no DELETE ao tentar deletar um ID inexistente
❌ Erro 400 no POST ao enviar um body inexistente

🛠️ Tecnologias utilizadas:

Cypress
JavaScript
Node.js

⚙️ Funcionalidades testadas:

✅ GET
- Consulta de informações da API
- Validação de status code
- Validação do response body

✅ POST
- Criação de registros
- Validação de retorno da API
- Teste de erro 400 com body inexistente

✅ PUT
- Atualização de registros existentes
- Validação das informações atualizadas

✅ DELETE
- Remoção de registros
- Teste de erro 404 ao tentar deletar um ID inexistente

📦 Uso de Fixtures
Os payloads utilizados nos testes foram armazenados na pasta fixtures, utilizando arquivos JSON para facilitar:
- Reutilização de dados
- Organização dos testes
- Facilidade de manutenção

🔧 Custom Commands

O projeto utiliza Custom Commands do Cypress no arquivo commands.js, permitindo reutilização de código e deixando os testes mais limpos e organizados.

📚 Conceitos praticados:

Durante o desenvolvimento deste projeto foram praticados conceitos como:
-Automação de testes de API
-Métodos HTTP
-Validação de status code
-Validação de response body
-Testes negativos
-Uso de Fixtures
-Uso de Custom Commands
-Organização de testes no Cypress
