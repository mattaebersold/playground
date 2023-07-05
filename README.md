# nuxt-sanity-demo

This repo is setup using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).  It is comprised of:

- [`nuxt-app`](./nuxt-app) - The statically generated public website.
- [`sanity-cms`](./sanity-cms) - CMS powered by [Sanity](https://www.sanity.io).

## Setup

1. Install Node >= 18 (or run `nvm use` if using nvm)
2. Install Node dependencies with `yarn install`
3. Copy the `.env.example` files from each workspace and rename them as `.env`.
4. At minimum, populate the `SANITY_STUDIO_PROJECT_ID` values in the `.env` files. You are expected to use the shared `development` Sanity dataset for local development.

## Development

Each workspace has a `yarn dev` command that runs a local webserver on differing ports and features hot module reloading.  You'll likely have two terminal windows running `yarn dev --cwd=nuxt-app` and `yarn dev --cwd=sanity-cms` simultaneously.
