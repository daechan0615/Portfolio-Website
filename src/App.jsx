import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<>
			<SpeedInsights />
			<Toaster />
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Analytics />
		</>
	);
}

export default App;
