import LegalPage from "../components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" badge="Legal" lastUpdated="April 1, 2026">
      <h2>1. Introduction</h2>
      <p>
        Zippay ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your personal information when you use our platform, website,
        and mobile application (collectively, "Services").
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect only the information necessary to provide and secure our digital credit services:</p>
      <ul>
        <li><strong>Personal & contact details</strong>: Name, address, and mobile number.</li>
        <li><strong>Device & usage data</strong>: Information about your device and how you interact with our platform.</li>
        <li><strong>Onboarding information</strong>: Data submitted during your application and KYC verification.</li>
      </ul>

      <h2>3. Use of Information</h2>
      <p>Your information is used for specific, legitimate purposes:</p>
      <ul>
        <li><strong>Service delivery</strong>: To process and manage your credit applications.</li>
        <li><strong>User communication</strong>: To keep you informed about your account and updates.</li>
        <li><strong>Security & fraud prevention</strong>: To protect your data and prevent unauthorized activity.</li>
        <li><strong>Legal and regulatory compliance</strong>: To meet required financial and security standards.</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share your data with:
      </p>
      <ul>
        <li>Our NBFC/banking partners for loan processing</li>
        <li>Authorized credit bureaus for credit assessment</li>
        <li>Government authorities as required by law</li>
        <li>
          Service providers who assist in our operations (under strict
          confidentiality)
        </li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security measures including 256-bit
        encryption, SOC2 certified infrastructure, and regular security audits
        to protect your information from unauthorized access, alteration, or
        disclosure.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information held by us</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (subject to legal requirements)</li>
        <li>Withdraw consent for data processing</li>
        <li>Lodge a complaint with the relevant data protection authority</li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>
        For privacy-related queries, contact our Data Protection Officer at{" "}
        <a href="mailto:privacy@zippay.in">privacy@zippay.in</a>
      </p>
    </LegalPage>
  );
}
