import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    useSEO('Privacy Policy', 'How we handle your data at FormTools India.');

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
                <section className="p-6 bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/30 rounded-2xl mb-8 flex gap-4">
                    <Shield className="text-primary-600 flex-shrink-0" />
                    <p className="text-sm text-primary-900 dark:text-primary-400 m-0">
                        <strong>The Golden Rule:</strong> Your files never leave your device. We use browser-based processing (Web Workers and Canvas API) to ensure 100% privacy.
                    </p>
                </section>

                <h2 className="text-2xl font-bold">1. Information Collection</h2>
                <p>
                    FormTools India is a static website. We do not have a database, and we do not collect, store, or share any personal information. When you use our tools to compress images or merge PDFs, all processing happens locally in your browser.
                </p>

                <h2 className="text-2xl font-bold">2. Cookies and Analytics</h2>
                <p>
                    We may use minimal cookies to remember your theme preference (Dark/Light mode). We may also use Google Analytics to understand traffic patterns and improve our tools, but no document content is ever sent to analytics servers.
                </p>

                <h2 className="text-2xl font-bold">3. Third-Party Ads</h2>
                <p>
                    We use Google AdSense to serve ads. These third-party vendors may use cookies to serve ads based on your prior visits to this or other websites. You can opt-out of personalized advertising by visiting Google Ad Settings.
                </p>

                <h2 className="text-2xl font-bold">4. Client-Side Processing</h2>
                <p>
                    Since all document processing (PDF merge, Image resize, etc.) happens on the client side, we have no access to the documents you process. This makes our site fundamentally more secure than server-side conversion services.
                </p>

                <h2 className="text-2xl font-bold">5. Contact Us</h2>
                <p>
                    If you have any questions about this policy, you can contact us at <a href="mailto:privacy@formtoolsindia.com" className="text-primary-600">privacy@formtoolsindia.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
