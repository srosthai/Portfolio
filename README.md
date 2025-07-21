# Portfolio Contact Form Setup

## Contact Form with Resend

This portfolio uses [Resend](https://resend.com) to handle the contact form email delivery. Resend provides reliable email delivery with a modern API.

### Important: Fixing the Build Error

If you encounter this error during build:
```
Error: Missing API key. Pass it to the constructor `new Resend("re_123")`
Failed to collect page data for /api/contact-resend
```

Follow these steps to fix it:

1. **Sign up for Resend**:
   - Create an account at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys) and create a new API key

2. **Add the API key to your environment**:
   - For local development: Add to `.env.local`
   - For Vercel deployment: Add as an environment variable in your Vercel project settings

   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Verify the API key format**:
   - Resend API keys start with `re_`
   - Make sure you've copied the entire key

### Setting Up Locally

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

3. Restart your development server:
   ```bash
   bun run dev
   ```

### Deploying to Vercel

1. In your Vercel project settings, go to "Environment Variables"
2. Add a new variable with key `RESEND_API_KEY` and the value from your Resend account
3. Redeploy your application

## How the Contact Form Works

1. The form in `Footer.tsx` collects user input (name, email, message)
2. When submitted, it sends a POST request to the `/api/contact-resend` API route
3. The API route uses Resend to deliver the email
4. The user receives feedback about the submission status

## Troubleshooting

If emails are not being sent:

- Verify your Resend API key is correctly set in your environment variables
- Check the browser console for any error messages from the form submission
- During your free trial with Resend, you can only send to verified email addresses or domains
- Check the Resend dashboard for email sending logs and any errors

## Fallback Approach

If you prefer not to use Resend, you can update the contact form in `Footer.tsx` to use a service like Formspree:

```jsx
<form 
  action="https://formspree.io/f/your_formspree_id" 
  method="POST"
  className={styles["footer-form"]}
>
  <input type="text" name="name" placeholder="Full Name" />
  <input type="email" name="email" placeholder="Email Address" />
  <textarea name="message" placeholder="Your Message"></textarea>
  <button type="submit">Submit</button>
</form>
```

Formspree works with static site exports and doesn't require any API routes or server-side code.

## Contact Form Setup with Formspree

Since this portfolio is built as a static site (`output: 'export'` in Next.js config), we're using [Formspree](https://formspree.io) to handle form submissions without requiring server-side API routes.

### How to Set Up:

1. Create a free Formspree account at https://formspree.io
2. Create a new form and get your form ID (it will look like `xkndpdgw`)
3. The form in the Footer component is already configured to use Formspree

When a user submits the form:
1. The data is sent directly to Formspree
2. Formspree forwards the email to your Gmail address (srosthai00@gmail.com)
3. You'll receive email notifications for each form submission
4. You can also view all submissions in your Formspree dashboard

### Benefits of Using Formspree:

- Works with static site exports (compatible with `output: 'export'`)
- No server-side code needed
- Spam protection included
- Email notifications
- Dashboard to view all submissions
- Free tier allows 50 submissions per month

## Previous Approach (Not Compatible with Static Export)

The previous implementation tried to use API routes with Nodemailer and Resend, but these don't work with static site generation (`output: 'export'`). If you switch your Next.js configuration to remove `output: 'export'`, you could use those approaches instead.

## Troubleshooting

If form submissions are not working:

1. Make sure your Formspree form is active in your Formspree dashboard
2. Check if you've reached the limits of the free tier (50 submissions/month)
3. Look in your browser's console for any errors during submission
4. Check your spam folder for emails from Formspree

If you encounter the error: `export const dynamic = "force-dynamic" on page "/api/contact" cannot be used with "output: export"`, this is because:
- API routes that use `request.json()` or other server functions don't work with static exports
- We've switched to using Formspree instead, which doesn't require API routes

## Email Setup for Contact Form

The contact form can use two different email delivery methods for better reliability:

### Method 1: Gmail (Nodemailer)

To allow the contact form to send emails via your Gmail address:

1. Create an App Password for your Gmail account:
   - Go to your Google Account settings: https://myaccount.google.com/
   - Navigate to Security > 2-Step Verification (enable it if not already enabled)
   - Scroll down and click on "App passwords"
   - Select "Mail" as the app and "Other" as the device (name it something like "Portfolio Contact Form")
   - Click "Generate" to get your 16-character app password

2. Update the `.env.local` file:
   ```
   EMAIL_USER=srosthai00@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   ```
   Replace `your_app_password_here` with the generated app password.

### Method 2: Resend (Recommended)

For more reliable email delivery, the application also supports [Resend](https://resend.com):

1. Sign up for a free Resend account at https://resend.com
2. Go to https://resend.com/api-keys to create an API key
3. Add the key to your `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

The application will attempt to use Resend first, and if that fails, it will fall back to Nodemailer with Gmail.

3. Make sure to add `.env.local` to your `.gitignore` file to avoid exposing your credentials.

## Testing Email Configuration

To verify your email configuration is working correctly:

1. Start your development server with `bun run dev`
2. Visit `/api/email-test` in your browser to check your configuration settings
3. Send a test email by making a POST request to `/api/email-test` (you can use tools like Postman, or just a fetch in your browser console)

Example using browser console:
```javascript
fetch('/api/email-test', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

This will attempt to send test emails using both methods and report the results.

## Troubleshooting

If emails are not being received:

### For Gmail (Nodemailer):
- Make sure 2-Step Verification is enabled on your Google account
- Verify your app password is correct and recently generated
- Check if there are any security alerts in your Google account
- Gmail may block "less secure apps" - the app password helps bypass this

### For Resend:
- Verify your API key is correctly copied to the `.env.local` file
- Check the Resend dashboard for email sending logs and any errors
- During your free trial, you can only send to verified email addresses or domains

### General Issues:
- Check the browser console and server logs for specific error messages
- Make sure your network connection is stable
- Try restarting the development server after updating environment variables
- Check your spam/junk folder for the emails

### Next.js API Route Issues:
- If you encounter the error `Failed to send email: Page with dynamic = "error" couldn't be rendered statically because it used request.json()`, this happens because Next.js is trying to statically generate your API routes. 
- This has been fixed by adding `export const dynamic = 'force-dynamic'` to all API routes. 
- After making changes to API routes, make sure to restart your development server for the changes to take effect. 
