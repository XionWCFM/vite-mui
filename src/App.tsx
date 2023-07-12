import { Button } from '@mui/material';
import * as Popover from '@radix-ui/react-popover';
import '@/styles/reset.css';
import '@/styles/index.css';
const App = () => {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <Button>엄준식</Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>이안에 어떤 내용을 적어주면됩니다.</Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default App;
