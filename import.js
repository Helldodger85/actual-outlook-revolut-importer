const actual = require('@actual-app/api');
const fs = require('fs');

async function run() {
  await actual.init({
    serverURL: process.env.ACTUAL_SERVER_URL,
    password: process.env.ACTUAL_PASSWORD,
  });

  await actual.downloadBudget(process.env.ACTUAL_BUDGET_ID);
  
  console.log("Budget loaded. Looking for CSV files in /app/data...");
  // Add your logic here to read the CSV file from /app/data
  
  await actual.shutdown();
}

run();
