# Server-Side Composition - Microfrontend Example
This repository demonstrates the Server-Side Composition pattern for Microfrontends.
The example uses Webpack Module Federation to expose microfrontends and serve them from a single host application.

## Project Overview
1. Server-Side Composition involves composing microfrontends on the server side before sending them to the client.
2. This example includes a container application (the shell) and two microfrontends: Header and Product.
3. The microfrontends are dynamically loaded and federated using Webpack Module Federation.

## Project Structure
`
root/
│
├── app-shell/                  # Main container app that hosts microfrontends
│   ├── src/
│   ├── public/
│   ├── package.json            # Dependencies and scripts for the shell app
│
├── microfrontend-header/       # Header microfrontend
│   ├── src/
│   ├── public/
│   ├── package.json            # Dependencies and scripts for the header microfrontend
│
├── microfrontend-product/      # Product microfrontend
│   ├── src/
│   ├── public/
│   ├── package.json            # Dependencies and scripts for the product microfrontend
│
└── README.md                   # Project README`

## Features
1. App Shell serves as the main container for hosting the microfrontends.
2. Header Microfrontend exposes a header component that is dynamically loaded by the App Shell.
3. Product Microfrontend exposes a product listing page component that is dynamically loaded into the App Shell.
4. Module Federation for sharing React and other libraries across all microfrontends.
5. Server-Side Composition using Webpack's ModuleFederationPlugin.

## Requirements
1. Node.js (version 14 or above)
2. npm (version 6 or above)
3. Webpack 5.x
4. React 18.x


