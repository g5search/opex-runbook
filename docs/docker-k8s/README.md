# Deployments using Docker and Kubernetes (aka K8s)

Our current deployment process uses several technologies.

- [Install Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Install Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- [Install Kubernetes](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/)
- [Install Helm](https://helm.sh/docs/intro/install/)
- (Optional) Install "kubectx" via Homebrew. `brew install kubectx`.

> NOTE: This workflow may change to use G5's CLI.

## Build your server image locally

Most of OpEx apps have scripts already defined in the NPM package.json at the root of the project. You will want to define some build variables before runing Docker.

Copy the `.buildenv` template file.

``` sh
cp .buildenv.TEMPLATE .buildenv
```

Fill out each of the variables. These are variables that are only consumed when compiling and are different than runtime variables. Most are consumed directly by Nuxt.js, Vue.js, or its plugins.

> The `BROWSER_URL` changes dependending on where you are deploying.

Build, tag, and push. `<context>` in each command is either `prod`, `staging`, or `prime`.

``` sh
npm run docker:build
npm run docker:tag:<context> # ex. npm run docker:tag:staging
npm run docker:push:<context>
```

Upgrade the deployment.

``` sh
npm run helm:upgrade:<context> # ex. npm run helm:upgrade:prod
kubectl get pods
```

You should see new pods spinning up.

> Staging and Prime deployments tag their images based on the commit SHA and branch name. If you are redeploying without adding a new commit or changing branches, new pods may not initialize after upgrading. Restart the deployment to finish the upgrade.

``` sh
kubectl rollout restart deployement <app_name>
```

## Manage Attached Redis Instances via Debian

Since the Redis instance isn't exposed publicly, and the app may not have tasks to manage the instance directly, you may need to use the `redis-cli` to communicate with the instance.

**Spin Up Debian Pod**

Make sure your K8s context includes the redis instance you want to manage.

Deploy a Debian pod.

``` sh
kubectl run redis-pod --image=debian -it -- bash
```

This will end with a command prompt. Install redis tools.

``` sh
apt-get update && apt-get install -y redis-tools
```

Retrieve the private IP for your Redis instance from the Memstore>Redis product in Google Cloud Console. Connect to it via the redis-cli.

``` sh 
redis-cli -h <IP of redis instance> # do not include the TCP port
```

Run your redis commands from here.

**To Exit**

Keep typing `exit` until you get to your local shell.

Remove your pod.

``` sh
kubectl delete pod redis-pod
```
