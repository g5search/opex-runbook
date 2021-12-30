# Regression Testing (E2E)

#### Regression Testing is used to confirm that recent code change(s) do not adversely affect existing functionality/features.  

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
  * [Intake](#intake)
  * [Intake - Configure](#intake-configure)
  * [Intake - Review](#intake-review)
  * [Intake - Release](#intake-release)
  * [Projects UI](#projects)
  * [Projects - Phases](#projects-phases)
  * [Projects - Bulk Edit Mode](#projects-bulk-edit-mode)
  * [Review](#review)
  * [Review - Location Info](#location-info)
  * [Review - Assets](#assets)
  * [Queues](#queues)  

---  

### General
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

### Intake
1. Able to sort by Client Name, Created Date or Project Name
2. Defaults to sort by Created Date
3. Able to search via search bar 
4. Pagination defaults to 10, able to set to 10, 25, 50 or 100
5. Able to skip to specific pages 
6. Project cards display the following information: [example:](https://www.screencast.com/t/a0M0FkI6Cv)  
```Number of Locations (ex. 1 / Location)```  
```Client (ex. Store It All Self Storage)```  
```Project Details (ex.  #18077 Add-Uber3.0-Store It All- 1-SS```  
```Created Date (ex. Created: 3/2/2021)```  

---

#### Intake - Configure
1. Modal header = INTAKE
2. First section header = CLIENT INFORMATION
3. Able to add a new client
4. Able to select an existing client
5. Able to remove client
6. Able to close the Client Information panel
7. Able to click NEXT and be routed to step 2
8. Second section header = LOCATION INFORMATION
8. When location name is clicked kicks off google search in new window [example:](https://www.screencast.com/t/0ul7tI0baoRe)
9. Able to add URL for scraping 
10. Able to select yes to crawl
11. Able to deselect yes to crawl 
12. Able to select a vendor from dropdown (Choices include LeaseLabs, Yardi/RentCafe, Wordpress, Wix, Squarespace & Other)
13. Able to select client
14. Able to select corp for only 1 location
15. If corp already exists for client unable to select corp 
16. Able to click NEXT and be routed to step 3 
17. Third section header = SAVE, CRAWL & SCRAPE
18. Screen displays information and a button
19. Message displays _THANKS FOR ALL THAT INFORMATION!
We’re going to use it to do the following:
Crawl - We will find all the pages of the sites you specified.
Scrape - We will scrape all the pages we find for relevant information.
* Check back in shortly to review the information we found in our scrape._
18. Able to click "Save & Start Crawl" and action kicks off 

---

#### Intake - Review
1. Modal header = REVIEW PROJECT
2. Can use Search Locations bar to search
3. Locations are listed A->Z by default
4. Able to sort by status 
5. Able to select a location at each step
6. Able to Save & Close at each step
7. Able to close model with X at each step
8. Location DETAILS fields that should populate:
```NAME```
```NAKED DOMAIN```
```DOMAIN UNAVAILABLE```
```STREET ADDRESS 1```
```STREET ADDRESS 2```
```CITY```
```STATE```
```POSTAL CODE```
```COUNTRY```
```LANDLINE/FORWARDING```
```LOCAL PHONE NUMBER``` 
9. Location AMENITIES should display scraped amenities [example:](https://www.screencast.com/t/5r3bvrCjk5)
10. Able to delete scraped amenities
Location ASSETS 
11. Able to upload new asset (confirm flows to cloudinary, asset library & content library)
12. Able to upload multiple assets (confirm flows to cloudinary, asset library & content library)
13. Confirm non-supported file types are not selectable 
14. Able to select single asset
15. Able to select multiple assets
16. Able to download asset
17. Able to delete via button (confirm delete flows to cloudinary, asset library & content library)
18. Able to delete via icon on image (confirm delete flows to cloudinary, asset library & content library)
19. Able to select all 
20. Able to refresh  

---
 
#### Intake - Release
1. Modal should display like this: [example:](https://www.screencast.com/t/YaxVGh1jFRxC)
2. Modal header = SUMMARY OF INTAKE ACTIONS
3. Step 1 header = SELECT LOCATION TO RELEASE
4. Able to Filter Phase 
5. Able to Filter by Name 
6. Able to Select All
7. Able to Clear Selected
8. Able to add & remove locations usind ADD & REMOVE buttons
9. Added locations join list on the right
10. Deleted locations join the list on the left 
11. Able to sort by Name & Phase in both lists
11. Step 2 header = RELEASE REVIEW
12. Contains 3 sections: Hub Review, Auth Review & Remaining Locations [example:](https://www.screencast.com/t/m5tBh4a8IV)
13. Hub Review contains custom message about client creation; either informing user they are creating a new client or associating locations with an existing. (ex. _You will be associating locations to 1 existing Client in the Hub._)
14. Auth Review contains message regarding users creating and a link that leads to the correct inspire planner project. (ex. _You will be creating user(s) in Auth for this project and releasing the Onboarder to them._)
15. Remaining Locations contains a custom count message informing user of remaining unreleased locations in the project (ex. _You will be creating user(s) in Auth for this project and releasing the Onboarder to them._)
16. Able to close model with X 
17. Able to hit RELEASE! and be redirected to Intrake view wqith all stages complete [example:](https://www.screencast.com/t/8q2eFKm4J9)

---

### Projects
1. All projects display in dropdown for global user
2. Only assigned projects are available for selection for scoped users
3. Typeahead allows you to begin typing to narrow selection list
4. Projects display: Client | Project | Location Count 
5. Once project is selected directs user to unique project UI
6. URL reflects project and location ID 
7. Sections displayeddepend of package - test projects have all sections ADD DETAILS

---

#### Projects - Phases
1. If there are multiple phases the first phase is open upon load [example:](https://www.screencast.com/t/QnHK2mc4Ywt)
2. Able to select location from sidebar
3. Able to select/deselect phases/locations from sidebar (assuming project has phases)
4. Phases are listed in ascending numerical order
5. Carat on phase panel opens and closes the location list 
6. Submitted locations display italicized text 

---

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

### Review
1. Review is composed of 2 different views - Location Info & Location Assets  
2. Both images/badges populate and lead to their respective views  


---

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

---

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

---

### Queues 
1. View loads all 5 queues: AUTH, CRAWLERS, HUB, SALESFORCE & SEEDER
2. Each queue contains: waiting, active, completed, failed, delayed & paused
3. Each of the above list their respectove jopb counts 
4. Able to search job by ID
5. Display defaults to 10 jobs
6. Able to Select All
7. Able to Clear Selected
8. Able to Delete Selected
9. Able to Retry Selected Failed Jobs
10. Job details have the following headings: Selected, Id, State, Name, Attempts Made, Progress, Progressed On, Finished On, Actions
11. Able to sort by any of the above heads across all queues 
12. Able to successfully "Refresh Hub Token" via button in header
13. Able to "Pause All Queues" via button in header



