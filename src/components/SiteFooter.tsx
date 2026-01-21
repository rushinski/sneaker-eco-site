import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.10)", marginTop: 40 }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 800 }}>SneakerEco</div>
            <div className="small">
              Support:{" "}
              <a href="mailto:jrushinski@sneakereco.com">jrushinski@sneakereco.com</a>
            </div>
            <div className="small">© {new Date().getFullYear()} SneakerEco. All rights reserved.</div>
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/policies">Policies</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
