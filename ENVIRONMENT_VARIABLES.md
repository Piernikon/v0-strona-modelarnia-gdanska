# Environment Variables Documentation

This document provides a comprehensive list of all environment variables used in the Modelarnia Gdańska project. Environment variables are used to configure the application without changing the code.

## How to Set Environment Variables

### Local Development
Create a `.env.local` file in the root directory of your project and add the variables:

\`\`\`
VARIABLE_NAME=value
\`\`\`

### Production (Vercel)
1. Go to your Vercel dashboard
2. Select your project
3. Click on "Settings" > "Environment Variables"
4. Add your variables and values
5. Redeploy your application

## Environment Variables List

## Core Configuration

### `NEXT_PUBLIC_SITE_URL`
- **Description**: The base URL of the website
- **Required**: Yes
- **Example**: `https://modelarniagdanska.pl`
- **Used in**: SEO components, absolute URL generation
- **Default**: `http://localhost:3000` (in development)

### `NEXT_PUBLIC_SITE_NAME`
- **Description**: The name of the website
- **Required**: No
- **Example**: `Modelarnia Gdańska`
- **Used in**: SEO components, page titles
- **Default**: `Modelarnia Gdańska`

## Maintenance Mode

### `MAINTENANCE_MODE`
- **Description**: Enables or disables the maintenance mode
- **Required**: No
- **Possible values**: `true` or `false`
- **Default**: `false`
- **Used in**: `middleware.ts`

### `MAINTENANCE_BYPASS_KEY`
- **Description**: Cookie name used to bypass the maintenance mode
- **Required**: No
- **Example**: `admin-bypass`
- **Default**: `admin-bypass`
- **Used in**: `middleware.ts`

### `NEXT_PUBLIC_MAINTENANCE_END_TIME`
- **Description**: The expected end time of the maintenance
- **Required**: No (only when maintenance mode is active)
- **Format**: ISO 8601 date string
- **Example**: `2023-12-31T23:59:59`
- **Used in**: `components/maintenance-countdown.tsx`

## Contact Form

### `EMAIL_SERVICE`
- **Description**: Email service provider for the contact form
- **Required**: Yes (for contact form functionality)
- **Possible values**: `sendgrid`, `mailgun`, `smtp`
- **Used in**: `app/api/contact/route.ts`

### `EMAIL_API_KEY`
- **Description**: API key for the email service
- **Required**: Yes (for contact form functionality)
- **Used in**: `app/api/contact/route.ts`

### `EMAIL_FROM`
- **Description**: Sender email address for contact form submissions
- **Required**: Yes (for contact form functionality)
- **Example**: `noreply@modelarniagdanska.pl`
- **Used in**: `app/api/contact/route.ts`

### `EMAIL_TO`
- **Description**: Recipient email address for contact form submissions
- **Required**: Yes (for contact form functionality)
- **Example**: `kontakt@modelarniagdanska.pl`
- **Used in**: `app/api/contact/route.ts`

## Authentication (if implemented)

### `NEXTAUTH_URL`
- **Description**: URL of the site for NextAuth.js
- **Required**: Yes (if using authentication)
- **Example**: `https://modelarniagdanska.pl`
- **Used in**: Authentication configuration

### `NEXTAUTH_SECRET`
- **Description**: Secret used to encrypt the NextAuth.js JWT
- **Required**: Yes (if using authentication)
- **Example**: `your-secret-key-at-least-32-chars`
- **Used in**: Authentication configuration

## Database (if implemented)

### `DATABASE_URL`
- **Description**: Connection string for the database
- **Required**: Yes (if using a database)
- **Example**: `postgresql://user:password@localhost:5432/modelarnia`
- **Used in**: Database connection configuration

## Media Storage (if implemented)

### `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- **Description**: Cloudinary cloud name for image uploads
- **Required**: No (only if using Cloudinary)
- **Used in**: Image upload components

### `CLOUDINARY_API_KEY`
- **Description**: Cloudinary API key
- **Required**: No (only if using Cloudinary)
- **Used in**: Server-side image upload handling

### `CLOUDINARY_API_SECRET`
- **Description**: Cloudinary API secret
- **Required**: No (only if using Cloudinary)
- **Used in**: Server-side image upload handling

## Analytics (if implemented)

### `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
- **Description**: Google Analytics measurement ID
- **Required**: No
- **Example**: `G-XXXXXXXXXX`
- **Used in**: Analytics components

## E-commerce (if implemented)

### `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Description**: Stripe publishable key for payment processing
- **Required**: No (only if using Stripe)
- **Used in**: Payment components

### `STRIPE_SECRET_KEY`
- **Description**: Stripe secret key for payment processing
- **Required**: No (only if using Stripe)
- **Used in**: Server-side payment handling

### `STRIPE_WEBHOOK_SECRET`
- **Description**: Secret for verifying Stripe webhook events
- **Required**: No (only if using Stripe webhooks)
- **Used in**: Stripe webhook handler

## Localization

### `NEXT_PUBLIC_DEFAULT_LOCALE`
- **Description**: Default locale for the website
- **Required**: No
- **Possible values**: `pl`, `en`
- **Default**: `pl`
- **Used in**: Internationalization components

## Performance Monitoring (if implemented)

### `NEXT_PUBLIC_SENTRY_DSN`
- **Description**: Sentry DSN for error tracking
- **Required**: No (only if using Sentry)
- **Used in**: Error tracking configuration

## Development

### `NODE_ENV`
- **Description**: Environment mode
- **Required**: No (set automatically)
- **Possible values**: `development`, `production`, `test`
- **Default**: `development` (in development), `production` (in production)
- **Used in**: Various conditional logic throughout the application

## Best Practices

1. **Security**: Never commit sensitive environment variables to your repository
2. **Naming**: Prefix client-side variables with `NEXT_PUBLIC_`
3. **Documentation**: Update this document when adding new environment variables
4. **Defaults**: Provide sensible defaults for optional variables
5. **Validation**: Validate required environment variables on application startup

## Troubleshooting

If your environment variables aren't working:

1. Make sure they're correctly set in the appropriate environment
2. For local development, restart the development server after changing `.env.local`
3. For production, redeploy the application after updating environment variables
4. Check that client-side variables are prefixed with `NEXT_PUBLIC_`
5. Verify that the variable is being accessed correctly in the code
