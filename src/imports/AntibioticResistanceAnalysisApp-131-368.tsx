import svgPaths from "./svg-vc2fen7b1e";

function Container3() {
  return (
    <div className="bg-[#155dfc] relative rounded-[42770700px] shrink-0 size-[31.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Segoe_UI:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[104.582px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Patient Details</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[144.555px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.987px] items-center relative size-full">
        <Container3 />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[42770700px] shrink-0 size-[31.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Segoe_UI:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[91.099px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Sample Details</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-[131.072px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.987px] items-center relative size-full">
        <Container5 />
        <Text1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[31.986px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#155dfc] h-[7.987px] rounded-[42770700px] shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-[#e5e7eb] h-[7.987px] relative rounded-[42770700px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[150.929px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[86.498px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[11.99px] items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container1 />
        <Container6 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9996 23.9996">
        <g id="Icon">
          <path d={svgPaths.p1fa22780} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d={svgPaths.p2c19cb00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.007px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1c398e] text-[18px] top-[-0.73px] whitespace-nowrap">Step 1: Patient Information</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Segoe_UI:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1447e6] text-[14px] whitespace-nowrap">Fill in all patient information below</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[50.987px] relative shrink-0 w-[216.833px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.983px] items-start relative size-full">
        <Heading1 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[50.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eff6ff] h-[85.522px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[19.996px] top-[1.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g id="Icon">
          <path d={svgPaths.p3ad7ab00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p17e7c300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
      </svg>
    </div>
  );
}

function O1() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[24px] left-[27.98px] not-italic text-[#1e2939] text-[16px] top-[-3px] whitespace-nowrap">Basic Details</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[293.851px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Patient Name *</p>
    </div>
  );
}

function Fe() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.989px] left-0 rounded-[8px] top-[27.98px] w-[293.851px]" data-name="fe">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Enter full name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[67.96px] w-[293.851px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Patient name is required</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[83.969px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Fe />
      <Paragraph1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[293.851px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Patient ID / MRN *</p>
    </div>
  );
}

function Fe1() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.989px] left-0 rounded-[8px] top-[27.98px] w-[293.851px]" data-name="fe">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Enter patient ID</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[67.96px] w-[293.851px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Patient ID is required</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[83.969px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Fe1 />
      <Paragraph2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[140.93px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Age *</p>
    </div>
  );
}

function Fe2() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.989px] left-0 rounded-[8px] top-[27.98px] w-[140.93px]" data-name="fe">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Age</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[67.96px] w-[140.93px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Age is required</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[92.194px] left-0 top-0 w-[140.93px]" data-name="Container">
      <Label2 />
      <Fe2 />
      <Paragraph3 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[140.93px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Gender *</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-191.46px] size-0 top-[-127.43px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-191.46px] size-0 top-[-127.43px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-191.46px] size-0 top-[-127.43px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-191.46px] size-0 top-[-127.43px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute border-[#fb2c36] border-[1.275px] border-solid h-[44.215px] left-0 rounded-[10px] top-[27.98px] w-[140.93px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[76.18px] w-[140.93px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Gender is required</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[92.194px] left-[152.92px] top-0 w-[140.93px]" data-name="Container">
      <Label3 />
      <Dropdown />
      <Paragraph4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[92.194px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function O2() {
  return (
    <div className="h-[292.118px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.993px] items-start relative size-full">
        <Container11 />
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function W() {
  return (
    <div className="bg-white h-[398.632px] relative rounded-[14px] shrink-0 w-full" data-name="W">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[39.993px] items-start pb-[1.275px] pl-[21.271px] pr-[1.275px] pt-[21.271px] relative size-full">
        <O1 />
        <O2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[19.996px] top-[1.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_131_390)" id="Icon">
          <path d={svgPaths.p7b0880} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p19e58080} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_131_390">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function O3() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[24px] left-[27.98px] not-italic text-[#1e2939] text-[16px] top-[-3px] whitespace-nowrap">Demographics (Optional)</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Address</p>
    </div>
  );
}

function Fe3() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Street address</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Fe3 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">City</p>
    </div>
  );
}

function Fe4() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">City</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start left-0 top-0 w-[140.93px]" data-name="Container">
      <Label5 />
      <Fe4 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">State</p>
    </div>
  );
}

function Fe5() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">State</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start left-[152.92px] top-0 w-[140.93px]" data-name="Container">
      <Label6 />
      <Fe5 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[63.972px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">ZIP Code</p>
    </div>
  );
}

function Fe6() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">ZIP code</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Fe6 />
    </div>
  );
}

function O4() {
  return (
    <div className="h-[223.903px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.993px] items-start relative size-full">
        <Container16 />
        <Container17 />
        <Container20 />
      </div>
    </div>
  );
}

function W1() {
  return (
    <div className="bg-white h-[330.418px] relative rounded-[14px] shrink-0 w-full" data-name="W">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[39.993px] items-start pb-[1.275px] pl-[21.271px] pr-[1.275px] pt-[21.271px] relative size-full">
        <O3 />
        <O4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[19.996px] top-[1.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_131_376)" id="Icon">
          <path d={svgPaths.pd18d280} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p2f39ba0} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p34afc300} id="Vector_3" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33181 4.99908H11.6645" id="Vector_4" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33181 8.33181H11.6645" id="Vector_5" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33181 11.6645H11.6645" id="Vector_6" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M8.33181 14.9973H11.6645" id="Vector_7" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_131_376">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function O5() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[24px] left-[27.98px] not-italic text-[#1e2939] text-[16px] top-[-3px] whitespace-nowrap">{`Hospital & Lab Information`}</p>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[293.851px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Hospital Name *</p>
    </div>
  );
}

function Fe7() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[35.989px] left-0 rounded-[8px] top-[27.98px] w-[293.851px]" data-name="fe">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Enter hospital name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[67.96px] w-[293.851px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Hospital name is required</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[83.969px] relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Fe7 />
      <Paragraph5 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Lab Name (Optional)</p>
    </div>
  );
}

function Fe8() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">Enter lab name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label9 />
      <Fe8 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[19.996px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Referring Doctor</p>
    </div>
  );
}

function Fe9() {
  return (
    <div className="bg-[#f3f3f5] h-[35.989px] relative rounded-[8px] shrink-0 w-full" data-name="fe">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Segoe_UI:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[16px] whitespace-nowrap">{`Doctor's name`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[7.987px] h-[63.972px] items-start relative shrink-0 w-full" data-name="Container">
      <Label10 />
      <Fe9 />
    </div>
  );
}

function O6() {
  return (
    <div className="h-[243.9px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.993px] items-start relative size-full">
        <Container21 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function W2() {
  return (
    <div className="bg-white h-[350.414px] relative rounded-[14px] shrink-0 w-full" data-name="W">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[39.993px] items-start pb-[1.275px] pl-[21.271px] pr-[1.275px] pt-[21.271px] relative size-full">
        <O5 />
        <O6 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[19.996px] top-[1.99px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9963 19.9963">
        <g clipPath="url(#clip0_131_398)" id="Icon">
          <path d="M6.66545 1.66636V4.99908" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M13.3309 1.66636V4.99908" id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d={svgPaths.p32002d80} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          <path d="M2.49954 8.33181H17.4968" id="Vector_4" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
        </g>
        <defs>
          <clipPath id="clip0_131_398">
            <rect fill="white" height="19.9963" width="19.9963" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function O7() {
  return (
    <div className="h-[23.98px] relative shrink-0 w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[24px] left-[27.98px] not-italic text-[#1e2939] text-[16px] top-[-3px] whitespace-nowrap">Test Date</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute content-stretch flex h-[19.996px] items-start left-0 top-0 w-[293.851px]" data-name="Label">
      <p className="flex-[1_0_0] font-['Segoe_UI:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#364153] text-[14px]">Test Date *</p>
    </div>
  );
}

function Fe10() {
  return <div className="absolute bg-[#f3f3f5] border-[#fb2c36] border-[1.275px] border-solid h-[35.989px] left-0 rounded-[8px] top-[27.98px] w-[293.851px]" data-name="fe" />;
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[16.013px] items-start left-0 top-[67.96px] w-[293.851px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#e7000b] text-[12px]">Test date is required</p>
    </div>
  );
}

function O8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[293.851px]" data-name="O8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Label11 />
        <Fe10 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function W3() {
  return (
    <div className="bg-white h-[190.483px] relative rounded-[14px] shrink-0 w-full" data-name="W">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[39.993px] items-start pl-[21.271px] pr-[1.275px] py-[21.271px] relative size-full">
        <O7 />
        <O8 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[11.054px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0538 19.9963">
        <g id="Icon">
          <path d={svgPaths.p4b4d980} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.921146" />
          <path d={svgPaths.p284fb340} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.921146" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[278.813px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Segoe_UI:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#016630] text-[14px] top-[-1px] w-[260px]">Fields marked with * are required. You can update this information later if needed.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[39.993px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Paragraph7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f0fdf4] h-[74.528px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[1.275px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-[1.275px] pt-[17.268px] px-[17.268px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function V() {
  return (
    <div className="bg-[#155dfc] h-[47.999px] relative rounded-[14px] shrink-0 w-full" data-name="V">
      <p className="-translate-x-1/2 absolute font-['Segoe_UI:Medium',sans-serif] leading-[28px] left-[168.36px] not-italic text-[18px] text-center text-white top-[8.27px] whitespace-nowrap">{`Save & Continue to Sample Info`}</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[32.48px] size-[15.993px] top-[12.01px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9931 15.9931">
        <g id="Icon">
          <path d={svgPaths.p29bb600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p3267380} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
          <path d={svgPaths.p2e132c00} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33276" />
        </g>
      </svg>
    </div>
  );
}

function V1() {
  return (
    <div className="absolute bg-white border-[#155dfc] border-[1.275px] border-solid h-[42.542px] left-0 rounded-[14px] top-0 w-[162.201px]" data-name="V">
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Segoe_UI:Medium',sans-serif] leading-[20px] left-[95.95px] not-italic text-[#155dfc] text-[14px] text-center top-[9px] whitespace-nowrap">Save Only</p>
    </div>
  );
}

function V2() {
  return (
    <div className="absolute bg-white content-stretch flex h-[42.542px] items-center justify-center left-[174.19px] px-[17.275px] py-[21.275px] rounded-[14px] top-0 w-[162.201px]" data-name="V">
      <div aria-hidden="true" className="absolute border-[1.275px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Segoe_UI:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">Cancel</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[42.542px] relative shrink-0 w-full" data-name="Container">
      <V1 />
      <V2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[11.99px] h-[126.531px] items-start relative shrink-0 w-full" data-name="Container">
      <V />
      <Container27 />
    </div>
  );
}

function O() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1811.023px] items-start relative shrink-0 w-full" data-name="O8">
      <Container />
      <Container8 />
      <W />
      <W1 />
      <W2 />
      <W3 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Ne() {
  return (
    <div className="absolute content-stretch flex flex-col h-[851.477px] items-start left-0 pt-[107.948px] px-[15.993px] top-0 w-[368.379px]" data-name="ne" style={{ backgroundImage: "linear-gradient(rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <O />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[19.996px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49863 13.3309">
            <path d={svgPaths.p1927d548} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3309 1.66636">
            <path d="M12.4977 0.833181H0.833181" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66636" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[35.97px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.987px] px-[7.987px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[28.003px] min-h-px min-w-px relative" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Segoe_UI:Semi_Bold',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1.73px] whitespace-nowrap">Patient Information</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[11.99px] h-[35.97px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
    </div>
  );
}

function Ne1() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex flex-col h-[67.956px] items-start left-0 pt-[15.993px] px-[15.993px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[514.97px] w-[368.379px]" data-name="ne">
      <Container28 />
    </div>
  );
}

export default function AntibioticResistanceAnalysisApp() {
  return (
    <div className="bg-white relative size-full" data-name="Antibiotic Resistance Analysis App">
      <Ne />
      <Ne1 />
    </div>
  );
}