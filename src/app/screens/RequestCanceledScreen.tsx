import { useNavigate, useParams, useLocation } from 'react-router';
import { Home } from 'lucide-react';
import Layout from '../components/Layout';

export default function RequestCanceledScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { hasPenalty = false, remainingCancels = 2 } = location.state || {};

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
        <div className="px-[32px] pb-[32px] pt-[24px]">
          <div className="text-center mx-[0px] mt-[50px] mb-[32px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#898989] mx-auto flex items-center justify-center mx-[135px] mt-[20px] mb-[16px]">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M7.5 7.5L22.5 22.5M7.5 22.5L22.5 7.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">신청이 취소되었습니다</h1>
            <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989]">다음 기회에 다시 만나요!</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[20px] p-4 mb-6">
            <div className="mb-3">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">패널티 부가</p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                {hasPenalty ? '패널티가 부과되었습니다' : '패널티 없음'}
              </p>
            </div>
            <div>
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">잔여 취소 가능 횟수</p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#00d3cd]">
                {remainingCancels}회
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <button
              onClick={() => navigate('/main')}
              className="w-[50px] h-[50px] bg-white border-2 border-[#e9e9e9] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex-shrink-0"
            >
              <Home className="w-6 h-6 text-[#383838]" />
            </button>
            <button
              onClick={() => navigate('/main')}
              className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-3 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
