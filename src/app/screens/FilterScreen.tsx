import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Calendar, Clock, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import Layout from '../components/Layout';
import mapImage from '../../imports/___________2026-05-21_______6.37.57.png';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';

export default function FilterScreen() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);

  // Map states
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Calendar states
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [isDraggingDate, setIsDraggingDate] = useState(false);
  const [dragStartDate, setDragStartDate] = useState<Date | null>(null);

  const locations = [
    { id: 'all', label: '전체 지역' },
    { id: 'east', label: '다로리 동쪽 마을' },
    { id: 'west', label: '다로리 서쪽 마을' },
    { id: 'north', label: '다로리 북쪽 마을' },
    { id: 'south', label: '다로리 남쪽 마을' },
  ];

  const periods = [
    { id: 'all', label: '전체 기간' },
    { id: 'today', label: '오늘' },
    { id: 'tomorrow', label: '내일' },
    { id: 'week', label: '이번 주' },
    { id: 'month', label: '이번 달' },
  ];

  const timeSlots = [
    { id: 'slot1', label: '07:00-09:00' },
    { id: 'slot2', label: '09:00-11:00' },
    { id: 'slot3', label: '11:00-13:00' },
    { id: 'slot4', label: '13:00-15:00' },
    { id: 'slot5', label: '15:00-17:00' },
    { id: 'slot6', label: '17:00-19:00' },
    { id: 'slot7', label: '19:00-21:00' },
  ];

  const toggleTimeSlot = (timeSlotId: string) => {
    setSelectedTimeSlots((prev) =>
      prev.includes(timeSlotId)
        ? prev.filter((id) => id !== timeSlotId)
        : [...prev, timeSlotId]
    );
  };

  const handleApply = () => {
    // 필터 적용 후 돌아가기
    navigate('/explore');
  };

  const handleReset = () => {
    setSelectedLocation('all');
    setSelectedPeriod('all');
    setSelectedTimeSlots([]);
    setMarkerPosition(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setDateRange({ start: null, end: null });
    setCurrentMonth(new Date());
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isInRange = (date: Date, start: Date | null, end: Date | null) => {
    if (!start || !end) return false;
    const actualStart = start < end ? start : end;
    const actualEnd = start < end ? end : start;
    return date >= actualStart && date <= actualEnd;
  };

  const handleDateMouseDown = (date: Date) => {
    setIsDraggingDate(true);
    setDragStartDate(date);
    setDateRange({ start: date, end: date });
  };

  const handleDateMouseEnter = (date: Date) => {
    if (isDraggingDate && dragStartDate) {
      setDateRange({ start: dragStartDate, end: date });
    }
  };

  const handleDateMouseUp = () => {
    setIsDraggingDate(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingDate) {
        setIsDraggingDate(false);
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isDraggingDate]);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Map interaction handlers
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.3, 1));
  };

  const handleResetMap = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;

    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left - position.x) / scale);
    const y = ((e.clientY - rect.top - position.y) / scale);

    setMarkerPosition({ x, y });
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/explore')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838] ml-[-5px]">
                필터 설정
              </h1>
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] text-[#898989] text-[13px] mr-[3px]">
              원하는 조건으로 도움 요청을 찾아보세요
            </p>
          </div>

          {/* 위치 설정 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 -mt-5">
              <MapPin className="w-5 h-5 text-[#00d3cd]" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838]">
                위치
              </p>
            </div>
            <div className="relative bg-[#f5f5f5] rounded-[20px] overflow-hidden" style={{ height: '280px' }}>
              {/* Map Container */}
              <div
                ref={mapContainerRef}
                className="w-full h-full relative overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  ref={mapRef}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    transformOrigin: '0 0',
                    transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                  }}
                  onClick={handleMapClick}
                >
                  <img
                    src={mapImage}
                    alt="지도"
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                  {/* Marker */}
                  {markerPosition && (
                    <div
                      className="absolute"
                      style={{
                        left: `${markerPosition.x}px`,
                        top: `${markerPosition.y}px`,
                        transform: `translate(-50%, -100%) scale(${1/scale})`,
                      }}
                    >
                      <div className="relative">
                        <div className="w-8 h-8 bg-[#00d3cd] rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-3 bg-[#00d3cd]"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-10">
                <button
                  onClick={handleResetMap}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                  title="원래 크기로"
                >
                  <Maximize2 className="w-5 h-5 text-[#383838]" />
                </button>
                <button
                  onClick={handleZoomIn}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <ZoomIn className="w-5 h-5 text-[#383838]" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <ZoomOut className="w-5 h-5 text-[#383838]" />
                </button>
              </div>

              {/* Location Info */}
              {markerPosition && (
                <div className="absolute top-4 left-4 bg-white rounded-[15px] px-4 py-2 shadow-lg z-10">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] text-[#00d3cd] mb-1">
                    위치 선택됨
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#383838]">
                    경상북도 청도군 화양읍 다로 3길
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 기간 설정 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#00d3cd]" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838]">
                기간
              </p>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-[20px] p-4 mt-[-20px]">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <p className="font-['Pretendard:Bold',sans-serif] text-[16px] text-[#383838]">
                  {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
                </p>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2 mt-[-7px]">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                  <div
                    key={day}
                    className="text-center py-2"
                  >
                    <p className={`font-['Pretendard:SemiBold',sans-serif] text-[12px] ${
                      idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : 'text-[#898989]'
                    }`}>
                      {day}
                    </p>
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {(() => {
                  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
                  const days = [];

                  // Empty cells before first day
                  for (let i = 0; i < startingDayOfWeek; i++) {
                    days.push(<div key={`empty-${i}`} className="aspect-square"></div>);
                  }

                  // Days of month
                  for (let day = 1; day <= daysInMonth; day++) {
                    const date = new Date(year, month, day);
                    const isStart = dateRange.start && isSameDay(date, dateRange.start);
                    const isEnd = dateRange.end && isSameDay(date, dateRange.end);
                    const inRange = isInRange(date, dateRange.start, dateRange.end);
                    const isToday = isSameDay(date, new Date());

                    days.push(
                      <button
                        key={day}
                        onMouseDown={() => handleDateMouseDown(date)}
                        onMouseEnter={() => handleDateMouseEnter(date)}
                        className={`aspect-square rounded-[10px] flex items-center justify-center transition-all select-none ${
                          isStart || isEnd
                            ? 'bg-[#00d3cd] text-white'
                            : inRange
                            ? 'bg-[#00d3cd]/20 text-[#00d3cd]'
                            : isToday
                            ? 'border-2 border-[#00d3cd] text-[#383838]'
                            : 'text-[#383838] hover:bg-gray-100'
                        }`}
                      >
                        <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px]">
                          {day}
                        </p>
                      </button>
                    );
                  }

                  return days;
                })()}
              </div>

              {/* Selected Range Display */}
              {dateRange.start && dateRange.end && (
                <div className="mt-4 pt-4 border-t border-[#e9e9e9]">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-1">
                    선택된 기간
                  </p>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#00d3cd]">
                    {dateRange.start.getMonth() + 1}월 {dateRange.start.getDate()}일 ~ {dateRange.end.getMonth() + 1}월 {dateRange.end.getDate()}일
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* 카테고리 설정 */}
          <div className="mb-8 mt-[-8px]">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#00d3cd]" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838]">
                가능한 시간대
              </p>
              <span className="text-[#898989] font-['Pretendard:Medium',sans-serif] text-[12px]">
                (다중 선택 가능)
              </span>
            </div>
            <div className="flex flex-wrap gap-x-2 gap-y-3 mb-[100px]">
              {timeSlots.map((timeSlot) => (
                <button
                  key={timeSlot.id}
                  onClick={() => toggleTimeSlot(timeSlot.id)}
                  className={`px-3 py-1.5 rounded-full font-['Pretendard:SemiBold',sans-serif] text-[12px] transition-colors ${
                    selectedTimeSlots.includes(timeSlot.id)
                      ? 'bg-[#00d3cd] text-white'
                      : 'bg-[#f5f5f5] text-[#787878]'
                  }`}
                >
                  {timeSlot.label}
                </button>
              ))}
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-3 mb-[70px] mt-[-65px]">
            <button
              onClick={handleReset}
              className="flex-1 bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px]"
            >
              초기화
            </button>
            <button
              onClick={handleApply}
              className="flex-1 bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)]"
            >
              적용하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
