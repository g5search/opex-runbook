# General Testing Info

### Terms & Definitions

**Unit Testing** - Unit testing is completed on individual branches against their unique acceptance criteria to determine whether they are fit for release to production. 

**Regression Testing** - Regression Testing is used to confirm that recent code change(s) do not adversely affect existing functionality/features.

**Smoke Testing** - Smoke Testing is completed directly after a release to production to reveal potential issues/failures introduced by the release candidate that could potentially warrant a roll-back or subsequent hot-fix/patch release to resolve.

**Staging Environment** - Ongoing test environment, no socializing needed unless environment is in use by another dev/tester 

**Prime Environment** - Belongs to the QA Team, not to be edited or deployed to other than RC regression or the occasional hotfix testing initiated by QA, as far as Devs are concerned this does not exist and changes will not be socialized 

**RC** - Release Candidate 

**PR** - Pull Request & Peer Review 

***

### Testing Environments

* [Staging](https://onboarder-opex-staging.g5devops.com/) - Development and Branch Testing, used by both engineers and testers 
* [Prime](https://content-management-system-content-prime.g5devops.com) - Running Clone of Production, only used by Testers for Regression Testing 
* [Production](https://onboarder.g5marketingcloud.com/) - The Real Deal, only used for smoke testing

***

### RC General Rules

_We run a weekly release cadence which requires a tight timeline and a solid process._

* Doubletap ALL PR’s
* ALL devs with contributing code must PR RC branch
* A review is only valid at the time it is done, if added commits or changes are made reviews will need to be redone
* After a story is marked READY FOR TEST or done it is not to be edited or it goes back in line
* Any story that does not have a valid PR linked that passes tests, is merge conflict-free, has 2 valid reviews, is on staging, is marked READY FOR TEST and is assigned to testing will NOT be touched
* If a story IS marked READY FOR TEST that does NOT have a valid PR linked that passes tests, is free of merge conflicts, has 2 valid reviews and is on staging will be REJECTED and the process will need to start again
* Please be SURE your branch is on staging and any dependencies are also documented and configured 

***

### RC Testing and Deploy Schedule

**Thursday:** Code/QA Cutoff, Continued Unit Testing, Special Release Day if Needed 
* All stories that have been fully tested, accepted and marked Ready for Release by EOD will be included

**Friday:** RC Planning and Risk Assessment
* All stories that have been tested, accepted and marked DONE will be added to the RC Story
* The RC Story will be reviewed with Product and QA during standup on Friday 
* Once RC story is cbranch gets built and socialized for reviews from all contributing developers (within reason) 
* Once all devs had reviewed the RC will be pushed to STAGING for regression testing
* RC MUST be live on STAGING by EOD Monday or the RC will be reevaluated  

**Monday:** Regression Testing and Changeboard Socialization 
* RC will be fully tested and hopefully accepted 
* RC will be socialized at Changeboard 

**Tuesday:** Unit Testing

**Wednesday:** RC is Released
* Dev who is manning the RC will ping QA and wait for the “OK to Release” reply
* Once QA is on deck realese is merged, tagged and deployed to production
* QA will add version notes to channel to inform internal teams what is shipping
* When QA is done with smoke-testing they will alert the relevant channels that work is complete and live
	
***

### Story Criteria: 
A story is **NOT** eligible for testing until basic criteria is met:
* Pull Request is code-complete and only contains code relevant to the story, if additional code changes are made they must be documented in the requirements and testing notes 
* Pull Request passes build on GitHub, has no merge conflicts AND has a double-tap peer review by relevant developers
* Pull Request is added to the story with any relevant details/links/dependencies for testing and/or release 
* Branch is pushed to staging and confirmed live
* Story is marked `READY FOR TEST`  in Jira

***

### Tools/Shortcuts
- [Onboarder Root View - Staging](https://onboarder-opex-staging.g5devops.com/)
- [Onboarder Project View - Staging](https://onboarder-opex-staging.g5devops.com/projects)
- [Onboarder Review View - Staging](https://onboarder-opex-staging.g5devops.com/review)
- [Onboarder Intake View - Staging](https://onboarder-opex-staging.g5devops.com/intake)
- [Onboarder Queues View - Staging](https://onboarder-opex-staging.g5devops.com/queues)
- [Onboarder Root View - Production](https://onboarder.g5marketingcloud.com)
- [Onboarder Project View - Production](https://onboarder.g5marketingcloud.com/projects)
- [Onboarder Review View - Production](https://onboarder.g5marketingcloud.com/review)
- [Onboarder Intake View - Production](https://onboarder.g5marketingcloud.com/intake)
- [Onboarder Queues View - Production](https://onboarder.g5marketingcloud.com/queues)
- [Honeybadger]()
- [Salesforce]()
- [Hub - Staging](https://hub-content-staging.g5devops.com/)
- [Hub - Production](https://hub.g5marketingcloud.com/)
- [Content Library - Staging](https://content-management-system-content-staging.g5devops.com/admin/clients/g5-c-5mt8jmdvl-lander-software/content_liquids)
- [Content Library - Production](https://cms.g5marketingcloud.com/admin/clients/g5-c-5g12gh58f-johnny-s-rc-testing/content_liquids)
- [Onboarder Troubleshooting Guide](https://docs.google.com/document/d/15EVwjOl7hJK617z0aq_--5h2oQ6tM1TQPTsRCLJfqDE/edit?pli=1)
