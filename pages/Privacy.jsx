// Privacy Policy page — same structure & language as premier.law, rebranded to PEP

function PrivacyPage() {
  const T = window.PEP;

  const H2 = ({ children, id }) => (
    <h2 id={id} style={{
      fontFamily: T.display, fontWeight: 400, fontSize: 36, letterSpacing: -0.8,
      lineHeight: 1.15, margin: '56px 0 18px', color: T.ink, scrollMarginTop: 28,
    }}>{children}</h2>
  );

  const P = ({ children }) => (
    <p style={{ fontSize: 16, lineHeight: 1.75, color: T.ink, margin: '0 0 16px' }}>{children}</p>
  );

  return (
    <window.PEPPage current={null}>
      <window.PEPHero
        eyebrow="Privacy & Legal"
        title="Privacy"
        italic="policy."
        lede="How Premier Estate Planning collects, uses, and protects information you share through this website."
      />

      <section style={{ padding: '64px 40px 96px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <P>
            Welcome to the Premier Estate Planning PLLC (&ldquo;Premier Estate Planning&rdquo;) website. Premier Estate Planning has created this privacy statement to demonstrate its firm commitment to privacy for Premier Estate Planning clients and other website users and to disclose its information gathering and dissemination practices. If you have any questions regarding this Privacy Policy or the practices of this website, please contact us at 813.330.0136 or info@pep.law.
          </P>

          <H2>Information Collected</H2>
          <P>
            Premier Estate Planning collects &ldquo;Non-Personal Information&rdquo; and &ldquo;Personal Information.&rdquo; Non-Personal Information includes information that cannot be used to personally identify you, such as anonymous usage data, general demographic information we may collect, referring/exit pages and URLs, platform types, preferences you submit and preferences that are generated based on the data you submit and number of clicks. Personal Information includes contact information which you submit to us through the website&rsquo;s contact form(s).
          </P>

          <H2>Server Log Information</H2>
          <P>
            When you visit the Premier Estate Planning website, you are identified as a unique IP address that is automatically collected in server logs. Premier Estate Planning uses this information to help diagnose problems with our server and to analyze server traffic to learn which pages on Premier Estate Planning&rsquo;s website receive more or fewer visitors. This information is anonymous and cannot be traced back to a specific individual. The server log also can tell us the time and date of access, which browser you are using, and the name of the website you came from (known as the &ldquo;referring URL&rdquo;).
          </P>

          <H2>Cookies</H2>
          <P>
            When you visit the Premier Estate Planning website, we track certain Non-Personal Information using cookies, small text files which include an anonymous unique identifier. Premier Estate Planning may use both persistent and session cookies; persistent cookies remain on your computer after you close your session and until you delete them, while session cookies expire when you close your browser. Sending a cookie to a user&rsquo;s browser enables us to collect Non-Personal Information about that user and keep a record of the user&rsquo;s preferences when utilizing our website.
          </P>

          <H2>User-Input Personal Information</H2>
          <P>
            Premier Estate Planning collects Personal Information in the course of providing legal services to clients and as provided by visitors to its website. We store all user-input data, including Personal Information, sent through the website&rsquo;s contact form(s).
          </P>
          <P>
            Current and future services on the Premier Estate Planning website may require users to set up an account and provide names, email addresses, billing and delivery information, credit card or other financial account information, and other Personal Information. By providing this Personal Information, you can transact business via the Internet, which in the past required telephone or mail contact with Premier Estate Planning.
          </P>
          <P>
            Users are responsible for maintaining the confidentiality of any accounts and passwords they create and agree to accept responsibility for all activities that occur under those accounts and passwords.
          </P>

          <H2>How Information Is Used &amp; Shared</H2>
          <P>
            <strong>Personal Information:</strong> Except as otherwise stated in this Privacy Policy, we DO NOT disclose any Personal Information to unrelated parties outside of the firm except in limited circumstances. Such circumstances include disclosures to our agents or data processors or other contractors acting on our behalf and at our direction, subject to appropriate confidentiality, privacy and information security commitments provided by the receiving party, or where we believe it necessary to provide a service which you have requested, or as permitted or required by law, or as otherwise authorized or directed by you. Consistent with our professional obligations, we may provide Personal Information to regulatory authorities and law enforcement officials in accordance with applicable law or when we otherwise believe in good faith that the provision of such information is required or permitted by law, such as in connection with the investigation or assertion of our legal defenses or for our compliance matters.
          </P>
          <P>
            We will use and process your Personal Information for providing, promoting, and improving our legal services and complying with our legal and ethical obligations related to those legal services. In general, the Personal Information you provide to us is used to help us communicate with you. For example, we use Personal Information to contact clients regarding their representation, contact users in response to questions, solicit feedback from users, provide technical support, and inform users about promotional offers.
          </P>
          <P>
            <strong>Non-Personal Information:</strong> In general, we use Non-Personal Information to help us improve the website and customize the user experience. We also aggregate Non-Personal Information in order to track traffic and analyze use patterns on the website. This Privacy Policy does not limit in any way our use or disclosure of Non-Personal Information and we reserve the right to use and disclose anonymous, aggregate, Non-Personal Information to our partners, advertisers, and other reputable third parties at our discretion.
          </P>

          <H2>Linked Sites</H2>
          <P>
            The Premier Estate Planning website contains links to other external websites (&ldquo;linked sites&rdquo;) that we believe may be useful to Premier Estate Planning users and the public. Premier Estate Planning is not responsible for the content, business practices, or privacy practices of linked sites. This Privacy Policy applies solely to information collected by us through this website.
          </P>

          <H2>Security</H2>
          <P>
            The Premier Estate Planning website has security measures in place to protect your information from unauthorized access. We further protect your information from potential security breaches by implementing certain technological security measures including encryption, firewalls, and secure socket layer (&ldquo;SSL&rdquo;) technology. Only authorized employees, agents, and contractors (who have agreed to keep information secure and confidential) have access to this information.
          </P>
          <P>
            Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. Accordingly, and despite our efforts, Premier Estate Planning cannot guarantee or warrant that your information will not be accessed, disclosed, altered, or destroyed by breach of such firewalls and secure server software. By using our website, you acknowledge that you understand and agree to assume these risks.
          </P>

          <H2>Changes to Our Privacy Policy</H2>
          <P>
            Premier Estate Planning reserves the right to revise this policy at any time without advance notice. Please review the policy periodically for changes. We will endeavor to provide notice ahead of significant changes by email or through a notice on the website.
          </P>

          <H2 id="disclaimer">Legal Disclaimer</H2>
          <P>
            The hiring of a lawyer is an important decision and should not be based solely on advertisements. Before you decide, you may request free written information about our attorneys&rsquo; qualifications and experience.
          </P>
          <P>
            This website is provided for informational purposes only and does not constitute legal advice. The information here is not a substitute for consulting with an attorney and does not create an attorney-client relationship. You should always seek professional legal counsel for advice regarding your specific situation.
          </P>
          <P>
            Because laws change frequently and some content relies on external sources, we do not warrant or guarantee the accuracy, completeness, or availability of the information provided on this site or any linked third-party websites. Links to other sites are offered solely as a convenience and do not imply endorsement.
          </P>
          <P>
            You should never delay seeking legal advice, disregard professional guidance, or start or stop any legal action based solely on information from this website. Always consult a qualified attorney for advice tailored to your circumstances.
          </P>
        </div>
      </section>
    </window.PEPPage>
  );
}

window.PrivacyPage = PrivacyPage;
