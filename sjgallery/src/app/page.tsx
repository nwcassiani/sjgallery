import Image from "next/image";
import styles from "./page.module.css";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <main>
      <div style={{maxWidth: '700px', margin: '0 auto'}}>
        {/* <div className="home-image" >
          <Image
            // src="/L1150033-2.jpg"
            src="https://res.cloudinary.com/dsxmv5yjt/image/upload/v1716498248/L1150033-2_hxfvfe.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="home-image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div> */}
        <Slider />
        <div style={{ display: 'flex', justifyContent: 'end'}}>
          <p><i>Salted Hands</i>, Bryan Locke</p>
        </div>
      </div>
    </main>
  );
}
