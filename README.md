# Gerador de Recibos de Pagamento para Psicólogos

Este projeto é uma aplicação web para gerar recibos de pagamento para psicólogos, utilizando React, MUI (Material-UI), JQuery, JQuery Mask e PDFMake.

## Funcionalidades

- **Criação de recibos personalizados**: Insira informações do paciente, detalhes da sessão e valores pagos.
- **Formatação automática de campos**: Utilização de JQuery Mask para formatação de campos como CPF, telefone e valor monetário.
- **Geração de PDF**: Criação de recibos em formato PDF com PDFMake, prontos para impressão ou envio por email.
- **Interface intuitiva**: Interface moderna e responsiva utilizando MUI (Material-UI).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **MUI (Material-UI)**: Biblioteca de componentes de interface de usuário baseada no Material Design.
- **JQuery**: Biblioteca JavaScript para manipulação de DOM e eventos.
- **JQuery Mask**: Plugin para formatação de campos de entrada.
- **PDFMake**: Biblioteca para criação de documentos PDF em JavaScript.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (gerenciador de pacotes do Node.js)

## Instalação

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/gerador-recibos-psicologos.git
   cd gerador-recibos-psicologos
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Inicie a aplicação:**

   ```sh
   npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
gerador-recibos-psicologos/
├── public/
├── src/
│   ├── components/
│   │   ├── ReceiptForm.js
│   │   ├── ReceiptPreview.js
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Como Usar

1. **Preencha as informações do paciente**: Nome, CPF, telefone, etc.
2. **Insira os detalhes da sessão**: Data, descrição, valor pago.
3. **Gere o recibo**: Clique no botão para gerar o recibo em formato PDF.
4. **Baixe ou imprima o recibo**: O recibo gerado estará disponível para download ou impressão.

## Contribuição

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/nova-feature`)
3. **Commit suas mudanças** (`git commit -am 'Adiciona nova feature'`)
4. **Faça um push para a branch** (`git push origin feature/nova-feature`)
5. **Crie um novo Pull Request**

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ por [Seu Nome](https://github.com/seu-usuario)
