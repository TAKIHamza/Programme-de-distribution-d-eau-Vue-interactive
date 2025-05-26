"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import ItemSelector from "./ItemSelector";

export default function HeroSection() {
  return (
    <section className="bg-white" dir="rtl">
      <div className="w-fit mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 h-screen md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Right Side (in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            

            
          </motion.div>

          {/* Image - Left Side (in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1 relative h-3/4 w-full overflow-hidden"
          >
            <Image
              src="/imageherosection.svg" 
              alt="تكنولوجيا دورة المياه"
              fill
              className="object-fill"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}