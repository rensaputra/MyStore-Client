# MyStore - Client

Welcome to **MyStore - Client**, the front-end application for the MyStore e-commerce platform. This project handles the customer-facing interface, allowing users to browse products, manage their shopping carts, and complete secure checkouts.

**Note:** This is the client-facing repository. The backend and administration aspects of the eStore are managed in a separate repository called **MyStore-Admin**.

## Features

- **Product Catalog & Filtering:** Browse products, view details, and filter by product types and price ranges.
- **Authentication:** User sign-up and login functionality.
- **Shopping Cart:** Add, remove, and update quantities of items in the cart.
- **Secure Checkout:** Integrated with Stripe for secure payment processing.
- **Responsive Design:** Optimized for both desktop and mobile viewing using Tailwind CSS.

## Tech Stack

This project is built using modern web technologies:

- **Framework:** [Next.js](https://nextjs.org/)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Payments:** [Stripe](https://stripe.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Environment Variables

Create a `.env.local` file in the root of your project and configure the following environment variables:

```env
# The URL for the MyStore-Admin backend API
MYSTORE_API_URL=http://localhost:<backend-port>/api

# The base URL for this client application
CLIENT_BASE_URL=http://localhost:3000

# Stripe Configuration Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

*Note: Replace the placeholder values with your actual API endpoint and Stripe test/live keys.*

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files in the `src/` directory.
