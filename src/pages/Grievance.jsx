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

      <h2>How to Raise a Grievance</h2>
      <p>You can raise a grievance through any of the following channels:</p>
      <ul>
        <li><strong>Email support</strong>: Send your query to grievance@zippay.in.</li>
        <li><strong>In-app request</strong>: Use the support section within the Zippay application.</li>
        <li><strong>Website contact form</strong>: Submit your grievance through our official contact page.</li>
      </ul>

      <h2>Resolution Timeline</h2>
      <p>We are dedicated to resolving your concerns promptly and fairly:</p>
      <ul>
        <li><strong>Acknowledgement</strong>: You will receive an acknowledgement within 48 working hours.</li>
        <li><strong>Resolution</strong>: We aim to provide a final resolution within 7-10 working days.</li>
      </ul>
      <p className="mt-6 text-sm italic text-text-muted">
        Note: Unresolved matters may be escalated for further review to ensuring a fair outcome.
      </p>

      <h2>Escalation Matrix</h2>
      <p>
        If your complaint is not resolved to your satisfaction within 30 days, 
        you may approach the RBI Integrated Ombudsman through the official portal.
      </p>
    </LegalPage>
  );
}
