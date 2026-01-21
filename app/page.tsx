import { Container } from "../src/components/Container";

export default function HomePage() {
  return (
    <Container>
      <section style={{ padding: "26px 0 10px" }}>
        <h1 className="h1">SneakerEco builds websites for sneaker resellers.</h1>
        <p className="p" style={{ marginTop: 12, maxWidth: 760 }}>
          We sell subscription storefront websites that help resellers launch quickly with a clean,
          professional online presence. No payments are processed on this site yet — for inquiries,
          email us and we’ll help you get set up.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
          <a className="btn" href="mailto:jrushinski@sneakereco.com?subject=SneakerEco%20Inquiry">
            Email: jrushinski@sneakereco.com
          </a>
          <a className="btn" href="/policies">
            View policies
          </a>
        </div>

        <div className="card" style={{ marginTop: 18 }}>
          <div className="h2">$50 / month</div>
          <p className="p">
            Monthly subscription for your reseller website. Cancel anytime — access continues until the end of
            your current billing period.
          </p>
          <p className="small" style={{ marginTop: 10 }}>
            Example: cancel on the 5th, next billing date is the 15th → you keep access until the 15th.
          </p>
        </div>
      </section>

      <section style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: 14 }}>
        <div className="card">
          <div className="h2">What we offer</div>
          <p className="p">
            Subscription-based storefront websites for sneaker resellers (design + setup + ongoing platform access).
          </p>
        </div>

        <div className="card">
          <div className="h2">Seller policies</div>
          <p className="p">
            Each reseller using our websites sets their own store return/refund policies for physical goods.
            SneakerEco’s policies below apply only to the SneakerEco subscription.
          </p>
        </div>

        <div className="card">
          <div className="h2">Need help?</div>
          <p className="p">
            Customer service contact:{" "}
            <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>
          </p>
          <p className="small" style={{ marginTop: 10 }}>
            We respond as quickly as possible during normal business hours.
          </p>
        </div>
      </section>
    </Container>
  );
}
