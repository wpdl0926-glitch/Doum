import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Star } from 'lucide-react';
import Layout from '../components/Layout';

export default function CreditEarnedScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="bg-white h-full w-full flex items-center justify-center">
      <div className="px-[32px] text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative mt-[30px]">
            <div className="w-[120px] h-[120px] bg-[#00d3cd] rounded-full flex items-center justify-center animate-pulse mt-[50px]">
              <Star className="w-[60px] h-[60px] text-white fill-white" />
            </div>
            <div className="absolute top-[48px] -right-2 bg-white rounded-full p-2 shadow-lg">
              <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#00d3cd]">+3</p>
            </div>
          </div>
        </div>

        <h1 className="font-['Pretendard:Bold',sans-serif] text-[28px] text-[#383838] mb-3">
          크레딧이 적립되었어요!
        </h1>
        <p className="font-['Pretendard:Medium',sans-serif] text-[16px] text-[#898989] mb-8">
          김말숙 할머니를 도와주셔서 감사합니다
        </p>

        <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] rounded-[20px] p-6 mb-6">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#787878] mb-2">
            내 총 크레딧
          </p>
          <p className="font-['Pretendard:Bold',sans-serif] text-[36px] text-[#00d3cd]">
            243
          </p>
        </div>

        <button
          onClick={() => navigate('/main')}
          className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989] underline"
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
    </Layout>
  );
}
