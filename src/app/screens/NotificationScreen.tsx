import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import imgBackground from '../../imports/앱알림창/6c6babb9c4e7c2c887df3c883f2de8312a564fbb.png';

export default function NotificationScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/splash');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="h-full w-full overflow-hidden relative">
        <img
          src={imgBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-[rgba(255,255,255,0.7)] h-[118px] left-[23px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] top-[286px] w-[347px]">
          <div className="absolute left-[15px] top-[12px] flex items-center gap-2">
            <div className="w-[20px] h-[20px] rounded-full bg-[#2EC197] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-black">
              DOUM
            </p>
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#626262] ml-auto mr-[15px]">
              지금
            </p>
          </div>
          <div className="absolute left-[15px] top-[39px] right-[15px]">
            <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-[#383838] mb-1">
              새로운 도움 요청이 도착했어요!
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[12px] text-[#898989] mb-1">
              김말숙 할머니가 TV 연결 도움을 요청했어요
            </p>
            <p className="font-['Pretendard:Medium',sans-serif] text-[10px] text-[#727272]">
              오후 3:00 ㅣ 다로리 동쪽 마을
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
