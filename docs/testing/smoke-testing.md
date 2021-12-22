# Smoke Testing

### Description: Smoke Testing is completed directly after a release to production to reveal potential issues/failures introduced by the release candidate that could potentially warrant a roll-back or subsequent hot-fix/patch release to resolve.

---
## Smoke Testing Testing Template:
- **Status:** (ex. APPROVED or REJECTED)  
- **Approved PR/Branch:** (ex. pull/rc-1 | `rc-branch`)  
- **Testbed:** (ex. https://onboarder-opex-staging.g5devops.com)  
- **Credentials:** (ex. wolfeel | g5rocksg5)  
- **Console/HB Health:** (ex. PASS or FAIL with Link to Error)  
- **A/C:**     
-- **Sanity Testing:** (ex. PASS or FAIL)  
-- **RC Branch:** (ex. PASS or FAIL)  
- **Notes:** Optional

---

### General
1. Do all views of the app load successfully?
2. Does the app funtion as intended?
2. Are you able to spin up a client/location from start to finish?
3. Are there any new/significant spikes in HB pertaining to release?

---

### RC Specific 
1. Does the new functiomnality work as expected?
2. Are there any other areas impacted or affected by the release?
3. Did the new functionality/enhancement introduce any new issues/bugs that need attention?


