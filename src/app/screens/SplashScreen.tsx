import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="h-full w-full overflow-hidden bg-white flex flex-col items-center justify-center">
        <div className="mb-8">
          <svg width="126" height="126" viewBox="0 0 109 111" fill="none">
            <g filter="url(#filter0_d_1_235)">
              <path d="M54.5 10C42.074 10 31.9534 20.1206 31.9534 32.5466C31.9534 44.9727 42.074 55.0933 54.5 55.0933C66.926 55.0933 77.0466 44.9727 77.0466 32.5466C77.0466 20.1206 66.926 10 54.5 10ZM54.5 73.5466C36.8974 73.5466 10 82.3479 10 100.093V109H99V100.093C99 82.3479 72.1026 73.5466 54.5 73.5466Z" fill="#01C78F"/>
            </g>
            <defs>
              <filter id="filter0_d_1_235" x="0" y="0" width="109" height="111" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_235"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_235" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[15px] text-black mb-1">
            기술로 마을을 잇다,
          </p>
          <p className="font-['Pretendard:ExtraBold',sans-serif] text-[20px] text-black tracking-[-1.2px]">
            DOUM
          </p>
        </div>
      </div>
    </Layout>
  );
}
