// import { card } from "@/public/assets";
// import styles, { layout } from "@/styles/style";
// import Button from "./Button";
// import Image from "next/image";
// const CardDeal: React.FC = () => (
//   <section className={layout.section}>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Find a better card deal <br className="sm:block hidden" /> in few easy
//         steps.
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
//         aliquet eget mauris tortor.c Aliquet ultrices ac, ametau.
//       </p>
//       <Button styles="mt-10" />
//     </div>
//     <div className={layout.sectionImg}>
//       <Image src={card} alt="card" className="w-[100%] h-[100%]" />
//     </div>
//   </section>
// );

// export default CardDeal;
import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Partagez vos informations <br className="sm:block hidden" /> en un instant avec une carte NFC.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Offrez à vos clients et partenaires une façon innovante et rapide de vous contacter. Nos cartes de visite NFC permettent de partager vos coordonnées en un simple tap. Modernisez votre networking avec une technologie de pointe.
      </p>
      <Button styles="mt-10" text="Découvrez nos cartes NFC" />
    </div>
    <div className={layout.sectionImg}>
      {/* Image de la carte NFC */}
      <Image 
        src={card} 
        alt="Carte NFC" 
        className="w-[100%] h-[100%] object-contain rounded-lg shadow-lg" 
      />
    </div>
  </section>
);

export default CardDeal;
