import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import type { Wallet } from '../lib/types';

interface WalletCardProps {
  wallet:        Wallet | null;
  loadingWallet: boolean;
  recharging:    boolean;
  walletError:   string | null;
  setWalletError: (error: string | null) => void;
  recharge:      (amount: number) => Promise<boolean>;
}

const WalletCard = ({
  wallet,
  loadingWallet,
  recharging,
  walletError,
  setWalletError,
  recharge,
}: WalletCardProps) => {
  const [rechargeAmount, setRechargeAmount] = useState('');

  const handleRecharge = async () => {
    const amount = parseFloat(rechargeAmount);
    if (!amount || amount <= 0) return;
    const ok = await recharge(amount);
    if (ok) setRechargeAmount('');
  };

  if (loadingWallet) {
    return (
      <div className="flex items-center gap-[10px] py-4 text-[13px] text-gray-400">
        <div className="w-4 h-4 border-2 border-gray-200 border-t-[#f0a500] rounded-full animate-spin flex-shrink-0" />
        <span>Loading wallet...</span>
      </div>
    );
  }

  if (!wallet) return null;

  return (
    <div className="flex flex-col gap-[14px] mt-4">

      {/* ── Balance card ── */}
      <div className="relative bg-gradient-to-br from-[#0a1628] to-[#1a3461] rounded-[14px] p-5 flex flex-col gap-[10px] overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-[30px] -right-[30px] w-[120px] h-[120px] rounded-full bg-[rgba(240,165,0,0.08)] pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/50 font-semibold uppercase tracking-[0.6px]">
            Nol Balance
          </span>
          {wallet.isBalanceLow && (
            <span className="bg-[rgba(255,77,109,0.25)] text-[#ff6b85] text-[10px] font-bold px-[10px] py-[3px] rounded-full border border-[rgba(255,77,109,0.3)]">
              Low Balance
            </span>
          )}
        </div>

        <span className="font-['Syne'] text-[34px] font-extrabold text-[#f0a500] tracking-[-1px] leading-none">
          {wallet.balance.toFixed(2)}
          <span className="text-[16px] font-semibold opacity-70"> AED</span>
        </span>

        <div className="flex items-center justify-between mt-1 pt-3 border-t border-white/10">
          <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.5px]">
            Card Number
          </span>
          <span className="font-mono text-[13px] font-bold text-white/80 tracking-[2px]">
            {wallet.cardNumber}
          </span>
        </div>
      </div>

      {/* ── Top-up row ── */}
      <div className="flex gap-[10px] items-end">
        <div className="flex-1 flex flex-col gap-[6px]">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.6px]">
            Recharge Amount
          </label>
          <input
            type="number"
            min="1"
            max="500"
            step="0.5"
            value={rechargeAmount}
            onChange={e => { setRechargeAmount(e.target.value); setWalletError(null); }}
            placeholder="e.g. 50"
            className="px-[14px] py-[11px] border-2 border-gray-200 rounded-[10px] font-['DM_Sans'] text-[14px] text-gray-900 bg-white outline-none transition-colors duration-200 w-full focus:border-[#f0a500] placeholder:text-gray-400"
          />
        </div>

        <button
          onClick={handleRecharge}
          disabled={recharging || !rechargeAmount}
          className="px-5 py-[11px] h-[46px] bg-[#f0a500] text-[#0a1628] border-none rounded-[10px] font-['Syne'] text-[13px] font-bold cursor-pointer whitespace-nowrap flex-shrink-0 transition-all duration-200 hover:not-disabled:bg-[#f5b800] hover:not-disabled:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {recharging ? 'Recharging...' : 'Top Up'}
        </button>
      </div>

      {/* ── Error ── */}
      {walletError && (
        <p className="flex items-center gap-[5px] text-[12px] text-red-500 m-0">
          <AlertCircle size={12} /> {walletError}
        </p>
      )}

    </div>
  );
};

export default WalletCard;