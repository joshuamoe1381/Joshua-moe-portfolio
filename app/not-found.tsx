import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid-page flex min-h-[100svh] flex-col justify-end pb-16 pt-[140px]">
      <p className="meta mb-6 text-ink-muted">404</p>
      <h1 className="display-section uppercase">Page not found</h1>
      <Link href="/" className="meta mt-10 inline-flex text-ink">
        Back home →
      </Link>
    </section>
  );
}
