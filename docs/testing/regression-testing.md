# Regression Testing (E2E)

<center>
Regression Testing is used to confirm that recent code change(s) do not adversely affect existing functionality/features.
</center>


---

### Regression Testing Template
**Status:** (ex. APPROVED or REJECTED)  
**Approved PR/Branch:** (ex. pull/rc-1 | `rc-branch`)  
**Testbed:** (ex. https://onboarder-opex-staging.g5devops.com)  
**Credentials:** (ex. wolfeel | g5rocksg5)  
**Console/HB Health:** (ex. PASS or FAIL with Link to Error)  
**A/C:**     
-- **Regression/E2E:** (ex. PASS or FAIL)  
-- **Contributing Branch 1:** (ex. PASS or FAIL)  
-- **Contributing Branch 2:** (ex. PASS or FAIL)  
**Notes:** Optional

---

### Areas to Test

  * [General (Whole App)](#general)
  * [Intake UI](#intake)
  * [Projects UI](#projects)
  * [Projects - Phases](#projects-phases)
  * [Projects - Bulk Edit Mode](#projects-bulk-edit-mode)
  * [Review UI](#review)
  * [Review - Location Info](#location-info)
  * [Review - Assets UI](#assets)
  * [Queues UI](#queues)

---  

#### General
1. User dropdown populates   
2. User dropdown displays first & last name [ex. User Dropdown](https://www.screencast.com/t/0xFLyBvSj)    
3. When carat is clicked menu item displays [ex. User Settings](https://www.screencast.com/t/nmOs5BtaNz) 
4. User Settings opens in new tab and links to unique auth record [ex. Auth Record](https://auth.g5search.com/users/5600/edit)    
2. Able to submit support request from header on each view intake, projects, review & queues
3. G5 Onboarder logo & version route user to [root](https://onboarder.g5marketingcloud.com/)  
4. Non-global users cannot view/access intake, review or queues  
5. 404 page displays when invalid/unauthorized path is selected  
	a. [Invalid](https://onboarder.g5marketingcloud.com/johnny)  
	b. [Unauthorized (must be logged in as non-global user)](https://onboarder.g5marketingcloud.com/queues)  
6. Hamburger menu displays viable options based on user permissions [Menu Example](https://www.screencast.com/t/cyVYaSegfu8M)  
7. Able to navigate to other views via hamburger menu items  

---

#### Intake
1. Able to sort by Client Name, Created Date or Project Name
2. Defaults to sort by Created Date
- Configure  
- Review  
- Release  

---

#### Projects
1. All projects display in dropdown for global user
2. Only assigned projects are available for selection for scoped users
3. Typeahead allows you to begin typing to narrow selection list
4. Projects display: Client | Project | Location Count 
5. Once project is selected directs user to unique project UI
6. URL reflects project and location ID 
7. Sections displayeddepend of package - test projects have all sections ADD DETAILS


#### Projects - Phases
1. If there are multiple phases the first phase is open upon load [example:](https://www.screencast.com/t/QnHK2mc4Ywt)
2. Able to select location from sidebar
3. Able to select/deselect phases/locations from sidebar (assuming project has phases)
4. Phases are listed in ascending numerical order
5. Carat on phase panel opens and closes the location list 
6. Submitted locations display italicized text 

#### Projects - Bulk Edit Mode
1. Able to toggle SINGLE MODE on and off (if project contains multiple locations/phases)
2. When SINGLE MODE toggled on label changes to "BULK MODE"
3. When SINGLE MODE toggled off label changes back
4. Bulk edit mode displays banner warning to user 
5. BEM banner opens and closes to display additional details 
6. Icon (?) in corner displays information about BEM and floats with the user
7. Able to close BEM info panel by clicking the X
8.	BEM displays hamburger menu that links to specific sections for editing/reviewing
9.	Hamburger menu floats and travels with the user 
10.	Make updates button displays and floats with the user 
11.	Able to select multiple locations by clicking on their name
12.	Able to deselect locations by clicking on their name 

---

#### Review
1. Review is composed of 2 different views - Location Info & Location Assets  
2. Both images/badges populate and lead to their respective views  


#### Review - Location Information
1. Warning banner displays (_"NOTE: The information displayed here is a snapshot as captured via the Onboarder. Information may have been updated since submission, please be sure to check the Hub or Salesforce for the most up-to-date information."_) [Example](https://www.screencast.com/t/8nDjrLvXrni)
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


#### Review - Assets
1. Able to select test client and location 
2. Confirm assets load
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



