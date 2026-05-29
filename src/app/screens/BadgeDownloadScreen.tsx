import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Download } from 'lucide-react';
import Layout from '../components/Layout';

export default function BadgeDownloadScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDownload = () => {
    // 뱃지 다운로드 로직 (실제로는 이미지를 생성하고 다운로드)
    alert('뱃지가 다운로드되었습니다!');
  };

  return (
    <Layout>
      <div className="bg-white h-full w-full overflow-auto">
        <div className="px-[32px] pb-[32px] pt-[24px]">
          <h1 className="font-['Pretendard:Bold',sans-serif] text-[24px] text-[#383838] mb-2">
            공유 뱃지
          </h1>
          <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-[#898989] mb-8">
            인스타그램에 공유할 수 있는 뱃지를 다운로드하세요
          </p>

          {/* 뱃지 미리보기 */}
          <div className="bg-gradient-to-br from-[#00d3cd] to-[#00b8b4] rounded-[20px] p-8 mb-6 shadow-lg">
            <div className="bg-white rounded-[15px] p-6 text-center">
              <div className="w-[80px] h-[80px] bg-[#00d3cd] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-[40px]">🏆</span>
              </div>
              <h2 className="font-['Pretendard:ExtraBold',sans-serif] text-[24px] text-[#383838] mb-2">
                DOUM
              </h2>
              <p className="font-['Pretendard:Bold',sans-serif] text-[18px] text-[#00d3cd] mb-3">
                착한 이웃 활동
              </p>
              <div className="border-t border-[#e9e9e9] pt-4">
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-[#626262] mb-1">
                  장보기 도움
                </p>
                <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989]">
                  2026년 5월 10일
                </p>
              </div>
              <div className="mt-4 bg-[rgba(0,211,205,0.1)] rounded-[10px] p-3">
                <p className="font-['Pretendard:Bold',sans-serif] text-[20px] text-[#00d3cd]">
                  +20 크레딧 획득
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[rgba(0,211,205,0.1)] border border-[#00d3cd] rounded-[15px] p-4 mb-6">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-[#383838] text-center">
              💡 이 뱃지를 인스타그램 스토리에 공유하고<br />더 많은 사람들에게 나눔을 알려보세요!
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-[#00d3cd] text-white font-['Pretendard:Bold',sans-serif] text-[16px] py-4 rounded-[15px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] mb-3 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            뱃지 다운로드
          </button>

          <button
            onClick={() => navigate(`/activity-log/${id}`)}
            className="w-full bg-white border-2 border-[#e9e9e9] text-[#383838] font-['Pretendard:SemiBold',sans-serif] text-[16px] py-4 rounded-[15px]"
          >
            돌아가기
          </button>
        </div>
      </div>
    </Layout>
  );
}
