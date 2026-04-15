import { MarketingLayout } from '@/components/layout/MarketingLayout'
import Banner from '/assets/images/legal-hero-banner.webp'
import { BASE_URL } from '@/constants/constants'

export default function PrivacyPolicyPage() {
  return (
    <MarketingLayout>
      <section className="relative h-[210px] md:h-[240px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
          aria-hidden
        />
        <div className="relative h-full flex items-center justify-center px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold md:text-5xl text-3xl font-bold text-white">
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-8">
                1. Introduction
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                This Privacy Policy describes how U.S. Vital Documents LLC, operating
                under the brand name UK Visa Central (&quot;UK Visa Central,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), collects,
                uses, discloses, and protects the personal data of users who
                interact with our website, mobile applications, and related
                services (collectively, the &quot;Services&quot;).
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                By accessing or using our Services, you agree to this Privacy
                Policy and our Terms of Service. If you do not agree, please
                refrain from using our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                2. Information We Collect
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-xl font-semibold text-primary mt-8 mb-4">
                A. Information You Provide Directly
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                We collect personal data that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Contact us with questions or support inquiries</li>
                <li>Register an account on UK Visa Central</li>
                <li>Apply for a visa or other travel documentation</li>
                <li>Subscribe to newsletters or marketing communications</li>
                <li>
                  Participate in surveys, promotions, or feedback requests
                </li>
                <li>Engage with our customer support</li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Depending on your request or visa type, we may collect the
                following information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Home and mailing address</li>
                <li>Date and place of birth</li>
                <li>Citizenship and nationality</li>
                <li>Occupation</li>
                <li>
                  Passport number, issue and expiry dates, issuing authority,
                  and photo
                </li>
                <li>Criminal and travel history (where legally required)</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold text-xl font-semibold text-primary mt-8 mb-4">
                B. Information Collected Automatically
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                When you use our Services, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and device type</li>
                <li>Browser and operating system information</li>
                <li>Pages viewed, visit duration, and click behavior</li>
                <li>Referring and exit URLs</li>
                <li>General geographic location (based on IP)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                3. How We Use Your Information
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                We process your data to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide, operate, and fulfill our Services</li>
                <li>Process payments and verify transactions</li>
                <li>
                  Communicate with you regarding your application or inquiries
                </li>
                <li>Improve website performance and user experience</li>
                <li>
                  Send important updates or promotional content (with consent)
                </li>
                <li>Prevent fraud and ensure data integrity</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                4. Sharing Your Information
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Service providers such as payment processors, analytics
                  platforms, and IT support partners
                </li>
                <li>
                  Government or consular authorities to facilitate visa
                  applications
                </li>
                <li>
                  Legal authorities when required by law or in response to valid
                  legal requests
                </li>
                <li>
                  Successor entities in the event of a merger, acquisition, or
                  sale of assets
                </li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                5. Data Security
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We implement industry-standard security measures such as
                encryption, access controls, and secure data storage to protect
                your information. While we strive to safeguard your data, no
                system or transmission method over the internet is completely
                secure. You share your data with us at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                6. Your Rights
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Restrict or object to data processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent for marketing or data processing</li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                To exercise your rights, please <a
              href={`${BASE_URL}/contact`}
              className="text-primary hover:underline"
            >contact us</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                7. Data Transfers
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Your personal data may be stored or processed outside your
                country of residence, including the UAE. When we transfer data
                internationally, we take appropriate steps to ensure compliance
                with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                8. Data Retention
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We retain personal data only as long as necessary to deliver our
                Services, fulfill legal and regulatory obligations, resolve
                disputes and enforce agreements. When no longer needed, data is
                securely deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Our Services are not intended for individuals under 18 years of
                age. We do not knowingly collect or process personal information
                from minors. If you believe a minor has provided us with
                personal data, please contact us immediately so we can remove
                it.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                10. Third-Party Links
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Our Services may contain links to external websites operated by
                third parties. We are not responsible for the content, security,
                or privacy practices of those websites. We encourage you to
                review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                11. Changes to This Policy
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal obligations. When we make
                changes, we will update the Effective Date at the top of this
                page. Your continued use of the Services after such updates
                constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                12. GDPR Compliance (EEA Users)
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), your
                personal data is processed in accordance with the General Data
                Protection Regulation (GDPR).
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Request access to your data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion (&quot;right to be forgotten&quot;)</li>
                <li>Restrict or object to processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                You also have the right to file a complaint with your local data
                protection authority.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                13. CCPA Compliance (California Residents)
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                If you are a California resident, you are entitled to the rights
                provided under the California Consumer Privacy Act (CCPA),
                including the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Know what personal data we collect and how it is used</li>
                <li>Request deletion of your personal data</li>
                <li>
                  Opt out of any sale of personal data (note: we do not sell
                  personal information)
                </li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                To submit a CCPA request, please <a href={`${BASE_URL}/contact`} className="text-primary hover:underline">contact us</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
                14. Contact Us
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                If you have any questions or concerns about this Privacy Policy,
                please <a href={`${BASE_URL}/contact`} className="text-primary hover:underline">contact us</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
