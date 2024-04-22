import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

interface PostProps {
  mdxSource: any; // You can replace `any` with more specific types from `next-mdx-remote`
  frontMatter: {
    title: string;
    date: string;
  };
}

// Manually specify the MDX file path
// const mdxFilePath = path.join(process.cwd(), 'posts', 'cyber.mdx');
const mdxFilePath = 'cyber.mdx';

const MyFirstPost: React.FC<PostProps> = ({ mdxSource, frontMatter }) => {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      <MDXRemote {...mdxSource} />
    </article>
  );
};

export async function getStaticProps() {
  const fileContents = fs.readFileSync(mdxFilePath, 'utf8');
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);
  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}

export default MyFirstPost;
