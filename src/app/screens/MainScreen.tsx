import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Clock, Star, Home, Search, User, Bell, LogOut, HelpCircle, Coins, DollarSign, ClipboardList, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import LogoutModal from '../components/LogoutModal';
import imgImage17 from '../../imports/메인화면/a594242ec383068cb184cf2a20fb60515ea7c57b.png';
import profileImage from '../../imports/___________2026-05-11_______9.25.17.png';
import Union from '../../imports/Union/Union';
import { requests } from '../data/requests';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';

export default function MainScreen() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('전체');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const [isNavigatingToExplore, setIsNavigatingToExplore] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedTab]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationOpen]);

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLogoutModalOpen(false);
    setIsFadingOut(true);

    setTimeout(() => {
      navigate('/');
    }, 600);
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setHasUnreadNotifications(false);
    setIsNotificationOpen(false);
  };

  const handleCloseSearch = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 300);
  };

  const handleNavigateToExplore = () => {
    setIsNavigatingToExplore(true);
    setTimeout(() => {
      navigate('/explore');
    }, 300);
  };

  const keywords = [
    { id: 'electronics', label: '📱 전자제품' },
    { id: 'help', label: '🤝 일손' },
    { id: 'convenience', label: '🏠 생활편의' },
    { id: 'companion', label: '💬 말동무' },
    { id: 'transportation', label: '🚗 이동' },
  ];

  const toggleKeyword = (keywordId: string) => {
    setSelectedKeywords((prev) =>
      prev.includes(keywordId)
        ? prev.filter((id) => id !== keywordId)
        : [...prev, keywordId]
    );
  };

  const tabs = ['전체', '도움 요청', '시스템'];

  // 아직 처리되지 않은 도움 요청들
  const pendingRequests = [
    {
      id: 1,
      title: 'TV 연결 도움',
      person: '김말숙 할머니',
      time: '오늘 오후 3:00',
      location: '다로리 동쪽 마을',
      credit: 3,
      distance: '300m',
      isNew: true,
    },
    {
      id: 2,
      title: '스마트폰 사용법 알려주기',
      person: '이순자 할머니',
      time: '내일 오전 10:00',
      location: '다로리 북쪽 마을',
      credit: 2,
      distance: '500m',
      isNew: true,
    },
    {
      id: 3,
      title: '장보기 도움',
      person: '박철수 할아버지',
      time: '내일 오후 2:00',
      location: '다로리 시장 앞',
      credit: 3,
      distance: '1.2km',
      isNew: false,
    },
    {
      id: 4,
      title: '병원 동행',
      person: '김영희 할머니',
      time: '5월 14일 오전 9:00',
      location: '다로리 보건소',
      credit: 5,
      distance: '800m',
      isNew: false,
    },
  ];

  // 완료한 활동들
  const completedActivities = [
    {
      id: 1,
      title: '마당 정리 요청',
      person: '박영수 어르신',
      date: '어제',
      time: '오후 1:00',
      location: '다로리 은행나무 앞',
      credit: 2,
    },
    {
      id: 2,
      title: '장보기 도움',
      person: '이순자 할머니',
      date: '2일 전',
      time: '오전 11:00',
      location: '다로리 카페 옆',
      credit: 2,
    },
    {
      id: 3,
      title: '전화 사용법 알려주기',
      person: '최영희 할머니',
      date: '3일 전',
      time: '오후 2:00',
      location: '다로리 서쪽 마을',
      credit: 3,
    },
  ];

  // 인증 미완료 활동들
  const pendingVerificationActivities = [
    {
      id: 1,
      title: 'TV 연결 도움',
      person: '김말숙 할머니',
      date: '오늘',
      time: '오후 3:00',
      location: '다로리 동쪽 마을',
      credit: 30,
    },
  ];

  // 시스템 알림들
  const systemNotifications = [
    {
      id: 1,
      type: 'review',
      title: '할머니가 후기를 남겼어요',
      description: 'TV 연결 도움 활동에 대한 후기',
      time: '3일 전',
      detail: '김말숙 할머니',
    },
    {
      id: 2,
      type: 'credit',
      title: '크레딧이 적립되었어요',
      description: '+2 크레딧이 적립되었어요',
      time: '2일 전',
      detail: '오전 11:00 ㅣ 다로리 카페 옆',
    },
    {
      id: 3,
      type: 'level',
      title: '레벨이 올랐어요!',
      description: 'LV.2 → LV.3으로 레벨업',
      time: '5일 전',
      detail: '축하합니다!',
    },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case '전체':
        return (
          <div className="space-y-2 mt-[10px]">
            {/* 나의 활동 제목 */}
            <h3 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-3">
              나의 활동
            </h3>
            {/* 인증 미완료 활동 섹션 */}
            {pendingVerificationActivities.map((activity) => (
              <div
                key={`pending-${activity.id}`}
                onClick={() => navigate(`/verify/${activity.id}`)}
                className="bg-[rgba(0,211,205,0.1)] border border-[#00d3cd] rounded-[15px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-3 cursor-pointer hover:border-[#00b8b4] transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838]">
                        {activity.title}
                      </p>
                      <span className="bg-[#00d3cd] px-1.5 py-0.5 rounded-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] text-[8px] text-white">인증 필요</p>
                      </span>
                    </div>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989] mb-0.5">
                      {activity.person}
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[9px] text-[#727272]">
                      {activity.time} ㅣ {activity.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[#626262] text-[9px]">
                      {activity.date}
                    </p>
                    <div className="bg-[#00d3cd] px-1.5 py-0.5 rounded-full">
                      <p className="font-['Pretendard:Bold',sans-serif] text-[8px] text-white">
                        +{activity.credit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 도움 요청 섹션 */}
            {pendingRequests.slice(0, 2).map((request) => (
              <div
                key={request.id}
                onClick={() => navigate(`/request/${request.id}`)}
                className="bg-white border border-[#e9e9e9] rounded-[15px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-3 cursor-pointer hover:border-[#00d3cd] transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  {request.isNew && (
                    <div className="bg-[#00d3cd] px-2 py-0.5 rounded-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-white text-[8px]">NEW</p>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 ml-auto">
                    <MapPin className="w-2.5 h-2.5 text-[#727272]" />
                    <p className="font-['Pretendard:Medium',sans-serif] text-[#727272] text-[9px]">
                      {request.distance}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] mb-0.5">
                      {request.title}
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989] mb-1">
                      {request.person}
                    </p>
                    <div className="flex items-center gap-2 text-[#727272]">
                      <div className="flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" />
                        <p className="font-['Pretendard:Medium',sans-serif] text-[9px]">
                          {request.time}
                        </p>
                      </div>
                      <p className="font-['Pretendard:Medium',sans-serif] text-[9px]">
                        {request.location}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] px-2 py-0.5 rounded-full">
                    <p className="font-['Pretendard:Bold',sans-serif] text-[10px] text-[#00d3cd]">
                      +{request.credit}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 완료한 활동 섹션 */}
            {completedActivities.slice(0, 2).map((activity) => (
              <div
                key={`activity-${activity.id}`}
                onClick={() => navigate(`/activity-log/${activity.id}`)}
                className="bg-[rgba(197,197,197,0.1)] border border-[#e9e9e9] rounded-[15px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-3 cursor-pointer hover:border-[#00d3cd] transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] mb-0.5">
                      도움을 완료했어요!
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989] mb-0.5">
                      {activity.title} - {activity.person}
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[9px] text-[#727272]">
                      {activity.time} ㅣ {activity.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[#626262] text-[9px]">
                      {activity.date}
                    </p>
                    <div className="bg-[#00d3cd] px-1.5 py-0.5 rounded-full">
                      <p className="font-['Pretendard:Bold',sans-serif] text-[8px] text-white">
                        +{activity.credit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 시스템 알림 섹션 */}
            {systemNotifications.slice(0, 1).map((notification) => (
              null
            ))}
          </div>
        );

      case '도움 요청':
        return (
          <div className="space-y-3 mt-6">
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                onClick={() => navigate(`/request/${request.id}`)}
                className="bg-white border border-[#e9e9e9] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-4 cursor-pointer hover:border-[#00d3cd] transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  {request.isNew && (
                    <div className="bg-[#00d3cd] px-3 py-1 rounded-full">
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-white text-[9px]">NEW</p>
                    </div>
                  )}
                  <div className="flex items-center gap-2 ml-auto">
                    <MapPin className="w-3 h-3 text-[#727272]" />
                    <p className="font-['Pretendard:Medium',sans-serif] text-[#727272] text-[10px]">
                      {request.distance}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838] mb-1">
                      {request.title}
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-2">
                      {request.person}
                    </p>
                    <div className="flex items-center gap-3 text-[#727272]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <p className="font-['Pretendard:Medium',sans-serif] text-[10px]">
                          {request.time}
                        </p>
                      </div>
                      <p className="font-['Pretendard:Medium',sans-serif] text-[10px]">
                        {request.location}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] px-3 py-1 rounded-full">
                    <p className="font-['Pretendard:Bold',sans-serif] text-[11px] text-[#00d3cd]">
                      +{request.credit}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => navigate('/explore')}
              className="w-full bg-white border-2 border-[#e9e9e9] rounded-[20px] p-4 hover:border-[#00d3cd] transition-colors"
            >
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#787878]">
                더 많은 도움 요청 보기
              </p>
            </button>
          </div>
        );

      case '시스템':
        return (
          <div className="space-y-3 mt-6">
            {systemNotifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-[rgba(197,197,197,0.1)] border border-[#e9e9e9] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex gap-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#A0EDD9] flex items-center justify-center flex-shrink-0">
                      <span className="text-[20px]">{notification.type === 'credit' ? '⭐' : '🎉'}</span>
                    </div>
                    <div>
                      <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838] mb-1">
                        {notification.title}
                      </p>
                      <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-1">
                        {notification.description}
                      </p>
                      <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#727272]">
                        {notification.detail}
                      </p>
                    </div>
                  </div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[#626262] text-[10px]">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className={`relative h-full w-full bg-white flex flex-col overflow-hidden transition-opacity duration-[600ms] ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={handleLogoutCancel}
          onConfirm={handleLogoutConfirm}
        />
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
            {isLoggedIn && (
              <div className="relative ml-[2px]" ref={notificationRef}>
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Bell className="w-5 h-5 text-[#383838]" />
                  {systemNotifications.length > 0 && hasUnreadNotifications && (
                    <span className="absolute top-0 right-0 w-3 h-3 bg-[#00d3cd] rounded-full border-2 border-white"></span>
                  )}
                </button>

                {isNotificationOpen && (
                  <div className="absolute right-[-10px] top-12 w-[320px] bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.15)] border border-[#e9e9e9] z-50">
                    <div className="sticky top-0 bg-white p-4 border-b border-[#e9e9e9] flex items-center justify-between rounded-t-[20px] z-10">
                      <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838]">
                        알림
                      </p>
                      <button
                        onClick={handleMarkAllAsRead}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        title="모두 읽음"
                      >
                        <svg className="w-5 h-5 text-[#00d3cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-3 space-y-2">
                      {systemNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="bg-[rgba(197,197,197,0.05)] border border-[#f0f0f0] rounded-[15px] p-3 hover:bg-[rgba(0,211,205,0.05)] transition-colors cursor-pointer"
                        >
                          <div className="flex gap-3">
                            <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#a0e9ed]">
                              <span className="text-[18px]">
                                {notification.type === 'credit' ? '⭐' : notification.type === 'review' ? '💬' : '🎉'}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838]">
                                  {notification.title}
                                </p>
                                <p className="font-['Pretendard:Medium',sans-serif] text-[9px] text-[#898989]">
                                  {notification.time}
                                </p>
                              </div>
                              <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989] mb-1">
                                {notification.description}
                              </p>
                              <p className="font-['Pretendard:Medium',sans-serif] text-[9px] text-[#b0b0b0]">
                                {notification.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black mb-1">
                안녕하세요, 민수님 👋
              </h1>
              <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-black flex items-center gap-1"><MapPin className="w-4 h-4" />경상북도 청도군 다로리</p>
            </div>
            <div className="flex flex-col items-center">
              {isLoggedIn ? (
                <button
                  onClick={() => navigate('/mypage')}
                  className="w-[45px] h-[45px] rounded-full bg-[#A8C7BF] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden flex-shrink-0"
                >
                  <img src={profileImage} alt="프로필" className="w-full h-full object-cover" />
                </button>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="bg-[#00d3cd] text-white font-['Pretendard:SemiBold',sans-serif] text-[14px] px-5 py-2 rounded-[15px] hover:bg-[#00b8b4] transition-colors"
                >
                  로그인
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {selectedTab === '전체' && isSearchOpen && (
          <div className={`px-[34px] mb-[12px] mt-[15px] ${isSearchClosing ? 'animate-[slideUp_0.3s_ease-out]' : 'animate-[slideDown_0.3s_ease-out]'}`}>
            <style>{`
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              @keyframes slideUp {
                from {
                  opacity: 1;
                  transform: translateY(0);
                }
                to {
                  opacity: 0;
                  transform: translateY(-10px);
                }
              }
            `}</style>
            <div className={`bg-[#f5f5f5] rounded-[15px] px-4 py-3 flex items-center gap-3 mt-[5px] transition-all duration-300 ${
              isNavigatingToExplore ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <button
                onClick={handleCloseSearch}
                className="p-0 hover:opacity-70 transition-opacity"
              >
                <ArrowLeft className="w-5 h-5 text-[#898989]" />
              </button>
              <input
                type="text"
                placeholder="어떤 일이 있는지 찾아볼까요?"
                onClick={handleNavigateToExplore}
                className="flex-1 bg-transparent font-['Pretendard:Medium',sans-serif] text-[14px] text-[#383838] placeholder:text-[#898989] focus:outline-none cursor-pointer"
              />
              <Search className="w-5 h-5 text-[#898989]" />
            </div>
          </div>
        )}

        {/* Keyword Tags */}
        {selectedTab === '전체' && (
          <div className={`mb-[25px] transition-all duration-300 ${isSearchOpen ? 'mt-0' : 'mt-0'}`}>
            <div
              className={`overflow-x-auto ${isSearchOpen ? '-mt-[10px]' : '-mt-[5px]'}`}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-2 px-[34px] mt-[15px]" style={{ width: 'max-content' }}>
                {!isSearchOpen && (
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="bg-white border border-[#e9e9e9] w-[38px] h-[38px] rounded-full flex items-center justify-center hover:border-[#00d3cd] transition-colors flex-shrink-0"
                  >
                    <Search className="w-4 h-4 text-[#898989]" />
                  </button>
                )}
                {keywords.map((keyword) => (
                  <button
                    key={keyword.id}
                    onClick={() => toggleKeyword(keyword.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                      selectedKeywords.includes(keyword.id)
                        ? 'bg-[#00d3cd] border border-[#00d3cd]'
                        : 'bg-white border border-[#e9e9e9] hover:border-[#00d3cd]'
                    }`}
                  >
                    <p className={`font-['Pretendard:Medium',sans-serif] text-[13px] ${
                      selectedKeywords.includes(keyword.id) ? 'text-white' : 'text-[#383838]'
                    }`}>
                      {keyword.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Region Examples */}
        {selectedTab === '전체' && (
          <div className="px-[34px] mb-[20px]">
            <h3 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-3">
              추천 도움 요청
            </h3>
            <div className="space-y-2">
              {(() => {
                const parseDistance = (dist: string) => {
                  const value = parseFloat(dist);
                  if (dist.includes('km')) {
                    return value * 1000;
                  }
                  return value;
                };

                const calculateScore = (credit: number, distance: number) => {
                  if (distance <= 1000) {
                    return (credit * 20) - (distance / 50);
                  } else {
                    return (credit * 5) - (distance / 10);
                  }
                };

                const recommendedRequests = [...requests]
                  .filter((request) => {
                    if (selectedKeywords.length === 0) return true;
                    return selectedKeywords.some(keywordId => {
                      const keyword = keywords.find(k => k.id === keywordId);
                      if (!keyword) return false;
                      const keywordText = keyword.label.replace(/[^\w\s가-힣]/g, '').trim();
                      return request.tags.some(tag => tag.includes(keywordText) || keywordText.includes(tag));
                    });
                  })
                  .sort((a, b) => {
                    const distanceA = parseDistance(a.distance);
                    const distanceB = parseDistance(b.distance);
                    const scoreA = calculateScore(a.credit, distanceA);
                    const scoreB = calculateScore(b.credit, distanceB);
                    return scoreB - scoreA;
                  })
                  .slice(0, 6);

                return recommendedRequests.map((request) => (
                  <div
                    key={request.id}
                    onClick={() => navigate(`/request/${request.id}`)}
                    className="bg-white border border-[#e9e9e9] rounded-[15px] p-3 cursor-pointer hover:border-[#00d3cd] transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                            {request.title}
                          </p>
                          {request.isNew && (
                            <span className="bg-[#00d3cd] px-1.5 py-0.5 rounded-full">
                              <p className="font-['Pretendard:SemiBold',sans-serif] text-[8px] text-white">NEW</p>
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[#898989]">
                          <p className="font-['Pretendard:Medium',sans-serif] text-[11px]">
                            {request.person}
                          </p>
                          <p className="font-['Pretendard:Medium',sans-serif] text-[10px]">•</p>
                          <p className="font-['Pretendard:Medium',sans-serif] text-[10px]">
                            {request.time}
                          </p>
                        </div>
                      </div>
                      <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] px-2 py-1 rounded-full">
                        <p className="font-['Pretendard:Bold',sans-serif] text-[11px] text-[#00d3cd]">
                          +{request.credit}
                        </p>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            <button onClick={() => navigate('/explore')} className="w-full text-center py-3 mt-2">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#898989] hover:text-[#00d3cd] transition-colors">
                더 많은 요청 보기 →
              </p>
            </button>
          </div>
        )}

        {/* Menu Grid */}
        {selectedTab === '전체' && (
          <div className="px-[34px] mb-[20px] mt-[15px]">
            <div className="grid grid-cols-3 gap-2">


              <button onClick={() => navigate('/credit')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                    <Coins className="w-5 h-5 text-[#00d3cd]" />
                  </div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">크레딧</p>
                </div>
              </button>

              <button onClick={() => navigate('/cashout')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-[#00d3cd]" />
                  </div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">캐시 아웃</p>
                </div>
              </button>

              <button onClick={() => navigate('/my-activity')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-[#00d3cd]" />
                  </div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">활동 기록</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        {selectedTab === '전체' && (
          null
        )}

        {/* Content */}
        <div ref={contentRef} className="flex-1 overflow-auto px-[34px] pb-[100px]">
          {renderContent()}

          {/* Logout Button */}
          {isLoggedIn && (
            <div className="flex justify-center mt-8 mb-4">
              <button
                onClick={handleLogoutClick}
                className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989] hover:text-[#626262] transition-colors"
              >
                로그아웃
              </button>
            </div>
          )}
        </div>

        {/* Logout Button at Bottom */}
        {isLoggedIn && (
          <div className="absolute bottom-[80px] left-0 right-0 flex justify-center pb-4">
            
          </div>
        )}

      </div>
    </Layout>
  );
}
