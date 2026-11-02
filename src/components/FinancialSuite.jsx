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
    <section id="financial-suite" className="py-20 relative overflow-hidden bg-dark-900 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Investment Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Cost Sheet & <span className="river-gradient-text italic font-serif">Mortgage Planner</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Calculate your estimated monthly outflows, down payment allocations, and statutory Maharashtra stamp duty charges.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-gray-400 mr-2">Quick Presets:</span>
            {PRESET_PLANS.map((plan) => (
              <button
                key={plan.label}
                onClick={() => setPropertyCost(plan.cost)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  propertyCost === plan.cost
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
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
          <div className="lg:col-span-7 glass-panel-glow p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-serif text-xl font-bold text-white">Loan Parameters</h3>
              <span className="text-xs font-mono text-cyan-400">Pre-Approved Top Banks</span>
            </div>

            {/* Property Cost */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Agreement Base Value</span>
                <strong className="text-cyan-400 font-mono text-sm">{formatINR(propertyCost)}</strong>
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
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>₹1.10 Cr (2 BHK)</span>
                <span>₹2.00 Cr</span>
                <span>₹3.50 Cr (4 BHK)</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <strong className="text-white font-mono text-sm">{formatINR(downPaymentAmount)}</strong>
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
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>10% (Min Reserve)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Home Loan Interest Rate</span>
                <strong className="text-teal-300 font-mono text-sm">{interestRate.toFixed(1)}% p.a.</strong>
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
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>7.5% (Prime Tier)</span>
                <span>8.5% (Market Avg)</span>
                <span>11.5%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-300">
                <span>Tenure Duration</span>
                <strong className="text-white font-mono text-sm">{tenureYears} Years ({totalMonths} Months)</strong>
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
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>5 Yrs</span>
                <span>15 Yrs</span>
                <span>20 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-xs text-gray-400">
              <span className="block mb-2 text-[10px] uppercase font-mono tracking-wider">Approved Bank Partners:</span>
              <div className="flex flex-wrap gap-2">
                {['SBI Home Finance', 'HDFC Bank', 'ICICI Bank', 'Tata Capital', 'Axis Bank', 'Kotak Mahindra'].map((b) => (
                  <span key={b} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[11px]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live EMI Output */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel-glow p-6 rounded-3xl border border-cyan-500/40 relative overflow-hidden">
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-1">
                Estimated Monthly Outflow
              </div>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-2">
                ₹ {monthlyEmi.toLocaleString('en-IN')}
                <span className="text-xs font-sans text-gray-400 font-normal"> / month</span>
              </div>
              <div className="text-xs text-gray-400 mb-6">
                Principal Loan Amount: <strong className="text-white font-mono">{formatINR(loanAmount)}</strong>
              </div>

              {/* Graphical Ratio */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-cyan-300">Principal: {principalShare}%</span>
                  <span className="text-teal-400">Interest: {interestShare}%</span>
                </div>
                <div className="w-full h-3 bg-dark-950 rounded-full overflow-hidden flex border border-white/10">
                  <div style={{ width: `${principalShare}%` }} className="h-full bg-cyan-400" />
                  <div style={{ width: `${interestShare}%` }} className="h-full bg-teal-500" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>Loan: {formatINR(loanAmount)}</span>
                  <span>Total Interest: {formatINR(totalInterest)}</span>
                </div>
              </div>

              {/* Statutory Sheet */}
              <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="text-[11px] font-mono uppercase text-gray-400 mb-1">
                  Transparent Statutory Estimate:
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Base Agreement Value:</span>
                  <span className="text-white font-mono">{formatINR(propertyCost)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Maha Stamp Duty (7%):</span>
                  <span className="text-white font-mono">{formatINR(stampDuty)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">GST (5% Under-Construction):</span>
                  <span className="text-white font-mono">{formatINR(gst)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Govt Registration Fee:</span>
                  <span className="text-white font-mono">₹ 30,000</span>
                </div>
                <div className="flex justify-between py-2 font-bold text-sm">
                  <span className="text-cyan-300">Estimated Total Cost:</span>
                  <span className="text-cyan-400 font-mono">{formatINR(totalAllInclusive)}</span>
                </div>
              </div>

              <button
                onClick={onOpenVipModal}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group active:scale-95"
              >
                <FileText className="w-4 h-4 text-dark-950" />
                <span>Request Detailed Cost Sheet PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
