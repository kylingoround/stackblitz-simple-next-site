import type { MDXComponents } from 'mdx/types';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import { CldImage } from 'next-cloudinary';

// const MyMDXComponent = (props: any) => (
//   <div className="my-mdx-component">{props.children}</div>
// );

// export default {
//   MyMDXComponent,
//   // Add more custom components as needed
// };

const OverridingComponents = {
  p: (props: any) => (
    <p className="text[#2A2A2A] font-light">{props.children}</p>
  ),
  h1: (props: any) => (
    <h1 style={{ color: '#2A2A2A', fontSize: '48px' }}>{props.children}</h1>
  ),
  li: (props: any) => (
    <li className="text-[16px] text[#2A2A2A] font-light">{props.children}</li>
  ),
  strong: (props: any) => (<strong className='font-bold'>{props.children}</strong>),
  ul: (props:any) =>(<ul className='list-disc'>{props.children}</ul>),
  img: (props: any) => (
    <Image
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
        marginTop: '4rem',
        marginBottom: '4rem',
      }}
      width="500"
      height="500"
      {...(props as ImageProps)}
    />
  ),
};
export default OverridingComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    p: ({ children }) => (
      <p className="text-[16px] text[#2A2A2A] font-light">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-[36px] text[#2A2A2A]">{children}</h1>
    ),
    ul: ({children}) => (<ul className='list-disc'>{children}</ul>),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}

// import type { MDXComponents } from 'mdx/types'
// import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
