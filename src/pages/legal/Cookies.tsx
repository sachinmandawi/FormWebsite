import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Cookie, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies: React.FC = () => {
    useSEO(
        'Cookie Policy - FormTools India',
        'Learn about how FormTools India uses cookies, including Google AdSense cookies, and how you can control them.'
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Cookie className="text-primary-600" size={40} />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Cookie Policy
                    </h1>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Last Updated: February 6, 2026
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">What Are Cookies?</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Cookies are small text files that are stored on your device when you visit a website. They
                    help websites remember information about your visit, making your next visit easier and the
                    site more useful to you.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">How We Use Cookies</h2>

                <h3 className="font-bold text-lg mb-2 mt-4">1. Essential Cookies</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    We use cookies to remember your preferences:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Theme Preference:</strong> Dark mode or light mode selection</li>
                    <li><strong>Language Settings:</strong> Your preferred language (if applicable)</li>
                </ul>

                <h3 className="font-bold text-lg mb-2 mt-4">2. Google AdSense Cookies</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India uses Google AdSense to display advertisements. Google AdSense uses cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Serve ads based on your prior visits to our website and other websites</li>
                    <li>Measure ad performance and engagement</li>
                    <li>Provide relevant advertising</li>
                    <li>Prevent the same ads from continuously reappearing</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 mt-3">
                    Google's use of advertising cookies enables it and its partners to serve ads to you based
                    on your visit to FormTools India and/or other sites on the Internet.
                </p>
            </div>

            <div className="card mb-6 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
                <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Your Cookie Choices</h2>

                <h3 className="font-bold text-lg mb-2">Opt Out of Personalized Advertising</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    You can opt out of personalized advertising by visiting:
                </p>
                <ul className="space-y-2">
                    <li>
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline font-bold"
                        >
                            Google Ads Settings →
                        </a>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Control personalized ads from Google
                        </p>
                    </li>
                    <li>
                        <a
                            href="https://www.aboutads.info/choices/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:underline font-bold"
                        >
                            Digital Advertising Alliance →
                        </a>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Opt out of interest-based ads from participating companies
                        </p>
                    </li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Browser Cookie Controls</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Most web browsers allow you to control cookies through their settings preferences. However,
                    limiting cookies may impact your experience on FormTools India.
                </p>

                <h3 className="font-bold text-lg mb-2 mt-4">How to Manage Cookies:</h3>
                <div className="space-y-3">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h4 className="font-bold">Google Chrome</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Settings → Privacy and security → Cookies and other site data
                        </p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h4 className="font-bold">Mozilla Firefox</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Settings → Privacy & Security → Cookies and Site Data
                        </p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h4 className="font-bold">Safari</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Preferences → Privacy → Manage Website Data
                        </p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <h4 className="font-bold">Microsoft Edge</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Settings → Cookies and site permissions → Manage and delete cookies
                        </p>
                    </div>
                </div>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Types of Cookies We Use</h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-lg mb-1">Strictly Necessary Cookies</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            These cookies are essential for the website to function properly. They enable basic
                            features like theme preference and are always enabled.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-1">Advertising Cookies (Google AdSense)</h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            These cookies are used to deliver advertisements that are relevant to you and your
                            interests. They also help measure the effectiveness of advertising campaigns.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Third-Party Cookies</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    In addition to our own cookies, we may also use various third-party cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Google AdSense:</strong> For displaying and personalizing ads</li>
                    <li><strong>Google Analytics:</strong> (If applicable) For analyzing website traffic</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 mt-3">
                    These third parties may use cookies to track your activity across different websites.
                    We do not control these cookies.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Data Protection</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Important Note:</strong> While we use cookies for preferences and advertising,
                    we do NOT use cookies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Track or store your uploaded files</li>
                    <li>Access your personal documents</li>
                    <li>Monitor your file processing activities</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 mt-3">
                    All file processing happens locally in your browser. For more information, see our{' '}
                    <Link to="/privacy-policy" className="text-primary-600 hover:underline font-bold">
                        Privacy Policy
                    </Link>.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Updates to This Policy</h2>
                <p className="text-slate-700 dark:text-slate-300">
                    We may update this Cookie Policy from time to time to reflect changes in our practices
                    or for other operational, legal, or regulatory reasons. We encourage you to review this
                    policy periodically.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Questions?</h2>
                <p className="text-slate-700 dark:text-slate-300">
                    If you have questions about our use of cookies, please contact us at{' '}
                    <a href="mailto:contact@formtoolsindia.com" className="text-primary-600 hover:underline font-bold">
                        contact@formtoolsindia.com
                    </a>
                </p>
            </div>

            <div className="card bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                <div className="flex items-start gap-3">
                    <Shield className="text-green-600 mt-1" size={24} />
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-green-900 dark:text-green-400">
                            Your Privacy Matters
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            We are committed to transparency about how we use cookies. By continuing to use
                            FormTools India, you consent to our use of cookies as described in this policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
