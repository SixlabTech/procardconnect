
import styles from "@/styles/style";
import Button from "./Button";
const CTA: React.FC = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>
            Commandez votre carte NFC dès aujourd’hui !
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Profitez de cette innovation pour optimiser vos échanges professionnels. Passez commande dès maintenant et soyez prêt à impressionner lors de vos prochaines rencontres.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
)

export default CTA;