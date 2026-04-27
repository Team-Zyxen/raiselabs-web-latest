import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },

  async redirects() {
    return [
      // ── Homepage ──────────────────────────────────────────────────
      {
        source: "/",
        destination: "https://www.raiselabequip.com/",
        permanent: true,
      },

      // ── Product Category Pages ────────────────────────────────────
      {
        source: "/category/tablet-hardness-tester",
        destination: "/products/category/hardness-testing",
        permanent: true,
      },
      {
        source: "/category/tablet-friability-tester",
        destination: "/products/category/friability-testing",
        permanent: true,
      },
      {
        source: "/category/disintegration-tester",
        destination: "/products/category/disintegration-testing",
        permanent: true,
      },
      {
        source: "/category/dissolution-tester",
        destination: "/products/category/dissolution-testing",
        permanent: true,
      },
      {
        source: "/category/powder-testing",
        destination: "/products/category/powder-testing",
        permanent: true,
      },
      {
        source: "/category/leak-test-apparatus",
        destination: "/products/category/packaging-integrity",
        permanent: true,
      },
      {
        source: "/category/lacquer-porosity-tester",
        destination: "/products/category/lacquer-porosity-testing",
        permanent: true,
      },
      {
        source: "/category/analytical-instruments",
        destination: "/products/category/analytical-instruments",
        permanent: true,
      },

      // ── Individual Product Pages ──────────────────────────────────
      {
        source: "/product/tablet-hardness-tester-in-inida",
        destination: "/products/tablet-hardness-tester-rht-3b",
        permanent: true,
      },
      {
        source: "/product/tablet-friability-testers",
        destination: "/products/tablet-friability-tester-rft-2p",
        permanent: true,
      },
      {
        source: "/tablet-friability-tester",
        destination: "/products/tablet-friability-tester-rft-2p",
        permanent: true,
      },
      {
        source: "/tablet-hardness-tester-all-to-know-about",
        destination: "/products/tablet-hardness-tester-rht-3b",
        permanent: true,
      },
      {
        source: "/vacuum-leak-test-apparatus",
        destination: "/products/category/packaging-integrity",
        permanent: true,
      },
      {
        source: "/antibiotic-zone-reader",
        destination: "/products/antibiotic-zone-reader-mzr",
        permanent: true,
      },
      {
        source: "/digital-lacquer-porosity-tester-aluminum-tubes-cans-bottle-caps-and-foils",
        destination: "/products/lacquer-porosity-tester-rlt-10b",
        permanent: true,
      },
      {
        source: "/manual-powder-flow-tester-bulk-density",
        destination: "/products/powder-flow-tester-rpf-1",
        permanent: true,
      },
      {
        source: "/overview-of-the-rss-1-electromagnetic-sieve-shaker-by-raise-lab-equipment",
        destination: "/products/electromagnetic-sieve-shaker-rss-1",
        permanent: true,
      },
      {
        source: "/the-scott-volumeter-your-essential-tool-for-accurate-bulk-density-testing",
        destination: "/products/scott-volumeter-rsv-1",
        permanent: true,
      },

      // ── Blog / Article Pages ──────────────────────────────────────
      {
        source: "/automated-tablet-disintegration-testing-features-benefits-and-compliance",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/dissolution-tester-calibration-and-validation-process",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/mastering-gmp-cgmp-quality-standards-in-pharma",
        destination: "/blog",
        permanent: true,
      },

      // ── Tag / Archive Pages ───────────────────────────────────────
      {
        source: "/tag/analytical-instruments",
        destination: "/products/category/analytical-instruments",
        permanent: true,
      },

      // ── Internal descriptive slug redirects ───────────────────────
      { source: "/products/rht-3b", destination: "/products/tablet-hardness-tester-rht-3b", permanent: true },
      { source: "/products/rpht-1p", destination: "/products/manual-hardness-tester-rpht-1p", permanent: true },
      { source: "/products/htds-1p", destination: "/products/digital-tablet-hardness-tester-htds-1p", permanent: true },
      { source: "/products/htds-3p", destination: "/products/multi-station-hardness-tester-htds-3p", permanent: true },
      { source: "/products/rft-2p", destination: "/products/tablet-friability-tester-rft-2p", permanent: true },
      { source: "/products/rft-2b", destination: "/products/tablet-friability-tester-rft-2b", permanent: true },
      { source: "/products/rgf-1", destination: "/products/granule-friability-tester-rgf-1", permanent: true },
      { source: "/products/adt-2d", destination: "/products/automatic-tablet-disintegration-tester-adt-2b", permanent: true },
      { source: "/products/rsdt-3b", destination: "/products/suppository-disintegration-tester-rsdt-3b", permanent: true },
      { source: "/products/dt-4dd", destination: "/products/4-station-disintegration-tester-dt-4dd", permanent: true },
      { source: "/products/dt-2d", destination: "/products/2-station-disintegration-tester-dt-2d", permanent: true },
      { source: "/products/rltdt-08lm", destination: "/products/tablet-dissolution-tester-rltdt-08lm", permanent: true },
      { source: "/products/rltdt-14lm", destination: "/products/tablet-dissolution-tester-rltdt-14lm", permanent: true },
      { source: "/products/rltdt-14sa", destination: "/products/tablet-dissolution-tester-rltdt-14sa", permanent: true },
      { source: "/products/rltdt-08sa", destination: "/products/dissolution-tester-rltdt-08sa", permanent: true },
      { source: "/products/td-2", destination: "/products/tapped-density-apparatus-td-2", permanent: true },
      { source: "/products/rss-1", destination: "/products/electromagnetic-sieve-shaker-rss-1", permanent: true },
      { source: "/products/rss-1c", destination: "/products/electromagnetic-sieve-shaker-rss-1c", permanent: true },
      { source: "/products/rsv-1", destination: "/products/scott-volumeter-rsv-1", permanent: true },
      { source: "/products/rpf-1", destination: "/products/powder-flow-tester-rpf-1", permanent: true },
      { source: "/products/rlt-2b", destination: "/products/leak-test-apparatus-rlt-2b", permanent: true },
      { source: "/products/rlt-1", destination: "/products/leak-test-apparatus-rlt-2", permanent: true },
      { source: "/products/rlt-10b", destination: "/products/lacquer-porosity-tester-rlt-10b", permanent: true },
      { source: "/products/rlt-5b", destination: "/products/lacquer-porosity-tester-rlt-5b", permanent: true },
      { source: "/products/rabt-3", destination: "/products/ampoule-breakpoint-tester-rabt-3", permanent: true },
      { source: "/products/mzr", destination: "/products/antibiotic-zone-reader-mzr", permanent: true },
    ];
  },
};

export default nextConfig;
