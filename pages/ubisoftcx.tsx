import PostTemplate from './Template';
// import { useMDXComponents } from '/mdx-components'; // Update the path as needed
import OverridingComponents from '@/mdx-components';
import UbiMDX from '/posts/ubisoft.mdx';

// change it to dashboardMDX

export default function MyFirstPost() {
  return (
    <div>
      <PostTemplate>
        <article>
          <UbiMDX components={OverridingComponents} />
        </article>
      </PostTemplate>
    </div>
  );
}
