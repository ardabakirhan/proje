import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  BarChart3, 
  Target, 
  Clock, 
  Globe, 
  Mail,
  ChevronRight,
  Info,
  Eye,
  Trash2,
  Phone
} from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      icon: Cookie,
      content: `Cookies are small text files that are placed on your computer, smartphone, or other device when you visit our website. They contain information that is transferred to your device's hard drive and allow us to recognize your device when you return to our website.

Cookies help us provide you with a better experience by enabling certain functionality, remembering your preferences, and helping us understand how our website is used. They are widely used across the internet to make websites work more efficiently and to provide reporting information.

Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website's features.`
    },
    {
      id: 'types-of-cookies',
      title: 'Types of Cookies We Use',
      icon: Settings,
      content: `We use different types of cookies on our website, each serving specific purposes:`
    },
    {
      id: 'data-collection',
      title: 'What Data We Collect',
      icon: BarChart3,
      content: `Through cookies and similar technologies, we may collect the following types of information:`
    },
    {
      id: 'why-we-use',
      title: 'Why We Use Cookies',
      icon: Target,
      content: `We use cookies for several important purposes to enhance your experience and improve our services:`
    },
    {
      id: 'managing-preferences',
      title: 'Managing Your Cookie Preferences',
      icon: Eye,
      content: `You have several options for managing and controlling cookies on your device:`
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: Globe,
      content: `We use various third-party services that may set their own cookies when you visit our website:`
    },
    {
      id: 'retention',
      title: 'Cookie Retention Periods',
      icon: Clock,
      content: `Different types of cookies are stored for different periods of time:`
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis for Processing',
      icon: Shield,
      content: `Our use of cookies is based on the following legal grounds under GDPR and KVKK:`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: Mail,
      content: `If you have any questions about our use of cookies or wish to exercise your rights regarding your personal data, please contact us:`
    }
  ];

  const cookieTypes = [
    {
      name: 'Strictly Necessary Cookies',
      icon: Shield,
      color: 'text-red-600 bg-red-100',
      description: 'These cookies are essential for the website to function properly and cannot be switched off.',
      examples: [
        'Session management and user authentication',
        'Security tokens and CSRF protection',
        'Load balancing and server routing',
        'Cookie consent preferences',
        'Shopping cart contents',
        'Form data retention during sessions'
      ],
      retention: 'Session or up to 1 year',
      canDisable: false
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      color: 'text-blue-600 bg-blue-100',
      description: 'These cookies enhance functionality and personalization but are not essential for basic operation.',
      examples: [
        'Language and region preferences',
        'User interface customizations',
        'Accessibility settings',
        'Previously entered form information',
        'Social media integration features',
        'Live chat widget preferences'
      ],
      retention: 'Up to 1 year',
      canDisable: true
    },
    {
      name: 'Performance/Analytics Cookies',
      icon: BarChart3,
      color: 'text-green-600 bg-green-100',
      description: 'These cookies help us understand how visitors interact with our website by collecting anonymous information.',
      examples: [
        'Page views and session duration',
        'Most popular pages and content',
        'User journey and navigation patterns',
        'Site performance and loading times',
        'Error tracking and debugging',
        'A/B testing data'
      ],
      retention: 'Up to 2 years',
      canDisable: true
    },
    {
      name: 'Marketing/Targeting Cookies',
      icon: Target,
      color: 'text-purple-600 bg-purple-100',
      description: 'These cookies track your browsing habits to show you relevant advertisements and measure campaign effectiveness.',
      examples: [
        'Advertising targeting and retargeting',
        'Social media advertising pixels',
        'Campaign performance measurement',
        'Cross-site tracking for personalization',
        'Conversion tracking',
        'Lookalike audience creation'
      ],
      retention: 'Up to 90 days',
      canDisable: true
    }
  ];

  const dataTypes = [
    'Device type and operating system',
    'Browser type and version',
    'IP address (anonymized)',
    'Pages visited and time spent',
    'Referring website or source',
    'Date and time of visits',
    'Language and location preferences',
    'Screen resolution and device settings',
    'User interactions and click patterns',
    'Download and form completion data'
  ];

  const purposes = [
    {
      title: 'Essential Website Operation',
      description: 'Ensuring basic website functionality, security, and user authentication'
    },
    {
      title: 'Performance Optimization',
      description: 'Improving website speed, reliability, and user experience'
    },
    {
      title: 'Personalization',
      description: 'Remembering your preferences and customizing content to your interests'
    },
    {
      title: 'Analytics and Insights',
      description: 'Understanding how our website is used to make improvements'
    },
    {
      title: 'Marketing and Advertising',
      description: 'Showing relevant ads and measuring the effectiveness of our campaigns'
    },
    {
      title: 'Compliance and Security',
      description: 'Meeting legal requirements and protecting against fraud and abuse'
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance measurement',
      cookies: '_ga, _ga_*, _gid, _gat',
      privacy: 'https://policies.google.com/privacy',
      optOut: 'https://tools.google.com/dlpage/gaoptout'
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising measurement and targeting',
      cookies: '_gcl_*, conversion, IDE',
      privacy: 'https://policies.google.com/privacy',
      optOut: 'https://adssettings.google.com'
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and retargeting',
      cookies: '_fbp, _fbc, fr',
      privacy: 'https://www.facebook.com/privacy/policy/',
      optOut: 'https://www.facebook.com/settings?tab=ads'
    },
    {
      name: 'LinkedIn Insight Tag',
      purpose: 'Professional network advertising',
      cookies: 'li_*, lidc, UserMatchHistory',
      privacy: 'https://www.linkedin.com/legal/privacy-policy',
      optOut: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out'
    }
  ];

  const retentionPeriods = [
    {
      type: 'Session Cookies',
      duration: 'Until browser is closed',
      description: 'Deleted when you close your browser or end your session'
    },
    {
      type: 'Persistent Cookies',
      duration: '30 days to 2 years',
      description: 'Remain on your device until they expire or you delete them'
    },
    {
      type: 'Analytics Cookies',
      duration: 'Up to 2 years',
      description: 'Used for long-term trend analysis and website improvement'
    },
    {
      type: 'Marketing Cookies',
      duration: 'Up to 90 days',
      description: 'Shorter retention period to respect privacy while enabling effective advertising'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-brand-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-brand-gray-medium leading-relaxed mb-8">
              This Cookie Policy explains how İletişim Group uses cookies and similar technologies 
              when you visit our website, in compliance with GDPR and KVKK regulations.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
                  <p className="text-blue-800 text-sm">
                    <strong>Last Updated:</strong> June 11, 2025 • 
                    <strong> Effective Date:</strong> June 11, 2025 • 
                    <strong> Version:</strong> 2.0
                  </p>
                  <p className="text-blue-700 mt-2">
                    This policy applies to all visitors of İletişim Group websites and services. 
                    By continuing to use our website, you consent to our use of cookies as described in this policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-yellow/20">
                    <section.icon className="w-5 h-5 text-gray-600 group-hover:text-brand-yellow" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-brand-charcoal group-hover:text-brand-yellow">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow" />
                </a>
              ))}            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-12 bg-gradient-to-r from-brand-yellow/10 to-brand-yellow/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-8 border border-brand-yellow/20 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-3">Related Policies</h3>
                  <p className="text-brand-gray-medium">
                    For comprehensive information about how we handle your personal data, 
                    please also review our Privacy Policy.
                  </p>
                </div>
                <a
                  href="/gizlilik-politikasi"
                  className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-charcoal px-6 py-3 rounded-lg font-medium hover:bg-brand-yellow-light transition-colors"
                >
                  <Shield size={18} />
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section id="what-are-cookies" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">What Are Cookies?</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-brand-gray-medium leading-relaxed mb-6">
                Cookies are small text files that are placed on your computer, smartphone, or other device 
                when you visit our website. They contain information that is transferred to your device's 
                hard drive and allow us to recognize your device when you return to our website.
              </p>
              
              <p className="text-brand-gray-medium leading-relaxed mb-6">
                Cookies help us provide you with a better experience by enabling certain functionality, 
                remembering your preferences, and helping us understand how our website is used. They are 
                widely used across the internet to make websites work more efficiently and to provide 
                reporting information.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-900 mb-3">How Cookies Work</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• When you visit our website, cookies are downloaded to your device</li>
                  <li>• They store information about your preferences and browsing behavior</li>
                  <li>• This information is sent back to our servers on subsequent visits</li>
                  <li>• We use this data to enhance your experience and improve our services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section id="types-of-cookies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Settings className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Types of Cookies We Use</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-8 border"
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${cookie.color}`}>
                      <cookie.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-charcoal mb-2">{cookie.name}</h3>
                      <p className="text-brand-gray-medium">{cookie.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brand-charcoal mb-2">Examples:</h4>
                      <ul className="text-sm text-brand-gray-medium space-y-1">
                        {cookie.examples.map((example, i) => (
                          <li key={i}>• {example}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Retention</span>
                        <p className="font-medium text-brand-charcoal">{cookie.retention}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Can Disable</span>
                        <p className={`font-medium ${cookie.canDisable ? 'text-green-600' : 'text-red-600'}`}>
                          {cookie.canDisable ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Collection */}
      <section id="data-collection" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">What Data We Collect</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              Through cookies and similar technologies, we may collect the following types of information 
              to improve your experience and our services:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-brand-charcoal font-medium">{type}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">Data Protection Notice</h3>
              <p className="text-blue-800">
                We take your privacy seriously. All data collection is performed in accordance with GDPR and KVKK 
                regulations. Personal data is anonymized where possible, and we implement appropriate technical and 
                organizational measures to protect your information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Use Cookies */}
      <section id="why-we-use" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Why We Use Cookies</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              We use cookies for several important purposes to enhance your experience and improve our services:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {purposes.map((purpose, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-brand-charcoal mb-3">{purpose.title}</h3>
                  <p className="text-brand-gray-medium">{purpose.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managing Preferences */}
      <section id="managing-preferences" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Managing Your Cookie Preferences</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Website Cookie Settings</h3>
                <p className="text-brand-gray-medium mb-4">
                  You can manage your cookie preferences directly on our website through our cookie consent banner 
                  or by accessing the cookie settings panel.
                </p>
                <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg p-4">
                  <p className="text-brand-charcoal font-medium">
                    Access Cookie Settings: Use the "Cookie Settings" button in the footer of our website or 
                    click the floating cookie icon to modify your preferences at any time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Browser Settings</h3>
                <p className="text-brand-gray-medium mb-4">
                  You can also control cookies through your browser settings. Here's how to manage cookies 
                  in popular browsers:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Google Chrome', instruction: 'Settings > Privacy and Security > Cookies and other site data' },
                    { name: 'Mozilla Firefox', instruction: 'Options > Privacy & Security > Cookies and Site Data' },
                    { name: 'Safari', instruction: 'Preferences > Privacy > Manage Website Data' },
                    { name: 'Microsoft Edge', instruction: 'Settings > Site Permissions > Cookies and site data' }
                  ].map((browser, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-brand-charcoal mb-2">{browser.name}</h4>
                      <p className="text-sm text-brand-gray-medium">{browser.instruction}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-orange-900 mb-3">Important Notice</h3>
                <p className="text-orange-800">
                  Disabling certain cookies may affect the functionality of our website. Strictly necessary 
                  cookies cannot be disabled as they are essential for basic website operation and security.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section id="third-party" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Third-Party Services</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              We use various third-party services that may set their own cookies when you visit our website. 
              These services help us analyze website performance, provide advertising, and enhance functionality.
            </p>

            <div className="space-y-6">
              {thirdPartyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md border"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-brand-charcoal mb-2 md:mb-0">{service.name}</h3>
                    <div className="flex space-x-2">
                      <a 
                        href={service.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <Shield className="w-4 h-4 mr-1" />
                        Privacy Policy
                      </a>
                      <a 
                        href={service.optOut}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-red-600 hover:text-red-800 flex items-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Opt Out
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-brand-charcoal mb-2">Purpose</h4>
                      <p className="text-brand-gray-medium text-sm">{service.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-charcoal mb-2">Cookies Used</h4>
                      <p className="text-brand-gray-medium text-sm font-mono">{service.cookies}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retention Periods */}
      <section id="retention" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Clock className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Cookie Retention Periods</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              Different types of cookies are stored for different periods of time, depending on their purpose 
              and your privacy preferences:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {retentionPeriods.map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 border"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-brand-yellow rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold text-brand-charcoal">{period.type}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-brand-yellow">{period.duration}</span>
                  </div>
                  <p className="text-brand-gray-medium text-sm">{period.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3">Automatic Cleanup</h3>
              <p className="text-green-800">
                We automatically delete expired cookies and regularly review our retention policies to ensure 
                we only keep data for as long as necessary for the specified purposes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Basis */}
      <section id="legal-basis" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Legal Basis for Processing</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              Our use of cookies is based on the following legal grounds under GDPR and KVKK:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Consent (Article 6(1)(a) GDPR)</h3>
                <p className="text-brand-gray-medium mb-4">
                  For non-essential cookies (analytics, marketing, and some functional cookies), we rely on your 
                  explicit consent. You can withdraw your consent at any time through our cookie settings.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Applies to:</strong> Marketing cookies, analytics cookies, social media cookies
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Legitimate Interest (Article 6(1)(f) GDPR)</h3>
                <p className="text-brand-gray-medium mb-4">
                  For some cookies, we rely on legitimate interest to operate our website, provide security, 
                  and improve our services. We balance our interests with your privacy rights.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Applies to:</strong> Strictly necessary cookies, security cookies, basic analytics
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Contractual Necessity (Article 6(1)(b) GDPR)</h3>
                <p className="text-brand-gray-medium mb-4">
                  Some cookies are necessary to provide the services you request from us or to fulfill our 
                  contractual obligations.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Applies to:</strong> Authentication cookies, session management, service delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-3">Your Rights</h3>
              <p className="text-purple-800 mb-3">
                Under GDPR and KVKK, you have the following rights regarding your personal data:
              </p>
              <ul className="text-purple-800 space-y-1 text-sm">
                <li>• Right to access your personal data</li>
                <li>• Right to rectify inaccurate data</li>
                <li>• Right to erase your data (right to be forgotten)</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
                <li>• Right to withdraw consent</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-brand-yellow" />
              </div>
              <h2 className="text-3xl font-bold text-brand-charcoal">Contact Information</h2>
            </div>

            <p className="text-brand-gray-medium leading-relaxed mb-8">
              If you have any questions about our use of cookies or wish to exercise your rights regarding 
              your personal data, please contact us using the information below:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Data Protection Officer</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-yellow mr-3" />
                    <span className="text-brand-gray-medium">privacy@iletisimgroup.com.tr</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-yellow mr-3" />
                    <span className="text-brand-gray-medium">+90 (216) 531 00 00</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-charcoal mb-4">Legal Department</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-yellow mr-3" />
                    <span className="text-brand-gray-medium">legal@iletisimgroup.com.tr</span>
                  </div>
                  <div className="flex items-start">
                    <Globe className="w-5 h-5 text-brand-yellow mr-3 mt-0.5" />
                    <div className="text-brand-gray-medium">
                      <p>Karaman Mah. İzmir Yolu Cd. No:90 Nilpark AVM & Ofis Kat:6 Daire:8</p>
                      <p>Nilüfer, Bursa, Turkey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg p-6">
              <h3 className="font-semibold text-brand-charcoal mb-3">Response Time</h3>
              <p className="text-brand-gray-medium">
                We will respond to your requests within 30 days as required by GDPR and KVKK regulations. 
                For urgent matters, please include "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Notice */}
      <section className="py-12 bg-brand-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Policy Updates</h3>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material 
                changes by posting the updated policy on our website.
              </p>
              <div className="text-gray-400 text-sm">
                <p><strong>Last Updated:</strong> June 11, 2025</p>
                <p><strong>Version:</strong> 2.0</p>
                <p><strong>Next Review:</strong> June 11, 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
