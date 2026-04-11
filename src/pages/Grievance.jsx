import LegalPage from "../components/LegalPage";

export default function Grievance() {
  return (
    <LegalPage
      title="Grievance Redressal"
      badge="Legal"
      lastUpdated="April 1, 2026"
    >
      <h2>1. Our Commitment</h2>
      <p>
        Zippay is committed to providing a fair, transparent, and efficient
        grievance redressal mechanism. We take every complaint seriously and aim
        to resolve all issues promptly and satisfactorily.
      </p>

      <h2>2. How to File a Complaint</h2>
      <p>You can raise a grievance through any of the following channels:</p>
      <ul>
        <li>
          <strong>Email:</strong> Send your complaint to{" "}
          <a href="mailto:grievance@zippay.in">grievance@zippay.in</a>
        </li>
        <li>
          <strong>In-App:</strong> Use the "Help & Support" section in the
          Zippay app
        </li>
        <li>
          <strong>Phone:</strong> Call our helpline at 1800-XXX-XXXX (toll-free)
        </li>
        <li>
          <strong>Written:</strong> Send a letter to our registered office
          address
        </li>
      </ul>

      <h2>3. Information Required</h2>
      <p>When filing a complaint, please provide:</p>
      <ul>
        <li>Your full name and registered contact details</li>
        <li>Loan account number (if applicable)</li>
        <li>Detailed description of the issue</li>
        <li>Any supporting documents or screenshots</li>
        <li>Your expected resolution</li>
      </ul>

      <h2>4. Escalation Matrix</h2>

      <h3>Level 1: Customer Support</h3>
      <p>
        All complaints are first handled by our Customer Support team. We aim to
        resolve Level 1 complaints within <strong>3 business days</strong>.
      </p>

      <h3>Level 2: Grievance Officer</h3>
      <p>
        If you're not satisfied with the Level 1 resolution, you can escalate to
        our Grievance Officer:
      </p>
      <ul>
        <li>
          <strong>Name:</strong> [Grievance Officer Name]
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:grievance@zippay.in">grievance@zippay.in</a>
        </li>
        <li>
          <strong>Response Time:</strong> Within 7 business days
        </li>
      </ul>

      <h3>Level 3: Nodal Officer</h3>
      <p>
        If the grievance remains unresolved after Level 2, you may escalate to
        the Nodal Officer. The Nodal Officer will provide a final resolution
        within <strong>15 business days</strong>.
      </p>

      <h2>5. RBI Ombudsman</h2>
      <p>
        If your complaint is not resolved to your satisfaction within 30 days,
        you may approach the RBI Integrated Ombudsman through the CPGRAMS portal
        at{" "}
        <a
          href="https://cms.rbi.org.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cms.rbi.org.in
        </a>
      </p>

      <h2>6. Our Promise</h2>
      <ul>
        <li>Acknowledge every complaint within 24 hours</li>
        <li>Provide regular updates on resolution progress</li>
        <li>Treat every complainant with dignity and respect</li>
        <li>Take corrective action to prevent recurrence</li>
        <li>Maintain complete records of all grievances</li>
      </ul>
    </LegalPage>
  );
}
