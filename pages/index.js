import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  })
  const [showBooking, setShowBooking] = useState(false)

  const services = [
    { name: 'Women\'s Haircut', price: '$65', icon: '✂️' },
    { name: 'Men\'s Haircut', price: '$45', icon: '✂️' },
    { name: 'Hair Coloring', price: '$120+', icon: '🎨' },
    { name: 'Highlights', price: '$150+', icon: '✨' },
    { name: 'Balayage', price: '$200+', icon: '🌟' },
    { name: 'Keratin Treatment', price: '$250+', icon: '💫' },
    { name: 'Hair Extensions', price: '$300+', icon: '💇' },
    { name: 'Bridal Styling', price: '$150+', icon: '👰' }
  ]

  const gallery = [
    { type: 'Balayage', color: 'from-amber-400 to-rose-400' },
    { type: 'Short Cut', color: 'from-purple-400 to-pink-400' },
    { type: 'Color', color: 'from-blue-400 to-cyan-400' },
    { type: 'Styling', color: 'from-green-400 to-emerald-400' },
    { type: 'Highlights', color: 'from-yellow-400 to-orange-400' },
    { type: 'Treatment', color: 'from-indigo-400 to-purple-400' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll contact you shortly to confirm your appointment.`)
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' })
    setShowBooking(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Head>
        <title>Salon Gor - Premium Hair Design Studio</title>
        <meta name="description" content="Transform your look at Salon Gor - Expert hair design, coloring, and styling services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <span className="text-3xl">💇</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Salon Gor
                </span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-700 hover:text-rose-500 transition">Services</a>
                <a href="#gallery" className="text-gray-700 hover:text-rose-500 transition">Gallery</a>
                <a href="#about" className="text-gray-700 hover:text-rose-500 transition">About</a>
                <a href="#contact" className="text-gray-700 hover:text-rose-500 transition">Contact</a>
              </div>
              <button
                onClick={() => setShowBooking(true)}
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition transform hover:scale-105"
              >
                Book Now
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transform Your Look
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience luxury hair design with our expert stylists. From cuts to color, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowBooking(true)}
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
              >
                Schedule Appointment
              </button>
              <a
                href="#services"
                className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Premium hair care tailored to you</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-rose-100"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h3>
                  <p className="text-2xl font-bold text-rose-500 mb-4">{service.price}</p>
                  <button
                    onClick={() => {
                      setFormData({ ...formData, service: service.name })
                      setShowBooking(true)
                    }}
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Stunning transformations by our talented team</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} h-80 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 flex items-end p-6`}
                >
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p className="font-bold text-gray-800">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              About Salon Gor
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the hair industry, Salon Gor has become a trusted name in premium hair design.
              Our team of certified stylists stays ahead of the latest trends and techniques to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe every client deserves personalized attention and a style that reflects their unique personality.
              Using only the finest products and innovative techniques, we transform hair into art.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">⭐</div>
                <h3 className="text-3xl font-bold text-rose-500 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">👥</div>
                <h3 className="text-3xl font-bold text-rose-500 mb-2">10K+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="text-3xl font-bold text-rose-500 mb-2">50+</h3>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Visit Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Location & Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">123 Style Street<br/>Fashion District, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">hello@salongor.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-800">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9AM - 8PM<br/>Sat: 9AM - 6PM<br/>Sun: 10AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready for a New Look?</h3>
                <p className="mb-6">Book your appointment today and experience the Salon Gor difference.</p>
                <button
                  onClick={() => setShowBooking(true)}
                  className="w-full bg-white text-rose-500 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Schedule Appointment
                </button>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="text-sm mb-2">Follow us on social media</p>
                  <div className="flex space-x-4 text-2xl">
                    <span>📱</span>
                    <span>📘</span>
                    <span>📷</span>
                    <span>🐦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-3xl">💇</span>
              <span className="text-2xl font-bold">Salon Gor</span>
            </div>
            <p className="text-gray-400 mb-4">Premium Hair Design Studio</p>
            <p className="text-gray-500 text-sm">© 2024 Salon Gor. All rights reserved.</p>
          </div>
        </footer>

        {/* Booking Modal */}
        {showBooking && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                    Book Appointment
                  </h2>
                  <button
                    onClick={() => setShowBooking(false)}
                    className="text-gray-400 hover:text-gray-600 text-3xl"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>{service.name} - {service.price}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="Any special requests or preferences..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
