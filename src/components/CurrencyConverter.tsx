'use client';

import { useState, useEffect, useCallback } from 'react';

const CURRENCIES: { code: string; symbol: string; name: string }[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc' },
  { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar' },
  { code: 'ZAR', symbol: 'R', name: 'South African Rand' },
  { code: 'THB', symbol: '฿', name: 'Thai Baht' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
];

interface CurrencyConverterProps {
  defaultAmount?: number;
}

export function CurrencyConverter({ defaultAmount }: CurrencyConverterProps) {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState(false);
  const [amount, setAmount] = useState(defaultAmount ? String(defaultAmount) : '');
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/INR')
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((data) => {
        if (data.rates) setRates(data.rates);
        else throw new Error('No rates');
      })
      .catch(() => setError(true));
  }, []);

  const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setAmount(val);
  }, []);

  const numericAmount = Number(amount) || 0;
  const rate = rates?.[currency];
  const converted = rate ? numericAmount * rate : null;
  const selectedCurrency = CURRENCIES.find((c) => c.code === currency);

  const formatINR = (n: number) =>
    n.toLocaleString('en-IN', { maximumFractionDigits: 0 });

  const formatConverted = (n: number, code: string) => {
    if (code === 'JPY') return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
    return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <section className="bg-[#ede4d1] py-[48px] md:py-[64px]">
      <div className="max-w-[600px] mx-auto px-6">
        <div className="bg-white rounded-[9px] p-8 md:p-10">
          <h3 className="font-serif font-semibold text-[20px] md:text-[24px] text-[#081d01] text-center mb-6 leading-tight">
            Check What This Costs in Your Currency
          </h3>

          {error ? (
            <p className="font-serif text-[14px] text-[#081d01]/50 text-center">
              Currency rates temporarily unavailable. Please check back shortly.
            </p>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {/* INR input */}
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-serif text-[15px] text-[#081d01]/40">
                    ₹
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={amount ? formatINR(Number(amount)) : ''}
                    onChange={handleAmountChange}
                    placeholder="Enter amount in INR"
                    className="w-full pl-8 pr-4 h-[48px] rounded-[9px] border border-[#081d01]/15 font-serif text-[15px] text-[#081d01] focus:outline-none focus:border-[#e79e23] transition"
                  />
                </div>

                {/* Currency select */}
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-[48px] px-4 rounded-[9px] border border-[#081d01]/15 font-serif text-[15px] text-[#081d01] bg-white focus:outline-none focus:border-[#e79e23] transition sm:w-[160px]"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} — {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Result */}
              {numericAmount > 0 && converted !== null && selectedCurrency && (
                <div className="text-center mb-6">
                  <p className="font-serif text-[13px] text-[#081d01]/40 mb-1">
                    ₹{formatINR(numericAmount)} is approximately
                  </p>
                  <p className="font-serif font-semibold text-[28px] md:text-[36px] text-[#081d01] leading-tight">
                    {selectedCurrency.symbol}
                    {formatConverted(converted, currency)}
                  </p>
                  <p className="font-serif text-[13px] text-[#081d01]/40 mt-1">
                    {selectedCurrency.code} ({selectedCurrency.name})
                  </p>
                </div>
              )}

              {!rates && !error && (
                <p className="font-serif text-[13px] text-[#081d01]/40 text-center">
                  Loading exchange rates...
                </p>
              )}
            </>
          )}

          {/* Disclaimer */}
          <p className="font-serif italic text-[12px] text-[#081d01]/40 text-center leading-relaxed mt-4">
            *Exchange rates are approximate and updated daily. Actual amounts may vary depending on your bank&apos;s exchange rate, processing fees, and the date of transaction. This is not a financial quote.
          </p>
        </div>
      </div>
    </section>
  );
}
