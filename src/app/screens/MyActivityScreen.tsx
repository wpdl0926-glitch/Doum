import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, TrendingUp, Award, Calendar, Camera, X } from 'lucide-react';
import Layout from '../components/Layout';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';
import photoImage from '../../imports/_____-1.png';

export default function MyActivityScreen() {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const activities = [
    {
      id: 1,
      title: 'TV 연결 도움',
      person: '김말숙 할머니',
      date: '2026-05-12',
      time: '오후 3:00',
      location: '다로리 동쪽 마을',
      credit: 3,
      status: 'completed',
    },
    {
      id: 2,
      title: '마당 정리 요청',
      person: '박영수 어르신',
      date: '2026-05-11',
      time: '오후 1:00',
      location: '다로리 은행나무 앞',
      credit: 2,
      status: 'completed',
    },
    {
      id: 3,
      title: '장보기 도움',
      person: '이순자 할머니',
      date: '2026-05-10',
      time: '오전 11:00',
      location: '다로리 카페 옆',
      credit: 2,
      status: 'completed',
    },
  ];

  const activityPhotos = [
    { id: 1, activityTitle: 'TV 연결 도움', date: '2026-05-12', color: '#A0EDD9', image: photoImage },
    { id: 2, activityTitle: '마당 정리 요청', date: '2026-05-11', color: '#C7B8A8', image: null },
    { id: 3, activityTitle: '장보기 도움', date: '2026-05-10', color: '#A8BCC7', image: null },
    { id: 4, activityTitle: '전화 사용법 알려주기', date: '2026-05-09', color: '#D9A0C7', image: null },
    { id: 5, activityTitle: '감 포장 도움', date: '2026-05-08', color: '#A0D9C7', image: null },
    { id: 6, activityTitle: '짐 옮기기', date: '2026-05-07', color: '#C7A0D9', image: null },
  ];

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
        <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-8">
          나의 돕기 현황
        </h1>

        <div className="grid grid-cols-3 gap-3 mb-8 mt-[-15px]">
          <div className="bg-[#f5f5f5] rounded-[15px] p-4 text-center">
            <TrendingUp className="w-6 h-6 text-[#00d3cd] mx-auto mb-2" />
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[11px] text-[#787878] mb-1">
              도운 횟수
            </p>
            <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black">
              12회
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[15px] p-4 text-center">
            <Award className="w-6 h-6 text-[#00d3cd] mx-auto mb-2" />
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[11px] text-[#787878] mb-1">
              총 크레딧
            </p>
            <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black">
              243
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[15px] p-4 text-center">
            <Calendar className="w-6 h-6 text-[#00d3cd] mx-auto mb-2" />
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[11px] text-[#787878] mb-1">
              이번 달
            </p>
            <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-black">
              5회
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-4">
            최근 활동
          </h2>
        </div>

        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => navigate(`/activity-log/${activity.id}`)}
              className="bg-[rgba(197,197,197,0.1)] border border-[#e9e9e9] rounded-[20px] p-4 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:border-[#00d3cd] transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838] mb-1">
                    {activity.title}
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                    {activity.person}
                  </p>
                </div>
                <div className="bg-[#00d3cd] px-3 py-1 rounded-full">
                  <p className="font-['Pretendard:Bold',sans-serif] text-[11px] text-white">
                    +{activity.credit}
                  </p>
                </div>
              </div>
              <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#727272]">
                {activity.date} {activity.time} ㅣ {activity.location}
              </p>
            </div>
          ))}
        </div>

        {/* Photo Archive Section */}
        <div className="mt-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-[#00d3cd]" />
            <h2 className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838]">
              나의 활동 사진
            </h2>
            <span className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
              {activityPhotos.length}장
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {activityPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.id.toString())}
                className="aspect-square rounded-[12px] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                style={{ backgroundColor: photo.color }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {photo.image ? (
                    <img src={photo.image} alt={photo.activityTitle} className="w-full h-full object-cover" />
                  ) : (
                    <Camera className="w-8 h-8 text-white/50" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#b0b0b0] text-center mt-4">
            활동 일지에 사진을 추가하면 이곳에 모아볼 수 있어요
          </p>
        </div>

        <button
          onClick={() => navigate('/explore')}
          className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] mt-8 mb-[100px]"
        >
          새로운 요청 찾기
        </button>
      </div>

      {/* Photo Viewer Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setSelectedPhoto(null)}>
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-[90%] max-h-[90%] aspect-square rounded-[20px] overflow-hidden"
            style={{ backgroundColor: activityPhotos.find(p => p.id.toString() === selectedPhoto)?.color }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {activityPhotos.find(p => p.id.toString() === selectedPhoto)?.image ? (
                <img
                  src={activityPhotos.find(p => p.id.toString() === selectedPhoto)?.image || ''}
                  alt="활동 사진"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="w-24 h-24 text-white/50" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}
