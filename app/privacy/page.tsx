import { Container } from "../../src/components/Container";

export default function PrivacyPage() {
  return (
    <Container>
      <h1 className="h1" style={{ fontSize: 34 }}>Privacy Policy</h1>

      <hr />

      <div className="card">
        <h2 className="h2">What we collect</h2>
        <p className="p">
          If you contact us by email, we receive the information you send (such as your email address and message).
          We do not process payments on this site at this time.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">How we use information</h2>
        <p className="p">
          We use contact messages to respond to inquiries, provide support, and discuss onboarding.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Sharing</h2>
        <p className="p">
          We do not sell your personal information. We may share information if required by law or to protect our rights.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Contact</h2>
        <p className="p">
          Privacy questions: <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>
        </p>
      </div>
    </Container>
  );
}
