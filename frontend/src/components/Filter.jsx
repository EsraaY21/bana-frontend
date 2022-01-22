import { FaSlidersH } from 'react-icons/fa';

import {
  Button as BootstrapButton,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';

const Filter = () => {
  return (
    <div>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Header as="h3">{`Advanced Filter`}</Popover.Header>
            <Popover.Body>
              <p>Filter by price:</p>
              <p>Filter by category:</p>
              <p>Filter by brand:</p>
            </Popover.Body>
          </Popover>
        }
      >
        <BootstrapButton variant="secondary">
          <FaSlidersH /> Filter
        </BootstrapButton>
      </OverlayTrigger>
    </div>
  );
};

export default Filter;
