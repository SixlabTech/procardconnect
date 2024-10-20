import "@/styles/globals.css";
import styles from "../styles/style";
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "ProCard",
  description: "ProCard Connect est une carte de visite intelligente utilisant la technologie NFC. En effleurant simplement la carte avec un smartphone, les utilisateurs peuvent échanger instantanément leurs informations professionnelles.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        <div className="bg-primary w-full overflow-hidden">
          <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px]  h-24 w-full">
            <Navbar />
            </div>
      
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;