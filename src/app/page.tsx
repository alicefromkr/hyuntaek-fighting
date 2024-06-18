import Button from "@mui/material/Button";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import GoogleMap from "@/components/GoogleMap";
const items = [
  {
    title: "First Slide",
    description: "This is the first slide description",
    imageUrl: "/images/slide1.jpg", // Ensure these paths point to your images
  },
  {
    title: "Second Slide",
    description: "This is the second slide description",
    imageUrl: "/images/slide2.jpg",
  },
  {
    title: "Third Slide",
    description: "This is the third slide description",
    imageUrl: "/images/slide3.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Carousel items={items} />
      <div>
        <p>약속 일정은 이제 플레이스 홀더에서</p>
        <p>핫플레이스 브라블라 야 figma 내놔</p>
      </div>
      <GoogleMap />
      <Link href="/map">
        <Button variant="contained">시작하기</Button>
      </Link>
    </main>
  );
}
