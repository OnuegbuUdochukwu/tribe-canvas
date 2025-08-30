# tribe-canvas

An online marketplace for Nigerian artworks.

## Phase 2: Core Marketplace Checklist

_Checklist will be updated as implementation progresses._

## Phase 2.2: Artwork Catalog & Browsing Checklist

## Phase 2.3: Buyer Auth, Cart, and Checkout Checklist

-   [x] Backend: Implement Buyer registration/login endpoints (Done in UserController)
-   [x] Backend: Create Buyer model, repository, and service (User model is used for buyers)
-   [x] Backend: Implement Cart model and endpoints (Cart entity, service, controller scaffolded)
-   [x] Backend: Implement Order model and endpoints (Model, repo, service, controller scaffolded)
-   [x] Backend: Integrate Paystack API for payments (Paystack service and payment verification endpoint scaffolded)
-   [x] Frontend: Build buyer registration/login UI (Login and register pages exist and use backend endpoints)
-   [x] Frontend: Build cart page (add/remove items, view total) (Cart page exists and supports all required actions)
-   [x] Frontend: Build checkout page (delivery info, payment step) (Checkout page exists with delivery info and payment step)
-   [x] Frontend: Integrate Paystack payment widget (PaystackButton integrated in checkout page)
-   [x] Frontend: Build order confirmation page (OrderConfirmationPage component created)

---

## Phase 3.1: Automated Fulfillment Routing Checklist

-   [x] Add Phase 3.1 checklist to README
-   [x] Backend: Create FulfillmentPartner model (id, name, webhookUrl, etc.)
-   [x] Backend: Create FulfillmentPartnerRepository and FulfillmentPartnerService
-   [x] Backend: On order paid, trigger webhook to fulfillment partner with order/artwork details
-   [x] Backend: Add order status updates: pending, in production, shipped, delivered
-   [x] Backend: Update Order model and endpoints to support status changes
