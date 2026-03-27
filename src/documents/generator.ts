import { PDFDocument } from 'pdf-lib';

/**
 * Document Generator
 * Generates court-ready legal documents from case data.
 * Supports: demand letters, complaints, motions, declarations, responses.
 */

const SUPPORTED_DOCS = [
  'demand_letter',
  'small_claims_complaint',
  'employment_complaint',
  'ud_response',
  'habitability_complaint',
  'security_deposit_demand',
  'consumer_complaint',
  'declaration',
] as const;

export type DocumentType = typeof SUPPORTED_DOCS[number];

export class DocumentGenerator {
  async generate(caseId: string, docType: string, format: string): Promise<Buffer | Record<string, unknown>> {
    if (!SUPPORTED_DOCS.includes(docType as DocumentType)) {
      throw new Error(`Unsupported document type: ${docType}`);
    }

    // TODO: Fetch case data, apply document template, populate with LLM
    if (format === 'pdf') {
      const doc = await PDFDocument.create();
      return Buffer.from(await doc.save());
    }

    return { case_id: caseId, doc_type: docType, status: 'pending' };
  }
}
