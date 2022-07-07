import { useRouter } from 'next/router';
import React from 'react';

const NavigationItem = React.forwardRef(
  ({ navigate, ...props }: any, ref: any) => {
    const router = useRouter();

    function handleClick(e: any) {
      e.preventDefault();

      router.push(props.href);
    }

    return (
      <a ref={ref} {...props} onClick={handleClick}>
        {props.children}
      </a>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

export default NavigationItem;
