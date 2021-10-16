# Rooster Frontend

#### A tool to review activity on GitHub for daily standup

## Deprecated

This project is no longer being maintained by the owner. Rooster has been moved to a [Cascade](https://www.cascade.io/) workflow.

---

![CI](https://github.com/RevolutionTech/rooster-frontend/actions/workflows/ci.yml/badge.svg)

## Setup

### Installation

Use [yarn](https://yarnpkg.com/) to install JavaScript dependencies:

    yarn install

### Running Locally

First run [nginx](https://www.nginx.com/) with the local nginx configuration:

    nginx -p . -c nginx/local.conf

Then start the frontend with yarn:

    yarn start

The frontend should be accessible at http://localhost:9000/.
