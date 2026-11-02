import React, { useState } from 'react';
import { Calculator, IndianRupee, PieChart, Download, FileText, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';

export default function FinancialSuite({ onOpenVipModal }) {
  const PRESET_PLANS = [
    { label: "Typical 2 BHK", cost: 12800000 },
    { label: "Typical 3 BHK", cost: 16800000 },
    { label: "Typical 4 BHK", cost: 26500000 },
  ];

  const [propertyCost, setPropertyCost] = useState(16800000); // 1.68 Cr
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20%
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years

  // EMI Math Calculation
  const downPaymentAmount = (propertyCost * downPaymentPercent) / 100;
  const loanAmount = propertyCost - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const monthlyEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const principalShare = Math.round((loanAmount / totalPayment) * 100);
  const interestShare = 100 - principalShare;

  // Statutory Costs Estimations (Maharashtra)
  const stampDuty = Math.round(propertyCost * 0.07); // 7%
  const registration = 30000; // Flat 30k
  const gst = Math.round(propertyCost * 0.05); // 5%
  const totalAllInclusive = propertyCost + stampDuty + registration + gst;

  const formatINR = (val) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="financial-suite" className="py-20 relative overflow-hidden bg-[#F5F2EB] border-t border-b border-stone-300/80">
      {/* Drifting Glass Ambient Gradient Orbs */}
      <div className="glass-orb w-96 h-96 bg-[#E8D5C4] -top-24 right-1/4 animate-blob" />
      <div className="glass-orb w-80 h-80 bg-[#C8DECE] -bottom-10 left-10 animate-blob [animation-delay:5s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-stone-700 text-xs font-mono uppercase tracking-widest mb-3 shadow-xs glass-shimmer">
            <Calculator className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
            <span>Investment Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 tracking-tight mb-3">
            Cost Sheet & <span className="italic font-serif font-medium text-amber-800">Mortgage Planner</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Calculate your estimated monthly outflows, down payment allocations, and statutory Maharashtra stamp duty charges.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-stone-600 mr-2">Quick Presets:</span>
            {PRESET_PLANS.map((plan) => (
              <button
                key={plan.label}
                onClick={() => setPropertyCost(plan.cost)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  propertyCost === plan.cost
                    ? 'bg-stone-900 text-white shadow-md shadow-stone-900/10 scale-105'
                    : 'glass-panel text-stone-700 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                {plan.label} ({formatINR(plan.cost)})
              </button>
            ))}
          </div>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/90 space-y-6 shadow-xl shadow-stone-900/5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200/80">
              <h3 className="font-serif text-xl font-bold text-stone-900">Loan Parameters</h3>
              <span className="text-xs font-mono text-amber-800 font-semibold">Pre-Approved Top Banks</span>
            </div>

            {/* Property Cost */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-700">
                <span className="font-medium">Agreement Base Value</span>
                <strong className="text-stone-900 font-mono text-sm">{formatINR(propertyCost)}</strong>
              </div>
              <input
                type="range"
                min="11000000"
                max="35000000"
                step="500000"
                value={propertyCost}
                onChange={(e) => setPropertyCost(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>₹1.10 Cr (2 BHK)</span>
                <span>₹2.00 Cr</span>
                <span>₹3.50 Cr (4 BHK)</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-700">
                <span className="font-medium">Down Payment ({downPaymentPercent}%)</span>
                <strong className="text-stone-900 font-mono text-sm">{formatINR(downPaymentAmount)}</strong>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>10% (Min Reserve)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-700">
                <span className="font-medium">Home Loan Interest Rate</span>
                <strong className="text-amber-800 font-mono text-sm">{interestRate.toFixed(1)}% p.a.</strong>
              </div>
              <input
                type="range"
                min="7.5"
                max="11.5"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>7.5% (Prime Tier)</span>
                <span>8.5% (Market Avg)</span>
                <span>11.5%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-stone-700">
                <span className="font-medium">Tenure Duration</span>
                <strong className="text-stone-900 font-mono text-sm">{tenureYears} Years ({totalMonths} Months)</strong>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                <span>5 Yrs</span>
                <span>15 Yrs</span>
                <span>20 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200/80 text-xs text-stone-600">
              <span className="block mb-2 text-[10px] uppercase font-mono tracking-wider font-semibold">Approved Bank Partners:</span>
              <div className="flex flex-wrap gap-2">
                {['SBI Home Finance', 'HDFC Bank', 'ICICI Bank', 'Tata Capital', 'Axis Bank', 'Kotak Mahindra'].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-xl glass-panel border border-white/80 text-stone-800 text-[11px] font-medium shadow-xs">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live EMI Output */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-glow p-6 sm:p-7 rounded-3xl border border-white/90 relative overflow-hidden shadow-xl shadow-stone-900/5 glass-card-hover glass-shimmer">
              <div className="text-xs uppercase tracking-widest text-amber-800 font-mono mb-1 font-semibold">
                Estimated Monthly Outflow
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight mb-2">
                ₹ {monthlyEmi.toLocaleString('en-IN')}
                <span className="text-xs font-sans text-stone-500 font-normal"> / month</span>
              </div>
              <div className="text-xs text-stone-600 mb-6">
                Principal Loan Amount: <strong className="text-stone-900 font-mono">{formatINR(loanAmount)}</strong>
              </div>

              {/* Graphical Ratio */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono font-medium">
                  <span className="text-stone-900">Principal: {principalShare}%</span>
                  <span className="text-amber-800">Interest: {interestShare}%</span>
                </div>
                <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalShare}%` }} className="h-full bg-stone-900" />
                  <div style={{ width: `${interestShare}%` }} className="h-full bg-amber-600" />
                </div>
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>Loan: {formatINR(loanAmount)}</span>
                  <span>Total Interest: {formatINR(totalInterest)}</span>
                </div>
              </div>

              {/* Statutory Sheet */}
              <div className="pt-4 border-t border-stone-200 space-y-2 text-xs">
                <div className="text-[11px] font-mono uppercase text-stone-500 mb-1 font-semibold">
                  Transparent Statutory Estimate:
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Base Agreement Value:</span>
                  <span className="text-stone-900 font-mono font-medium">{formatINR(propertyCost)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Maha Stamp Duty (7%):</span>
                  <span className="text-stone-900 font-mono font-medium">{formatINR(stampDuty)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">GST (5% Under-Construction):</span>
                  <span className="text-stone-900 font-mono font-medium">{formatINR(gst)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Govt Registration Fee:</span>
                  <span className="text-stone-900 font-mono font-medium">₹ 30,000</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-sm">
                  <span className="text-stone-900">Estimated Total Cost:</span>
                  <span className="text-amber-800 font-mono">{formatINR(totalAllInclusive)}</span>
                </div>
              </div>

              <button
                onClick={onOpenVipModal}
                className="w-full mt-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-stone-900/10 flex items-center justify-center gap-2 group active:scale-95"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Request Detailed Cost Sheet PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
