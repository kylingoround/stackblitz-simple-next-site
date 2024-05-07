import styled from 'styled-components';
import PostNavBar from '@/components/ui/PostNavBar';
import Footer from '@/components/ui/Footer';
import '@/app/globals.css';

// const PostWrapper = styled.div.attrs({ className: '' });

// todo:
// create cover image with customized corner radius
// create 3-col section
// create 2-col section
// create embedded image component / or just Image style
// create case study footer
// create back button styling

const PostNav = () => (
  <div className="w-full max-w-[1440px] flex flex-row justify-bewteen">
    <PostNavBar />
    {/* <a href="/">Back</a> */}
  </div>
);

const PostTemplate = (props: any) => (
  <div className="flex flex-col w-full h-full min-h-[100vh] justify-center items-center bg-[#FAFAFA]">
    <PostNavBar />
    <div className="mt-28 max-w-[1440px] m-4 border border-[#DDDDDD] rounded-[24px] p-2">
      <div>{props.children}</div>
    </div>
    <Footer/>
  </div>
);

export default PostTemplate;
