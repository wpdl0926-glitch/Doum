import { useNavigate } from 'react-router';
import Layer1 from '../../imports/Layer1/index';
import Layout from '../components/Layout';
import svgPaths from '../../imports/Container-1/svg-l5x8646qyq';
import headerLogoImage from '../../imports/___________2026-05-29______5.16.47.png';
import imgRectangle from '../../imports/Container-1/05e36627e1733f61cd6b2adc8d7740685d32a1cc.png';
import imgRectangle3 from '../../imports/Container-1/92b75283ea30d998f0b5f7ca0e1a203ad5ff46ee.png';
import imgRectangle4 from '../../imports/Container-1/51c058b342eddaaa2d4d82f040552fbe8ce92330.png';
import imgRectangle7 from '../../imports/Container-1/98e613c9a418166600bfd8faad35e6a091c5b73a.png';
import imgRectangle8 from '../../imports/Container-1/42c3df4834f8f4e34949b6b3aaf9032c779f46bb.png';
import imgRectangle9 from '../../imports/Container-1/b8762c161c12ac0249206bc274f024d79dd4441f.png';
import { imgRectangle1, imgRectangle2, imgRectangle5, imgRectangle6 } from '../../imports/Container-1/svg-phoj4';

// Character avatar (the circular mascot)
function ProfileCharacter() {
  return (
    <div className="relative w-[64px] h-[65px]">
      {/* Character avatar */}
      <div className="absolute inset-0">
        <Layer1 />
      </div>
      {/* Face photo */}
      <div className="absolute inset-[16.15%_3.04%_3.85%_2.33%] overflow-hidden">
        <img alt="" className="absolute h-[104.41%] left-[-2.36%] max-w-none top-[0.44%] w-[105.74%]" src={imgRectangle} />
      </div>
      {/* Mask image group for profile pic overlay */}
      <div className="absolute contents inset-[8.98%_34.85%_64.74%_32.82%]">
        <div className="absolute inset-[8.98%_34.85%_64.74%_32.82%] mask-position-[1.034px_0.971px,_0.082px_0.015px]" style={{ maskImage: `url("${imgRectangle1}"), url("${imgRectangle2}")` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
          </div>
        </div>
      </div>
      {/* Beak / mouth */}
      <div className="absolute inset-[42.18%_40.16%_46.46%_39.16%]">
        <div className="absolute inset-[0_0_-10.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 8.15116">
            <g>
              <path d={svgPaths.p119c8bf0} fill="black" />
              <path d={svgPaths.p26c05080} fill="black" />
              <path d={svgPaths.p3ffc7640} stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.526" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Small character illustration for the progress card (right side)
function SmallCharacter() {
  return (
    <div className="relative w-[52px] h-[52px] shrink-0">
      {/* Gradient circle */}
      <div className="absolute inset-[0_2.68%_5.03%_1.55%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.7267 61.7286">
          <path d={svgPaths.p355247f0} fill="url(#paint0_linear_small)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_small" x1="30.8633" x2="30.8633" y1="0" y2="61.7286">
              <stop stopColor="#C6F3F4" />
              <stop offset="1" stopColor="#98C3C3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.15%_3.04%_3.85%_2.33%] overflow-hidden">
        <img alt="" className="absolute h-[104.41%] left-[-2.36%] max-w-none top-[0.44%] w-[105.74%]" src={imgRectangle} />
      </div>
      {/* Mask image group */}
      <div className="absolute inset-[8.98%_34.85%_64.74%_32.82%]" style={{ maskImage: `url("${imgRectangle1}"), url("${imgRectangle2}")` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
      {/* Beak */}
      <div className="absolute inset-[42.18%_40.16%_46.46%_39.16%]">
        <div className="absolute inset-[0_0_-10.33%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.33 8.15116">
            <g>
              <path d={svgPaths.p119c8bf0} fill="black" />
              <path d={svgPaths.p26c05080} fill="black" />
              <path d={svgPaths.p3ffc7640} stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.526" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Badge character (for LV.1 position)
function BadgeCharacter() {
  return (
    <div className="relative w-[40px] h-[40px] shrink-0">
      {/* Rectangle base */}
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgRectangle4} />
      {/* Masked profile */}
      <div className="absolute inset-[42.09%_13.34%_53.52%_80.98%]" style={{ maskImage: `url("${imgRectangle5}"), url("${imgRectangle6}")` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle7} />
        </div>
      </div>
      {/* Face parts */}
      <div className="absolute inset-[46.71%_15.6%_49.21%_79.39%] overflow-hidden">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle8} />
      </div>
      <div className="absolute inset-[46.71%_11.52%_49.21%_83.47%] overflow-hidden">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle9} />
      </div>
    </div>
  );
}

export default function MyPageScreen() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="bg-white w-full overflow-auto">
        <div className="px-[34px] pt-[40px] pb-[15px] flex flex-col gap-[20px]">

          {/* Header: DOUM logo + bell */}
          <div className="flex items-center justify-between w-full">
            <img
                alt="DOUM"
                className="h-[54px] w-auto object-contain -ml-[10px]"
                src={headerLogoImage}
              />
            {/* Bell icon */}
            <div className="relative size-[36px] shrink-0">
              <div className="absolute left-[8px] size-[20px] top-[8px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p25877f40} stroke="#383838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p1c3efea0} stroke="#383838" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
              {/* Notification dot */}
              <div className="absolute bg-[#00d3cd] border-2 border-solid border-white left-[24px] rounded-full size-[12px] top-0" />
            </div>
          </div>

          {/* Profile section */}
          <div className="relative w-full" style={{ height: '364px' }}>
            {/* Avatar + name + location */}
            <div className="absolute left-0 top-0">
              {/* Character avatar */}
              <div className="absolute left-[132.5px] top-[-3.5px]">
                <ProfileCharacter />
              </div>
              {/* Name */}
              <div className="absolute left-[139.16px] top-[64px] pb-[4px]">
                <p className="font-['Pretendard:Bold',sans-serif] text-[18px] leading-[27px] text-[#383838] whitespace-nowrap">김민수</p>
              </div>
              {/* Location */}
              <div className="absolute left-[99.71px] top-[95px] flex gap-[4px] items-center h-[30px]">
                <div className="relative size-[12px] shrink-0">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.p7c73480} stroke="#898989" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2d617c80} stroke="#898989" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-['Pretendard:Medium',sans-serif] text-[12px] leading-[18px] text-[#898989] whitespace-nowrap">경상북도 청도군 다로리</p>
              </div>
            </div>

            {/* Mint progress card */}
            <div className="absolute left-0 top-[134px] w-full">
              <div className="bg-[rgba(220,248,244,0.5)] rounded-[15px] w-full" style={{ height: '238px' }}>

                {/* Goal text */}
                <p className="absolute font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.4] text-[#383838] top-[26px] left-[25px] whitespace-pre-wrap w-[213px]">
                  {`목표에 가까워지고 있어요 민수님! `}<br />
                  다음 도움을 찾아 레벨을 올려볼까요?
                </p>

                {/* Character illustration (right side) */}
                <div className="absolute right-[10px] top-[10px]">
                  <SmallCharacter />
                </div>

                {/* LV.1 text */}
                <div className="absolute right-[10px] top-[55px] flex gap-[1px] items-end">
                  <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] text-[#C0C0C0]">LV.1</p>
                </div>

                {/* Progress bar with milestone dots */}
                <div className="absolute left-[25px] right-[25px] top-[76px]">
                  {/* Bar track */}
                  <div className="flex w-full h-[9px] rounded-full overflow-hidden">
                    <div className="bg-[#1da39e] flex-1" style={{ maxWidth: '124px' }} />
                    <div className="bg-[#e4e4e4] flex-1" />
                  </div>

                  {/* Milestone dots */}
                  {/* Start dot (active) */}
                  <div className="absolute left-0 top-[-8px]">
                    <div className="relative size-[25px]">
                      <div className="absolute inset-[-16%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                          <g filter="url(#filter_mp1)">
                            <circle cx="16.5" cy="16.5" fill="white" r="12.5" />
                            <circle cx="16.5" cy="16.5" r="11.5" stroke="#00D3CD" strokeWidth="2" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33" id="filter_mp1" width="33" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset /><feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      {/* Checkmark icon inside */}
                      <div className="absolute inset-[26%_26%_24%_22%]">
                        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 12 12.48">
                          <path d={svgPaths.pa370000} fill="#00D3CD" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] leading-[1.4] text-[#1da39e] mt-[10px] tracking-[-0.18px] whitespace-nowrap">도움 1회</p>
                  </div>

                  {/* Middle dot 1 (active) */}
                  <div className="absolute top-[-6px]" style={{ left: '61px' }}>
                    <div className="relative" style={{ width: '12.726px', height: '12.726px' }}>
                      <div className="absolute inset-[-23.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7143 18.7143">
                          <g filter="url(#filter_mp2)">
                            <circle cx="9.35714" cy="9.35714" fill="white" r="6.36286" />
                            <circle cx="9.35714" cy="9.35714" r="5.36286" stroke="#00D3CD" strokeWidth="2" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7143" id="filter_mp2" width="18.7143" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset /><feGaussianBlur stdDeviation="1.49714" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] leading-[1.4] text-[#1da39e] mt-[10px] tracking-[-0.18px] whitespace-nowrap">활동일지</p>
                  </div>

                  {/* Middle dot 2 (active) */}
                  <div className="absolute top-[-6px]" style={{ left: '132px' }}>
                    <div className="relative" style={{ width: '12.726px', height: '12.726px' }}>
                      <div className="absolute inset-[-23.53%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7143 18.7143">
                          <g filter="url(#filter_mp3)">
                            <circle cx="9.35714" cy="9.35714" fill="white" r="6.36286" />
                            <circle cx="9.35714" cy="9.35714" r="5.36286" stroke="#00D3CD" strokeWidth="2" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.7143" id="filter_mp3" width="18.7143" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset /><feGaussianBlur stdDeviation="1.49714" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] leading-[1.4] text-[#ccc] mt-[10px] tracking-[-0.18px] whitespace-nowrap">도움 2회</p>
                  </div>

                  {/* End dot (inactive) + badge character */}
                  <div className="absolute right-0 top-[-8px]">
                    <div className="relative size-[25px]">
                      <div className="absolute inset-[-16%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                          <g filter="url(#filter_mp4)">
                            <circle cx="16.5" cy="16.5" fill="white" r="12.5" />
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33" id="filter_mp4" width="33" x="0" y="0">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset /><feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" result="shape" />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      {/* Star icon */}
                      <div className="absolute inset-[15%_12%_14%_14%]">
                        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 13 12.9923">
                          <path d={svgPaths.p6895680} fill="#49D0CB" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[9px] leading-[1.4] text-[#1da39e] mt-[10px] tracking-[-0.18px] text-right whitespace-nowrap">LV.1</p>
                  </div>
                </div>

                {/* Message card */}
                <div className="absolute left-[12px] right-[10px] top-[139px]">
                  <div className="bg-[#fdfdfd] border border-[#e9e9e9] rounded-[15px] px-[17px] py-[11px]">
                    <div className="flex gap-[10px] items-start py-[3px]">
                      {/* Heart icon */}
                      <div className="pt-[2px] shrink-0">
                        <div className="relative size-[20px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d={svgPaths.p2f84f400} fill="#00E6D8" />
                          </svg>
                        </div>
                      </div>
                      {/* Text */}
                      <div className="flex flex-col">
                        <div className="font-['Pretendard:SemiBold',sans-serif] text-[12px] leading-[1.3] text-[#555]">
                          <p className="mb-0">민수님은 이미 12명의 이웃에게</p>
                          <p>따뜻한 손길을 건넸어요</p>
                        </div>
                        <div className="font-['Pretendard:Medium',sans-serif] text-[9px] leading-[1.5] text-[#727272] pt-[4px]">
                          <p className="mb-0">작은 도움이 모여 다로리를</p>
                          <p>더 살기 좋은 마을로 만들고 있습니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Quick action buttons: 크레딧, 캐시 아웃, 활동 기록 */}
          <div className="w-full pt-[10px]">
            <div className="flex gap-[5px] w-full">
              {/* 크레딧 */}
              <button
                onClick={() => navigate('/credit')}
                className="flex-1 bg-white border border-[#e9e9e9] rounded-[15px] px-[9px] py-[11px] flex flex-col items-center gap-[2px]"
              >
                <div className="bg-[rgba(0,211,205,0.1)] rounded-full size-[36px] flex items-center justify-center">
                  <div className="relative size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip_credit)">
                        <path d={svgPaths.p1e57e600} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2a7ce900} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M5.83333 5H6.66667V8.33333" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p25bee380} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip_credit">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838] text-center">크레딧</p>
              </button>

              {/* 캐시 아웃 */}
              <button
                onClick={() => navigate('/cashout')}
                className="flex-1 bg-white border border-[#e9e9e9] rounded-[15px] px-[9px] py-[11px] flex flex-col items-center gap-[2px]"
              >
                <div className="bg-[rgba(0,211,205,0.1)] rounded-full size-[36px] flex items-center justify-center">
                  <div className="relative size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d="M10 1.66667V18.3333" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p3055a600} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838] text-center">캐시 아웃</p>
              </button>

              {/* 활동 기록 */}
              <button
                onClick={() => navigate('/my-activity')}
                className="flex-1 bg-white border border-[#e9e9e9] rounded-[15px] px-[9px] py-[11px] flex flex-col items-center gap-[2px]"
              >
                <div className="bg-[rgba(0,211,205,0.1)] rounded-full size-[36px] flex items-center justify-center">
                  <div className="relative size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p31104300} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p1b3f8200} stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 9.16667H13.3333" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M10 13.3333H13.3333" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M6.66667 9.16667H6.675" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M6.66667 13.3333H6.675" stroke="#00D3CD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Pretendard:SemiBold',sans-serif] text-[10px] text-[#383838] text-center">활동 기록</p>
              </button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex flex-col gap-[10px] w-full">
            {/* 총 도움 횟수 */}
            <div className="bg-[#f5f5f5] rounded-[20px] p-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#00d3cd] rounded-full size-[40px] flex items-center justify-center shrink-0">
                    <div className="relative size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p3c797180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p3ac0b600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] leading-[21px] text-[#383838]">총 도움 횟수</p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] leading-[16.5px] text-[#898989]">이번 달 5회</p>
                  </div>
                </div>
                <p className="font-['Pretendard:Bold',sans-serif] text-[24px] leading-[42px] text-[#00d3cd]">12회</p>
              </div>
            </div>

            {/* 보유 크레딧 */}
            <div className="bg-[#f5f5f5] rounded-[20px] p-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-[#7fdcc0] rounded-full size-[40px] flex items-center justify-center shrink-0">
                    <div className="relative size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p164f7540} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p809b580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] leading-[21px] text-[#383838]">보유 크레딧</p>
                    <p className="font-['Pretendard:Medium',sans-serif] text-[11px] leading-[16.5px] text-[#898989]">도움을 요청할 때 사용해요</p>
                  </div>
                </div>
                <p className="font-['Pretendard:Bold',sans-serif] text-[24px] leading-[42px] text-[#7fdcc0]">240</p>
              </div>
            </div>
          </div>

          {/* Activity suggestion card */}
          <div className="pb-[50px] pt-[30px] w-full">
            <div className="bg-[rgba(214,214,214,0.05)] border border-[rgba(135,135,135,0.2)] rounded-[20px] p-[21px]">
              <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] leading-[19.5px] text-[#383838] text-center">💡 이런 활동은 어때요?</p>
              <p className="font-['Pretendard:Medium',sans-serif] text-[11px] leading-[16.5px] text-[#727272] text-center mt-[2px]">지금 근처에서 도움이 필요한 이웃이 4명 있어요</p>
              <div className="flex justify-center mt-[6px]">
                <button
                  onClick={() => navigate('/explore')}
                  className="bg-[#00d3cd] rounded-[15px] w-[247px] h-[39px] flex items-center justify-center"
                >
                  <p className="font-['Pretendard:Bold',sans-serif] text-[14px] leading-[21px] text-white">새로운 요청 보러가기</p>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
