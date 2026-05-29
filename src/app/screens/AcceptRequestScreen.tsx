import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import { requests } from '../data/requests';

export default function AcceptRequestScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('2026-05-12');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('오후 3시~6시');

  // 현재 요청 데이터 찾기
  const currentRequest = requests.find(req => req.id === Number(id));

  const timeSlots = [
    '오전 9시~12시',
    '오후 12시~3시',
    '오후 3시~6시',
    '오후 6시~9시',
  ];

  const handleConfirm = () => {
    navigate(`/accepted/${id}`, {
      state: {
        selectedDate,
        selectedTimeSlot
      }
    });
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
      <div className="px-[32px] py-[24px]">
        <button
          onClick={() => navigate(`/request/${id}`)}
          className="mb-6"
        >
          
        </button>

        <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">
          방문 일정 정하기
        </h1>
        <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] mb-8">
          {currentRequest?.person ? `${currentRequest.person}을(를) 방문할 날짜와 시간을 선택해주세요` : '방문할 날짜와 시간을 선택해주세요'}
        </p>

        <div className="space-y-4 mb-8">
          <div className="rounded-[15px] p-4 bg-[#ffffff]">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-[#00d3cd]" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878]">방문 날짜</p>
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-white rounded-[10px] px-4 py-3 font-['Pretendard:Medium',sans-serif] text-[15px] border border-[#e9e9e9]"
            />
          </div>

          <div className="rounded-[15px] p-4 bg-[#ffffff] -mt-7.5">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-[#00d3cd]" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878]">방문 시간</p>
            </div>
            <select
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
              className="w-full bg-white rounded-[10px] pl-4 pr-12 py-3 font-['Pretendard:Medium',sans-serif] text-[15px] border border-[#e9e9e9] cursor-pointer appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23787878' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '16px 16px'
              }}
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] rounded-[15px] p-4">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] mb-2">
              요청자 정보
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#383838]">
              {currentRequest?.person || '정보 없음'}
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
              {currentRequest?.location || '위치 정보 없음'}
            </p>
          </div>
        </div>

        <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] text-center mb-4">
          이웃에게 따뜻한 도움을 전하고 커피도 받아요!
        </p>

        <div className="space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
          >
            일정 확정하기
          </button>
          <button
            onClick={() => navigate(`/request/${id}`)}
            className="w-full bg-white border border-[#e9e9e9] text-[#383838] font-['Pretendard:SemiBold',sans-serif] text-[16px] py-4 rounded-[15px]"
          >
            취소
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
}
