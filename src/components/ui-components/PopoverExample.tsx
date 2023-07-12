import { Button } from '@mui/material';
import * as Popover from '@radix-ui/react-popover';

const PopoverExample = () => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="contained">엄준식</Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="fadeinout">
          이안에 어떤 내용을 적어주면됩니다.
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverExample;
