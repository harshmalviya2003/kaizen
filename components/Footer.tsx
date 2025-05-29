"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Linkedin, Youtube, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-t from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">AutomatePro</h3>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Pioneering industrial automation with cutting-edge, intelligent solutions for a smarter future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Newsletter</h4>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-xs">
              Stay updated with the latest in automation technology.
            </p>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 rounded-full h-12 px-5 focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              />
              <Button
                className="bg-primary text-white rounded-full h-12 px-6 font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-7 w-7" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700/50 mt-12 pt-8 text-center"
        >
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} AutomatePro. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}