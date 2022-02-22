export default (folderName, Common) => {
    describe.only("Form", () => {
      beforeEach(() => {
        // Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
        cy.visit("/").wait(1500);
      });

        //1. Go to the tab "Form"
      it("Go to the tab Form", () =>{
        Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
        cy.get(
            '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
          ).click()
   
      })//End 1
      //2. can find the field "test-kcs-id" with the value "Test-KCS-0000000002"
      it("can find test-kcs-id", () =>{

       cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
       ).click()

      
       cy.get(
         '[data-cy="datetime datetimerequired effbb8b5-4874-4ae9-89d2-b9dcfb40c6c3 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
       ).type('21/02/2022  11:46 AM').click()


       cy.contains('div', 'select-list-multiselect(required)').find('input').first().type('item4{enter}')


        //Click Save button
        cy.get(
          '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).click()

         cy.visit("/").wait(1500);

         cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()

        cy.contains('div', 'Test-KCS-0000000001')

        })//End 2
      //3. can find the field "single-line-text(required)" with the value "test2"
      it("can find single line text", () => {

        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()

        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).clear().type('test2')

        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).should('have.value','test2')
      

      })//End 3
      //4. Change the value to "Cypress hahaha is coming here now" and click on the button "Save"
      it("change the value to cypress hahaha", () =>{
        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()

        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).clear()

        cy.contains('label', 'single-line-text(required)')
          .type('Cypress hahaha is coming here now')

        cy.get(
          '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).click()

      })//End 4
      //5. can find the field validation error message "*This is a required field."
      it('can find This is a required field',()=>{
       const textalert = '*This is a required field.'
        //Click Tab Form
        cy.get(
          '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()
        
        //Clear input value
        cy.get(
          '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
          ).clear()

        //Click Save button
        cy.get(
         '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
        ).click()

        cy.get('[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]').invoke('val', textalert)
     
        })//End 5

      //6. can find the field "test-kcs-id" with the value "Cypress hahaha is coming here now"
      it('can find the field test-kcs-id with cypress hahaha', ()=>{
         //Click Tab Detail
         cy.get(
          '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
        ).click()

        cy.get(
          '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
        )
        cy.contains('label', 'test-kcs-id')
        .type('Cypress hahaha is coming here now')

      })// End 6
    });//End Describe
  };//End Export
  