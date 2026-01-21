import { Container } from "../../src/components/Container";

export default function TermsPage() {
  return (
    <Container>
      <h1 className="h1" style={{ fontSize: 34 }}>Terms of Service</h1>
      <p className="small" style={{ marginTop: 8 }}>
        Business name: <strong>SneakerEco</strong>
      </p>

      <hr />

      <div className="card">
        <h2 className="h2">1) What we provide</h2>
        <p className="p">
          SneakerEco provides subscription access to websites built for sneaker resellers. Features and setup
          details may vary by plan and will be confirmed during onboarding.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">2) Subscription & billing</h2>
        <p className="p">
          The current listed price is $50/month. If pricing changes, we will provide notice before changes take effect.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">3) Cancellation</h2>
        <p className="p">
          You can cancel anytime. Service remains active through the end of the current billing period.
          We do not provide partial-month refunds for unused time after cancellation.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">4) Acceptable use</h2>
        <p className="p">
          You agree not to use SneakerEco services for unlawful activity, fraud, or abusive behavior.
          We may suspend service for violations or to protect the platform.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">5) Support</h2>
        <p className="p">
          Contact: <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">6) Changes</h2>
        <p className="p">
          We may update these Terms from time to time. Continued use of the service after updates constitutes acceptance.
        </p>
      </div>
    </Container>
  );
}
