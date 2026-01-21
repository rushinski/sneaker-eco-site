import { Container } from "../../src/components/Container";

export default function PoliciesPage() {
  return (
    <Container>
      <h1 className="h1" style={{ fontSize: 34 }}>Policies</h1>
      <p className="p" style={{ marginTop: 10, maxWidth: 820 }}>
        These policies apply to SneakerEco’s subscription service (websites for sneaker resellers).
        Individual reseller stores built on our platform set their own return/refund policies for physical goods.
      </p>

      <hr />

      <div className="card">
        <h2 className="h2">Customer Service Contact</h2>
        <p className="p">
          Email: <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Pricing</h2>
        <p className="p">$50 per month (subscription). Taxes are not calculated on this site.</p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Return Policy</h2>
        <p className="p">
          SneakerEco sells a digital subscription service (website access). No physical goods are sold by SneakerEco,
          so physical return shipping does not apply.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Refund & Dispute Policy</h2>
        <p className="p">
          Subscription fees are billed monthly. We do not provide partial-month refunds for unused time after cancellation.
          If you believe you were billed in error, contact us at{" "}
          <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>{" "}
          and we’ll review and work to resolve the issue.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Cancellation Policy</h2>
        <p className="p">
          You can cancel anytime. Your subscription remains active until the end of your current billing cycle.
          Example: cancel on the 5th, next billing date is the 15th → access continues until the 15th.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Legal / Export Restrictions</h2>
        <p className="p">
          Not applicable to SneakerEco’s subscription service at this time.
        </p>
      </div>

      <div style={{ height: 14 }} />

      <div className="card">
        <h2 className="h2">Promotions Terms</h2>
        <p className="p">
          If we offer promotional pricing, it applies only for the stated duration and terms of the promotion.
          After the promotion ends, pricing returns to the standard monthly rate unless otherwise stated.
        </p>
      </div>
    </Container>
  );
}
