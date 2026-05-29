import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Heart } from 'lucide-react';
import Layout from '../components/Layout';
import activityPhoto from '../../imports/_____.png';

export default function ActivityLogScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
        <div className="px-[32px] pb-[32px] pt-[24px]">
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-6">
            활동 일지
          </h1>

          {/* 도움 제목과 사진 */}
          <div className="mb-6">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[16px] text-[#383838] mb-3">
              장보기 도움
            </p>
            <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4">
              <img
                src={activityPhoto}
                alt="활동 사진"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 내가 작성한 후기 */}
          <div className="bg-[#f5f5f5] rounded-[20px] p-4 mb-4">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838] mb-2">
              내가 작성한 후기
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#626262] leading-[1.6]">할머니께서 시장에서 장을 보고 짐을 들고오는데 어려움이 있으셔서 도와드렸습니다. 함께 이야기를 나누며 집까지 모셔다드렸는데, 할머니께서 덕분에 편하게 왔다고 정말 기뻐하셨어요. 작은 도움이지만 할머니의 밝은 웃음을 보니 저도 덩달아 행복해졌습니다.</p>
          </div>

          {/* 할머니가 남긴 문구 */}
          <div className="bg-[rgba(0,211,205,0.1)] border border-[#00d3cd] rounded-[20px] p-4 mb-6 bg-[#ffffff1a]">
            <div className="flex items-start gap-2 mb-2">
              <Heart className="w-5 h-5 text-[#00d3cd] flex-shrink-0 mt-0.5" />
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#383838]">
                이순자 할머니가 남긴 따뜻한 마음
              </p>
            </div>
            <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#626262] leading-[1.6] ml-7">
              "무거운 짐을 들어주셔서 정말 고마워요. 젊은 친구가 이렇게 친절하게 도와주니
              마음이 따뜻해집니다. 덕분에 오늘 장보기가 즐거웠어요. 고맙습니다!"
            </p>
          </div>

          {/* 획득한 크레딧 */}
          <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] rounded-[20px] p-4 text-center">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] text-[#787878] mb-1">
              획득한 크레딧
            </p>
            <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#00d3cd]">
              +20 크레딧
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#898989] mt-0.5">
              2026년 5월 10일 오전 11:00
            </p>
          </div>

          <button
            onClick={() => navigate(`/badge/${id}`)}
            className="w-full bg-white border-2 border-[#00d3cd] text-[#00d3cd] font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] mt-6"
          >
            📸 인스타그램 공유 뱃지 다운로드
          </button>

          <button
            onClick={() => navigate('/main')}
            className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] mt-3"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </Layout>
  );
}
