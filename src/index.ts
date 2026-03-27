import express from 'express';
import dotenv from 'dotenv';
import { casesRouter } from './api/cases';
import { documentsRouter } from './api/documents';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok', service: 'lexiszero' }));
app.use('/v1/cases', casesRouter);
app.use('/v1/documents', documentsRouter);

app.listen(PORT, () => {
  logger.info(`Lexis Zero API running on port ${PORT}`);
});

export default app;
