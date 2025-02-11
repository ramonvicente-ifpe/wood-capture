describe('Cadastrar espécies de madeira.', () => {
  it('Cadastra madeira da espécie Pinus ao preencher todos os campos.', () => {
    cy.visit('https://ramonvicente-ifpe.github.io/wood-capture/')
    cy.contains('Continuar').click()
    cy.get('select#specie').select('pinus')
    cy.get('input[type=file]').selectFile('cypress/pinus.jpg')
    cy.get('input[type=number]#width').type('500')
    cy.get('input[type=number]#height').type('500')
    cy.get('select#cutType').select('topo')
    cy.get('input[type=number]#weight').type('200')
    cy.get('select#density').select('leve')
    cy.get('select#cut').select('facil')
    cy.get('select#planer').select('medio')
    cy.get('select#sandpaper').select('facil')
    cy.get('select#lathe').select('facil')
    cy.contains('Salvar').click()
    cy.contains('Suas informações foram salvas com sucesso!')
  })

  it('Exibe messagem de error quando deixa campos obrigatórios estão vazios', () => { 
    cy.visit('https://ramonvicente-ifpe.github.io/wood-capture/')
    cy.contains('Continuar').click()
    cy.contains('Salvar').click()
    cy.contains('Campos obrigatórios:')
    cy.contains('Imagem')
    cy.contains('Tipo de Corte')
  })
})