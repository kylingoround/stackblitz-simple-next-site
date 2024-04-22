import { Badge } from '@/components/ui/badge';
import { CardContent, Card } from '@/components/ui/card';
import PlaceholderSVG from '@/app/svg/Placeholder';
import SVGPattern3 from '@/app/svg/Pattern1';

// import PlaceholderSvg from './placeholder.svg';

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      {/* <img
        alt="Card Image"
        className="aspect-[3/2] object-cover w-full rounded-t-lg"
        height={400}
        src={PlaceholderSvg}
        width={600}
      /> */}
      <div className="aspect-[3/2] object-cover w-full rounded-t-lg">
        <PlaceholderSVG />
      </div>

      <CardContent className="p-4 space-y-2">
        <p className="text-gray-500 dark:text-gray-400">
          Introducing our latest product - a sleek and stylish accessory that
          combines form and function.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">New</Badge>
          <Badge variant="outline">Trending</Badge>
          <Badge variant="outline">Limited Edition</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
