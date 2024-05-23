import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        <div className="home-image" >
          <Image
            src="/L1150033-2.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="home-image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'end'}}>
          <p><i>Salted Hands</i>, Bryan Locke</p>
        </div>
      </div>
    </main>
  );
}
