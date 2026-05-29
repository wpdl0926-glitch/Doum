import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MapPin, Home, Search, Bell, HelpCircle, Coins, DollarSign, ClipboardList } from 'lucide-react';
import Layout from '../components/Layout';
import Union from '../../imports/Union/Union';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';

export default function GuestMainScreen() {
  const navigate = useNavigate();
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const banners = [
    {
      title: '도움을 주고받는\n따뜻한 커뮤니티',
      description: '이웃의 도움 요청에 응답하고\n크레딧을 받아 내가 필요할 때 사용하세요',
      buttonText: '시작하기',
    },
    {
      title: '작은 도움으로\n큰 행복을 만들어요',
      description: '할머니의 장보기, 할아버지의 병원 동행\n여러분의 손길이 필요합니다',
      buttonText: '도움 주러가기',
    },
    {
      title: '크레딧으로\n도움을 요청하세요',
      description: '도움을 주고 받은 크레딧으로\n내가 필요할 때 이웃에게 요청하세요',
      buttonText: '알아보기',
    },
    {
      title: '함께 만드는\n따뜻한 마을',
      description: '우리 마을 이웃들과 함께\n서로 돕는 문화를 만들어가요',
      buttonText: '참여하기',
    },
    {
      title: '지금 바로\n시작해보세요',
      description: '간단한 가입으로\n따뜻한 커뮤니티에 참여하세요',
      buttonText: '회원가입',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <Layout>
      <div className="h-full w-full bg-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-[34px] pt-[40px] pb-[15px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={headerLogoImage}
                alt="DOUM"
                className="h-[54px] w-auto object-contain -ml-[10px]"
              />
            </div>
          </div>
          <div className="flex justify-between items-start -mt-[18px]">
            <div>
              <h1 className="font-['Pretendard:Bold',sans-serif] text-[22px] text-black mb-1 mt-[5px]">
                여러분의 이웃과<br />
                함께해주세요
              </h1>
              <p className="font-['Pretendard:Medium',sans-serif] text-black flex items-center gap-1 text-[13px] mt-[5px]">
                <MapPin className="w-4 h-4" />경상북도 청도군 다로리
              </p>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="bg-[#00d3cd] text-white font-['Pretendard:SemiBold',sans-serif] text-[14px] px-5 py-2 rounded-[15px] hover:bg-[#00b8b4] transition-colors mt-2"
            >
              로그인
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-[34px] mb-[12px]">
          <div className="bg-[#f5f5f5] rounded-[15px] px-4 py-3 flex items-center gap-3 mt-[5px]">
            <Search className="w-5 h-5 text-[#898989]" />
            <input
              type="text"
              placeholder="찾고싶은 지역을 입력해주세요"
              className="flex-1 bg-transparent font-['Pretendard:Medium',sans-serif] text-[14px] text-[#383838] placeholder:text-[#898989] focus:outline-none"
            />
          </div>
        </div>

        {/* Keyword Tags */}
        <div
          className="mb-[25px] overflow-x-auto"
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
          <div className="flex gap-2 pl-[34px] pr-[34px]" style={{ width: 'max-content' }}>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">경상북도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">경상남도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">경기도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">강원도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">충청북도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">충청남도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">전라북도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">전라남도</p>
            </button>
            <button className="bg-white border border-[#e9e9e9] px-4 py-2 rounded-full whitespace-nowrap hover:border-[#00d3cd] transition-colors">
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#383838]">제주도</p>
            </button>
          </div>
        </div>

        {/* Region Examples */}
        <div className="px-[34px] mb-[20px]">
          <h3 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-3">
            지역별 활동 현황
          </h3>
          <div className="space-y-3">
            <div className="bg-white border border-[#e9e9e9] rounded-[15px] p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838]">
                  경상북도 청도군 다로리
                </p>
                <div className="bg-[#00d3cd]/10 px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#00d3cd]">활발</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">활동중</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#00d3cd]">342명</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">완료된 도움</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#383838]">1,245건</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e9e9e9] rounded-[15px] p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838]">
                  경기도 수원시 팔달구
                </p>
                <div className="bg-[#00d3cd]/10 px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#00d3cd]">활발</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">활동중</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#00d3cd]">578명</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">완료된 도움</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#383838]">2,893건</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#e9e9e9] rounded-[15px] p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838]">
                  제주도 서귀포시 표선면
                </p>
                <div className="bg-[#FFB800]/10 px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#FFB800]">성장중</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">활동중</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#00d3cd]">156명</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#787878]">완료된 도움</p>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#383838]">487건</p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full text-center py-3 mt-2">
            <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#898989] hover:text-[#00d3cd] transition-colors">
              다른 지역 더보기 →
            </p>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-[34px] pb-[32px]">
          <div className="relative bg-gradient-to-br from-[#00d3cd] to-[#00b8b4] rounded-[20px] p-8 mb-[20px] text-center overflow-hidden">
            <div
              className="transition-all duration-[600ms] ease-in-out"
              style={{
                transform: `translateX(-${currentBannerIndex * 100}%)`,
                display: 'flex',
                width: `${banners.length * 100}%`,
              }}
            >
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  style={{ width: `${100 / banners.length}%` }}
                >
                  <h2 className="font-['Pretendard:Bold',sans-serif] text-[22px] text-white mb-3 whitespace-pre-line">
                    {banner.title}
                  </h2>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-white/90 mb-4 whitespace-pre-line">
                    {banner.description}
                  </p>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-white text-[#00d3cd] font-['Pretendard:Bold',sans-serif] text-[15px] px-8 py-2 rounded-[15px] hover:bg-[#f5f5f5] transition-colors"
                  >
                    {banner.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBannerIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentBannerIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            <button onClick={() => navigate('/login')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[#00d3cd]" />
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">도움 요청</p>
              </div>
            </button>

            <button onClick={() => navigate('/login')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                  <Coins className="w-5 h-5 text-[#00d3cd]" />
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">크레딧</p>
              </div>
            </button>

            <button onClick={() => navigate('/login')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-[#00d3cd]" />
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">캐시 아웃</p>
              </div>
            </button>

            <button onClick={() => navigate('/login')} className="bg-white border border-[#e9e9e9] rounded-[15px] px-2 py-3 hover:border-[#00d3cd] transition-colors">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[36px] h-[36px] bg-[#00d3cd]/10 rounded-full flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#00d3cd]" />
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838]">활동 기록</p>
              </div>
            </button>
          </div>

          <div className="space-y-3">
            <h3 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-3 mt-[20px]">
              이웃들의 활동 일지
            </h3>

            <div className="bg-white border border-[#e9e9e9] rounded-[20px] p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#A8C7BF] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[14px]">김</span>
                </div>
                <div className="flex-1">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838] mb-1">
                    장보기 도움 완료
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                    김도움 • 2일 전
                  </p>
                </div>
                <div className="bg-[#00d3cd] px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:Bold',sans-serif] text-[10px] text-white">+20</p>
                </div>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#626262] leading-[1.5]">
                할머니께서 장을 보고 집까지 짐을 들고 가는 것을 도와드렸습니다. 함께 이야기 나누며 즐거운 시간을 보냈어요.
              </p>
            </div>

            <div className="bg-white border border-[#e9e9e9] rounded-[20px] p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#C7B8A8] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[14px]">박</span>
                </div>
                <div className="flex-1">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838] mb-1">
                    스마트폰 사용법 안내
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                    박나눔 • 3일 전
                  </p>
                </div>
                <div className="bg-[#00d3cd] px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:Bold',sans-serif] text-[10px] text-white">+15</p>
                </div>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#626262] leading-[1.5]">
                어르신께 카카오톡 사용법과 사진 전송 방법을 알려드렸습니다. 손주들과 연락이 쉬워졌다며 정말 기뻐하셨어요.
              </p>
            </div>

            <div className="bg-white border border-[#e9e9e9] rounded-[20px] p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-[40px] h-[40px] rounded-full bg-[#A8BCC7] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[14px]">이</span>
                </div>
                <div className="flex-1">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838] mb-1">
                    병원 동행 서비스
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                    이사랑 • 5일 전
                  </p>
                </div>
                <div className="bg-[#00d3cd] px-2 py-1 rounded-full">
                  <p className="font-['Pretendard:Bold',sans-serif] text-[10px] text-white">+30</p>
                </div>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#626262] leading-[1.5]">
                할아버지와 함께 병원에 다녀왔습니다. 진료 받으시는 동안 옆에서 대기하며 함께 있어드렸어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
