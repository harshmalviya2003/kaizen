"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const particleVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

const Panels: React.FC = () => {
  useEffect(() => {
    // Select all panels
    const panels: HTMLElement[] = gsap.utils.toArray(".panel");

    // Create pinning for each panel
    panels.forEach((panel: HTMLElement, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: i === panels.length - 1 ? "bottom bottom" : `+=${panel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        id: `panel-${i}`,
        anticipatePin: 1,
      });
    });

    // Refresh ScrollTrigger after a slight delay to ensure DOM is fully rendered
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Description Section */}
      {/* <div className="panel bg-black text-gray-100 flex items-center justify-center min-h-screen text-center p-4 sm:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400/20 rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Journey to Homeownership Starts Here
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience a seamless mortgage process with personalized guidance every step of the way. 
            From pre-approval to closing, we're here to make your homeownership dreams a reality.
          </motion.p>
          <motion.div
            className="flex flex-col items-center mt-4 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-sm sm:text-base text-gray-300">Scroll down</span>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-200 mt-2 animate-bounce" />
          </motion.div>
        </div>
      </div> */}

      {/* Section ONE */}
      <section className="panel bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center min-h-screen px-4 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/20 rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 gap-6 sm:gap-8">
          <motion.div
            className="w-full md:w-1/2 p-3 sm:p-6 bg-[#2e2e38] rounded-lg shadow-lg order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-x-auto">
              <pre className="text-xs sm:text-sm" style={{
                color: '#f8f8f2',
                background: '#2e2e38',
                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                padding: '1em',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                lineHeight: 1.6,
                minWidth: '300px',
              }}>
                <code className="language-typescript">
                  <span style={{ color: '#ff79c6' }}>await</span> <span style={{ color: '#f8f8f2' }}>fetch</span>(<span style={{ color: '#f1fa8c' }}>'https://api.kaizenautomation.com/workflows/execute'</span>, {'{'}
                  <br />
                  &nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>method</span>: <span style={{ color: '#f1fa8c' }}>'POST'</span>,
                  <br />
                  &nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>headers</span>: {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>'Content-Type'</span>: <span style={{ color: '#f1fa8c' }}>'application/json'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>'Authorization'</span>: <span style={{ color: '#f1fa8c' }}>'Bearer YOUR_API_KEY'</span>
                  <br />
                  &nbsp;&nbsp;{'}'},
                  <br />
                  &nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>body</span>: <span style={{ color: '#f8f8f2' }}>JSON</span>.<span style={{ color: '#f8f8f2' }}>stringify</span>({'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>workflowId</span>: <span style={{ color: '#f1fa8c' }}>'54e5b3db-2ae6-4e62-9e0b-09d777710348'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>loginId</span>: <span style={{ color: '#f1fa8c' }}>'c6658be9-d715-457c-a391-1dee93b9dbdd'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>params</span>: {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>claimId</span>: <span style={{ color: '#f1fa8c' }}>'CLM-2025-03891'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>patientName</span>: <span style={{ color: '#f1fa8c' }}>'John Smith'</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#8be9fd' }}>code</span>: <span style={{ color: '#ffb86c' }}>'11950'</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
                  <br />
                  &nbsp;&nbsp;{'}'})
                  <br />
                  {'}'});
                </code>
              </pre>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Find Your Dream Home with Confidence
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
              Take the first step towards your dream home with our streamlined pre-approval process. 
              Get expert guidance, competitive rates, and a stress-free closing experience tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section TWO */}
      <section className="panel bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center min-h-screen px-4 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-500/20 rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 gap-6 sm:gap-8">
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Smart Refinancing for Better Rates
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-full sm:max-w-md mt-2 sm:mt-3 hidden sm:block">
              Take the first step towards your dream home with our streamlined pre-approval process. 
              Get expert guidance, competitive rates, and a stress-free closing experience tailored to your needs.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-lg border border-blue-200 bg-white p-3 sm:p-4 shadow-md">
                <div className="mb-2 border-b border-blue-100 pb-2">
                  <div className="font-semibold text-blue-800 text-sm sm:text-base">Ohio Portal</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="mb-1 block text-xs text-blue-600">First Name</label>
                    <input type="text" className="w-full rounded border border-blue-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value="John" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-blue-600">Last Name</label>
                    <input type="text" className="w-full rounded border border-blue-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value="Doe" />
                  </div>
                </div>
                <div className="mt-2 sm:mt-3">
                  <label className="mb-1 block text-xs text-blue-600">Provider ID</label>
                  <input type="text" className="w-full rounded border border-blue-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value="67890" />
                </div>
              </div>
              <div className="rounded-lg border border-green-200 bg-white p-3 sm:p-4 shadow-md">
                <div className="mb-2 border-b border-green-100 pb-2">
                  <div className="font-semibold text-green-800 text-sm sm:text-base">Texas Portal</div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <label className="mb-1 block text-xs text-green-600">Provider's Full Name</label>
                    <input type="text" className="w-full rounded border border-green-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-300" value="John Doe" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-green-600">Provider Number</label>
                    <input type="text" className="w-full rounded border border-green-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-300" value="67890" />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-purple-200 bg-white p-3 sm:p-4 shadow-md">
                <div className="mb-2 border-b border-purple-100 pb-2">
                  <div className="font-semibold text-purple-800 text-sm sm:text-base">New Jersey Portal</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
                  <div className="flex-1">
                    <label className="mb-1 block text-xs text-purple-600">First Name</label>
                    <input type="text" className="w-full rounded border border-purple-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" value="John" />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-xs text-purple-600">Last Name</label>
                    <input type="text" className="w-full rounded border border-purple-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" value="Doe" />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-xs text-purple-600">Provider #</label>
                    <input type="text" className="w-full rounded border border-purple-200 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-300" value="67890" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section THREE */}
      <section className="panel bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center min-h-screen px-4 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-500/20 rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 gap-6 sm:gap-8">
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Track Your Orders
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
              Stay updated with your order status and delivery information. Our comprehensive tracking system 
              keeps you informed every step of the way.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-gray-800">PO#</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-800">Product</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-800">Ordered At</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">PO-0421</td>
                    <td className="px-3 py-2">Organic Meal Prep Box</td>
                    <td className="px-3 py-2 text-gray-600">Mar 19, 2025</td>
                    <td className="px-3 py-2 text-green-600">Delivered</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">PO-0418</td>
                    <td className="px-3 py-2">Fresh Produce Bundle</td>
                    <td className="px-3 py-2 text-gray-600">Mar 18, 2025</td>
                    <td className="px-3 py-2 text-blue-600">In Transit</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">PO-0412</td>
                    <td className="px-3 py-2">Gourmet Dinner Kit</td>
                    <td className="px-3 py-2 text-gray-600">Mar 17, 2025</td>
                    <td className="px-3 py-2 text-green-600">Delivered</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">PO-0405</td>
                    <td className="px-3 py-2">Weekly Meal Subscription</td>
                    <td className="px-3 py-2 text-gray-600">Mar 16, 2025</td>
                    <td className="px-3 py-2 text-yellow-600">Processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section FOUR */}
      <section className="panel bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center min-h-screen px-4 sm:px-8 py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-10"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-indigo-500/20 rounded-full"
              style={{
                width: Math.random() * 6 + 3,
                height: Math.random() * 6 + 3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={particleVariants}
              animate="animate"
              initial={{ opacity: 0 }}
            />
          ))}
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 gap-6 sm:gap-8">
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Enterprise Resource Planning
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
              Streamline your business operations with our comprehensive ERP system. Manage inventory, 
              track orders, and handle customer relationships all in one place.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4 sm:p-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
              {/* Mobile Menu Button */}
              <div className="sm:hidden border-b border-gray-200 p-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-800">ERP System</div>
                <button className="p-2 hover:bg-gray-100 rounded-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Menu */}
              <div className="hidden sm:block w-full sm:w-40 border-b sm:border-b-0 sm:border-r border-gray-200 bg-gray-50">
                <div className="border-b border-gray-200 p-3">
                  <div className="text-xs sm:text-sm font-semibold text-gray-800">ERP System</div>
                </div>
                <div className="py-1">
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Dashboard
                  </button>
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Inventory
                  </button>
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Customers
                  </button>
                  <button className="w-full bg-blue-50 px-3 py-2 text-left text-xs sm:text-sm font-medium text-blue-700 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Orders
                  </button>
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Suppliers
                  </button>
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Finance
                  </button>
                  <button className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-gray-100 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Reports
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 p-3">
                  <div className="text-xs sm:text-sm font-semibold mb-2 sm:mb-0">New Order Entry</div>
                  <div className="flex space-x-2">
                    <button className="rounded bg-gray-100 px-2 py-1 text-xs hover:bg-gray-200">Cancel</button>
                    <button className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700 hover:bg-blue-100">Submit</button>
                  </div>
                </div>
                <div className="flex-1 p-3 sm:p-4">
                  <div className="mx-auto mb-3 sm:mb-4 max-w-3xl">
                    <h3 className="mb-2 text-xs sm:text-sm font-semibold">Customer Information</h3>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Customer</label>
                        <select className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                          <option>Select Customer</option>
                          <option>Acme Corporation</option>
                          <option>TechSolutions Inc.</option>
                          <option>Global Enterprises</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Contact Person</label>
                        <select className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                          <option>Select Contact</option>
                          <option>John Smith</option>
                          <option>Sarah Johnson</option>
                          <option>Michael Brown</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Billing Address</label>
                        <select className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                          <option>123 Corporate Dr, San Francisco, CA 94107</option>
                          <option>456 Business Ave, New York, NY 10001</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Shipping Address</label>
                        <select className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                          <option>123 Corporate Dr, San Francisco, CA 94107</option>
                          <option>789 Warehouse Blvd, Chicago, IL 60007</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mb-3 sm:mb-4 max-w-3xl">
                    <h3 className="mb-2 text-xs sm:text-sm font-semibold">Order Details</h3>
                    <div className="mb-2 sm:mb-3 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Order Date</label>
                        <input type="date" className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value="2025-03-19" />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Expected Delivery</label>
                        <input type="date" className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" value="2025-03-26" />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs text-gray-600">Payment Terms</label>
                        <select className="w-full rounded border border-gray-300 px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                          <option>Net 30</option>
                          <option>Net 60</option>
                          <option>Immediate</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Panels;