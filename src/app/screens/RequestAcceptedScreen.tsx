import { useNavigate, useParams, useLocation } from 'react-router';
import { ArrowLeft, MapPin, Calendar, Clock, Home } from 'lucide-react';
import Layout from '../components/Layout';
import mapImage from '../../imports/___________2026-05-12______3.36.08-1.png';

export default function RequestAcceptedScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { selectedDate, selectedTimeSlot } = location.state || { selectedDate: '2026-05-13', selectedTimeSlot: '오후 3시~6시' };

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
          <div className="text-center mb-8 mt-[20px]">
            <div className="w-[60px] h-[60px] rounded-full bg-[#00d3cd] mx-auto mb-4 flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M25 7.5L11.25 21.25L5 15" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">
              도움이 수락되었습니다!
            </h1>
            <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989]">
              김말숙 할머니께서 기다리고 계세요
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[20px] p-4 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="w-5 h-5 text-[#00d3cd] mt-0.5" />
              <div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">
                  방문 일정
                </p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                  {formatDate(selectedDate)} {selectedTimeSlot}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#00d3cd] mt-0.5" />
              <div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-1">
                  방문 장소
                </p>
                <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                  다로리 동쪽 마을 13번지
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mt-1">
                  경기도 양평군 양동면 다로리 13
                </p>
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
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] text-center">
              💡 방문 후 작업 완료 인증을 해주세요!
            </p>
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
                onClick={() => navigate(`/verify/${id}`)}
                className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
              >
                작업 인증하기
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
      </div>
    </Layout>
  );
}
