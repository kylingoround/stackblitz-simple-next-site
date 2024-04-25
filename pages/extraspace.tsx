import PostTemplate from './Template';
// import { useMDXComponents } from '/mdx-components'; // Update the path as needed
import OverridingComponents from '@/mdx-components';
import ESSMDX from '/posts/extraspace.mdx';

// change it to dashboardMDX

export default function MyFirstPost() {
  return (
    <div>
      <PostTemplate>
        <article>
          <ESSMDX components={OverridingComponents} />
        </article>
      </PostTemplate>
    </div>
  );
}
