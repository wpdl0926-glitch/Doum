import svgPaths from "./svg-vpzpa3gwvb";

function Group() {
  return (
    <div className="absolute contents leading-[20px] left-[108px] not-italic text-black text-center top-[466px]">
      <p className="-translate-x-1/2 absolute font-['Pretendard:SemiBold',sans-serif] h-[27px] left-[168px] text-[15px] top-[466px] w-[120px]">기술로 마을을 잇다,</p>
      <p className="-translate-x-1/2 absolute font-['Pretendard:ExtraBold',sans-serif] h-[27px] left-[256.5px] text-[20px] top-[466px] tracking-[-1.2px] w-[73px]">DOUM</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="스플래시2">
      <Group />
      <div className="absolute flex h-[126.39px] items-center justify-center left-[130px] top-[332px] w-[126.023px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-37.56deg]">
          <div className="content-stretch flex items-start relative" data-name="Component 1">
            <div className="h-[91px] relative shrink-0 w-[89px]" data-name="Union">
              <div className="absolute inset-[-6.59%_-11.24%_-15.38%_-11.24%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 111">
                  <g filter="url(#filter0_d_1_235)" id="Union">
                    <path d={svgPaths.p30c95a80} fill="var(--fill-0, #01C78F)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111" id="filter0_d_1_235" width="109" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_235" />
                      <feBlend in="BackgroundImageFix" in2="effect1_dropShadow_1_235" mode="normal" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}