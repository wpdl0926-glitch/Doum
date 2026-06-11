import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function MatchConfirmedScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isActivityCompleted, setIsActivityCompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleVerificationClick = () => {
    if (isActivityCompleted) {
      navigate('/verify/60');
    } else {
      setShowPopup(true);
    }
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto flex items-center justify-center p-[32px]">
        <div className="w-full max-w-[400px]">
          {/* 상단 확정 메시지 */}
          <div className="bg-white rounded-t-[20px] px-[24px] py-[32px] text-center">
            <div className="mb-3">
              <div className="w-[60px] h-[60px] rounded-full bg-[#00d3cd] flex items-center justify-center mx-auto">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M25 7.5L11.25 21.25L5 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#383838] mb-2">
              매칭이 확정됐어요!
            </h1>
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989]">
              임대수 어르신을 도우러 가요
            </p>
          </div>

          {/* 정보 카드 */}
          <div className="bg-white rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] px-[24px] py-[24px]">
            {/* 날짜/시간 */}
            <div className="mb-3">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838]">
                📅 6/9(월) 오전 10:00
              </p>
            </div>

            {/* 장소 */}
            <div className="mb-4">
              <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#383838]">
                📍 청도군 다로리 동쪽길 12-3 · <span className="text-[#00d3cd]">공개됨</span>
              </p>
            </div>

            {/* 전화 버튼 */}
            <button className="w-full bg-white border border-[#00d3cd] text-[#00d3cd] rounded-[20px] px-[20px] py-[14px] mb-4 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-['Pretendard:Bold',sans-serif] text-[16px]">
                어르신께 전화 (안심번호)
              </span>
            </button>

            {/* 배려 안내 */}
            <div className="bg-[#E6FCFF] rounded-[20px] px-[16px] py-[14px] mb-5">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838] leading-[1.6]">
                💜 <span className="font-['Pretendard:Bold',sans-serif]">배려 안내</span> — 귀가 잘 안 들리실 수 있어요.<br />크고 또박또박 말씀해 주세요.
              </p>
            </div>

            {/* 함께 가는 분 */}
            <div className="mb-5">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#787878] mb-2 mt-2.5">
                함께 가는 분 (4명)
              </p>
              <div className="flex gap-2">
                <span className="bg-[#f5f5f5] rounded-[20px] px-[12px] py-[6px] font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">
                  나
                </span>
                <span className="bg-[#f5f5f5] rounded-[20px] px-[12px] py-[6px] font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">
                  초록감자
                </span>
                <span className="bg-[#f5f5f5] rounded-[20px] px-[12px] py-[6px] font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">
                  날씨요정
                </span>
                <span className="bg-[#f5f5f5] rounded-[20px] px-[12px] py-[6px] font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">
                  청도러버
                </span>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3 items-center mb-3">
              <button
                onClick={() => navigate('/main')}
                className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex-shrink-0"
              >
                <svg className="w-6 h-6 text-[#383838]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
              <button
                onClick={handleVerificationClick}
                className={`flex-1 rounded-[20px] px-[20px] py-[16px] font-['Pretendard:Bold',sans-serif] text-[16px] ${
                  isActivityCompleted
                    ? 'bg-[#00d3cd] text-white shadow-[0px_4px_20px_0px_rgba(0,211,205,0.3)]'
                    : 'bg-[#e9e9e9] text-[#898989] cursor-not-allowed'
                }`}
              >
                활동 후 작업 인증
              </button>
            </div>

            {/* 하단 상태 */}
          </div>
        </div>

        {/* 안내 팝업 */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-[32px]">
            <div className="bg-white rounded-[20px] p-[24px] max-w-[300px] w-full">
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838] mb-4 text-center">
                활동 후 인증 수행해주세요
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-[#00d3cd] text-white rounded-[15px] py-[12px] font-['Pretendard:Bold',sans-serif] text-[14px]"
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
