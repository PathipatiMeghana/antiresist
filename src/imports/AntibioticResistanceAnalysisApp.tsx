import svgPaths from "./svg-oe23smjq2z";

function Heading1() {
  return (
    <div className="absolute h-[55.966px] left-0 top-0 w-[128.622px]" data-name="Heading 2">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#1e2939] text-[20px] top-[-3px] w-[93px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dr. Robert Chen
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[39.993px] left-0 top-[55.97px] w-[128.622px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[90px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Senior Microbiologist
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[99.94px] w-[128.622px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#155dfc] text-[12px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML-2024-1234
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[115.955px] left-[95.98px] top-0 w-[128.622px]" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[42770700px] size-[79.985px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 100%)" }}>
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        DR
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[11.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9907 8.99238">
            <path d={svgPaths.p2e5f5980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999153" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%_33.33%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99661 3.99661">
            <path d={svgPaths.p32787000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.999153" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col items-start left-[52.02px] pt-[7.987px] px-[7.987px] rounded-[42770700px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[27.963px] top-[52.02px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute left-0 size-[79.985px] top-[17.98px]" data-name="Container">
      <Container5 />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[115.955px] relative shrink-0 w-[224.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[15.99px] size-[15.993px] top-[9.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_972)" id="Icon">
          <path d={svgPaths.pe0e9400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_972">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] h-[35.97px] relative rounded-[14px] shrink-0 w-[80.364px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[51.97px] text-[14px] text-center text-white top-[5.99px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Edit
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[115.955px] relative shrink-0 w-[304.964px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container2 />
        <Button1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_949)" id="Icon">
          <path d={svgPaths.peb5db00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p26223480} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_949">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[162.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          robert.chen@hospital.com
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_946)" id="Icon">
          <path d={svgPaths.p1bb059c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_946">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[114.282px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Text1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_922)" id="Icon">
          <path d={svgPaths.p14581070} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p3ca94200} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.pdd80980} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 3.99827H9.3293" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 6.66379H9.3293" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 9.3293H9.3293" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 11.9948H9.3293" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_922">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[250.671px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          City General Hospital - Microbiology Lab
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[7.987px] h-[19.996px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[75.962px] relative shrink-0 w-[304.964px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.987px] items-start relative size-full">
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[282.458px] relative rounded-[14px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(141.533deg, rgb(239, 246, 255) 0%, rgb(250, 245, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[39.993px] items-start pb-[1.275px] pl-[25.275px] pr-[1.275px] pt-[25.275px] relative size-full">
        <Container1 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p5b16770} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99997 7.99997">
            <path d={svgPaths.p753fa80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_29.17%_13.91%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-27.31%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 5.66197">
            <path d={svgPaths.p2b086500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[14px] shrink-0 size-[47.979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[11.99px] px-[11.99px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#4a5565] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Current Role
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[23.98px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#1e2939] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lab Technician
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[43.976px] relative shrink-0 w-[105.718px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[47.979px] relative shrink-0 w-[165.687px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[15.993px] top-[1.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g id="Icon">
          <path d={svgPaths.p12c9fc00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.pd683300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p5eb4000} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1a536e0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[61.343px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[41.48px] text-[#155dfc] text-[14px] text-center top-[-2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Switch
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[320.977px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container12 />
        <Button2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-gradient-to-r from-[#eff6ff] h-[82.515px] relative rounded-[14px] shrink-0 to-[#faf5ff] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pl-[17.268px] pr-[1.275px] py-[17.268px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[73.293px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#155dfc] text-[24px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          156
        </p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[73.293px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Total Tests
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[27.983px] h-[110.518px] items-start left-0 pb-[1.275px] pl-[17.268px] pr-[1.275px] pt-[17.268px] rounded-[14px] top-0 w-[107.829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[73.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#00a63e] text-[24px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          94%
        </p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[73.313px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Accuracy
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[27.983px] h-[110.518px] items-start left-[123.82px] pb-[1.275px] pl-[17.268px] pr-[1.275px] pt-[17.268px] rounded-[14px] top-0 w-[107.849px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[73.293px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[32px] min-h-px min-w-px relative text-[#9810fa] text-[24px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          2.5y
        </p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[73.293px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Experience
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[27.983px] h-[110.518px] items-start left-[247.66px] pb-[1.275px] pl-[17.268px] pr-[1.275px] pt-[17.268px] rounded-[14px] top-0 w-[107.829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[110.518px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_38_880)" id="Icon">
          <path d={svgPaths.p2555f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p1f573700} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_38_880">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[138.401px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#1e2939] text-[18px] top-[-1.73px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Account Settings
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f9fafb] h-[60.268px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pb-[1.275px] pl-[15.993px] relative size-full">
        <Icon7 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_895)" id="Icon">
          <path d={svgPaths.p271e9f00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_895">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[23.98px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Edit Profile
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[107.052px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon8 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container22 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_918)" id="Icon">
          <path d={svgPaths.p24f4c100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p31ba8800} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_918">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[127.526px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Change Password
        </p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[155.509px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon10 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container23 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g id="Icon">
          <path d={svgPaths.p12c9fc00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.pd683300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p5eb4000} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1a536e0} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[23.98px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Switch Role
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[111.414px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon12 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container24 />
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_931)" id="Icon">
          <path d={svgPaths.p36c45e80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p2467a500} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_931">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[174.769px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Notification Preferences
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[202.752px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon14 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.993px] relative size-full">
          <Container25 />
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[352.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white h-[282.478px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[1.275px] relative rounded-[inherit] size-full">
        <Container20 />
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_38_969)" id="Icon">
          <path d={svgPaths.p2e656e00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_38_969">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[145.85px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#1e2939] text-[18px] top-[-1.73px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Security & Privacy`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f9fafb] h-[60.268px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pb-[1.275px] pl-[15.993px] relative size-full">
        <Icon16 />
        <Heading3 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_915)" id="Icon">
          <path d={svgPaths.p377ccb00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_915">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[114.521px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Privacy Settings
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[142.504px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon17 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container29 />
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_939)" id="Icon">
          <path d={svgPaths.p3ba2e100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1b76280} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 5.99741H5.33103" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 8.66292H5.33103" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 11.3284H5.33103" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_939">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[135.095px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Data Management
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[163.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon19 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container30 />
          <Icon20 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_918)" id="Icon">
          <path d={svgPaths.p24f4c100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p31ba8800} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_918">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[89.486px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Security Log
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[117.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon21 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.993px] relative size-full">
          <Container31 />
          <Icon22 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[146.427px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[233.244px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[1.275px] relative rounded-[inherit] size-full">
        <Container27 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_38_901)" id="Icon">
          <path d={svgPaths.p22f45f80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p78ffb80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M9.99817 14.1641H10.0065" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_38_901">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[66.422px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#1e2939] text-[18px] top-[-1.73px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Support
        </p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#f9fafb] h-[60.268px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pb-[1.275px] pl-[15.993px] relative size-full">
        <Icon23 />
        <Heading4 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_975)" id="Icon">
          <path d={svgPaths.p1e5c7900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p2a5f3e00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99654 11.3284H8.00321" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_975">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] h-[23.98px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Help Center
        </p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[114.342px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon24 />
        <Text10 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container35 />
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_953)" id="Icon">
          <path d={svgPaths.peb5db00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p26223480} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_953">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] h-[23.98px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Contact Support
        </p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[147.682px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon26 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container36 />
          <Icon27 />
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_939)" id="Icon">
          <path d={svgPaths.p3ba2e100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1b76280} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 5.99741H5.33103" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 8.66292H5.33103" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 11.3284H5.33103" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_939">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] h-[23.98px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          About App
        </p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[107.45px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon28 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.993px] relative size-full">
          <Container37 />
          <Icon29 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[146.427px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-white h-[233.244px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[1.275px] relative rounded-[inherit] size-full">
        <Container33 />
        <Container34 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_38_884)" id="Icon">
          <path d={svgPaths.pad50980} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p3e1e5700} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33181 7.49863H6.66545" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 10.8313H6.66545" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 14.1641H6.66545" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_38_884">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-[143.719px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#1e2939] text-[18px] top-[-1.73px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Patient Resources
        </p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#f9fafb] h-[60.268px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center pb-[1.275px] pl-[15.993px] relative size-full">
        <Icon30 />
        <Heading5 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_939)" id="Icon">
          <path d={svgPaths.p3ba2e100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p1b76280} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M6.66379 5.99741H5.33103" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 8.66292H5.33103" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M10.6621 11.3284H5.33103" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_939">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[174.39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Patient Education Guide
        </p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[202.373px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon31 />
        <Text13 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container41 />
          <Icon32 />
        </div>
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_910)" id="Icon">
          <path d={svgPaths.p1e5c7900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p37ff7c00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d="M7.99654 11.3284H8.00321" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_910">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[180.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Antibiotic Concerns Help
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[208.747px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon33 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[49.234px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[1.275px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[1.275px] px-[15.993px] relative size-full">
          <Container42 />
          <Icon34 />
        </div>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g clipPath="url(#clip0_38_877)" id="Icon">
          <path d={svgPaths.p39369300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
        <defs>
          <clipPath id="clip0_38_877">
            <rect fill="white" height="15.9931" width="15.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[160.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Emergency Guidelines
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[188.133px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.99px] items-center relative size-full">
        <Icon35 />
        <Text15 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[19.996px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p31736cc0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[47.959px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15.993px] relative size-full">
          <Container43 />
          <Icon36 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[146.427px] relative shrink-0 w-[352.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[233.244px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[1.275px] relative rounded-[inherit] size-full">
        <Container39 />
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[137.92px] size-[19.996px] top-[17.98px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p14075f80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p28f383a0} id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M17.4968 9.99817H7.49863" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#fef2f2] h-[55.966px] relative rounded-[14px] shrink-0 w-full" data-name="Button">
      <Icon37 />
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[24px] left-[192.41px] text-[#e7000b] text-[16px] text-center top-[13.99px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Logout
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#99a1af] text-[14px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Antibiotic Resistance Pattern Analysis
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#99a1af] text-[14px] text-center whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Version 1.0.0
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[55.986px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1761.649px] items-start relative shrink-0 w-full" data-name="Main Content">
      <Container />
      <Container10 />
      <Container15 />
      <Container19 />
      <Container26 />
      <Container32 />
      <Container38 />
      <Button16 />
      <Container44 />
    </div>
  );
}

function PY() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#eff6ff] h-[1917.617px] items-start left-0 pt-[75.982px] px-[15.993px] to-white top-0 w-[387.499px]" data-name="pY">
      <MainContent />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[28.003px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[18px] text-white top-[-1.73px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Profile
        </p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[28.003px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[59.989px] items-start left-0 pt-[15.993px] px-[15.993px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[457.61px] w-[387.499px]" data-name="Header">
      <Container45 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bbf6680} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d={svgPaths.p206ad900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[32.982px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Home
        </p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="flex-[1_0_0] h-[63.992px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-center justify-center relative size-full">
        <Icon38 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p142aa200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M6.45289 14.9997H17.5469" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M8.5 2H15.5" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[26.509px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Tests
        </p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="flex-[1_0_0] h-[63.992px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-center justify-center relative size-full">
        <Icon39 />
        <Text17 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M15.9999 16.9997H7.99986" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[43.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#99a1af] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Records
        </p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="flex-[1_0_0] h-[63.992px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-center justify-center relative size-full">
        <Icon40 />
        <Text18 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1fa22780} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.013px] relative shrink-0 w-[35.093px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#155dfc] text-[12px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
          Profile
        </p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="flex-[1_0_0] h-[63.992px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-center justify-center relative size-full">
        <Icon41 />
        <Text19 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[63.992px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[7.987px] relative size-full">
          <Button17 />
          <Button18 />
          <Button19 />
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.267px] items-start left-0 pt-[1.275px] top-[1308.82px] w-[387.499px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[1.275px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Container46 />
    </div>
  );
}

export default function AntibioticResistanceAnalysisApp() {
  return (
    <div className="bg-white relative size-full" data-name="Antibiotic Resistance Analysis App">
      <PY />
      <Header />
      <Navigation />
    </div>
  );
}