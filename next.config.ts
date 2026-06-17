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
      // ── Product Category Pages ────────────────────────────────────
      {
        source: "/category/tablet-hardness-tester/:path*",
        destination: "/products/category/hardness-testing",
        permanent: true,
      },
      {
        source: "/category/tablet-friability-tester/:path*",
        destination: "/products/category/friability-testing",
        permanent: true,
      },
      {
        source: "/category/disintegration-tester/:path*",
        destination: "/products/category/disintegration-testing",
        permanent: true,
      },
      {
        source: "/category/dissolution-tester/:path*",
        destination: "/products/category/dissolution-testing",
        permanent: true,
      },
      {
        source: "/category/powder-testing/:path*",
        destination: "/products/category/powder-testing",
        permanent: true,
      },
      {
        source: "/category/leak-test-apparatus/:path*",
        destination: "/products/category/packaging-integrity",
        permanent: true,
      },
      {
        source: "/category/lacquer-porosity-tester/:path*",
        destination: "/products/category/lacquer-porosity-testing",
        permanent: true,
      },
      {
        source: "/category/analytical-instruments/:path*",
        destination: "/products/category/analytical-instruments",
        permanent: true,
      },

      // ── Individual Product Pages ──────────────────────────────────
      {
        source: "/product/tablet-hardness-tester-in-inida/:path*",
        destination: "/products/tablet-hardness-tester-rht-3b",
        permanent: true,
      },
      {
        source: "/product/tablet-friability-testers/:path*",
        destination: "/products/tablet-friability-tester-rft-2p",
        permanent: true,
      },
      {
        source: "/tablet-friability-tester/:path*",
        destination: "/products/tablet-friability-tester-rft-2p",
        permanent: true,
      },
      {
        source: "/tablet-hardness-tester-all-to-know-about/:path*",
        destination: "/products/tablet-hardness-tester-rht-3b",
        permanent: true,
      },
      {
        source: "/vacuum-leak-test-apparatus/:path*",
        destination: "/products/leak-test-apparatus-rlt-2b",
        permanent: true,
      },
      {
        source: "/antibiotic-zone-reader/:path*",
        destination: "/products/antibiotic-zone-reader-mzr",
        permanent: true,
      },
      {
        source: "/digital-lacquer-porosity-tester-aluminum-tubes-cans-bottle-caps-and-foils/:path*",
        destination: "/products/lacquer-porosity-tester-rlt-10b",
        permanent: true,
      },
      {
        source: "/manual-powder-flow-tester-bulk-density/:path*",
        destination: "/products/powder-flow-tester-rpf-1",
        permanent: true,
      },
      {
        source: "/overview-of-the-rss-1-electromagnetic-sieve-shaker-by-raise-lab-equipment/:path*",
        destination: "/products/electromagnetic-sieve-shaker-rss-1",
        permanent: true,
      },
      {
        source: "/the-scott-volumeter-your-essential-tool-for-accurate-bulk-density-testing/:path*",
        destination: "/products/scott-volumeter-rsv-1",
        permanent: true,
      },

      // ── Blog Pages ────────────────────────────────────────────────
      {
        source: "/automated-tablet-disintegration-testing-features-benefits-and-compliance/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/dissolution-tester-calibration-and-validation-process/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/mastering-gmp-cgmp-quality-standards-in-pharma/:path*",
        destination: "/blog",
        permanent: true,
      },

      // ── Tag Pages ─────────────────────────────────────────────────
      {
        source: "/tag/analytical-instruments/:path*",
        destination: "/products/category/analytical-instruments",
        permanent: true,
      },

      // ── Internal Product Slug Redirects ──────────────────────────
      { source: "/products/rht-3b/:path*", destination: "/products/tablet-hardness-tester-rht-3b", permanent: true },
      { source: "/products/rpht-1p/:path*", destination: "/products/manual-hardness-tester-rpht-1p", permanent: true },
      { source: "/products/htds-1p/:path*", destination: "/products/digital-tablet-hardness-tester-htds-1p", permanent: true },
      { source: "/products/htds-3p/:path*", destination: "/products/multi-station-hardness-tester-htds-3p", permanent: true },
      { source: "/products/rft-2p/:path*", destination: "/products/tablet-friability-tester-rft-2p", permanent: true },
      { source: "/products/rft-2b/:path*", destination: "/products/tablet-friability-tester-rft-2b", permanent: true },
      { source: "/products/rgf-1/:path*", destination: "/products/granule-friability-tester-rgf-1", permanent: true },
      { source: "/products/adt-2d/:path*", destination: "/products/automatic-tablet-disintegration-tester-adt-2b", permanent: true },
      { source: "/products/rsdt-3b/:path*", destination: "/products/suppository-disintegration-tester-rsdt-3b", permanent: true },
      { source: "/products/dt-4dd/:path*", destination: "/products/4-station-disintegration-tester-dt-4dd", permanent: true },
      { source: "/products/dt-2d/:path*", destination: "/products/2-station-disintegration-tester-dt-2d", permanent: true },
      { source: "/products/rltdt-08lm/:path*", destination: "/products/tablet-dissolution-tester-rltdt-08lm", permanent: true },
      { source: "/products/rltdt-14lm/:path*", destination: "/products/tablet-dissolution-tester-rltdt-14lm", permanent: true },
      { source: "/products/rltdt-14sa/:path*", destination: "/products/tablet-dissolution-tester-rltdt-14sa", permanent: true },
      { source: "/products/rltdt-08sa/:path*", destination: "/products/dissolution-tester-rltdt-08sa", permanent: true },
      { source: "/products/td-2/:path*", destination: "/products/tapped-density-apparatus-td-2", permanent: true },
      { source: "/products/rss-1/:path*", destination: "/products/electromagnetic-sieve-shaker-rss-1", permanent: true },
      { source: "/products/rss-1c/:path*", destination: "/products/electromagnetic-sieve-shaker-rss-1c", permanent: true },
      { source: "/products/rsv-1/:path*", destination: "/products/scott-volumeter-rsv-1", permanent: true },
      { source: "/products/rpf-1/:path*", destination: "/products/powder-flow-tester-rpf-1", permanent: true },
      { source: "/products/rlt-2b/:path*", destination: "/products/leak-test-apparatus-rlt-2b", permanent: true },
      { source: "/products/rlt-1/:path*", destination: "/products/leak-test-apparatus-rlt-2", permanent: true },
      { source: "/products/rlt-10b/:path*", destination: "/products/lacquer-porosity-tester-rlt-10b", permanent: true },
      { source: "/products/rlt-5b/:path*", destination: "/products/lacquer-porosity-tester-rlt-5b", permanent: true },
      { source: "/products/rabt-3/:path*", destination: "/products/ampoule-breakpoint-tester-rabt-3", permanent: true },
      { source: "/products/mzr/:path*", destination: "/products/antibiotic-zone-reader-mzr", permanent: true },
      {
        source: '/what-is-bulk-density-why-calculation-of-bulk-density-is-important-and-what-are-various-bulk-density-instruments',
        destination: '/blog/what-is-bulk-density-why-calculation-of-bulk-density-is-important-and-what-are-various-bulk-density-instruments',
        permanent: true,
      },
      {
        source: '/what-is-bulk-density-why-calculation-of-bulk-density-is-important-and-what-are-various-bulk-density-instruments/',
        destination: '/blog/what-is-bulk-density-why-calculation-of-bulk-density-is-important-and-what-are-various-bulk-density-instruments',
        permanent: true,
      },
      {
        source: '/comparing-different-types-of-dissolution-testing-equipment-focus-on-tablet-dissolution-tester',
        destination: '/blog/comparing-different-types-of-dissolution-testing-equipment-focus-on-tablet-dissolution-tester',
        permanent: true,
      },
      {
        source: '/comparing-different-types-of-dissolution-testing-equipment-focus-on-tablet-dissolution-tester/',
        destination: '/blog/comparing-different-types-of-dissolution-testing-equipment-focus-on-tablet-dissolution-tester',
        permanent: true,
      },
      {
        source: '/tablet-disintegration-test-apparatus',
        destination: '/blog/tablet-disintegration-test-apparatus',
        permanent: true,
      },
      {
        source: '/tablet-disintegration-test-apparatus/',
        destination: '/blog/tablet-disintegration-test-apparatus',
        permanent: true,
      },
      {
        source: '/mastering-gmp-cgmp-quality-standards-in-pharma',
        destination: '/blog/mastering-gmp-cgmp-quality-standards-in-pharma',
        permanent: true,
      },
      {
        source: '/mastering-gmp-cgmp-quality-standards-in-pharma/',
        destination: '/blog/mastering-gmp-cgmp-quality-standards-in-pharma',
        permanent: true,
      },
      {
        source: '/sieve-shaker-particle-size-analysis',
        destination: '/blog/sieve-shaker-particle-size-analysis',
        permanent: true,
      },
      {
        source: '/sieve-shaker-particle-size-analysis/',
        destination: '/blog/sieve-shaker-particle-size-analysis',
        permanent: true,
      },
      {
        source: '/the-comprehensive-guide-to-package-integrity-testing',
        destination: '/blog/the-comprehensive-guide-to-package-integrity-testing',
        permanent: true,
      },
      {
        source: '/the-comprehensive-guide-to-package-integrity-testing/',
        destination: '/blog/the-comprehensive-guide-to-package-integrity-testing',
        permanent: true,
      },
      {
        source: '/dissolution-tester-usp-1-2-5-6-and-intrinsic-methods',
        destination: '/blog/dissolution-tester-usp-1-2-5-6-and-intrinsic-methods',
        permanent: true,
      },
      {
        source: '/dissolution-tester-usp-1-2-5-6-and-intrinsic-methods/',
        destination: '/blog/dissolution-tester-usp-1-2-5-6-and-intrinsic-methods',
        permanent: true,
      },
      {
        source: '/a-beginners-guide-to-understanding-tablet-dissolution-testing',
        destination: '/blog/a-beginners-guide-to-understanding-tablet-dissolution-testing',
        permanent: true,
      },
      {
        source: '/a-beginners-guide-to-understanding-tablet-dissolution-testing/',
        destination: '/blog/a-beginners-guide-to-understanding-tablet-dissolution-testing',
        permanent: true,
      },
      {
        source: '/key-parameters-for-accurate-tablet-hardness-testing',
        destination: '/blog/key-parameters-for-accurate-tablet-hardness-testing',
        permanent: true,
      },
      {
        source: '/key-parameters-for-accurate-tablet-hardness-testing/',
        destination: '/blog/key-parameters-for-accurate-tablet-hardness-testing',
        permanent: true,
      },
      {
        source: '/analytical-instruments-guide-to-21-cfr-part-11-compliance',
        destination: '/blog/analytical-instruments-guide-to-21-cfr-part-11-compliance',
        permanent: true,
      },
      {
        source: '/analytical-instruments-guide-to-21-cfr-part-11-compliance/',
        destination: '/blog/analytical-instruments-guide-to-21-cfr-part-11-compliance',
        permanent: true,
      },
      {
        source: '/enhancing-wet-sieve-analysis-with-electromagnetic-sieve-shakers-precision-efficiency-and-practical-applications',
        destination: '/blog/enhancing-wet-sieve-analysis-with-electromagnetic-sieve-shakers-precision-efficiency-and-practical-applications',
        permanent: true,
      },
      {
        source: '/enhancing-wet-sieve-analysis-with-electromagnetic-sieve-shakers-precision-efficiency-and-practical-applications/',
        destination: '/blog/enhancing-wet-sieve-analysis-with-electromagnetic-sieve-shakers-precision-efficiency-and-practical-applications',
        permanent: true,
      },
      {
        source: '/the-role-of-tablet-hardness-testers-in-pharmaceutical-industry',
        destination: '/blog/the-role-of-tablet-hardness-testers-in-pharmaceutical-industry',
        permanent: true,
      },
      {
        source: '/the-role-of-tablet-hardness-testers-in-pharmaceutical-industry/',
        destination: '/blog/the-role-of-tablet-hardness-testers-in-pharmaceutical-industry',
        permanent: true,
      },
      {
        source: '/revolutionizing-particle-analysis-the-science-behind-electromagnetic-sieve-shakers',
        destination: '/blog/revolutionizing-particle-analysis-the-science-behind-electromagnetic-sieve-shakers',
        permanent: true,
      },
      {
        source: '/revolutionizing-particle-analysis-the-science-behind-electromagnetic-sieve-shakers/',
        destination: '/blog/revolutionizing-particle-analysis-the-science-behind-electromagnetic-sieve-shakers',
        permanent: true,
      },
      {
        source: '/key-process-precautions-to-ensure-accurate-friability-testing-results',
        destination: '/blog/key-process-precautions-to-ensure-accurate-friability-testing-results',
        permanent: true,
      },
      {
        source: '/key-process-precautions-to-ensure-accurate-friability-testing-results/',
        destination: '/blog/key-process-precautions-to-ensure-accurate-friability-testing-results',
        permanent: true,
      },
      {
        source: '/how-to-do-calibration-to-tablet-hardness-tester-and-what-parameters-need-to-be-tested',
        destination: '/blog/how-to-do-calibration-to-tablet-hardness-tester-and-what-parameters-need-to-be-tested',
        permanent: true,
      },
      {
        source: '/how-to-do-calibration-to-tablet-hardness-tester-and-what-parameters-need-to-be-tested/',
        destination: '/blog/how-to-do-calibration-to-tablet-hardness-tester-and-what-parameters-need-to-be-tested',
        permanent: true,
      },
      {
        source: '/dissolution-tester-calibration-and-validation-process',
        destination: '/blog/dissolution-tester-calibration-and-validation-process',
        permanent: true,
      },
      {
        source: '/dissolution-tester-calibration-and-validation-process/',
        destination: '/blog/dissolution-tester-calibration-and-validation-process',
        permanent: true,
      },
      {
        source: '/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
        destination: '/blog/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
        permanent: true,
      },
      {
        source: '/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards/',
        destination: '/blog/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
        permanent: true,
      },
      {
        source: '/tablet-friability-tester',
        destination: '/blog/tablet-friability-tester-21-cfr-part-11-compliance',
        permanent: true,
      },
      {
        source: '/tablet-friability-tester/',
        destination: '/blog/tablet-friability-tester-21-cfr-part-11-compliance',
        permanent: true,
      },
      {
        source: '/tapped-density-tester-usp-ep-astm',
        destination: '/blog/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
        permanent: true,
      },
      {
        source: '/tapped-density-tester-usp-ep-astm/',
        destination: '/blog/standard-operating-procedure-for-tap-density-apparatus-as-per-usp-standards',
        permanent: true,
      },
      {
        source: '/tablet-hardness-tester-all-to-know-about',
        destination: '/blog/ensuring-tablet-quality-with-hardness-testing',
        permanent: true,
      },
      {
        source: '/tablet-hardness-tester-all-to-know-about/',
        destination: '/blog/ensuring-tablet-quality-with-hardness-testing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
