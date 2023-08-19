# The NESS Site

## NESS Site Guide

A more detailed tutorial can be found [here](https://docs.google.com/document/d/1SRMsIUQtYv0Aco6MGTzzCFVNb1by9VsPmkbLcsQaItk/edit). Log in with the NESS Gmail account to view it!

## Recommended Setup

Download [VSCode](https://code.visualstudio.com/download) and install Prettier

## Getting Started

Install npm packages

```bash
$ npm i
```

Run the site locally

```bash
$ npm run dev
```

Running production build

```bash
$ npm run build
$ npm run serve
```

## Deployment

### SSH

SSH in to get started. (Replace with your WatIAM)

```bash
$ ssh kmiu@corn-syrup.csclub.uwaterloo.ca
# Optional if you have proper permissions set up
$ become_club ness
$ cd ../ness/
```

Run build

```bash
# Logged in and navigated to /users/ness/
$ git pull
$ npm run build
```

Finally check out the [live NESS site](https://ness.uwaterloo.ca/)

## Linting

Lint the code with the npm lint commands

```bash
$ npm run lint:ts
$ npm run lint:css
```

## GitHub Practices

Try to use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
