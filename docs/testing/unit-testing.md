# Unit Testing

#### Unit testing is completed on individual branches against their unique acceptance criteria to determine whether they are fit for release to production. 

---

### Unit Testing Template:  
**Status:** (ex. APPROVED or REJECTED)  
**Approved PR/Branch:** (ex. pull/1 | `test-branch`)  
**Testbed:** (ex. https://onboarder-opex-staging.g5devops.com/queues)  
**Credentials:** (ex. wolfeel | g5rocksg5)  
**Console/HB Health:** (ex. PASS or FAIL)  
**A/C:** Unique to story  
**Notes:** Unique to testing  

---

### General

Unit Testing is based on an individual change/branch so testing must be done against the explicit acceptance criteria for that story. In order to fully ensurew you have covered all bases grab the section from Regression Testing that pertains to the story and test those items as well. 

For example if this was your story:

> **User:** As a user of the Bulk Edit mode I want to be able to close the warning after I read it
> **Requirements:** Add a close function to bulk edit warning to allow user to close the dialogue box   
> **A/C:** Am able to close BEM info panel by clicking the X

You would test the A/C but would also be wise to grab the "Bulk Edit Mode" section from the Regression Testing and test those items as well to ensure the new add really does function in the way intended without any added issues.