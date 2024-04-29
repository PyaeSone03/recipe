import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Category from "../components/Category";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <Search />
      <Category />
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
