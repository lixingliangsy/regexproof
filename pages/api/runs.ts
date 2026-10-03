// pages/api/runs.ts — L2: list + export past workflow runs (owned by this product).
import type { NextApiRequest, NextApiResponse } from 'next'
import { PRODUCT } from '../../lib/product'
import { exportRuns } from '../../lib/runStore'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const slug = PRODUCT.slug
  try {
    if (req.query.format === 'csv') {
      const csv = exportRuns(slug, 'csv')
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader('Content-Disposition', `attachment; filename="${slug}-runs.csv"`)
      return res.status(200).send(csv)
    }
    const json = exportRuns(slug, 'json')
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Content-Disposition', `attachment; filename="${slug}-runs.json"`)
    return res.status(200).json({ ok: true, slug, exportedAt: new Date().toISOString(), data: json })
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || 'read failed' })
  }
}
