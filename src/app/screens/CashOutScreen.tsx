import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, DollarSign, Wallet, AlertCircle, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import Union from '../../imports/Union/Union';

export default function CashOutScreen() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const availableCredits = 250;
  const minimumCashOut = 10;

  const quickAmounts = [10, 50, 100, 200];

  const cashOutHistory = [
    {
      id: 1,
      amount: 50,
      won: 50000,
      status: 'completed',
      date: '2026-05-10',
      time: '오후 2:30',
    },
    {
      id: 2,
      amount: 30,
      won: 30000,
      status: 'completed',
      date: '2026-04-25',
      time: '오전 11:00',
    },
    {
      id: 3,
      amount: 20,
      won: 20000,
      status: 'completed',
      date: '2026-04-15',
      time: '오후 4:00',
    },
  ];

  const handleQuickAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(value ? parseInt(value) : null);
    }
  };

  const handleCashOut = () => {
    if (selectedAmount && selectedAmount >= minimumCashOut && selectedAmount <= availableCredits) {
      alert(`${selectedAmount} 크레딧 (${selectedAmount * 1000}원) 캐시아웃 신청이 완료되었습니다.`);
    }
  };

  const canCashOut = selectedAmount !== null && selectedAmount >= minimumCashOut && selectedAmount <= availableCredits;

  return (
    <Layout>
      <div className="relative h-full w-full bg-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-[34px] pt-[40px] pb-[15px]">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate('/main')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-[30px] h-[30px]">
                <Union />
              </div>
              <p className="font-['Pretendard:ExtraBold',sans-serif] text-[16px] text-black">
                DOUM
              </p>
            </button>
          </div>
          <div className="mb-6">
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black">
              캐시 아웃
            </h1>
          </div>

          {/* Available Credits */}
          <div className="bg-[#f5f5f5] rounded-[20px] p-5 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878] mb-1">
                  출금 가능 크레딧
                </p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[28px] text-black">
                  {availableCredits}
                </p>
              </div>
              <div className="w-[50px] h-[50px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                <Wallet className="w-6 h-6 text-[#00d3cd]" />
              </div>
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#b0b0b0] mt-2">
              = {availableCredits * 1000}원
            </p>
          </div>

          {/* Quick Amount Selection */}
          <div className="mb-6">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-black mb-3">
              출금 금액 선택
            </p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAmount(amount)}
                  className={`rounded-[12px] py-3 transition-all ${
                    selectedAmount === amount
                      ? 'bg-[#00d3cd] border-2 border-[#00d3cd]'
                      : 'bg-white border-2 border-[#e9e9e9]'
                  }`}
                >
                  <p className={`font-['Pretendard:Bold',sans-serif] text-[14px] ${
                    selectedAmount === amount ? 'text-white' : 'text-[#383838]'
                  }`}>
                    {amount}
                  </p>
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="relative">
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="직접 입력"
                className="w-full border-2 border-[#e9e9e9] rounded-[15px] px-4 py-3 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#383838] focus:border-[#00d3cd] focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989]">
                크레딧
              </span>
            </div>
          </div>

          {/* Info Alert */}
          <div className="bg-[#fff9e6] border border-[#ffe9a3] rounded-[15px] p-4 mb-4">
            <div className="flex gap-2">
              <AlertCircle className="w-4 h-4 text-[#ff9800] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#383838] mb-1">
                  최소 출금 금액은 {minimumCashOut} 크레딧입니다
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#898989]">
                  출금 신청 후 영업일 기준 3-5일 내 계좌로 입금됩니다
                </p>
              </div>
            </div>
          </div>

          {/* Cash Out Button */}
          <button
            onClick={handleCashOut}
            disabled={!canCashOut}
            className={`w-full rounded-[15px] py-4 transition-all ${
              canCashOut
                ? 'bg-[#00d3cd] hover:bg-[#00b8b4]'
                : 'bg-[#e9e9e9]'
            }`}
          >
            <p className={`font-['Pretendard:Bold',sans-serif] text-[16px] ${
              canCashOut ? 'text-white' : 'text-[#b0b0b0]'
            }`}>
              {selectedAmount && selectedAmount >= minimumCashOut
                ? `${selectedAmount * 1000}원 출금 신청`
                : '출금 신청'}
            </p>
          </button>

          <h2 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-black mb-3 mt-8">
            출금 내역
          </h2>
        </div>

        {/* Cash Out History */}
        <div className="flex-1 overflow-auto px-[34px] pb-[100px]">
          <div className="space-y-3">
            {cashOutHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e9e9e9] rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)] p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-[#00d3cd]" />
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                        {item.amount} 크레딧 출금
                      </p>
                    </div>
                    <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#00d3cd] mb-1">
                      {item.won.toLocaleString()}원
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#b0b0b0]">
                      {item.date} {item.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e8f7f3] text-[#00d3cd] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px]">
                        완료
                      </p>
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#b0b0b0]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
