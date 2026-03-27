import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { LegalAnalysisEngine } from '../analysis/engine';
import { logger } from '../utils/logger';

export const casesRouter = Router();

const CaseRequestSchema = z.object({
  case_type: z.enum(['small_claims', 'employment', 'landlord_tenant', 'consumer']),
  jurisdiction: z.string().min(1),
  description: z.string().min(20),
  amount_in_dispute: z.number().positive().optional(),
  defendant: z.object({
    name: z.string(),
    type: z.enum(['individual', 'business']),
    address: z.string().optional(),
  }).optional(),
  evidence: z.array(z.string()).optional(),
  generate_documents: z.boolean().default(true),
});

casesRouter.post('/', async (req: Request, res: Response) => {
  try {
    const parsed = CaseRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request', details: parsed.error.issues });
    }

    const engine = new LegalAnalysisEngine();
    const analysis = await engine.analyze(parsed.data);

    logger.info('Case analyzed', { caseId: analysis.case_id, type: parsed.data.case_type });
    return res.status(201).json(analysis);
  } catch (err) {
    logger.error('Case analysis failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

casesRouter.get('/:caseId', async (req: Request, res: Response) => {
  // TODO: Retrieve case by ID
  return res.status(404).json({ error: 'Not found' });
});
