// import { ButtonProps } from "@types";

// const Button: React.FC<ButtonProps> = ({ styles }) => {
//   return (
//     <button
//       type="button"
//       className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2  transition-all ease-linear cursor-pointer`}
//     >
//       Get Started
//     </button>
//   );
// };

// export default Button;



import { ButtonProps } from "@types";

const Button: React.FC<ButtonProps> = ({ styles }) => {
  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={`${styles} relative z-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}
      >
        Demandez un devis gratuit
      </button>
      <span className="absolute inset-0 rounded-full z-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 transition-all duration-700 hover:opacity-100 hover:animate-spin-pulse"></span>
    </div>
  );
};

export default Button;
