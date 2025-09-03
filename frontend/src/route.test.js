import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const routeTests = [
    { path: "/", name: "HomePage", expectText: /Welcome|Home|Tribe Canvas/i },
    { path: "/gallery", name: "GalleryPage", expectText: /Gallery|Art/i },
    { path: "/login", name: "LoginPage", expectText: /Login|Sign In/i },
    {
        path: "/register",
        name: "RegisterPage",
        expectText: /Register|Sign Up/i,
    },
    {
        path: "/register/buyer",
        name: "BuyerRegisterPage",
        expectText: /Buyer|Register/i,
    },
    {
        path: "/register/artist",
        name: "ArtistRegisterPage",
        expectText: /Artist|Register/i,
    },
    { path: "/cart", name: "CartPage", expectText: /Cart|Shopping/i },
    {
        path: "/checkout",
        name: "CheckoutPage",
        expectText: /Checkout|Payment/i,
    },
    { path: "/orders", name: "OrderHistoryPage", expectText: /Order|History/i },
    {
        path: "/dashboard",
        name: "ArtistDashboard",
        expectText: /Dashboard|Artist/i,
    },
    {
        path: "/artworks/1",
        name: "ProductPage",
        expectText: /Artwork|Product|Description/i,
    },
    {
        path: "/order-confirmation",
        name: "OrderConfirmationPage",
        expectText: /Order|Confirmation|Thank/i,
    },
    {
        path: "/profile",
        name: "BuyerProfilePage",
        expectText: /Profile|Buyer/i,
    },
    {
        path: "/upload-artwork",
        name: "ArtworkUploadForm",
        expectText: /Upload|Artwork/i,
    },
    {
        path: "/edit-artwork",
        name: "EditArtworkPage",
        expectText: /Edit|Artwork/i,
    },
    {
        path: "/payouts",
        name: "PayoutStatusPage",
        expectText: /Payout|Earnings/i,
    },
    { path: "/admin", name: "AdminDashboard", expectText: /Admin|Dashboard/i },
    {
        path: "/random-not-found",
        name: "NotFoundPage",
        expectText: /Not Found|404/i,
    },
];

describe("Frontend Route Tests", () => {
    routeTests.forEach(({ path, name, expectText }) => {
        test(`Route ${path} renders ${name} without error`, async () => {
            render(
                <MemoryRouter initialEntries={[path]}>
                    <App />
                </MemoryRouter>
            );
            // Try to find all matching elements
            const els = await screen.findAllByText(expectText);
            expect(els.length).toBeGreaterThan(0);
        });
    });
});
