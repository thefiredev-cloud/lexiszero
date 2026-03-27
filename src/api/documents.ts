import { Router, Request, Response } from 'express';
import { DocumentGenerator } from '../documents/generator';
import { logger } from '../utils/logger';

export const documentsRouter = Router();

documentsRouter.get('/:caseId/:docType', async (req: Request, res: Response) => {
  try {
    const { caseId, docType } = req.params;
    const format = (req.query.format as string) || 'pdf';

    const generator = new DocumentGenerator();
    const doc = await generator.generate(caseId, docType, format);

    if (format === 'pdf') {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="${docType}-${caseId}.pdf"`);
      return res.send(doc);
    }

    return res.json(doc);
  } catch (err) {
    logger.error('Document generation failed', { error: err });
    return res.status(500).json({ error: 'Internal server error' });
  }
});
