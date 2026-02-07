import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Link } from 'react-router-dom';
import { AlertTriangle, Info } from 'lucide-react';

const Disclaimer: React.FC = () => {
    useSEO(
        'Disclaimer - FormTools India',
        'Important disclaimers for FormTools India. Understand the limitations and proper use of our document preparation tools.'
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-amber-600" size={40} />
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Disclaimer
                    </h1>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                    Last Updated: February 6, 2026
                </p>
            </div>

            <div className="card mb-6 bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                    <Info className="text-amber-600 mt-1" size={24} />
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-amber-900 dark:text-amber-400">
                            Important Notice
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300">
                            Please read this disclaimer carefully before using FormTools India. By using our
                            services, you acknowledge and agree to all the disclaimers stated below.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">1. No Official Affiliation</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>FormTools India is NOT affiliated with, endorsed by, or connected to:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-3">
                    <li>National Testing Agency (NTA)</li>
                    <li>Union Public Service Commission (UPSC)</li>
                    <li>Staff Selection Commission (SSC)</li>
                    <li>Any state or central examination boards</li>
                    <li>Any educational institutions or universities</li>
                    <li>Any government departments or agencies</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300">
                    We are an independent third-party service providing free document preparation tools.
                    Always verify requirements from official sources.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">2. Accuracy of Information</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    While we strive to provide accurate and current information regarding examination requirements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-3">
                    <li>Exam requirements may change without notice</li>
                    <li>Official notifications take precedence over our guides</li>
                    <li>We are not responsible for outdated information</li>
                    <li>Users must verify all requirements from official sources</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 font-bold">
                    Always check the official examination website for the most current requirements before
                    submitting your application.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">3. Tool Limitations</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Our tools are provided as-is and may have the following limitations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Browser Dependency:</strong> Functionality may vary across different browsers</li>
                    <li><strong>File Size:</strong> Very large files may not process correctly</li>
                    <li><strong>Image Quality:</strong> Compression may affect image quality</li>
                    <li><strong>Format Support:</strong> Not all file formats may be supported</li>
                    <li><strong>No Guarantee:</strong> We don't guarantee documents will be accepted by authorities</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">4. User Responsibility</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>You are solely responsible for:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Verifying that processed documents meet official requirements</li>
                    <li>Checking document quality, size, and format before submission</li>
                    <li>Testing processed files in a preview before final upload</li>
                    <li>Maintaining backup copies of original documents</li>
                    <li>Any consequences of using incorrectly formatted documents</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">5. No Professional Advice</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    The information and tools provided on FormTools India:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Do not constitute professional, legal, or technical advice</li>
                    <li>Should not be relied upon as the sole source of information</li>
                    <li>Are for educational and informational purposes only</li>
                    <li>Should be verified with official sources before use</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">6. Third-Party Content</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India may contain:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Links to third-party websites for reference</li>
                    <li>Information derived from publicly available sources</li>
                    <li>Third-party advertisements (Google AdSense)</li>
                </ul>
                <p className="text-slate-700 dark:text-slate-300 mt-3">
                    We are not responsible for the content, accuracy, or availability of third-party websites
                    or services. See our{' '}
                    <Link to="/privacy-policy" className="text-primary-600 hover:underline font-bold">
                        Privacy Policy
                    </Link>{' '}
                    for more information about third-party services.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">7. No Warranty</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India is provided WITHOUT ANY WARRANTY, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Warranty of merchantability</li>
                    <li>Warranty of fitness for a particular purpose</li>
                    <li>Warranty of non-infringement</li>
                    <li>Warranty of accuracy or reliability</li>
                    <li>Warranty of uninterrupted or error-free service</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">8. Limitation of Liability</h2>
                <p className="text-slate-700 dark:text-slate-300 mb-3">
                    FormTools India shall NOT be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Rejection of documents by examination authorities</li>
                    <li>Loss of examination fees or opportunities</li>
                    <li>Data loss or corruption</li>
                    <li>Any direct, indirect, or consequential damages</li>
                    <li>Any claims arising from the use of our tools</li>
                </ul>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">9. Changes to Disclaimer</h2>
                <p className="text-slate-700 dark:text-slate-300">
                    We reserve the right to modify this disclaimer at any time. Changes will be effective
                    immediately upon posting to this page. Your continued use of FormTools India after any
                    changes constitutes acceptance of the modified disclaimer.
                </p>
            </div>

            <div className="card mb-6">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">10. Contact Us</h2>
                <p className="text-slate-700 dark:text-slate-300">
                    If you have questions about this disclaimer, please contact us at{' '}
                    <a href="mailto:contact@formtoolsindia.com" className="text-primary-600 hover:underline font-bold">
                        contact@formtoolsindia.com
                    </a>
                </p>
            </div>

            <div className="card bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
                <h3 className="font-bold text-lg mb-2 text-red-900 dark:text-red-400">
                    ⚠️ Final Reminder
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                    By using FormTools India, you acknowledge that you have read, understood, and agree to
                    this disclaimer. You accept full responsibility for verifying document requirements and
                    the quality of processed files before submission to any examination authority.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;
