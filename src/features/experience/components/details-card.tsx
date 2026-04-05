"use client";

import { motion } from "framer-motion";
import { DetailsCardProps } from "../utils/types";
import linkedinsrc from "../assets/linkedin.png";
import Image from "next/image";
import Link from "next/link";

export const DetailsCard = ({
  title,
  company,
  period,
  description,
  isLeft = true,
  index = 0,
  linkedin,
  link,
}: DetailsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-background-secondary rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-700 rounded-full border-4 border-background-primary z-10 hidden md:block ${
          isLeft ? "-right-8" : "-left-8"
        }`}
      ></motion.div>

      <div className="flex items-center gap-2 mb-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
          className="w-3 h-3 bg-green-800 rounded-full"
        ></motion.div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
        className="text-xl font-bold mb-1"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
        className="text-green-900 font-medium mb-3"
      >
        <section className="flex items-center gap-2">
          <Link href={link} target="_blank">
            {company}
          </Link>
          <Link href={linkedin} target="_blank">
            <Image
              src={linkedinsrc.src}
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </Link>
        </section>
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
        className="space-y-2"
      >
        {description.map((item, descIndex) => (
          <motion.li
            key={descIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8 + index * 0.1 + descIndex * 0.1,
              duration: 0.3,
            }}
            className="text-sm text-gray-600 flex items-start gap-2"
          >
            <span className="text-green-900">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
