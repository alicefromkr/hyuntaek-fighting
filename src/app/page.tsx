import Navbar from "@/components/Navbar";
import Bottombar from "@/components/Bottombar";
import GoogleMap from "@/components/GoogleMap";
export default function Home() {
  return (
    <main>
      <Navbar />
      <GoogleMap />
      <Bottombar />
    </main>
  );
}
