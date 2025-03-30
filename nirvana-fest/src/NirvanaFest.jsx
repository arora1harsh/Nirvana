import React from "react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import * as FramerMotion from "framer-motion";
const { motion } = FramerMotion;

export default function NirvanaFest() {
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
          Welcome to Nirvana — the first-ever Tech, Cultural & Performance Fest of JNU Delhi! Get ready for an electrifying blend of innovation, art, and entertainment like never before.
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

      <section className="grid md:grid-cols-3 gap-10 mb-20">
        <Card className="bg-white/10 border-none text-white p-8 rounded-2xl shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-bold mb-3">Tech Events</h2>
            <p className="text-base leading-relaxed">Hackathons, robotics challenges, coding sprints and more cutting-edge innovation activities.</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-none text-white p-8 rounded-2xl shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-bold mb-3">Cultural Shows</h2>
            <p className="text-base leading-relaxed">Experience diverse cultural performances: music, dance, drama, fashion shows and more!</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-none text-white p-8 rounded-2xl shadow-xl">
          <CardContent>
            <h2 className="text-2xl font-bold mb-3">Competitions</h2>
            <p className="text-base leading-relaxed">Exciting contests: slam poetry, stand-up comedy, photography, gaming tournaments and more.</p>
          </CardContent>
        </Card>
      </section>

      <section id="register" className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-4">Register to Perform</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Be a part of Nirvana’s stage! Whether you’re a solo performer or a group, register now to showcase your talent.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-4 rounded-full shadow-xl">
          <a href="https://forms.gle/your-form-link" target="_blank" rel="noopener noreferrer">Register Now</a>
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-300 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Nirvana Fest | JNU Delhi | All Rights Reserved</p>
      </footer>
    </div>
  );
}