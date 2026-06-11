import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import { ArrowLeft, MapPin, Calendar, Clock, Home, Users } from 'lucide-react';
import Layout from '../components/Layout';
import mapImage from '../../imports/___________2026-05-12______3.36.08-1.png';
import { requests } from '../data/requests';

export default function RequestAcceptedScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { selectedDate, selectedTimeSlot } = location.state || { selectedDate: '2026-05-13', selectedTimeSlot: '오후 3시~4시' };

  // 현재 요청 데이터 찾기
  const currentRequest = requests.find(req => req.id === Number(id));

  // 신청 인원 상태 관리
  const [currentApplicants, setCurrentApplicants] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlots = 5;

  // 팝업 상태 관리
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [remainingCancels, setRemainingCancels] = useState(3);

  // 화면 시작 후 0.5초 뒤에 3/5 → 4/5로 변경
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentApplicants(4);
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 날짜 형식 변환 (2026-05-13 → 2026년 5월 13일)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
        <div className="px-[32px] pb-[32px] pt-[24px]">
          <div className="text-center mx-[0px] mt-[50px] mb-[32px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#00d3cd] mx-auto flex items-center justify-center mx-[135px] mt-[20px] mb-[16px]">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M25 7.5L11.25 21.25L5 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">신청이 접수되었습니다!</h1>
            <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989]">인원이 모두 모이면 확정 알림이 전송됩니다</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[20px] p-4 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="w-5 h-5 text-[#00d3cd] mt-0.5" />
              <div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">방문 선택 일정</p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                  {formatDate(selectedDate)} {selectedTimeSlot}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#00d3cd] mt-0.5" />
              <div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">현재 신청</p>
                <div className="overflow-hidden h-[24px] relative">
                  <div
                    className="transition-transform duration-300 ease-out"
                    style={{
                      transform: isAnimating ? 'translateY(24px)' : 'translateY(0)',
                    }}
                  >
                    <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                      3/{totalSlots}명
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 transition-transform duration-300 ease-out"
                    style={{
                      transform: isAnimating ? 'translateY(0)' : 'translateY(-24px)',
                    }}
                  >
                    <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                      {currentApplicants}/{totalSlots}명
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] rounded-[20px] overflow-hidden mb-6 h-[200px] relative">
            <img
              src={mapImage}
              alt="경상북도 청도군 화양읍 다로길 2 지도"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-12 h-12 text-[#00d3cd] fill-[#00d3cd] drop-shadow-lg" />
            </div>
          </div>

          <div className="bg-[rgba(0,211,205,0.1)] border border-[#00d3cd] rounded-[15px] p-4 mb-6">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[#383838] text-center text-[13px]">인원이 모두 모이길 기다리고 있어요!</p>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => navigate('/main')}
              className="w-[50px] h-[50px] bg-white border-2 border-[#e9e9e9] rounded-full flex items-center justify-center shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] flex-shrink-0"
            >
              <Home className="w-6 h-6 text-[#383838]" />
            </button>
            <div className="flex-1 flex gap-3">
              <button
                onClick={() => setShowCancelPopup(true)}
                className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
              >
                신청 취소
              </button>
              <button
                onClick={() => navigate('/my-activity')}
                className="flex-1 bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]"
              >
                내 약속 확인하기
              </button>
            </div>
          </div>
        </div>

        {/* 신청 취소 팝업 */}
        {showCancelPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-[32px] pointer-events-none">
            <div className="bg-white rounded-[16px] w-full max-w-[320px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)] pointer-events-auto -translate-y-[40px] px-[20px] py-[30px]">
              <h2 className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838] mb-3 text-center">
                신청을 취소하시겠습니까?
              </h2>
              <div className="bg-[#f5f5f5] rounded-[12px] mx-[0px] mt-[0px] mb-[8px] px-[12px] py-[20px]">
                <p className="font-['Pretendard:Medium',sans-serif] text-[#383838] mt-[8px] mb-[7px] text-center text-[15px]">방문하기 48시간 전부터는 취소 시<br />패널티가 지급됩니다</p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[12px] text-[#00d3cd] mb-[6px] text-center">
                  남은 취소 가능 횟수: {remainingCancels}회
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCancelPopup(false)}
                  className="flex-1 bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:Bold',sans-serif] text-[14px] py-2.5 rounded-[12px] mx-[0px] mt-[10px] mb-[0px]"
                >
                  돌아가기
                </button>
                <button
                  onClick={() => {
                    setShowCancelPopup(false);
                    const newRemainingCancels = remainingCancels - 1;
                    navigate(`/canceled/${id}`, {
                      state: {
                        hasPenalty: false,
                        remainingCancels: newRemainingCancels
                      }
                    });
                  }}
                  className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[14px] py-2.5 rounded-[12px] mx-[0px] mt-[10px] mb-[0px]"
                >
                  취소하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
