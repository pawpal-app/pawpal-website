import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <header className="relative z-10 px-4 py-4 lg:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://ext.same-assets.com/482647744/2678245851.png"
              alt="PAWPAL Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#345045]">PAWPAL</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#345045] transition-colors">Home</a>
            <a href="#features" className="text-gray-700 hover:text-[#345045] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#345045] transition-colors">How it Works</a>
            <a href="#waitlist" className="text-gray-700 hover:text-[#345045] transition-colors">Waitlist</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#345045] transition-colors flex items-center space-x-1">
                <span>More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <button className="p-2 text-gray-700 hover:text-[#345045]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#66a4a8] via-[#91a6a6] to-[#eff3f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#345045] leading-tight mb-6">
                AI<br />
                POWERED<br />
                PET CARE
              </h1>
              <div className="w-20 h-1 bg-[#345045] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-xl text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
                Your smart pet assistant for reminders, questions, and care
              </p>
              <WaitlistForm variant="hero">
                <Button
                  className="bg-white text-[#345045] hover:bg-gray-50 border border-gray-300 px-8 py-6 text-lg rounded-none"
                >
                  Join the Waitlist!
                </Button>
              </WaitlistForm>
            </div>

            {/* Right Content - Phone Mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://ext.same-assets.com/482647744/2552424779.png"
                alt="PAWPAL App Screenshots"
                className="max-w-full h-auto w-[500px] lg:w-[600px]"
              />
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#345045] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#345045] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#66a4a8] mb-8">
              YOUR PET CARE PARTNER
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Meet <span className="font-bold italic">PAWPAL</span> — the ultimate app for modern pet care!
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Create a personalized profile for your pet, and PAWPAL will instantly generate a personally
              tailored care plan designed to keep them happy, healthy, and thriving. Stay on top of your pet's
              needs with ease, and explore new, fun ways to bond with and care for your best friend — all in
              one convenient app.
            </p>
          </div>

          {/* Pet Care Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Dog Image */}
            <div className="relative">
              <img
                src="https://ext.same-assets.com/482647744/3116849569.png"
                alt="Happy dog in grass"
                className="w-full h-auto rounded-lg"
              />
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#66a4a8]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Features List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#66a4a8] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">PAWPAL is your all-in-one smart care assistant</span> —
                  designed for every kind of pet: from dogs and cats to reptiles, birds, and beyond.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#66a4a8] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Powered by AI</span>, PAWPAL creates personalized
                  care plans tailored to your pet's unique needs — no endless Google searches required.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#66a4a8] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Stay on top of care</span> with reminders for
                  vaccinations, grooming, feeding, and more.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#66a4a8] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Smarter to-dos</span> that learn and adapt to your
                  lifestyle and priorities.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#66a4a8] rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <span className="font-semibold">Let PAWPAL help you stay organized, proactive,
                  and stress-free</span> in your pet parenting journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="py-20 bg-[#eff3f3]" id="features">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#66a4a8] mb-8">
              HOW IS PAWPAL BETTER?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">📝</span> All-in-One Pet Management
                </h3>
                <p className="text-gray-600">
                  Track everything pet-related all in one place. No more scattered notes or
                  forgotten appointments.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">🤖</span> Personalized, AI-Powered Care
                </h3>
                <p className="text-gray-600">
                  PAWPAL creates a custom care plan and to-do list based on your pet's breed, age, and lifestyle.
                  It even adapts to your habits — skip a task, and PAWPAL learns what to prioritize,
                  so you only see what matters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">⏰</span> Smart Reminders & Alerts
                </h3>
                <p className="text-gray-600">
                  Never miss a vaccination, dose, or vet check-up again. PAWPAL sends timely,
                  intelligent reminders that help you stay on top of your pet's well-being.
                </p>
              </div>
            </div>

            {/* Center - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative max-w-sm">
                {/* Background puppy image */}
                <img
                  src="https://ext.same-assets.com/482647744/3116849569.png"
                  alt="Cute puppy"
                  className="w-full h-auto rounded-lg"
                />

                {/* PAWPAL App Interface Overlay */}
                <div className="absolute inset-0 bg-gray-100/95 rounded-lg p-6 flex flex-col justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h4 className="font-bold text-2xl text-center text-[#345045] mb-6">PAWPAL</h4>

                    {/* App Features Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-blue-100 rounded-lg p-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">AI to-do list</span>
                      </div>

                      <div className="bg-green-100 rounded-lg p-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">Locate dog parks</span>
                      </div>

                      <div className="bg-purple-100 rounded-lg p-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-medium">Vaccination reminders</span>
                      </div>

                      <div className="bg-orange-100 rounded-lg p-3 flex items-center space-x-2">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </div>
                        <span className="font-medium">Track meals</span>
                      </div>

                      <div className="bg-blue-100 rounded-lg p-3 flex items-center space-x-2 col-span-1">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">Keep appointments</span>
                      </div>

                      <div className="bg-teal-100 rounded-lg p-3 flex items-center space-x-2 col-span-1">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h2a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-medium">Tour nutrition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - More Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">😊</span> More Fun, Less Stress
                </h3>
                <p className="text-gray-600">
                  Pet care doesn't have to be a chore. With engaging tips, activity ideas, and
                  helpful suggestions, PAWPAL helps you bond with your companion while caring for them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">🐾</span> Built For Every Pet
                </h3>
                <p className="text-gray-600">
                  Birds, reptiles, rabbits — we've got them covered too. PAWPAL is built for
                  all kinds of pets, not just the furry ones.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="mr-2">🎯</span> Peace of Mind
                </h3>
                <p className="text-gray-600">
                  PAWPAL gives you confidence in your pet care — no guessing, no gaps,
                  just smart support every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#345045] text-white" id="waitlist">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            You spoil them already. Why not make it official?
          </h2>
          <WaitlistForm variant="cta">
            <Button
              className="bg-white text-[#345045] hover:bg-gray-50 px-12 py-6 text-xl font-semibold rounded-none"
            >
              Get Early Access
            </Button>
          </WaitlistForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <img
                src="https://ext.same-assets.com/482647744/305266209.png"
                alt="TikTok"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <img
                src="https://ext.same-assets.com/482647744/1451647571.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <img
                src="https://ext.same-assets.com/482647744/4067530624.png"
                alt="Twitter/X"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Copyright and Links */}
          <div className="text-center text-gray-500 space-y-4">
            <p>Copyright © 2025 PAWPAL LLC</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-700 transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
