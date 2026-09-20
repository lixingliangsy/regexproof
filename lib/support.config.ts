import { KB } from "./agent/kb";
import type { SupportConfig } from "./support-kit/types";

export const SUPPORT: SupportConfig = {
  productSlug: "regexproof",
  productName: "RegexProof",
  feedbackEmail: process.env.FEEDBACK_TO_EMAIL || "lixingliangsy@163.com",
  kb: KB,
  chatHost: process.env.APP_URL || "https://regexproof.lxsaihub.com",
  brandColor: "#7C3AED",
  complianceDisclaimer: "RegexProof is a regex-generation tool and does not constitute legal or professional advice; for compliance topics, consult a qualified advisor.",
};
