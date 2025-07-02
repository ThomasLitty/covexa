
# Google Sheets Waitlist Setup Guide

Follow these steps to set up a Google Sheet to receive waitlist submissions:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Covexa Waitlist"
4. Set up the following column headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Company
   - E1: Role
   - F1: Phone
   - G1: Country
   - H1: Source

## Step 2: Open Google Apps Script

1. In your Google Sheet, click on "Extensions" in the menu
2. Select "Apps Script"
3. This will open the Google Apps Script editor

## Step 3: Create the Web App Script

Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Extract the form data
    const timestamp = data.timestamp || new Date().toISOString();
    const name = data.name || '';
    const email = data.email || '';
    const company = data.company || '';
    const role = data.role || '';
    const phone = data.phone || '';
    const country = data.country || '';
    const source = data.source || 'unknown';
    
    // Append the data to the sheet
    sheet.appendRow([timestamp, name, email, company, role, phone, country, source]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}
```

## Step 4: Deploy as Web App

1. Click the "Deploy" button in the top right
2. Choose "New deployment"
3. Set the type to "Web app"
4. Set "Execute as" to "Me"
5. Set "Who has access" to "Anyone"
6. Click "Deploy"
7. **Copy the Web App URL** - you'll need this for the next step

## Step 5: Update the React Component

1. Open `src/components/WaitlistModal.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your Web App URL from step 4

## Step 6: Test the Integration

1. Try submitting the waitlist form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the browser console for error messages

## Important Notes

- The Google Apps Script will automatically handle CORS headers
- All form submissions will be logged with timestamps
- You can modify the script to add additional validation or formatting
- Consider setting up email notifications for new submissions by adding email functionality to the script

## Troubleshooting

- If you get permission errors, make sure the script is deployed with "Execute as: Me" and "Who has access: Anyone"
- If CORS errors occur, double-check that the doOptions function is included in your script
- Make sure your Google Sheet has the correct column headers in the first row

