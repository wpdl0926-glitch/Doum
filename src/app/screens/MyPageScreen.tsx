import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, Heart, Award, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import Union from '../../imports/Union/Union';

export default function MyPageScreen() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
        <div className="px-[34px] pt-[40px] pb-[15px]">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate('/main')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-[30px] h-[30px]">
                <Union />
              </div>
              <p className="font-['Pretendard:ExtraBold',sans-serif] text-[16px] text-black">
                DOUM
              </p>
            </button>
          </div>

          <div className="flex flex-col items-center mb-4">
            <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#00d3cd] to-[#00b8b4] mb-2 flex items-center justify-center shadow-lg">
              <div className="w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center">
                <span className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#00d3cd]">김</span>
              </div>
            </div>

            <h1 className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#383838] mb-1">
              김도움
            </h1>

            <div className="flex items-center gap-1 mb-3">
              <MapPin className="w-3 h-3 text-[#898989]" />
              <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                경상북도 청도군 다로리
              </p>
            </div>

            <div className="w-full bg-gradient-to-r from-[rgba(0,211,205,0.1)] to-[rgba(0,211,205,0.05)] border border-[#00d3cd] rounded-[15px] p-4 mb-4 mt-[20px]">
              <div className="flex items-start gap-2 mb-2">
                <Heart className="w-5 h-5 text-[#00d3cd] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Pretendard:Bold',sans-serif] text-[13px] text-[#383838] mb-1">
                    도움님은 이미 12명의 이웃에게<br />따뜻한 손길을 건넸어요
                  </p>
                  <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#727272]">
                    작은 도움이 모여 다로리를<br />더 살기 좋은 마을로 만들고 있습니다
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6 mt-[-25px]">
            <div className="bg-[#f5f5f5] rounded-[20px] p-5 mt-[35px]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] bg-[#00d3cd] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                      총 도움 횟수
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989]">
                      이번 달 5회
                    </p>
                  </div>
                </div>
                <p className="font-['Pretendard:Bold',sans-serif] text-[28px] text-[#00d3cd]">
                  12회
                </p>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-[20px] p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-[40px] h-[40px] bg-[#FFB800] rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                      보유 크레딧
                    </p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#898989]">
                      도움을 요청할 때 사용해요
                    </p>
                  </div>
                </div>
                <p className="font-['Pretendard:Bold',sans-serif] text-[28px] text-[#FFB800]">
                  240
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(0,211,205,0.05)] rounded-[20px] p-5 border border-[rgba(0,211,205,0.2)] mb-[50px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] mb-2 text-center">
              💡 이런 활동은 어때요?
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#727272] text-center">
              지금 근처에서 도움이 필요한 이웃이 4명 있어요
            </p>
            <button
              onClick={() => navigate('/explore')}
              className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[14px] py-3 rounded-[15px] mt-4"
            >
              새로운 요청 보러가기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
