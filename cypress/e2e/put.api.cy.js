/// <reference types="cypress"/>

describe('Alterar dispositivos', () => {

    const body_cadastro = require('../fixtures/cadastrar_device_sucesso.json')
    const body_update = require('../fixtures/update_device_sucesso.json')

    it('Alterar um dispositivo', () => {

        cy.cadastrarDevice(body_cadastro)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal(body_cadastro.name)

                cy.alterarDevice(response, body_update)
                .then((response_update) => {
                    expect(response_update.status).equal(200)
                    expect(response_update.body.name).equal(body_update.name)
                
                })
        })
    })
})