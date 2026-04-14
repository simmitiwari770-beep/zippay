import LegalPage from "../components/LegalPage";

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" badge="Legal" lastUpdated="April 1, 2026">
      <p className="text-lg leading-relaxed font-medium text-primary-900 mb-8">
        Information provided on the Zippay platform is for general informational purposes only. 
        Credit access is subject to verification, eligibility, and applicable terms. 
        Users are advised to read all conditions carefully before proceeding.
      </p>
      
      <h2>Not Financial Advice</h2>
      <p>
        The content on our platform does not constitute financial, investment, or professional advice. 
        Zippay does not guarantee that you will be approved for a loan or that a loan is suitable for your financial situation.
      </p>

      <h2>Credit Assessment</h2>
      <p>
        Credit decisions are made based on various factors including but not limited to credit score, income, 
        and employment history. The eligibility criteria and credit limits displayed are indicative and 
        may vary based on your actual assessment.
      </p>

      <h2>8. Contact</h2>
      <p>
        For any questions about this disclaimer, contact us at{" "}
        <a href="mailto:legal@zippay.in">legal@zippay.in</a>
      </p>
    </LegalPage>
  );
}
