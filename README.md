# Unhandled JSON Error in Express.js POST Route

This repository demonstrates a common yet easily overlooked error in Express.js applications: inadequate handling of malformed JSON requests.  The `bug.js` file shows a vulnerable POST endpoint, while `bugSolution.js` provides a robust solution.

## Bug Description
The provided code snippet showcases a POST route that accepts JSON data.  Critically, it fails to handle scenarios where the incoming request body (`req.body`) is improperly formatted or missing entirely. This can lead to unexpected errors, crashes, or inconsistent behavior, especially in production environments.

## Solution
The improved code in `bugSolution.js` addresses this issue by implementing comprehensive error handling. It explicitly checks if `req.body` contains the necessary data and responds appropriately with helpful error messages if any issues arise.

## How to Run
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install necessary dependencies.
4. Execute `node bug.js` to run the buggy code or `node bugSolution.js` to run the corrected version.
5. Test by sending malformed JSON using tools like Postman or curl.
