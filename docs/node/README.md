# Configuring your Node.js Environment

All of the Operational Excellence apps are built using Node.js, as is much of the G5 platform more broadly.

Here are some steps to get you up and running in a Node.js runtime with version control.

## Install Node Version Manager (nvm)

[Node Version Manager Documentation](https://github.com/nvm-sh/nvm)

In your shell/terminal:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Add NVM to your shell path, usually a `.bashrc`, `.bash_profile` or `.zshrc` file in your home directory. 

``` bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

**If you already have a Homebrew install, you could also `brew install nvm`.**

## Install a recent version of Node.

Most of the OpEx apps are written to use version 12 or greater, so let's start there. NVM makes it easy to install multiple versions of Node and switch between them.

```sh
nvm install 12
```

Verify the install

```sh
node --version
# v12.22.1 or current LTS
npm --version
#7.13.0 or current LTS
```
