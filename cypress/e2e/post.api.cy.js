/// <reference types="cypress"/>


describe('Cadastro de dispositivos', () => {

    const payload_cadastro_device = require('../fixtures/cadastrar_device_sucesso.json')

    it('Cadastrar um dispositivo', () => {

        cy.cadastrarDevice(payload_cadastro_device)
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.string
            expect(response.body.name).equal(payload_cadastro_device.name)
        })     
    })

    it('Cadastrar um dispositivo sem body', () => {
        cy.cadastrarDevice()
            .then((response) => {
             expect(response.status).equal(400)
             expect(response.body.error).equal('Request body is missing')
            })
    })
})