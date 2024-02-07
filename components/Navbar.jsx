import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles'; // Import your styles

const Navbar = () => {
  const openWebsite = () => {
    // Replace 'https://example.com' with the URL of the website you want to open
    window.location.href = 'https://cal.com/ashnevoss/15min';
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" /> {/* Make sure gradient-01 class is defined */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ASHNE
        </h2>
        <button type="button" className="flex items-center h-fit py-2 border-white border px-5 rounded-[32px] gap-[12px]" onClick={openWebsite}>
          <span className="font-normal text-[16px] text-white">
            Book Call
          </span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
