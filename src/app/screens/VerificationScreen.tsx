import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Camera, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';

export default function VerificationScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState('');
  const [photoTaken, setPhotoTaken] = useState(false);

  const handleSubmit = () => {
    navigate('/credit-earned');
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
      <div className="px-[32px] pt-[60px] pb-[24px]">
        <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">
          작업 완료 인증
        </h1>
        <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] mb-8">
          도움을 완료한 후 인증해주세요
        </p>

        <div className="space-y-4 mb-8">
          {/* 활동 요약 */}
          <div className="bg-[#f5f5f5] rounded-[15px] p-4">
            <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838] mb-2">
              TV 연결 도움
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[13px] text-[#898989] mb-1">
              김말숙 할머니
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#787878]">
              오후 3:00 ㅣ 다로리 동쪽 마을
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-[15px] p-4">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#787878] mb-3">
              완료 사진 *필수
            </p>
            <button
              onClick={() => setPhotoTaken(true)}
              className="w-full aspect-video bg-white border-2 border-dashed border-[#e9e9e9] rounded-[10px] flex flex-col items-center justify-center gap-2 hover:border-[#00d3cd] transition-colors"
            >
              {photoTaken ? (
                <div className="flex flex-col items-center gap-2 text-[#00d3cd]">
                  <CheckCircle className="w-12 h-12" />
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px]">사진이 등록되었습니다</p>
                </div>
              ) : (
                <>
                  <Camera className="w-12 h-12 text-[#c9c9c9]" />
                  <p className="font-['Pretendard:Medium',sans-serif] text-[14px] text-[#898989]">
                    사진 촬영하기
                  </p>
                </>
              )}
            </button>
          </div>

          <div className="bg-[#f5f5f5] rounded-[15px] p-4">
            <p className="font-['Pretendard:Bold',sans-serif] text-[15px] text-[#383838] mb-1">
              오늘 도움은 어땠나요?
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-3">
              활동 후기 (선택)
            </p>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="할머니와의 따뜻한 경험을 공유해주세요"
              className="w-full bg-white rounded-[10px] px-4 py-3 font-['Pretendard:Medium',sans-serif] text-[15px] border border-[#e9e9e9] min-h-[60px] resize-none"
            />
          </div>

          <div className="bg-[rgba(0,230,216,0.1)] border border-[#00e6d8] rounded-[15px] p-4">
            <div className="flex items-center justify-between">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#787878]">
                적립 예정
              </p>
              <div className="text-right">
                <p className="font-['Pretendard:Bold',sans-serif] text-[19px] text-[#00d3cd]">
                  +30 크레딧
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[11px] text-[#00d3cd] mt-0.5">
                  후기 작성 시 +10 추가
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!photoTaken}
          className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] disabled:bg-[#c9c9c9] disabled:cursor-not-allowed"
        >
          완료 인증하기
        </button>
      </div>
    </div>
    </Layout>
  );
}
