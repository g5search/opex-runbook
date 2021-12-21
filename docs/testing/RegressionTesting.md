# Regression Testing (E2E)

### Description: Regression Testing is used to confirm that recent code change(s) do not adversely affect existing functionality/features.

---

### Regression Testing Template:
**Status:** (ex. APPROVED or REJECTED)
**Approved PR/Branch:** (ex. https://github.com/g5search/opex-runbook/pull/rc-1 rc-branch)
**Testbed:** (ex. https://onboarder-opex-staging.g5devops.com)
**Credentials:** (ex. User: wolfeel | PW: g5rocksg5)
**Console/HB Health:** (ex. PASS or FAIL)
**A/C:** 
- General (ex. PASS or FAIL)
- Intake (ex. PASS or FAIL)
- Projects (ex. PASS or FAIL)
- Review (ex. PASS or FAIL)
- Queues (ex. PASS or FAIL)
**Notes:** Unique to testing

---

## General - [ALL Views](https://onboarder.g5marketingcloud.com)
1. User dropdown populates
	a. User dropdown displays user's first & last name  [User Dropdown Example](https://www.screencast.com/t/0xFLyBvSjP)
	b. When carat is clicked menu item displays [User Settings Example](https://www.screencast.com/t/nmOs5BtaNz)
	c. User Settings opens in new tab and links to unique auth record [Auth Record Example](https://auth.g5search.com/users/5600/edit)
2. Able to submit support request from header on each view [intake,](https://onboarder.g5marketingcloud.com/intake) [projects,](https://onboarder.g5marketingcloud.com/projects) [review](https://onboarder.g5marketingcloud.com/review) and [queues](https://onboarder.g5marketingcloud.com/queues)
3. G5 Onboarder logo & version route user to [root](https://onboarder.g5marketingcloud.com/)
4. Non-global users cannot view/access intake, review or queues 
5. 404 page displays when invalid/unauthorized path is selected 
	a. [Invalid](https://onboarder.g5marketingcloud.com/johnny)
	b. [Unauthorized (must be logged in as non-global user)](https://onboarder.g5marketingcloud.com/queues)
6. Hamburger menu displays viable options based on user permissions[Menu Example](https://www.screencast.com/t/cyVYaSegfu8M)
7. Able to navigate to other views via hamburger menu items

---

## [Intake](https://onboarder.g5marketingcloud.com/intake)
- Configure
- Review 
- Release 

---

## [Projects](https://onboarder.g5marketingcloud.com/projects)
1. All projects display in dropdown for global user
2. Only assigned projects are available for selection for scoped users
3. Typeahead allows you to begin typing to narrow selection list
4. Projects display: Client | Project | Location Count 
5. Once project is selected directs user to unique project UI
6. URL reflects project and location ID 
7. If there are multiple phases the first phase is open upon load [example:](https://www.screencast.com/t/QnHK2mc4Ywt)
8. Able to select location from sidebar
9. Able to select/deselect phases/locations from sidebar (assuming project has phases)
10. Able to toggle SINGLE MODE on and off (if project contains multiple locations/phases)
11. When SINGLE MODE toggled on label changes to "BULK MODE"
12. When SINGLE MODE toggled off label changes back
13. Phases are listed in ascending numerical order
14. Karat on phase panel opens and closes the location list 
15. Submitted locations display italicized text 
16. Bulk edit mode displays banner warning to user 
17. BEM banner opens and closes to display additional details 
18. Icon (?) in corner displays information about BEM
19. Able to close info panel by clicking the X
20.	BEM displays hamburger menu that links to specific sections for editing/reviewing
21.	Hamburger menu floats and travels with the user 
22.	Make updates button displays and floats with the user 
23.	? icon in corner floats with the user 
24.	Able to select multiple locations by clicking on their name
25.	Able to deselect locations by clicking on their name 
26. Sections depend of package - test projects have all sections ADD DETAILS

---

## [Review](https://onboarder.g5marketingcloud.com/review)
Review is composed of 2 different views - Location Info & Location Assets

### [Location Information](https://onboarder.g5marketingcloud.com/review/locations)
1. Warning banner displays ("NOTE: The information displayed here is a snapshot as captured via the Onboarder. Information may have been updated since submission, please be sure to check the Hub or Salesforce for the most up-to-date information.") [Example](https://www.screencast.com/t/8nDjrLvXrni)
2. Able to select a CLIENT from dropdown
3. Able to select LOCATION from dropdown
4. Able to select specific fields 
5. Able to export data via DOWNLOAD CSV button
6. Results default to populating 25 fields at a time
7. Able to change number of fields to 50 or 100 
8. Results paginate
9. Able to view specific number of results per page selected (25, 50, 100)
10. Able to copy specific fields to clipboard via + 
11. Results display under headings Location | Field Name | Field Value
12. Able to sort Field Name & Field Value by clicking sort icon (ascending/descending)


### [Assets](https://onboarder.g5marketingcloud.com/review/assets)
1. Able to select test client and location 
2. Confirm Assets load
3. Able to upload new asset (confirm flows to cloudinary, asset library & content library)
4. Able to upload multiple assets (confirm flows to cloudinary, asset library & content library)
5. Confirm non-supported file types are not selectable 
6. Able to select single asset
7. Able to select multiple assets
8. Able to download asset
9. Able to delete via button (confirm delete flows to cloudinary, asset library & content library)
10. Able to delete via icon on image (confirm delete flows to cloudinary, asset library & content library)
11. Able to select all 
12. Able to refresh
13. Able to select new location 



