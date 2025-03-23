import React from "react";
import { motion } from "framer-motion";

function Nurse() {
  return (
    <motion.img
      src="/nurse.png"
      alt="Nurse"
      style={{ width: "700px", height: "700px" }}
      
      transition={{ repeat: Infinity, duration: 1 }}
    />
  );
}

export default Nurse;
