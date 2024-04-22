import { Button } from '@/components/ui/button';

const CapsuleButton = (props: any) => (
  <Button
    onClick={() => (window.location.href = props.href)}
    className="bg-white border border-gray-300 text-[#8A8A8A] rounded-full px-4 py-2 inline-flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
    style={{ fontSize: '16px', marginRight: '16px' }}

    // className="bg-gray-300 text-gray-900 rounded-full px-4 py-2 inline-flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
  >
    {props.children}
  </Button>
);

// function CapsuleButton() {
//   return (
//     <Button className="bg-gray-300 text-gray-900 rounded-full px-4 py-2 inline-flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-50 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
//       Link Button
//     </Button>
//   );
// }

export default CapsuleButton;
