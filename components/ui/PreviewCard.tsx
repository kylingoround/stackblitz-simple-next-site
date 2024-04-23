import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';


interface PreviewCardContent {
  imageUrl: string;
  description: string;
  tags: string[];
}

interface Props {
  content: PreviewCardContent | null;
}

const Component = (props: Props) => {
  return (
    <Card className="rounded-lg shadow-lg bg-gray-50 bg-opacity-60 backdrop-blur-4 p-4 m-4">
      <div className="overflow-hidden object-cover w-full">
        <img
          alt="Card Image"
          height={400}
          src={props.content?.imageUrl || '/placeholderPNG.png'}
          width={600}
          style={{ borderRadius: '6px' }}
        />
      </div>
      <CardContent className="p-0 pt-4">
        <p className="text-gray-500 dark:text-gray-400">
          {props.content?.description || 'Default Description'}
        </p>
        {props.content?.tags && (
          <div className="flex flex-wrap gap-2 pt-4 ">
            {props.content?.tags.map((tag, i) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[#707070]"
              >
                {tag}
              </Badge>
            ))}

            {/* <Badge variant="outline">New</Badge>
          <Badge variant="outline">Trending</Badge>
          <Badge variant="outline">Limited Edition</Badge> */}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Component;
