import { motion } from "framer-motion";
import { useState } from "react";
import "./home.css";

const Homeeee = () => {
  const [start, setStart] = useState();
  const onclick = () => {
    setStart(!start);
  };
  return (
    <div className="home">
      <motion.div
        className="box"
        onClick={onclick}
        initial={{ scale: 1, backgroundColor: `red` }}
        animate={{ scale: start ? 1.2 : 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <motion.button whileTap={{ scale: 1.2 }}>CLick</motion.button>
    </div>
  );
};

export default Homeeee;
//whiledrag,whiletap...
