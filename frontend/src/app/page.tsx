import {Footer} from "@/app/footer/footer";
import {Header} from "@/app/header/header";
import {MainContent} from "@/app/mainContent/mainContent";

export default function Home() {
  return (
    <div className="scanline">
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
}
