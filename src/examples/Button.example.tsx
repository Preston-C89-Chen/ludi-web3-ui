import React, {FC} from 'react';
import { Button } from '@/components/ui/button';

const ButtonExample: FC = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <Button className='primary'>Primary </Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}

export default ButtonExample;