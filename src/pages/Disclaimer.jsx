import LegalPage from "../components/LegalPage";

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" badge="Legal" lastUpdated="April 1, 2026">
      <h2>1. General Disclaimer</h2>
      <p>
        The information provided on the Zippay platform is for general
        informational purposes only. While we strive to keep the information up
        to date and accurate, we make no representations or warranties of any
        kind about the completeness, accuracy, reliability, suitability, or
        availability of the information, products, services, or related graphics
        contained on the platform.
      </p>

      <h2>2. Not Financial Advice</h2>
      <p>
        The content on our platform does not constitute financial, investment,
        or professional advice. You should consult with qualified financial
        advisors before making any financial decisions. Zippay does not
        guarantee that you will be approved for a loan or that a loan is
        suitable for your financial situation.
      </p>

      <h2>3. Third-Party Links</h2>
      <p>
        Our platform may contain links to third-party websites. These links are
        provided for your convenience only. We do not endorse or take any
        responsibility for the content, privacy policies, or practices of
        third-party websites.
      </p>

      <h2>4. Credit Assessment</h2>
      <p>
        Credit decisions are made based on various factors including but not
        limited to credit score, income, employment history, and other criteria.
        The eligibility criteria and credit limits displayed on our platform are
        indicative and may vary based on your actual assessment.
      </p>

      <h2>5. Interest Rates</h2>
      <p>
        Interest rates displayed on our platform are subject to change and may
        vary based on your credit profile, loan amount, tenure, and prevailing
        market conditions. The final interest rate applicable to your loan will
        be communicated at the time of offer.
      </p>

      <h2>6. Availability</h2>
      <p>
        Our services may not be available in all regions or to all applicants.
        We reserve the right to modify, suspend, or discontinue any aspect of
        our services at any time without prior notice.
      </p>

      <h2>7. Limitation</h2>
      <p>
        To the fullest extent permitted by law, Zippay disclaims all warranties,
        express or implied, including implied warranties of merchantability and
        fitness for a particular purpose.
      </p>

      <h2>8. Contact</h2>
      <p>
        For any questions about this disclaimer, contact us at{" "}
        <a href="mailto:legal@zippay.in">legal@zippay.in</a>
      </p>
    </LegalPage>
  );
}
