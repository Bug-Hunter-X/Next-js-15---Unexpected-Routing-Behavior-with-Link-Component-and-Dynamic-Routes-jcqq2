# Next.js 15 - Unexpected Routing Behavior with Link Component and Dynamic Routes

This repository demonstrates an uncommon bug in Next.js 15 related to the `Link` component and dynamic routes.  The issue arises when the dynamic route segment isn't correctly managed, leading to unexpected navigation behavior.  The example showcases the problem and its solution.

## Bug Description

The `Link` component, when provided with a dynamic route that isn't prepared for client-side navigation in Next.js 15, might fail to navigate correctly. This frequently occurs with routes incorporating dynamic segments that aren't correctly handled within the `pages` directory structure or route definitions.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the "About Us" link.  Observe the incorrect or unexpected routing behavior.  The application may throw an error, remain on the current page, or navigate to an unintended location.

## Solution

The solution involves ensuring that dynamic route segments are appropriately handled, typically by creating the necessary pages and route definitions in the `pages` directory that match the dynamic route passed to the `Link` component.  Refer to the solution file (`bugSolution.js`) for a corrected example.

## Technologies Used

* Next.js 15
* React

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.