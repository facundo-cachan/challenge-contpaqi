import c from "picocolors";

import type { DiffOptions } from "vitest";

export default {
  aIndicator: c.bold("--"),
  bIndicator: c.bold("++"),
  omitAnnotationLines: true,
} satisfies DiffOptions;
