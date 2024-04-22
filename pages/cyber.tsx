import PostTemplate from './Template';
// import { useMDXComponents } from '/mdx-components'; // Update the path as needed
import OverridingComponents from '/mdx-components';
import CyberMDX from '/posts/cyber.mdx';

export default function MyFirstPost() {
  return (
    <div>
      <PostTemplate>
        <article>
          <CyberMDX components={OverridingComponents} />
        </article>
      </PostTemplate>
    </div>
  );
}

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';

// interface PostProps {
//   mdxSource: any; // You can replace `any` with more specific types from `next-mdx-remote`
//   frontMatter: {
//     title: string;
//     date: string;
//   };
// }

// Manually specify the MDX file path
// const mdxFilePath = path.join(process.cwd(), 'posts', 'cyber.mdx');
// const mdxFilePath = '/posts/cyber.mdx';

// function CustomH1({ children }) {
//   return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>
// }

// const overrideComponents = {
//   h1: CustomH1,
// }

// function CustomH1({ children }) {
//   return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>;
// }

// const overrideComponents = {
//   h1: CustomH1,
// };

// const MyFirstPost = ({
//   mdxSource,
//   frontMatter,
// }: {
//   mdxSource: any;
//   frontMatter: any;
// }) => {
//   const components = useMDXComponents({});

//   return (
//     <div>
//       <PostTemplate>
//         <article>
//           <MDXRemote {...mdxSource} components={components} />
//         </article>
//       </PostTemplate>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
//   const { data, content } = matter(fileContents);
//   const mdxSource = await serialize(content);
//   return {
//     props: {
//       mdxSource,
//       frontMatter: data,
//     },
//   };
// }

// export default MyFirstPost;

{
  /* <h1 className="text-[24px]">{frontMatter.title}</h1>
<p>{frontMatter.date}</p>
<div>hello</div> */
}
