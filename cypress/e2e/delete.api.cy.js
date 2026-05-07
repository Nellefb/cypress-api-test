/// <reference types="cypress"/>

describe('Deletar dispositivos', () => {

    const body = require('../fixtures/cadastrar_device_sucesso.json')

    it('Deletar um dispositivo', () => {

        cy.cadastrarDevice(body)
            .then((response) => {
                expect(response.status).equal(200)

                cy.deletarDevice(response).then((response_delete) => {
                    expect(response_delete.status).equal(200)
                    expect(response_delete.body.message)
                        .equal(`Object with id = ${response.body.id} has been deleted.`)
                })
            })
    })

    it('Deletar um dispositivo não existente', () => {

        const id_inexistente = 'nala'

        cy.request({
            method: 'DELETE',
            url: `/objects/${id_inexistente}`,
            failOnStatusCode: false
        }).as('deleteDeviceResult')

        cy.get('@deleteDeviceResult').then((response_del) => {
            expect(response_del.status).equal(404)
            expect(response_del.body.error)
                .equal(`Object with id = ${id_inexistente} doesn't exist.`)
        })

    })
})