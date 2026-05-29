import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Search, MapPin, Clock, Star, SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';
import Union from '../../imports/Union/Union';
import { requests } from '../data/requests';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';

export default function ExploreScreen() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'latest' | 'distance' | 'slots' | 'recommended'>('recommended');
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target as Node)) {
        setIsSortMenuOpen(false);
      }
    };

    if (isSortMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortMenuOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

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
    setCurrentPage(1);
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
        
        

        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-[#f5f5f5] rounded-[15px] px-4 py-3 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#898989]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="어떤 일이 있는지 찾아볼까요?"
              className="flex-1 bg-transparent font-['Pretendard:Medium',sans-serif] text-[14px] text-[#383838] placeholder:text-[#898989] focus:outline-none"
            />
          </div>
          <button
            onClick={() => navigate('/filter')}
            className="bg-white border border-[#e9e9e9] rounded-[15px] w-[44px] h-[44px] flex items-center justify-center hover:border-[#00d3cd] transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-[#898989]" />
          </button>
        </div>

        {/* Keyword Tags */}
        <div className="mb-6 -mx-[34px]">
          <div
            className="overflow-x-auto px-[34px]"
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
            <div className="flex gap-2" style={{ width: 'max-content' }}>
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

        {/* Sort Options */}
        <div className="flex items-center justify-between mb-3">
          <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
            총 {requests.filter((request) => {
              if (selectedKeywords.length === 0) return true;
              return selectedKeywords.some(keywordId => {
                const keyword = keywords.find(k => k.id === keywordId);
                if (!keyword) return false;
                const keywordText = keyword.label.replace(/[^\w\s가-힣]/g, '').trim();
                return request.tags.some(tag => tag.includes(keywordText) || keywordText.includes(tag));
              });
            }).length}개의 요청
          </p>
          <div className="relative" ref={sortMenuRef}>
            <button
              onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#e9e9e9] rounded-[10px] hover:border-[#00d3cd] transition-colors"
            >
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#383838]">
                {sortBy === 'latest' ? '최신순' : sortBy === 'distance' ? '거리순' : sortBy === 'slots' ? '잔여 인원순' : '추천순'}
              </p>
              <ChevronDown className="w-3 h-3 text-[#898989]" />
            </button>
            {isSortMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-[120px] bg-white border border-[#e9e9e9] rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.1)] overflow-hidden z-10">
                <button
                  onClick={() => {
                    setSortBy('recommended');
                    setIsSortMenuOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-[#f5f5f5] transition-colors ${
                    sortBy === 'recommended' ? 'bg-[#f5f5f5]' : ''
                  }`}
                >
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#383838]">
                    추천순
                  </p>
                </button>
                <button
                  onClick={() => {
                    setSortBy('latest');
                    setIsSortMenuOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-[#f5f5f5] transition-colors ${
                    sortBy === 'latest' ? 'bg-[#f5f5f5]' : ''
                  }`}
                >
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#383838]">
                    최신순
                  </p>
                </button>
                <button
                  onClick={() => {
                    setSortBy('distance');
                    setIsSortMenuOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-[#f5f5f5] transition-colors ${
                    sortBy === 'distance' ? 'bg-[#f5f5f5]' : ''
                  }`}
                >
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#383838]">
                    거리순
                  </p>
                </button>
                <button
                  onClick={() => {
                    setSortBy('slots');
                    setIsSortMenuOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-[#f5f5f5] transition-colors ${
                    sortBy === 'slots' ? 'bg-[#f5f5f5]' : ''
                  }`}
                >
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#383838]">
                    잔여 인원순
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {(() => {
            const filteredRequests = [...requests]
              .filter((request) => {
                // 검색어 필터링
                if (searchQuery.trim()) {
                  const query = searchQuery.toLowerCase().trim();
                  const matchesSearch =
                    request.title.toLowerCase().includes(query) ||
                    request.person.toLowerCase().includes(query) ||
                    request.location.toLowerCase().includes(query) ||
                    request.tags.some(tag => tag.toLowerCase().includes(query));

                  if (!matchesSearch) return false;
                }

                // 키워드 필터링
                if (selectedKeywords.length === 0) return true;
                return selectedKeywords.some(keywordId => {
                  const keyword = keywords.find(k => k.id === keywordId);
                  if (!keyword) return false;
                  const keywordText = keyword.label.replace(/[^\w\s가-힣]/g, '').trim();
                  return request.tags.some(tag => tag.includes(keywordText) || keywordText.includes(tag));
                });
              })
              .sort((a, b) => {
                // 지원 완료 여부 먼저 확인 (완료된 항목은 항상 하단)
                const aCompleted = a.currentApplicants >= a.totalSlots;
                const bCompleted = b.currentApplicants >= b.totalSlots;

                if (aCompleted !== bCompleted) {
                  return aCompleted ? 1 : -1;
                }

                // 같은 완료 상태 내에서 기존 정렬 기준 적용
                if (sortBy === 'latest') {
                  if (a.isNew !== b.isNew) {
                    return a.isNew ? -1 : 1;
                  }
                  return b.id - a.id;
                } else if (sortBy === 'distance') {
                  const parseDistance = (dist: string) => {
                    const value = parseFloat(dist);
                    if (dist.includes('km')) {
                      return value * 1000;
                    }
                    return value;
                  };
                  const distanceA = parseDistance(a.distance);
                  const distanceB = parseDistance(b.distance);
                  return distanceA - distanceB;
                } else if (sortBy === 'slots') {
                  const slotsA = a.totalSlots - a.currentApplicants;
                  const slotsB = b.totalSlots - b.currentApplicants;
                  return slotsB - slotsA;
                } else if (sortBy === 'recommended') {
                  const parseDistance = (dist: string) => {
                    const value = parseFloat(dist);
                    if (dist.includes('km')) {
                      return value * 1000;
                    }
                    return value;
                  };
                  const distanceA = parseDistance(a.distance);
                  const distanceB = parseDistance(b.distance);

                  const calculateScore = (credit: number, distance: number) => {
                    if (distance <= 1000) {
                      return (credit * 20) - (distance / 50);
                    } else {
                      return (credit * 5) - (distance / 10);
                    }
                  };

                  const scoreA = calculateScore(a.credit, distanceA);
                  const scoreB = calculateScore(b.credit, distanceB);
                  return scoreB - scoreA;
                } else {
                  return 0;
                }
              });

            const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentRequests = filteredRequests.slice(startIndex, endIndex);

            return currentRequests.map((request) => (
            <div
              key={request.id}
              onClick={() => navigate(`/request/${request.id}`)}
              className={`border border-[#e9e9e9] rounded-[20px] p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:border-[#00d3cd] transition-colors ${
                request.currentApplicants >= request.totalSlots
                  ? 'bg-[#f7f7f7]'
                  : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-[6px]">
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838]">
                      {request.title}
                    </p>
                    {request.isNew && (
                      <span className="bg-[#00d3cd] px-2 py-0.5 rounded-full">
                        <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] text-white">NEW</p>
                      </span>
                    )}
                  </div>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-[8px]">
                    {request.person}
                  </p>
                  <div className="flex items-center gap-2 mb-[8px]">
                    {request.tags.map((tag, idx) => (
                      <span key={idx} className="bg-[#f5f5f5] px-2 py-1 rounded-full">
                        <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#787878]">
                          {tag}
                        </p>
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-[#727272] mb-[8px]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <p className="font-['Pretendard:Medium',sans-serif] text-[10px] whitespace-nowrap">
                        {request.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <p className="font-['Pretendard:Medium',sans-serif] text-[10px] whitespace-nowrap">
                        {request.location} ({request.distance})
                      </p>
                    </div>
                  </div>
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${
                    request.currentApplicants >= request.totalSlots
                      ? 'bg-[#f5f5f5]'
                      : 'bg-[#fff9e6]'
                  }`}>
                    <p className={`font-['Pretendard:SemiBold',sans-serif] text-[10px] ${
                      request.currentApplicants >= request.totalSlots
                        ? 'text-[#898989]'
                        : 'text-[#ff9800]'
                    }`}>
                      {request.currentApplicants}/{request.totalSlots}명 지원
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 ml-3">
                  <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] px-3 py-1 rounded-full">
                    <p className="font-['Pretendard:Bold',sans-serif] text-[11px] text-[#00d3cd]">
                      +{request.credit}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#FFB800] fill-[#FFB800]" />
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#898989]">
                      4.8
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ));
          })()}
        </div>

        {/* Pagination */}
        {(() => {
          const filteredRequests = [...requests]
            .filter((request) => {
              if (selectedKeywords.length === 0) return true;
              return selectedKeywords.some(keywordId => {
                const keyword = keywords.find(k => k.id === keywordId);
                if (!keyword) return false;
                const keywordText = keyword.label.replace(/[^\w\s가-힣]/g, '').trim();
                return request.tags.some(tag => tag.includes(keywordText) || keywordText.includes(tag));
              });
            });

          const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

          if (totalPages <= 1) return null;

          return (
            <div className="flex items-center justify-center gap-2 mb-[124px]">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center rounded-[10px] border transition-colors ${
                  currentPage === 1
                    ? 'border-[#e9e9e9] bg-[#f5f5f5] cursor-not-allowed'
                    : 'border-[#e9e9e9] bg-white hover:border-[#00d3cd]'
                }`}
              >
                <ChevronLeft className={`w-4 h-4 ${currentPage === 1 ? 'text-[#c4c4c4]' : 'text-[#383838]'}`} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 flex items-center justify-center rounded-[10px] border transition-colors ${
                        currentPage === page
                          ? 'border-[#00d3cd] bg-[#00d3cd]'
                          : 'border-[#e9e9e9] bg-white hover:border-[#00d3cd]'
                      }`}
                    >
                      <p className={`font-['Pretendard:Medium',sans-serif] text-[12px] ${
                        currentPage === page ? 'text-white' : 'text-[#383838]'
                      }`}>
                        {page}
                      </p>
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="text-[#898989]">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex items-center justify-center rounded-[10px] border transition-colors ${
                  currentPage === totalPages
                    ? 'border-[#e9e9e9] bg-[#f5f5f5] cursor-not-allowed'
                    : 'border-[#e9e9e9] bg-white hover:border-[#00d3cd]'
                }`}
              >
                <ChevronRight className={`w-4 h-4 ${currentPage === totalPages ? 'text-[#c4c4c4]' : 'text-[#383838]'}`} />
              </button>
            </div>
          );
        })()}
      </div>
    </div>
    </Layout>
  );
}
