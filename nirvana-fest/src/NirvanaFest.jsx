import React, { useEffect, useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import * as FramerMotion from "framer-motion";
import logo from "./assets/nirvana-logo.png";
import { Menu, X } from "lucide-react"; // for icons

import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import gallery4 from "./assets/gallery4.jpg";
const { motion } = FramerMotion;




export default function NirvanaFest() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Countdown Logic
  useEffect(() => {
    const targetDate = new Date("2025-04-17T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });

      if (diff <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10 font-sans">
      <header className="text-center mb-16">
      <div className="absolute top-6 left-6 z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

        <motion.img 
          src={logo} 
          alt="Nirvana Logo" 
          className="mx-auto mb-6 w-32 h-32 object-contain drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6 text-yellow-400"
        >
          Nirvana 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl max-w-3xl mx-auto text-gray-200"
        >
          Welcome to Nirvana — the first-ever Tech, Cultural & Performance Fest of JNU Delhi!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-4 rounded-full shadow-2xl">
            <a href="#register">Register to Perform</a>
          </Button>
        </motion.div>
      </header>

      {/*menu button */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-2/3 sm:w-1/3 bg-black/90 text-white z-40 p-8 backdrop-blur-lg shadow-lg"
      >
        <ul className="space-y-6 text-lg">
          <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#countdown" onClick={() => setMenuOpen(false)}>Countdown</a></li>
          <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
          <li><a href="#register" onClick={() => setMenuOpen(false)}>Register</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </motion.nav>

      {/* Countdown Timer */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-pink-400 animate-pulse">Countdown to Nirvana</h2>
        <motion.div 
          className="flex justify-center gap-6 text-2xl font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="bg-white/10 rounded-xl p-4 w-24">
              <span className="block text-4xl font-bold text-yellow-400">{value}</span>
              <span className="capitalize text-sm text-gray-300">{label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Event Cards */}
      <section className="grid md:grid-cols-3 gap-10 mb-20">
        {["Tech Events", "Cultural Shows", "Competitions"].map((title, i) => (
          <motion.div
            key={i}
            className="bg-white/10 border-none text-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <CardContent>
              <h2 className="text-2xl font-bold mb-3 text-pink-300">{title}</h2>
              <p className="text-base leading-relaxed">
                {title === "Tech Events" && "Hackathons, robotics challenges, coding sprints and more cutting-edge innovation activities."}
                {title === "Cultural Shows" && "Experience diverse cultural performances: music, dance, drama, fashion shows and more!"}
                {title === "Competitions" && "Exciting contests: slam poetry, stand-up comedy, photography, gaming tournaments and more."}
              </p>
            </CardContent>
          </motion.div>
        ))}
      </section>

      {/* Gallery Preview */}
      <section className="text-center mb-20">
      
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-300">Gallery Preview</h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[gallery1, gallery2, gallery3, gallery4].map((img) => (
          <motion.div
            key={img}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="h-40 bg-white/10 rounded-xl shadow-inner flex items-center justify-center text-white text-lg cursor-pointer transition-transform"
            onClick={() => setModalImage(require('./assets/gallery1.jpg'))}
          >
            Image {img}
          </motion.div>
        ))}


        
        </motion.div>
      </section>
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="Preview" className="w-full object-contain max-h-[80vh]" />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {/* Sponsors */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-6 text-pink-400">Our Sponsors</h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {["Google", "Amazon", "Spotify", "Adobe"].map((sponsor, i) => (
            <div
              key={i}
              className="bg-white/10 px-6 py-4 rounded-lg text-white font-semibold text-lg shadow-lg hover:bg-white/20 transition"
            >
              {sponsor}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Register Section */}
      <section id="register" className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">Register to Perform</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Be a part of Nirvana’s stage! Whether you’re a solo performer or a group, register now to showcase your talent.
        </p>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-4 rounded-full shadow-xl">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer">Register Now</a>
        </Button>
      </section>

      {/* Contact Info */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4 text-pink-300">Contact Us</h2>
        <p className="text-lg">Email: <a href="mailto:nirvanafest@jnu.ac.in" className="underline text-blue-400">nirvanafest@jnu.ac.in</a></p>
        <p className="text-lg">Phone: +91 9876543210</p>
      </section>
      

      {/* Footer */}
      <footer className="text-center text-sm text-gray-300 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Nirvana Fest | JNU Delhi | All Rights Reserved</p>
      </footer>

      {/* Scroll To Top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-lg text-white"
        aria-label="Scroll to Top"
        whileHover={{ scale: 1.2 }}
      >
        ↑
      </motion.button>
    </div>
  );
}
