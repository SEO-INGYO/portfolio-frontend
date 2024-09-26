import { motion } from 'framer-motion';

const Project = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </motion.div>
);