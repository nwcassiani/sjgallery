import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <Slider />
      </div>
    </main>
  );
}
