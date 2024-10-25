describe('Página Inicial', () => {
  it('Verifica o título da página', () => {
    cy.visit('http://localhost:5173/recibos-psi/');
    cy.title().should('eq', 'Gerador de recibo');
  });

  it('Verifica se o título (h1) da página carregou', () => {
    cy.contains('Gerador de Recibo', { timeout: 10000 })
      .should('be.visible')
  });

  it('Preenche o formulário do psicólogo', () => {
    const data = {
      "psi-name": "Gabriel",
      "psi-email": "gabriel@mail.com",
      "psi-CPF": "123.456.789-00",
      "psi-CRP": "12345",
      "psi-atuacao": "Psicólogo Clínico",
      "psi-tel": "(31) 99999-9999",
      "psi-endereco": "Rua ABC, N.º 167",
      "psi-nickredes": "@psigabriel",
    }

    Object.entries(data).forEach(line => {
      cy.get(`#${line[0]}`).type(line[1])
    })
  })

  it('Preenche o formulário do paciente', () => {
    const data = {
      "pat-name": "Rogério",
      "pat-CPF": "123.456.789-00",
    }

    Object.entries(data).forEach(line => {
      cy.get(`#${line[0]}`).type(line[1])
    })
  })

  it('Click no botao de enviar formulário de recibo', () => {
    cy.get('#btn-submit-form').click()
  })
});