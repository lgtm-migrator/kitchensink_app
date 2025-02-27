export default (folderName, Common) => {
   describe("Scope", () => {
      it("Filtered scope sees filtered data", () => {
         Common.RunSQL(cy, folderName, "assign_role_filtered.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("not.contain", "Banana");
      });
      it("Unfiltered scope sees all data", () => {
         Common.RunSQL(cy, folderName, "assign_role_unfiltered.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("contain", "Banana");
      });
      it("With filtered and unfiltered scopes sees all data", () => {
         Common.RunSQL(cy, folderName, "assign_role_both.sql");
         reloadToScopePage();
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("contain", "Apple")
            .and("contain", "Banana");
      });
      it("With scope that does not include object sees no data", () => {
         Common.RunSQL(cy, folderName, "assign_role_restricted.sql");
         reloadToScopePage();
         // Wait for loading to finish before checking that data does not exist
         cy.get(".webix_spin").should("exist");
         cy.get(".webix_spin").should("not.exist");
         // The data still isn't displayed after the webix_spin is removed
         // eslint-disable-next-line cypress/no-unnecessary-waiting
         cy.wait(10);
         cy.get(
            '[data-cy="ABViewGrid_8efd05d6-0d0e-4571-bd4c-7c01a66640e5_datatable"]'
         )
            .should("exist")
            .and("not.contain", "Apple")
            .and("not.contain", "Banana");
      });
   });
};

function reloadToScopePage() {
   cy.reload();
   cy.get('[data-cy="portal_work_menu_sidebar"]').should("be.visible").click();
   cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]')
      .should("be.visible")
      .click();
   cy.get('[data-cy="6995a20a-6804-40ad-85f9-b1a3ec8a1907"]')
      .should("exist")
      .click();
}
