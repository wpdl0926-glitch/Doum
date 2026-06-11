import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Calendar, Clock, Check } from 'lucide-react';
import Layout from '../components/Layout';
import { requests } from '../data/requests';

export default function AcceptRequestScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('2026-05-12');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  // 현재 요청 데이터 찾기
  const currentRequest = requests.find(req => req.id === Number(id));

  const timeSlots = [
    '오후 3시~4시',
    '오후 4시~5시',
  ];

  const handleTimeSlotChange = (slot: string) => {
    setSelectedTimeSlot(slot);

    // 오후 3시~4시를 선택하면 확정 모션 표시
    if (slot === '오후 3시~4시') {
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    navigate(`/accepted/${id}`, {
      state: {
        selectedDate,
        selectedTimeSlot
      }
    });
  };

  // 확정 모달이 표시되면 2.5초 후 자동으로 다음 화면으로 이동
  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        navigate(`/accepted/${id}`, {
          state: {
            selectedDate,
            selectedTimeSlot
          }
        });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation, navigate, id, selectedDate, selectedTimeSlot]);

  // 날짜 포맷 (2026-05-12 -> 2026. 05. 12.)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}. ${month}. ${day}.`;
  };

  return (
    <Layout>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
      <div className="bg-[#f8f8f8] h-full w-full overflow-auto relative">
        <div className="px-[32px] py-[40px] bg-[#ffffff]">
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[#383838] text-[24px] mx-[0px] mt-[40px] mb-[10px]">
            방문 일정 정하기
          </h1>
          <p className="font-['Pretendard:Medium',sans-serif] t bg-[#ffffff00]ext-[15px] text-[#898989] mb-10 text-[15px]">
            {currentRequest?.person ? `${currentRequest.person}을(를) 방문할 날짜와 시간을 선택해주세요` : '임대수 어르신을(를) 방문할 날짜와 시간을 선택해주세요'}
          </p>

          <div className="space-y-5 mb-8">
            {/* 방문 날짜 */}
            <div className="bg-white border border-[#e9e9e9] rounded-[20px] px-[20px] py-[14px]">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#00d3cd]" />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[#383838] text-[13px]">
                  방문 날짜
                </p>
              </div>
              <div className="bg-[#f5f5f5] rounded-[12px] px-[20px] py-[10px]">
                <p className="font-['Pretendard:Bold',sans-serif] text-[#383838] text-[15px]">
                  {formatDate(selectedDate)}
                </p>
              </div>
            </div>

            {/* 방문 시간 */}
            <div className="bg-white border border-[#e9e9e9] rounded-[20px] px-[20px] py-[14px]">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#00d3cd]" />
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[#383838] text-[13px]">
                  방문 시간
                </p>
              </div>
              <select
                value={selectedTimeSlot}
                onChange={(e) => handleTimeSlotChange(e.target.value)}
                className="w-full bg-white rounded-[12px] font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838] border border-[#e9e9e9] cursor-pointer appearance-none px-[20px] py-[10px]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23898989' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center',
                  backgroundSize: '20px 20px'
                }}
              >
                <option value="" disabled>시간 선택</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* 요청자 정보 */}
            <div className="bg-[rgba(0,211,205,0.08)] border-2 border-[#00d3cd] rounded-[20px] p-5">
              <p className="font-['Pretendard:Bold',sans-serif] text-[#383838] mb-3 text-[12px]">
                요청자 정보
              </p>
              <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838] mb-1">
                {currentRequest?.person || '임대수 어르신'}
              </p>
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                {currentRequest?.location || '다로리 강변 주택가'}
              </p>
            </div>
          </div>

          <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989] text-center mb-6">
            이웃에게 따뜻한 도움을 전하고 커피도 받아요!
          </p>

          <div className="space-y-3">
            <button
              onClick={handleConfirm}
              className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[18px] py-4 rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,211,205,0.3)]"
            >
              일정 신청하기
            </button>
            <button
              onClick={() => navigate(`/request/${id}`)}
              className="w-full bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:Bold',sans-serif] text-[18px] py-4 rounded-[16px]"
            >
              취소
            </button>
          </div>
        </div>

        {/* 확정 모달 */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-[24px] p-8 mx-8 max-w-[320px] w-full animate-scaleIn">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#00d3cd] rounded-full flex items-center justify-center mb-4 animate-bounce">
                  <Check className="w-12 h-12 text-white" strokeWidth={3} />
                </div>
                <h2 className="font-['Pretendard:Bold',sans-serif] text-[22px] text-[#383838] mb-2 text-center">
                  3명이 모였어요!
                </h2>
                <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] text-center mb-1">
                  일정이 확정되었습니다
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#00d3cd] text-center">
                  잠시 후 상세 페이지로 이동합니다
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
