import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PRODUCT } from '../lib/product'
import { useT } from '../lib/i18n/provider'

const SITE = `https://${PRODUCT.slug}.lxsaihub.com`

export default function PricingPage() {
  const { t, catalog } = useT()
  const [cycle, setCycle] = useState<'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get('cycle') === 'yearly') setCycle('yearly')
    } catch {
      /* ignore */
    }
  }, [])

  const monthly = Number(PRODUCT.priceMonthly || 29)
  const yearly = Number(PRODUCT.priceYearly || monthly * 10)
  const monthlyEq = cycle === 'yearly' ? Math.round((yearly / 12) * 100) / 100 : monthly
  const save = monthly * 12 - yearly
  const faqItems = ((catalog as any)?.faq?.items || []) as Array<{ q: string; a: string }>

  return (
    <Layout>
      <Head>
        <title>{`${PRODUCT.name} Pricing — ${PRODUCT.tagline}`}</title>
        <meta name="description" content={`${PRODUCT.name} costs $${monthly}/month or $${yearly}/year. ${PRODUCT.tagline}`} />
        <link rel="canonical" href={`${SITE}/pricing`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              name: `${PRODUCT.name} Pro`,
              priceCurrency: 'USD',
              price: cycle === 'yearly' ? String(yearly) : String(monthly),
              url: `${SITE}/api/checkout?cycle=${cycle}`,
              availability: 'https://schema.org/OnlineOnly',
            }),
          }}
        />
      </Head>
      <article className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{PRODUCT.name} pricing</h1>
        <p className="text-slate-600 mb-8 max-w-3xl">
          {PRODUCT.tagline} One plan, one price. Annual billing saves {`$${save}`} a year
          {save > 0 ? ' — about two months free.' : '.'}
        </p>

        <div className="inline-flex rounded-lg border border-slate-200 p-1 mb-8 bg-slate-50">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-md ${cycle === 'monthly' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
            onClick={() => setCycle('monthly')}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-md ${cycle === 'yearly' ? 'bg-indigo-600 text-white' : 'text-slate-600'}`}
            onClick={() => setCycle('yearly')}
          >
            Yearly
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="font-bold text-lg">Monthly</div>
            <div className="text-4xl font-black my-3">${monthly}<span className="text-base font-semibold text-slate-500">/mo</span></div>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li>Full {PRODUCT.name} access</li>
              <li>{PRODUCT.toolTitle}</li>
              <li>Cancel anytime from your receipt</li>
            </ul>
            <a
              href={`/api/checkout?cycle=monthly`}
              className="block text-center w-full py-3 rounded-full bg-slate-900 text-white font-bold"
            >
              {`Get ${PRODUCT.name} monthly`}
            </a>
          </div>

          <div className="rounded-2xl border-2 border-indigo-600 p-6 relative shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-indigo-600 text-white px-3 py-1 rounded-full">
              Most popular
            </div>
            <div className="font-bold text-lg">Yearly</div>
            <div className="text-4xl font-black my-3">
              ${cycle === 'yearly' ? monthlyEq : Math.round((yearly / 12) * 100) / 100}
              <span className="text-base font-semibold text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-600 mb-4">
              {`$${yearly} billed yearly`}{save > 0 ? ` — save $${save}` : ''}
            </div>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li>Everything in monthly</li>
              <li>Two months effectively free</li>
              <li>One invoice per year</li>
            </ul>
            <a
              href={`/api/checkout?cycle=yearly`}
              className="block text-center w-full py-3 rounded-full bg-indigo-600 text-white font-bold"
            >
              {`Get ${PRODUCT.name} yearly`}
            </a>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold mb-6">Pricing questions</h2>
          <div className="space-y-3">
            {faqItems.slice(0, 6).map((item) => (
              <details key={item.q} className="bg-white border border-slate-200 rounded-xl p-4">
                <summary className="font-bold cursor-pointer">{item.q}</summary>
                <p className="mt-2 text-slate-600 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Start with one run</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            {PRODUCT.description}
          </p>
          <a
            href={`/api/checkout?cycle=${cycle}`}
            className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-bold"
          >
            {`Get ${PRODUCT.name}`}
          </a>
        </section>
      </article>
    </Layout>
  )
}
