---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
toc: true
searchable: true
# When this information was last reviewed
lastReviewed: {{ .Date }}
# How the app is known in Kubernetes/Docker Hub/Github Repo/Heroku App
shortname:
# The contact person, people, or team
owner:
# Where it is hosted
hosted: deuce
# If applicable, the heroku app name
herokuAppName: g5-foo-service
# Where to find the production app
productionURL: https://example.com
# Array of GitHub org and repository names
gitHubRepoName: 
  - g5search/foo
# ruby, golang, jankey-bash, etc...
language:
# a one-sentence description of the app
summary: ""
---

<!-- you can provide additional info here that will show up on the app detail page -->