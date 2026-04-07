import LegalPage from '../components/LegalPage';

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" badge="Legal" lastUpdated="April 1, 2026">
      <h2>1. Introduction</h2>
      <p>
        Zippay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our platform, website, and mobile application (collectively, "Services").
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Personal Information</h3>
      <p>We may collect the following personal information:</p>
      <ul>
        <li>Full name, date of birth, gender</li>
        <li>Email address and phone number</li>
        <li>PAN card number and Aadhaar number (for KYC verification)</li>
        <li>Employment details and income information</li>
        <li>Bank account details</li>
        <li>Credit score and credit history (from authorized credit bureaus)</li>
      </ul>

      <h3>2.2 Technical Information</h3>
      <ul>
        <li>Device information (model, OS version, unique identifiers)</li>
        <li>IP address and browser type</li>
        <li>Usage data and interaction patterns</li>
        <li>Location data (with your consent)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal information for the following purposes:</p>
      <ul>
        <li>To process your loan application and assess eligibility</li>
        <li>To verify your identity through KYC processes</li>
        <li>To disburse and manage your loan</li>
        <li>To communicate important updates about your account</li>
        <li>To improve our products and services</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We do not sell your personal information. We may share your data with:
      </p>
      <ul>
        <li>Our NBFC/banking partners for loan processing</li>
        <li>Authorized credit bureaus for credit assessment</li>
        <li>Government authorities as required by law</li>
        <li>Service providers who assist in our operations (under strict confidentiality)</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security measures including 256-bit encryption, SOC2 certified infrastructure, and regular security audits to protect your information from unauthorized access, alteration, or disclosure.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information held by us</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (subject to legal requirements)</li>
        <li>Withdraw consent for data processing</li>
        <li>Lodge a complaint with the relevant data protection authority</li>
      </ul>

      <h2>7. Contact Us</h2>
      <p>
        For privacy-related queries, contact our Data Protection Officer at <a href="mailto:privacy@zippay.in">privacy@zippay.in</a>
      </p>
    </LegalPage>
  );
}
