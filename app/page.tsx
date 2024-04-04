import Features from "./component/Features";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Pricing from "./component/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Nav />
      <Pricing />
      <Features />

      <Footer />
    </main>
  );
}


