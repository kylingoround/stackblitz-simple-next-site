import PostTemplate from './Template';
// import { useMDXComponents } from '/mdx-components'; // Update the path as needed
import OverridingComponents from '/mdx-components';
import DashboardMDX from '/posts/dashboard.mdx';

// change it to dashboardMDX

export default function MyFirstPost() {
  return (
    <div>
      <PostTemplate>
        <article>
          <DashboardMDX components={OverridingComponents} />
        </article>
      </PostTemplate>
    </div>
  );
}
