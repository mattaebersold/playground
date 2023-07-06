# nuxt-sanity-demo

This repo is setup using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).  It is comprised of:

- [`nuxt-app`](./nuxt-app) - The statically generated public website.
- [`sanity-cms`](./sanity-cms) - CMS powered by [Sanity](https://www.sanity.io).

## Setup

1. Install Node >= 18 (or run `nvm use` if using nvm)
2. Install Node dependencies with `yarn install`
3. Copy the `.env.example` files from each workspace and rename them as `.env`.
4. At minimum, populate the `SANITY_STUDIO_PROJECT_ID` values in the `.env` files. You are expected to use `development` for your local Sanity dataset (`PUBLIC_SANITY_DATASET`).

## Development

Each workspace has a `yarn dev` command that runs a local webserver on differing ports and features hot module reloading.  You'll likely have two terminal windows running `yarn --cwd=nuxt-app dev` and `yarn --cwd=sanity-cms dev` simultaneously.

## Deployment

- Deployments should use `PUBLIC_SANITY_DATASET=production`.
- The CMS is deployed with `yarn --cwd=sanity-cms build` and the `sanity-cms/dist` directory will contain the application to serve.
- The public site is deployed with `yarn --cwd=nuxt-app generate` and the `nuxt-app/dist` directory will contain the application to serve.
