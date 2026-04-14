import { MarketingLayout } from '@/components/layout/MarketingLayout'
import Banner from '/assets/images/legal-hero-banner.jpg'
import { BASE_URL } from '@/constants/constants'

export default function TermsConditionsPage() {
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
            TERMS AND CONDITIONS
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-gray-600 mb-8">
            Effective Date: October 1st, 2025
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            1. Introduction
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            These Terms and Conditions ("Agreement") outline the legally binding
            terms between you ("User," "you," or "your") and U.S. Vital Documents LLC,
            operating as UK Visa Central ("we," "us," or "our"). This Agreement
            governs your access to and use of our website, mobile applications,
            and all related services (collectively, the "Services").
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
            By using our Services, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions. If
            you do not agree with any part of this Agreement, please refrain
            from using our Services.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            2. About UK Visa Central
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            UK Visa Central is a private, third-party visa assistance platform
            that provides professional support for UK ETA visa applications to
            the United Kingdom. We help users understand visa requirements,
            prepare supporting documentation, and ensure their submissions meet
            standard requirements. Please note that all final visa decisions
            rest solely with the official government or consular authorities. UK
            Visa Portal does not represent or act on behalf of any government
            body, and we cannot guarantee approval of any visa application.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            3. Eligibility and Acceptable Use
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            You may use our Services only if you are at least 18 years old and
            legally capable of entering into binding agreements. If you are
            under 18, you may use the Services only under the supervision of a
            parent or legal guardian who agrees to these Terms. When using our
            Services, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>
                Use the Services for any unlawful, fraudulent, or unauthorized
                purpose
              </span>
            </li>
            <li>
              <span>
                Impersonate any individual, entity, or representative of UK Visa
                Portal
              </span>
            </li>
            <li>
              <span>Provide false, misleading, or incomplete information</span>
            </li>
            <li>
              <span>
                Use bots, scripts, or automated tools to access or interact with
                the Services
              </span>
            </li>
            <li>
              <span>
                Disrupt, interfere with, or attempt to compromise the security
                or functionality of the Services or connected networks
              </span>
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            4. Services We Provide
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            UK Visa Central offers professional support in the following areas:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>Understanding and clarifying UK ETA visa requirements</span>
            </li>
            <li>
              <span>
                Preparing and organizing UK ETA visa application documents
              </span>
            </li>
            <li>
              <span>
                Assisting with submission of applications to relevant
                authorities (when permitted)
              </span>
            </li>
            <li>
              <span>
                Providing continuous updates and customer service throughout the
                process
              </span>
            </li>
          </ul>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Please note that UK Visa Central does not guarantee visa approval.
            All final decisions are made exclusively by the issuing government
            or consular body.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            5. Fees and Payments
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            All service fees are clearly displayed on our website at the time of
            purchase. Fees may include our service or processing fees and
            government fees, when indicated. You are responsible for ensuring
            that:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>Full payment is made before processing begins</span>
            </li>
            <li>
              <span>
                The information provided during payment is accurate and complete
              </span>
            </li>
            <li>
              <span>
                Payments are processed securely through third-party payment
                gateways. We do not store your full payment card information.
              </span>
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            6. Refunds and Cancellations
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            We understand that plans can change, and we're here to help. Please
            note that refund eligibility depends on the status of your
            application at the time your request is made.
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-lg font-semibold text-gray-900 mt-6 mb-3">
            Full refunds may be issued if:
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>
                Your application has not entered internal review
                ("Pre-Processing").
              </span>
            </li>
            <li>
              <span>You made a duplicate payment.</span>
            </li>
            <li>
              <span>A technical issue occurred during payment.</span>
            </li>
          </ul>
          <h3 className="text-lg md:text-xl font-semibold text-lg font-semibold text-gray-900 mt-6 mb-3">
            Partial refunds apply if:
          </h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <span>
                Your application is "In Progress" or requires "Action".
              </span>
            </li>
            <li>
              <span>
                In such cases, the Government Fee is fully refundable and 50% of
                the Processing Fee is refundable to cover manual review work
                already performed.
              </span>
            </li>
          </ul>
          <h3 className="text-lg md:text-xl font-semibold text-lg font-semibold text-gray-900 mt-6 mb-3">
            Refunds cannot be issued if:
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>
                Your application has been submitted to the UK government ("Under
                Review," "Complete," or "Rejected").
              </span>
            </li>
            <li>
              <span>Your ETA has already been approved or rejected.</span>
            </li>
            <li>
              <span>The service has been fully delivered.</span>
            </li>
          </ul>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 italic">
            By completing your purchase, you agree that processing may begin
            immediately and acknowledge that this affects your eligibility for a
            full refund.
          </p>
          <h3 className="text-lg md:text-xl font-semibold text-lg font-semibold text-gray-900 mt-6 mb-3">
            Refund timelines:
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>
                Refund requests (where eligible) will be reviewed within 24–48
                hours.
              </span>
            </li>
            <li>
              <span>
                Approved refunds will be processed to your original payment
                method within 3–7 business days, depending on your bank or
                payment provider.
              </span>
            </li>
          </ul>
          <h3 className="text-lg md:text-xl font-semibold text-lg font-semibold text-gray-900 mt-6 mb-3">
            How to request a refund:
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-2">
            Submit your request at:
          </p>
          <p className="mb-6">
            <a
              href="https://www.uk.ukvisaportals.com/refund"
              className="text-primary hover:underline"
            >
              <span>www.uk.ukvisaportals.com/refund</span>
            </a>
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            7. Accuracy of Information
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            You are solely responsible for the accuracy of all data and
            documents submitted through our Services. Submitting false,
            incorrect, or incomplete information may result in delays or
            rejection of your visa application. UK Visa Central shall not be held
            liable for errors, delays, or rejections resulting from inaccurate
            information provided by users.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            8. Communications and Notifications
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            By using our Services, you consent to receive communications from us
            electronically. This may include emails, SMS messages, and web-based
            notifications regarding order confirmations, application updates,
            service announcements, and promotional offers. You may opt out of
            promotional communications at any time, though essential
            service-related messages will continue to be sent.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            9. Intellectual Property
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            All content available on the UK Visa Central website and applications
            — including text, graphics, logos, icons, software, and layout
            design — is the intellectual property of U.S. Vital Documents LLC or its
            licensors. You may not reproduce, modify, distribute, or use this
            content without our prior written consent.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            10. Privacy
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Your use of the Services is subject to our Privacy Policy, which
            details how we collect, store, and use your personal information. By
            using our Services, you consent to the collection and processing of
            your data in accordance with that policy.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            11. Disclaimer of Warranties
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Our Services are provided on an "as is" and "as available" basis. We
            make no representations or warranties, express or implied, regarding
            the accuracy, completeness, reliability, or suitability of any
            information, service, or outcome. Visa outcomes depend entirely on
            government authorities, and we do not guarantee approvals or
            processing times.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            12. Limitation of Liability
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            To the fullest extent permitted by law, U.S. Vital Documents LLC shall not
            be liable for any indirect, incidental, special, or consequential
            damages resulting from:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>Delays or rejections of UK ETA applications</span>
            </li>
            <li>
              <span>Service disruptions or technical issues</span>
            </li>
            <li>
              <span>Loss of data or access</span>
            </li>
            <li>
              <span>Reliance on information obtained through the Services</span>
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            13. Indemnification
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            You agree to defend, indemnify, and hold harmless Active Leadgen
            LLC, its officers, employees, agents, and affiliates from and
            against any claims, losses, liabilities, damages, or expenses
            (including legal fees) arising out of:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <span>Your misuse of the Services</span>
            </li>
            <li>
              <span>Your violation of this Agreement</span>
            </li>
            <li>
              <span>Your breach of applicable laws or third-party rights</span>
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            14. Third-Party Services and Links
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            Our platform may include links to or integrations with third-party
            websites, tools, or services. We are not responsible for the
            content, policies, or practices of these third parties. Your use of
            external websites or tools is entirely at your own risk.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            15. Changes to This Agreement
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            We may revise this Agreement from time to time. The latest version
            will always be posted on our website, with the updated Effective
            Date indicated at the top. By continuing to use our Services after
            any changes, you agree to the updated Terms and Conditions.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            16. Governing Law and Jurisdiction
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            This Agreement shall be governed by and construed in accordance with
            the laws of the United Arab Emirates. Any disputes shall be resolved
            exclusively in the courts located in Sharjah - United Arab Emirates,
            unless otherwise agreed under binding arbitration.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-2xl font-bold text-gray-900 mt-12 mb-6">
            17. Contact Us
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
            For any questions or concerns regarding these Terms, please <a
              href={`${BASE_URL}/contact`}
              className="text-primary hover:underline"
            >contact us</a>
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            We aim to respond to all inquiries within 12 hours.
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
            We retain data for as long as necessary to provide our Services and
            comply with legal obligations.
          </p>
        </div>
      </div>
    </MarketingLayout>
  )
}
