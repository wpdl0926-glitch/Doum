import { useNavigate } from 'react-router';
import { ArrowLeft, Coins, TrendingUp, Gift, Award } from 'lucide-react';
import Layout from '../components/Layout';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';

export default function CreditScreen() {
  const navigate = useNavigate();

  const creditHistory = [
    {
      id: 1,
      type: 'earned',
      title: 'TV 연결 도움 완료',
      description: '김말숙 할머니',
      amount: 3,
      date: '2026-05-19',
      time: '오후 3:30',
    },
    {
      id: 2,
      type: 'earned',
      title: '장보기 도움 완료',
      description: '이순자 할머니',
      amount: 2,
      date: '2026-05-18',
      time: '오전 11:00',
    },
    {
      id: 3,
      type: 'bonus',
      title: '레벨업 보너스',
      description: 'LV.2 → LV.3',
      amount: 5,
      date: '2026-05-15',
      time: '오후 2:00',
    },
    {
      id: 4,
      type: 'earned',
      title: '전화 사용법 알려주기 완료',
      description: '최영희 할머니',
      amount: 3,
      date: '2026-05-14',
      time: '오후 2:30',
    },
    {
      id: 5,
      type: 'earned',
      title: '마당 정리 요청 완료',
      description: '박영수 어르신',
      amount: 2,
      date: '2026-05-13',
      time: '오후 1:00',
    },
  ];

  const totalCredits = 250;

  return (
    <Layout>
      <div className="relative h-full w-full bg-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-[34px] pt-[40px] pb-[15px]">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate('/main')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src={headerLogoImage}
                alt="DOUM"
                className="h-[54px] w-auto object-contain -ml-[10px]"
              />
            </button>
          </div>
          <div className="mb-6">
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black">
              크레딧
            </h1>
          </div>

          {/* Total Credits Card */}
          <div className="bg-gradient-to-br from-[#00d3cd] to-[#00b8b4] rounded-[20px] p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-white/80">
                보유 크레딧
              </p>
              <Coins className="w-6 h-6 text-white/80" />
            </div>
            <p className="font-['Pretendard:Bold',sans-serif] text-[36px] text-white">
              {totalCredits}
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-white/70 mt-1">
              1 크레딧 = 1,000원
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="bg-[#f5f5f5] rounded-[15px] p-3">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-[#00d3cd]" />
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#787878] text-center mb-1">
                이번 달
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-black text-center">
                15
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-[15px] p-3">
              <div className="flex items-center justify-center mb-1">
                <Award className="w-4 h-4 text-[#00d3cd]" />
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#787878] text-center mb-1">
                총 획득
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-black text-center">
                240
              </p>
            </div>
            <div className="bg-[#f5f5f5] rounded-[15px] p-3">
              <div className="flex items-center justify-center mb-1">
                <Gift className="w-4 h-4 text-[#00d3cd]" />
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#787878] text-center mb-1">
                보너스
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-black text-center">
                10
              </p>
            </div>
          </div>

          <h2 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-black mb-3">
            크레딧 내역
          </h2>
        </div>

        {/* Credit History */}
        <div className="flex-1 overflow-auto px-[34px] pb-[100px]">
          <div className="space-y-3">
            {creditHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#e9e9e9] rounded-[20px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)] p-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {item.type === 'earned' ? (
                        <div className="w-[8px] h-[8px] rounded-full bg-[#00d3cd]"></div>
                      ) : (
                        <div className="w-[8px] h-[8px] rounded-full bg-[#ff9800]"></div>
                      )}
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                        {item.title}
                      </p>
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-2">
                      {item.description}
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#b0b0b0]">
                      {item.date} {item.time}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#00d3cd]">
                      +{item.amount}
                    </p>
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
