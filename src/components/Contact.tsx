import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300">
            Ready to start your chess journey? Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">
                    123 Chess Boulevard, Suite 456<br />
                    Strategic City, SC 78901
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-slate-300">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">info@chessmasteracademy.com</p>
                  <p className="text-slate-300">admissions@chessmasteracademy.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                  <p className="text-slate-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-300">Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="text-slate-300">Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-slate-700 pt-8">
          <p className="text-slate-400">
            © 2024 ChessMaster Academy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
