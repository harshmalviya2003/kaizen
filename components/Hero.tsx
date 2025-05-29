export default function Hero() {
  return (
    <section className="relative pt-20 h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Optimized for mobile */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="/3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content - Responsive adjustments */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20 md:pt-20">
        {/* Badge */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full border border-white/20">
            Enterprise Automation Solutions
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-snug md:leading-tight">
          <span className="bg-clip-text text-white bg-gradient-to-r from-primary-300 to-primary-500">
            Smarter Processes,
          </span>
          <br className="hidden sm:block" />
          <span className="text-white">Seamless Automation</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed font-light">
          Kaizen Automation delivers intelligent workflow solutions that reduce costs by 40% while increasing operational efficiency across logistics, healthcare, and manufacturing sectors.
        </p>
        
        {/* Buttons - Stacked on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl active:scale-95 shadow-lg hover:-translate-y-0.5">
            Request Custom Demo
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-base sm:text-lg font-medium border border-white sm:border-2 transition-all duration-300 hover:shadow-lg active:scale-95">
            Explore Case Studies
          </button>
        </div>
        
        {/* Trust indicators - Responsive grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ISO 9001 Certified
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            24/7 Technical Support
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Enterprise-Grade Security
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Only on desktop */}
      
    </section>
  );
}