import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, Star, ArrowRight, Lock, Send,
  MapPin, DollarSign, Wrench, HeartHandshake
} from 'lucide-react';
import { useState } from 'react';
import Breadcrumb from './ui/Breadcrumb';
import { useI18n } from '../i18n';

// ── Types ──────────────────────────────────────────────────────────────────────

export interface PricingItem {
  title: string;
  from: string;
  description: string;
  note?: string;
  badge?: string;
  popular?: boolean;
  sameDay?: boolean;
  icon?: ReactNode;
}

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface WhatWeOfferItem {
  label: string;
  sub: string;
  img: string;
}

export interface CommonProblemItem {
  text: string;
}

export interface ServicePageProps {
  label: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  heroImage: string;
  heroLayout?: 'right' | 'centered' | 'split-dark';

  // Below hero trust icons
  trustItems: { icon: ReactNode; label: string; sub: string }[];

  // "What we do" — now image cards
  whatWeOfferTitle?: string;
  whatWeOfferItems?: WhatWeOfferItem[];

  // "Common problems" checklist section
  commonProblemsTitle?: string;
  commonProblems?: string[];
  commonProblemsImage?: string;
  commonProblemsCTA?: { text: string; sub: string; link: string; linkText: string };

  // "How it works" steps
  processTitle?: string;
  processSteps: ProcessStepData[];

  // Legacy compat props (still used for old pages)
  whatWeDoTitle?: string;
  whatWeDoItems?: string[];
  whatWeRepairTitle?: string;
  whatWeRepairItems?: WhatWeOfferItem[];
  processVariant?: 'default' | 'compact';

  // Pricing
  pricing: PricingItem[];
  pricingNote?: string;

  // "Why choose us" trust row
  whyChooseItems?: { icon: ReactNode; label: string; sub: string }[];

  // Contact form
  formTitle?: string;
  formHeadline?: string;
  formSub?: string;
  formServiceOptions?: string[];
  formPlaceholder?: string;
  formSidebarImage?: string;
  formTrustPoints?: string[];

  // Bottom trust strip
  bottomTrust?: { icon: ReactNode; label: string; sub: string }[];

  // Sidebar
  qualityPoints?: string[];
  relatedServices?: { label: string; href: string }[];
  showReview?: { text: string; author: string; location: string; avatar?: string };
  showWorkshop?: boolean;
  extraSection?: ReactNode;
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function ServicePageLayout(props: ServicePageProps) {
  const {
    label, headline, headlineAccent, subheadline, heroImage,
    heroLayout = 'right', trustItems,
    whatWeOfferTitle, whatWeOfferItems,
    commonProblemsTitle, commonProblems, commonProblemsImage, commonProblemsCTA,
    processTitle, processSteps,
    whatWeDoTitle, whatWeDoItems, whatWeRepairTitle, whatWeRepairItems,
    pricing, pricingNote,
    whyChooseItems,
    formTitle = 'Request a visit', formHeadline, formSub,
    formServiceOptions, formPlaceholder, formSidebarImage, formTrustPoints,
    bottomTrust, qualityPoints, relatedServices, showReview,
    showWorkshop = false, extraSection,
  } = props;

  const offerItems = whatWeOfferItems ?? whatWeRepairItems;
  const offerTitle = whatWeOfferTitle ?? whatWeRepairTitle;

  return (
    <div className="pt-16 lg:pt-[76px]">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <HeroSection
        label={label} headline={headline} headlineAccent={headlineAccent}
        subheadline={subheadline} heroImage={heroImage} heroLayout={heroLayout}
        trustItems={trustItems}
      />

      {/* ── WHAT WE OFFER (image cards) ────────────────────────────────── */}
      {offerItems && offerItems.length > 0 && (
        <section className="py-10 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-900 mb-6">{offerTitle ?? 'What we offer'}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {offerItems.map((item) => (
                <div key={item.label} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-[0_4px_16px_rgba(37,99,235,0.10)] transition-all duration-300">
                  <div className="h-28 overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="text-[12px] font-semibold text-navy-900 leading-tight">{item.label}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE DO (legacy checklist — shown only if no offer items) ── */}
      {!offerItems && whatWeDoItems && (
        <section className="py-10 lg:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="lg:w-56 flex-shrink-0">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Services</p>
                <h2 className="text-xl font-bold text-navy-900 leading-tight">{whatWeDoTitle ?? 'What we do'}</h2>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {whatWeDoItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2.5 border-b border-gray-100">
                    <CheckIcon />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COMMON PROBLEMS ───────────────────────────────────────────── */}
      {commonProblems && commonProblems.length > 0 && (
        <section className="py-10 lg:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-900 mb-1">{commonProblemsTitle ?? 'Common problems we solve'}</h2>
            <p className="text-sm text-gray-500 mb-6">We diagnose and fix these every day.</p>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {commonProblems.map((p) => (
                    <div key={p} className="flex items-center gap-2.5 py-2.5 border-b border-gray-200/60">
                      <div className="w-4 h-4 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <CheckIcon small />
                      </div>
                      <span className="text-sm text-gray-700">{p}</span>
                    </div>
                  ))}
                </div>

                {commonProblemsCTA && (
                  <div className="mt-5 bg-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy-900 mb-1">{commonProblemsCTA.text}</p>
                      <p className="text-xs text-gray-500 mb-3">{commonProblemsCTA.sub}</p>
                      <a href={commonProblemsCTA.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        {commonProblemsCTA.linkText} <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {commonProblemsImage && (
                <div className="lg:w-[340px] flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={commonProblemsImage} alt="Common problems" className="w-full h-52 object-cover" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-1">{processTitle ?? 'How it works'}</h2>
          <p className="text-sm text-gray-500 mb-8">Simple process. No unnecessary complexity.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-start">
                {/* Arrow connector */}
                {i < processSteps.length - 1 && (
                  <div className="absolute top-5 left-[52px] right-0 hidden lg:flex items-center">
                    <div className="flex-1 border-t border-dashed border-gray-200" />
                    <ArrowRight size={12} className="text-gray-300 -ml-1 flex-shrink-0" />
                  </div>
                )}
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center mb-3 relative z-10">
                  <span className="text-blue-600">{step.icon}</span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 mb-1">{step.number}</p>
                <p className="text-sm font-semibold text-navy-900 mb-1">{step.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (optional) ──────────────────────────────────── */}
      {whyChooseItems && (
        <section className="py-8 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-5">
                {whyChooseItems.map((item, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <div className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-navy-900 leading-tight">{item.label}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:w-80 flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5">
                <p className="text-sm font-bold text-navy-900 mb-1.5">Not sure what you need?</p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">We'll help you choose the right solution for your home or business.</p>
                <a href="#request" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Book a free consultation <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── PRICING ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 mb-1">Popular services & pricing</h2>
          <p className="text-sm text-gray-500 mb-6">{pricingNote ?? 'All prices include the on-site visit. No hidden fees.'}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {pricing.map((item) => (
              <div key={item.title} className={`relative bg-white border rounded-xl p-4 hover:shadow-[0_4px_16px_rgba(37,99,235,0.10)] transition-all ${item.popular ? 'border-blue-300 shadow-[0_2px_12px_rgba(37,99,235,0.12)]' : 'border-gray-200'}`}>
                {item.popular && (
                  <div className="absolute -top-2.5 left-3">
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wide rounded-full">Most popular</span>
                  </div>
                )}
                {item.icon && (
                  <div className="mb-2 text-blue-600">{item.icon}</div>
                )}
                <p className="text-[12px] font-bold text-navy-900 leading-tight mb-1">{item.title}</p>
                <p className="text-[11px] text-blue-600 font-bold mb-2">
                  from <span className="text-[18px] text-navy-900">{item.from}</span>
                </p>
                <p className="text-[10px] text-gray-500 leading-relaxed mb-1">{item.description}</p>
                {item.note && <p className="text-[9px] text-gray-400 italic">{item.note}</p>}
                {item.sameDay && (
                  <div className="mt-2 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[9px] text-green-600 font-semibold">Same day</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Installation price depends on the property and complexity. We always provide a free quote before starting.
          </p>
        </div>
      </section>

      {/* ── MOBILE WORKSHOP (optional) ────────────────────────────────── */}
      {showWorkshop && (
        <section className="py-10 bg-[#f8f9fb] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="flex-1 w-full max-w-xl">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-xl overflow-hidden h-44">
                    <img src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1" alt="FixariVan mobile workshop" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-28">
                    <img src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1" alt="Repair tools" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-28">
                    <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&dpr=1" alt="Technician working" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-lg">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Inside Our Van</p>
                <h2 className="text-2xl font-bold text-navy-900 leading-tight mb-3">
                  A fully equipped mobile workshop — at your door
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Our van carries everything needed to diagnose and fix most tech problems on the spot. No parts waiting, no second trip.
                </p>
                <div className="space-y-1.5">
                  {['Professional diagnostic tools', 'Soldering & micro-soldering station', 'Screen & battery replacement parts', 'Network analyzers & Wi-Fi scanners', 'SSD/HDD adapters & imaging tools'].map((item) => (
                    <div key={item} className="flex items-center gap-3 py-1">
                      <CheckIcon />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── EXTRA SECTION ─────────────────────────────────────────────── */}
      {extraSection}

      {/* ── CONTACT FORM ──────────────────────────────────────────────── */}
      <section id="request" className="py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden h-52 mb-5">
                <img
                  src={formSidebarImage ?? 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'}
                  alt="FixariVan technician"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-base leading-tight">
                    {formHeadline ?? 'We install. You relax.'}
                  </p>
                  <p className="text-blue-200 text-xs mt-1">{formSub ?? 'From consultation to completion — we take care of everything.'}</p>
                </div>
              </div>

              <div className="space-y-2 mb-5">
                {(formTrustPoints ?? ['Free consultation', 'Professional installation', 'Clean setup & configuration', 'Local service in Turku area']).map((p) => (
                  <div key={p} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                      <CheckIcon small />
                    </div>
                    <span className="text-sm text-gray-700">{p}</span>
                  </div>
                ))}
              </div>

              {relatedServices && (
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Related Services</p>
                  <div className="space-y-1.5">
                    {relatedServices.map((s) => (
                      <Link key={s.href} to={s.href}
                        className="flex items-center justify-between px-3.5 py-2 bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl text-sm font-medium text-navy-900 hover:text-blue-600 transition-all group">
                        {s.label}
                        <ArrowRight size={12} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {showReview && (
                <div className="mt-4 bg-white border border-gray-100 rounded-xl p-4 shadow-soft">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="#f59e0b" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed mb-2 italic">"{showReview.text}"</p>
                  <p className="text-[11px] font-semibold text-navy-900">— {showReview.author}, {showReview.location}</p>
                </div>
              )}

              {qualityPoints && (
                <div className="mt-4 bg-white border border-gray-100 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-navy-900 uppercase tracking-wider mb-3">Quality You Can Trust</p>
                  <div className="space-y-2">
                    {qualityPoints.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <CheckIcon small />
                        <span className="text-xs text-gray-600 leading-relaxed">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-navy-900 mb-1">{formTitle}</h2>
              <p className="text-sm text-gray-500 mb-6">Fill out the form and we'll get back to you with the best solution.</p>
              <PageContactForm serviceOptions={formServiceOptions} placeholder={formPlaceholder} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM TRUST BAR ──────────────────────────────────────────── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {(bottomTrust ?? [
              { icon: <MapPin size={15} />, label: 'Local service in Turku area', sub: 'We come to you' },
              { icon: <DollarSign size={15} />, label: 'Transparent pricing', sub: 'No hidden costs' },
              { icon: <Wrench size={15} />, label: 'Professional equipment', sub: 'Safe & efficient tools' },
              { icon: <HeartHandshake size={15} />, label: 'Customer support', sub: 'We are here to help' },
            ]).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-navy-900 leading-tight">{item.label}</p>
                  <p className="text-[10px] text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────

interface HeroProps {
  label: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  heroImage: string;
  heroLayout: 'right' | 'centered' | 'split-dark';
  trustItems: { icon: ReactNode; label: string; sub: string }[];
}

function HeroSection({ label, headline, headlineAccent, subheadline, heroImage, heroLayout, trustItems }: HeroProps) {
  if (heroLayout === 'centered') {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[420px]">
          {/* Left text */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-14 max-w-2xl">
            <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-navy-900 leading-[1.06] tracking-tight mt-4 mb-4">
              {headline}
              {headlineAccent && <><br /><span className="text-blue-600">{headlineAccent}</span></>}
            </h1>
            <p className="text-sm lg:text-base text-gray-500 leading-relaxed mb-7 max-w-md">{subheadline}</p>
            <HeroIconRow items={trustItems} />
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all text-sm shadow-sm">
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
              <a href="#request"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-2xl transition-all border border-gray-200 text-sm">
                Request a Visit <ArrowRight size={15} />
              </a>
            </div>
          </div>
          {/* Right image */}
          <div className="flex-1 relative min-h-[280px] lg:min-h-0">
            <img src={heroImage} alt={label} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20" />
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-navy-900">Turku & surroundings</span>
            </div>
          </div>
        </div>
        <TrustStrip items={trustItems} />
      </section>
    );
  }

  if (heroLayout === 'split-dark') {
    return (
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row min-h-[460px]">
            <div className="flex-1 flex flex-col justify-center py-12 lg:py-14 pr-0 lg:pr-14">
              <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label }]} />
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white leading-[1.06] tracking-tight mt-4 mb-4">
                {headline}
                {headlineAccent && <><br /><span className="text-blue-400">{headlineAccent}</span></>}
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed mb-7 max-w-md">{subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all text-sm">
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
                <a href="#request"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all border border-white/20 text-sm">
                  Request a Visit <ArrowRight size={15} />
                </a>
              </div>
              <HeroIconRow items={trustItems} dark />
            </div>
            <div className="flex-1 relative min-h-[280px] lg:min-h-0">
              <img src={heroImage} alt={label} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 to-transparent" />
              <div className="absolute bottom-8 right-6 bg-white rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-navy-900">Turku & surroundings</span>
              </div>
            </div>
          </div>
        </div>
        <TrustStripDark items={trustItems} />
      </section>
    );
  }

  // default: 'right'
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[420px]">
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-14 max-w-2xl">
          <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/#services' }, { label }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-navy-900 leading-[1.06] tracking-tight mt-4 mb-4">
            {headline}
            {headlineAccent && <><br /><span className="text-blue-600">{headlineAccent}</span></>}
          </h1>
          <p className="text-sm lg:text-base text-gray-500 leading-relaxed mb-7 max-w-md">{subheadline}</p>
          <HeroIconRow items={trustItems} />
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <a href="https://wa.me/358000000000" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all text-sm shadow-sm">
              <MessageCircle size={17} /> Chat on WhatsApp
            </a>
            <a href="#request"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-2xl transition-all border border-gray-200 text-sm">
              Request a Visit <ArrowRight size={15} />
            </a>
          </div>
        </div>
        <div className="flex-1 relative min-h-[280px] lg:min-h-0">
          <img src={heroImage} alt={label} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
          <div className="absolute bottom-6 right-6 bg-white rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-navy-900">Turku & surroundings</span>
          </div>
        </div>
      </div>
      <TrustStrip items={trustItems} />
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function HeroIconRow({ items, dark }: { items: { icon: ReactNode; label: string; sub: string }[]; dark?: boolean }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 max-w-md">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-start gap-1">
          <div className={`${dark ? 'text-blue-400' : 'text-blue-600'} mb-0.5`}>{item.icon}</div>
          <p className={`text-[12px] font-semibold leading-tight ${dark ? 'text-white' : 'text-navy-900'}`}>{item.label}</p>
          <p className={`text-[10px] leading-tight ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.sub}</p>
        </div>
      ))}
    </div>
  );
}

function TrustStrip({ items }: { items: { icon: ReactNode; label: string; sub: string }[] }) {
  return (
    <div className="border-t border-gray-100 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3">
        <div className="flex items-center overflow-x-auto scrollbar-none">
          {items.map((item, i) => (
            <div key={i} className={`flex items-center gap-2.5 py-1.5 flex-shrink-0 ${i < items.length - 1 ? 'pr-6 mr-6 border-r border-gray-200' : ''}`}>
              <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-[11px] font-semibold text-navy-900 whitespace-nowrap">{item.label}</p>
                <p className="text-[10px] text-gray-400 whitespace-nowrap">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustStripDark({ items }: { items: { icon: ReactNode; label: string; sub: string }[] }) {
  return (
    <div className="border-t border-white/10 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center overflow-x-auto scrollbar-none">
          {items.map((item, i) => (
            <div key={i} className={`flex items-center gap-2.5 py-1.5 flex-shrink-0 ${i < items.length - 1 ? 'pr-6 mr-6 border-r border-white/10' : ''}`}>
              <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-[11px] font-semibold text-white whitespace-nowrap">{item.label}</p>
                <p className="text-[10px] text-gray-500 whitespace-nowrap">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckIcon({ small }: { small?: boolean }) {
  return (
    <svg width={small ? 8 : 12} height={small ? 8 : 12} viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Page-level inline contact form ────────────────────────────────────────────

function PageContactForm({ serviceOptions, placeholder }: { serviceOptions?: string[]; placeholder?: string }) {
  const { t } = useI18n();
  const cf = t.common.contactForm;
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center bg-white rounded-2xl border border-gray-100">
        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="text-base font-semibold text-navy-900 mb-1">{cf.successTitle}</h3>
        <p className="text-sm text-gray-500 max-w-xs">{cf.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your name <span className="text-blue-600">*</span></label>
          <input required type="text" placeholder="Full name"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone number <span className="text-blue-600">*</span></label>
          <input type="tel" placeholder="+358 40 123 4567"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email <span className="text-blue-600">*</span></label>
          <input required type="email" placeholder="you@example.com"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">Address / Area</label>
          <input type="text" placeholder="City or neighbourhood"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all" />
        </div>
      </div>
      {serviceOptions && serviceOptions.length > 0 && (
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">What do you need help with? <span className="text-blue-600">*</span></label>
          <div className="relative">
            <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 focus:outline-none focus:border-blue-400 transition-all appearance-none cursor-pointer">
              <option value="">Select a service</option>
              {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <ArrowRight size={13} className="absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
          </div>
        </div>
      )}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Describe the issue <span className="text-blue-600">*</span></label>
        <textarea required rows={4} placeholder={placeholder ?? 'Please describe the issue in as much detail as possible...'}
          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all resize-none" />
      </div>
      <button type="submit"
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm shadow-sm hover:shadow-[0_6px_20px_rgba(37,99,235,0.30)]">
        Send Request <Send size={14} />
      </button>
      <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <Lock size={10} /> Your data is safe and will never be shared.
      </div>
    </form>
  );
}
