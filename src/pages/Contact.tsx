import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Mail, Send, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
    useSEO(
        'Contact Us - FormTools India',
        'Get in touch with FormTools India for support, feedback, or partnership inquiries. We respond within 24-48 hours.'
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:contact@formtoolsindia.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Have questions, feedback, or need help? We'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="card">
                    <h2 className="text-2xl font-bold mb-6 text-primary-600">Get in Touch</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <Mail className="text-primary-600 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email</h3>
                                <a href="mailto:contact@formtoolsindia.com" className="text-primary-600 hover:underline">
                                    contact@formtoolsindia.com
                                </a>
                                <p className="text-sm text-slate-500 mt-1">
                                    For general inquiries and support
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MessageSquare className="text-primary-600 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Response Time</h3>
                                <p className="text-slate-700 dark:text-slate-300">
                                    We typically respond within 24-48 hours during business days
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-primary-600 mt-1" size={24} />
                            <div>
                                <h3 className="font-bold text-lg mb-1">Location</h3>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Serving students across India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h2 className="text-2xl font-bold mb-6 text-primary-600">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">Your Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950/50 focus:border-primary-500 transition-colors"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950/50 focus:border-primary-500 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Subject</label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950/50 focus:border-primary-500 transition-colors"
                                placeholder="What's this about?"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Message</label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800"
                                placeholder="Tell us how we can help..."
                            />
                        </div>
                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                            <Send size={20} />
                            Send Message
                        </button>
                        <p className="text-xs text-slate-500 text-center">
                            This will open your email client with a pre-filled message
                        </p>
                    </form>
                </div>
            </div>

            <div className="card bg-green-50/50 dark:bg-green-900/20 border-green-100 dark:border-green-900/30">
                <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">FAQs</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold mb-2">Do you offer technical support?</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            Yes! If you're experiencing issues with any of our tools, please email us with details
                            about your browser, device, and the specific problem you're facing.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Can I suggest new features?</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            Absolutely! We love hearing from our users. Send us your feature requests and we'll
                            consider them for future updates.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Are you affiliated with any examination board?</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            No, FormTools India is an independent platform. We're not affiliated with NTA, UPSC,
                            or any other examination authority.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
