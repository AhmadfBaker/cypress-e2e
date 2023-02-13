context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/network-requests')
    })
  
  
    it('cy.request() - make an XHR request', () => {
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/1').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('response').then((res)=> {
            expect(res.headers).to.include ({
                'access-control-allow-credentials': 'true'
            })
            expect(res.body).to.deep.equal({
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                email: "Eliseo@gardner.biz",
                id: 1,
                name: "id labore ex et quam laborum",
                postId: 1
            })

        })


    })

})