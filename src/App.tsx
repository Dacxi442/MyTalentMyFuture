import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { Team } from "./components/sections/Team";
import { Discovery } from "./components/sections/Discovery";
import { Sponsor } from "./components/sections/Sponsor";
import { Register } from "./components/sections/Register";
import { Payment } from "./components/sections/Payment";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Layout><Team /></Layout>} />
      <Route path="/discover" element={<Layout><Discovery /></Layout>} />
      <Route path="/sponsor" element={<Layout><Sponsor /></Layout>} />
      <Route path="/payment" element={<Layout><Payment /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
