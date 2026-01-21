import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <Image src="/images/logo.jpg" alt="SneakerEco logo" width={44} height={44} priority />
            <div>
              <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>SneakerEco</div>
              <div className="small">Websites for sneaker resellers</div>
            </div>
          </Link>

          <nav style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/policies">Policies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a className="btn" href="mailto:jrushinski@sneakereco.com?subject=SneakerEco%20Inquiry">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}