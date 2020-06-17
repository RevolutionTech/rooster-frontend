# Rooster Frontend

#### A tool to review activity on GitHub for daily standup

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
