import { isBetween, v } from "../../deps.ts";

const isBetween0And200 = isBetween(0, 200);
const invalidStringMessage = "Invalid string length";

// Validierung für Node (Notiz) Einfügen/Aktualisieren
export const nodeValidation = v.object({
  title: v.string().assert(
    isBetween0And200,
    invalidStringMessage,
  ),
  markdownContent: v.string().assert(
    isBetween0And200,
    invalidStringMessage,
  ),
});

// Validierung für Tag Einfügen
export const tagValidation = v.object({
  tagName: v.string().assert(
    isBetween0And200,
    invalidStringMessage,
  ),
});

// Validierung für das Verlinken eines Tags zu einem Node
export const nodeTagLinkValidation = v.object({
  nodeId: v.number(),
  tagId: v.number(),
});

// Validierung für das Einfügen eines Links
export const linkValidation = v.object({
  sourceNodeId: v.number(),
  targetNodeId: v.number(),
  strength: v.number().optional(),
});

// Validierung für das Einfügen eines Bildes
export const imageValidation = v.object({
  imagePath: v.string().assert(
    isBetween0And200,
    invalidStringMessage,
  ),
  description: v.string().optional(),
});

// Validierung für das Verlinken eines Bildes zu einem Node
export const nodeImageLinkValidation = v.object({
  nodeId: v.number(),
  imageId: v.number(),
});
