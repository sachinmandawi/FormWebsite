import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

const Terms: React.FC = () => {
    useSEO(
        'Terms of Service - FormTools India',
        'Read the terms and conditions for using FormTools India services. Understand your rights and responsibilities when using our free document tools.'
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Scale className="text-primary-600" size={40} />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Terms of Service
                    </h1>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Last Updated: February 6, 2026
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">1. Acceptance of Terms</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    By accessing and using FormTools India ("the Service"), you accept and agree to be bound by the
                    terms and provisions of this agreement. If you do not agree to these terms, please do not use
                    the Service.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">2. Use of Service</h2>
                <h3 className="font-bold text-lg mb-2">2.1 Permitted Use</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India provides free online tools for document preparation, including but not limited
                    to image compression, format conversion, and PDF manipulation. You may use these tools for
                    personal, educational, and non-commercial purposes.
                </p>
                <h3 className="font-bold text-lg mb-2 mt-4">2.2 Prohibited Activities</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Using the Service for any illegal or unauthorized purpose</li>
                    <li>Attempting to reverse engineer or copy our tools</li>
                    <li>Uploading malicious files or content</li>
                    <li>Attempting to overload or interfere with Service operations</li>
                    <li>Using automated scripts or bots to access the Service</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">3. Privacy and Data Processing</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    All file processing happens locally in your browser. We do not upload, store, or have access
                    to your files. For more details, please review our{' '}
                    <Link to="/privacy-policy" className="text-primary-600 hover:underline font-bold">
                        Privacy Policy
                    </Link>.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">4. Disclaimer of Warranties</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND,
                    EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Accuracy, reliability, or completeness of the Service</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Uninterrupted or error-free operation</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">5. Limitation of Liability</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India and its operators shall not be liable for any direct, indirect, incidental,
                    special, consequential, or exemplary damages resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Use or inability to use the Service</li>
                    <li>Quality or accuracy of processed documents</li>
                    <li>Errors, mistakes, or inaccuracies in the output</li>
                    <li>Loss of data or files</li>
                    <li>Rejection of documents by examination authorities</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">6. User Responsibilities</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    You are solely responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Verifying the quality and accuracy of processed documents</li>
                    <li>Ensuring documents meet the requirements of your intended use case</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Maintaining appropriate backups of important files</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">7. Intellectual Property</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    All content, features, and functionality of FormTools India, including but not limited to
                    text, graphics, logos, and software, are owned by FormTools India and protected by
                    international copyright, trademark, and other intellectual property laws.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">8. Third-Party Links</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    The Service may contain links to third-party websites or services. We are not responsible
                    for the content, privacy policies, or practices of any third-party sites.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">9. Modifications to Service</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    We reserve the right to modify, suspend, or discontinue any aspect of the Service at any
                    time without notice. We may also update these Terms of Service periodically. Continued use
                    of the Service after changes constitutes acceptance of the modified terms.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">10. Governing Law</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    These Terms shall be governed by and construed in accordance with the laws of India,
                    without regard to its conflict of law provisions.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">11. Contact Information</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    <a href="mailto:contact@formtoolsindia.com" className="text-primary-600 hover:underline font-bold">
                        contact@formtoolsindia.com
                    </a>
                </p>
            </div>

            <div className="card bg-slate-50 dark:bg-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                    By using FormTools India, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service.
                </p>
            </div>
        </div>
    );
};

export default Terms;
