# EmailJS Gmail Setup Guide

## Step 1: Create Gmail Service in EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Click on **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Select **"Gmail"** from the list
5. Click **"Connect Account"**
6. Sign in with your Gmail account: `krishnagunupudi11@gmail.com`
7. Authorize EmailJS to access your Gmail account
8. **Copy the Service ID** (it will look like `service_xxxxxxx`)

## Step 2: Create Email Template

1. In EmailJS dashboard, go to **"Email Templates"**
2. Click **"Create New Template"**
3. Configure the template:

   **Template Settings:**
   - **Template Name**: Portfolio Contact Form
   - **Subject**: New Message from Portfolio Contact Form
   - **Content**: Use the template below

   **Email Template Content:**
   ```
   From: {{from_name}} ({{from_email}})
   To: {{to_name}} ({{to_email}})
   
   Subject: Portfolio Contact Form - Message from {{from_name}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```

   **Important Settings:**
   - **To Email**: Set to `krishnagunupudi11@gmail.com` (or use `{{to_email}}` variable)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Reply To**: `{{reply_to}}`

4. **Copy the Template ID** (it will look like `template_xxxxxxx`)

## Step 3: Get Your Public Key

1. In EmailJS dashboard, go to **"Account"** → **"General"**
2. Find your **"Public Key"** (it will look like `xxxxxxxxxxxxx`)
3. Copy it

## Step 4: Update Your Code

After you get the new Service ID, Template ID, and Public Key, update them in `src/sections/Contact.jsx`:

```javascript
const serviceID = 'YOUR_NEW_SERVICE_ID';  // Replace with your new Service ID
const templateID = 'YOUR_NEW_TEMPLATE_ID'; // Replace with your new Template ID
const publicKey = 'YOUR_PUBLIC_KEY';       // Replace with your Public Key
```

## Step 5: Test the Configuration

1. Fill out the contact form on your website
2. Submit the form
3. Check your Gmail inbox at `krishnagunupudi11@gmail.com`
4. You should receive the email!

## Troubleshooting

### If emails don't send:

1. **Check Gmail Security:**
   - Make sure "Less secure app access" is enabled (if using personal Gmail)
   - OR use an App Password if you have 2FA enabled
   - Go to: Google Account → Security → App passwords

2. **Verify Service Connection:**
   - In EmailJS dashboard, check that your Gmail service shows as "Connected"
   - If not, reconnect it

3. **Check Template Variables:**
   - Make sure all template variables match what's in your code:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{to_name}}`
     - `{{to_email}}`
     - `{{message}}`
     - `{{reply_to}}`

4. **Check Browser Console:**
   - Open browser console (F12)
   - Look for any error messages
   - Share the error details if issues persist

## Current Configuration in Code

- Service ID: `service_cfo2tzr`
- Template ID: `template_9tqprno`
- Public Key: `KJ5nHLFPKl7rUD6gz`
- Recipient Email: `krishnagunupudi11@gmail.com`

**Note:** If you create a new service/template, you'll need to update these values in the code.






