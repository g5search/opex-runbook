# Deployments using Docker and Kubernetes (aka K8s)

Our current deployment process uses several technologies.

- [Install Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Install Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- [Install Kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
- [Install Helm](https://helm.sh/docs/intro/install/)

> NOTE: This workflow may change to use G5's CLI.

## Build your server image locally

Most of OpEx apps have scripts already defined in the NPM package.json at the root of the project. You will want to define some build variables before runing Docker.

Copy the `.buildenv` template file.

``` sh
cp .buildenv.TEMPLATE .buildenv
```
Fill out each of the variables. These are variables that are only consumed when compiling and are different than runtime variables. Most are consumed directly by Nuxt.js, Vue.js, or its plugins.

``` sh
npm run docker:build
npm run docker:tag:<context>
npm run docker:push:<context>
```

Upgrade the deployment
