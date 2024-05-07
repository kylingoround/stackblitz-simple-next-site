import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { CldImage } from 'next-cloudinary';

// cover image
// 2 col section
// 3 col section

export const CoverImage = (props: any) => (
  <CldImage
    sizes="100vw"
    style={{
      width: '100%',
      height: 'auto',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      marginBottom: '4px',
    }}
    width="500"
    height="500"
    className='cld-responsive'
    alt=""
    src={props.src}
    // {...(props as ImageProps)}
  />
);

export const ImageWithCaption = (props: any) => (
  <div className="mt-2 mb-2">
    <CldImage
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width="500"
      height="500"
      alt={props.alt}
      src={props.src}
      // {...(props as ImageProps)}
    />
    <div className="max-width-[1440px] text-[#787878] mt-6 ml-6 mr-6 flex justify-center mb-6">
      {props.children}
    </div>
  </div>
);

const CaseSectionWrapper = styled.div`
  margin-top: 16px; 
  margin-bottom: 32px;
  margin-left:24px;
  margin-right:24px;
`;

export const Col_2_Section = (props: any) => 
  (
  <CaseSectionWrapper>
    <div className="w-full grid grid-cols-4 gap-4 text-[14px] text-[#DCDCDC] font-[400] leading-150 relative">
      <div className="col-start-1 col-end-2 mb-1 mt-1">Subject</div>
      <div className="col-start-2 col-end-5 mb-1 mt-1">About</div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#DCDCDC]"></div>
    </div>
    <div className="w-full grid grid-cols-4 gap-4 mt-4 text-[#2A2A2A]">
      <div className="col-start-1 col-end-2 text-[36px]">{props.title}</div>
      <div className="col-start-2 col-end-5 text-[18px]">{props.children}</div>
    </div>
  </CaseSectionWrapper>
);
export const Col_3_Section = (props: any) => (
  <CaseSectionWrapper>
    <div className="w-full grid grid-cols-4 gap-4 text-[14px] text-[#DCDCDC] font-[400] leading-150 relative">
      <div className="col-start-1 col-end-2 mb-1 mt-1">Subject</div>
      <div className="col-start-2 col-end-3 mb-1 mt-1">About</div>
      <div className="col-start-3 col-end-5 mb-1 mt-1">Task</div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#DCDCDC]"></div>
    </div>
    <div className="w-full grid grid-cols-4 gap-4 mt-4 text-[#2A2A2A]">
      <div className="col-start-1 col-end-2 text-[36px]">{props.title}</div>
      <div className="col-start-2 col-end-3 text-[16px] font-light">
        {props.first}
      </div>
      <div className="col-start-3 col-end-5 text-[24px]">{props.children}</div>
    </div>
  </CaseSectionWrapper>
);

const CustomWrapper = styled.div`
  margin-left:24px;
  margin-right:24px;
  margin-top:48px;
  margin-bottom:48px;
  gap: 1rem;
  // font-size: 14px;
  // font-weight: 400;
  // line-height: 150%;
  position: relative;
`
export const MDX_P = (props: any)=> (
  <CustomWrapper className='text-xl'>{props.children}</CustomWrapper>
)

export const MDX_EmphaszieText = (props: any)=> (
  <CustomWrapper className='text-3xl leading-normal flex flex-col space-y-4'>{props.children}</CustomWrapper>
)

export const MDX_Quote = (props: any)=> (
  <CustomWrapper><div>{props.children}</div></CustomWrapper>
)

export const Col_5_TeamIntro = (props: any)=> {
  const sections = props.sections;
  const title = props.title;
  const col2 = props.col2;
  const col3 = props.col3;
  const col4 = props.col4;
  const col5 = props.col5;
  return (
    <CaseSectionWrapper>      
      <div className="w-full grid grid-cols-5 gap-4 text-[14px] text-[#DCDCDC] font-[400] leading-150 relative">
        <div className="col-start-1 col-end-2 mb-1 mt-1">Subject</div>
        <div className="col-start-2 col-end-3 mb-1 mt-1">About</div>
        <div className="col-start-3 col-end-4 mb-1 mt-1">Task</div>
        <div className="col-start-4 col-end-5 mb-1 mt-1">Task</div>
        <div className="col-start-5 col-end-6 mb-1 mt-1">Task</div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#DCDCDC]"></div>
      </div>
      <div className="w-full grid grid-cols-5 gap-4 mt-4 text-[#2A2A2A]">
        <div className="col-start-1 col-end-2 mb-1 mt-1">{title}</div>
        <div className="col-start-2 col-end-3 mb-1 mt-1">{col2.map((content: any) => <div>{content}</div>)}</div>
        <div className="col-start-3 col-end-4 mb-1 mt-1">{col3}</div>
        <div className="col-start-4 col-end-5 mb-1 mt-1">{col4.map((content: any) => <div>{content}</div>)}</div>
        <div className="col-start-5 col-end-6 mb-1 mt-1">{col5.map((content: any) => <div><b>{content.title + ":"}</b><span>  </span>{content.name}</div>)}</div>
        {/* <div className="col-start-5 col-end-6 mb-1 mt-1">{col5}</div> */}
      </div>
    </CaseSectionWrapper>
  )
}

export const PageTag = (props: any) => <div className='rounded-full pt-2 pb-2 pl-4 pr-4 bg-black text-caseM text-white'>{props.children}</div>

export const PageTagsSection = (props: any ) => <CustomWrapper><div className='flex space-x-2'>{props.children}</div></CustomWrapper>

export const ImpactSection = (props: any) => <CustomWrapper>{props.children}</CustomWrapper>

export const ApproachSection = (props: any) => <CustomWrapper>{props.children}</CustomWrapper>