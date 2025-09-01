    - [x] Artist dashboard: earnings & payouts endpoints (unauthorized access integration tests) ✅ (Tests passed)
    - [x] Artist dashboard: fetch artist orders (integration test) ✅ (Test passed)

## Backend Testing Checklist

-   [x] Artist registration (ArtistController), Artist profile fetch/update (integration test) ✅ (Test passed)

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

## Phase 3.2: Artist Commission & Payouts Checklist

-   [x] Implement commission engine to calculate artist share per order
-   [x] Create `Payout` model (id, artistId, orderId, amount, status)
-   [x] Create `PayoutRepository` and `PayoutService`
-   [x] Endpoints: get artist earnings, request payout, payout status
-   [x] Integrate with payment API for payouts (manual or automated)

## Phase 3.3: Order Tracking Checklist

**Backend**

-   [x] Add `trackingId` to Order model
-   [x] Endpoints: update/get order status (by fulfillment partner, by buyer)
-   [x] Integrate with delivery partner APIs if available

**Frontend**

-   [x] Buyer profile: show order history
-   [x] Buyer profile: show order status and tracking info
