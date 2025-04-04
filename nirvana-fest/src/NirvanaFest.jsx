import React, { useEffect, useState } from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import * as FramerMotion from "framer-motion";
const { motion } = FramerMotion;

export default function NirvanaFest() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Countdown Logic
  useEffect(() => {
    const targetDate = new Date("2025-10-01T00:00:00");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white px-6 py-10 font-sans">
      <header className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-6"
        >
          Nirvana 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl max-w-3xl mx-auto"
        >
          Welcome to Nirvana — the first-ever Tech, Cultural & Performance Fest of JNU Delhi!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-4 rounded-full shadow-2xl">
            <a href="#register">Register to Perform</a>
          </Button>
        </motion.div>
      </header>

      {/* Countdown Timer */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">Countdown to Nirvana</h2>
        <div className="flex justify-center gap-6 text-2xl font-mono">
          <div><span className="block text-5xl">{timeLeft.days}</span>Days</div>
          <div><span className="block text-5xl">{timeLeft.hours}</span>Hours</div>
          <div><span className="block text-5xl">{timeLeft.mins}</span>Mins</div>
          <div><span className="block text-5xl">{timeLeft.secs}</span>Secs</div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="grid md:grid-cols-3 gap-10 mb-20">
        {[
          {
            title: "Tech Events",
            desc: "Hackathons, robotics challenges, coding sprints and more cutting-edge innovation activities."
          },
          {
            title: "Cultural Shows",
            desc: "Experience diverse cultural performances: music, dance, drama, fashion shows and more!"
          },
          {
            title: "Competitions",
            desc: "Exciting contests: slam poetry, stand-up comedy, photography, gaming tournaments and more."
          }
        ].map((item, i) => (
          <Card key={i} className="bg-white/10 border-none text-white p-8 rounded-2xl shadow-xl">
            <CardContent>
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-base leading-relaxed">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Gallery Preview */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-6">Gallery Preview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((img) => (
            <div
              key={img}
              className="h-40 bg-white/10 rounded-xl shadow-inner flex items-center justify-center text-white text-lg"
            >
              Image {img}
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-6">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Google", "Amazon", "Spotify", "Adobe"].map((sponsor, i) => (
            <div
              key={i}
              className="bg-white/10 px-6 py-4 rounded-lg text-white font-semibold text-lg shadow-lg"
            >
              {sponsor}
            </div>
          ))}
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-4">Register to Perform</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Be a part of Nirvana’s stage! Whether you’re a solo performer or a group, register now to showcase your talent.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 rounded-full shadow-xl">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer">Register Now</a>
        </Button>
      </section>

      {/* Contact Info */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">Email: <a href="mailto:nirvanafest@jnu.ac.in" className="underline text-blue-400">nirvanafest@jnu.ac.in</a></p>
        <p className="text-lg">Phone: +91 9876543210</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-300 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Nirvana Fest | JNU Delhi | All Rights Reserved</p>
      </footer>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white/20 hover:bg-white/30 p-3 rounded-full shadow-lg text-white"
        aria-label="Scroll to Top"
      >
        ↑
      </button>
    </div>
  );
}
