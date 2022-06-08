import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';

export type DropdownProps = {
  label?: string;
  right?: boolean;
  children?: React.ReactNode;
  button?: React.ReactNode;
};

export function Dropdown({
  right = false,
  label,
  children,
  button,
}: DropdownProps) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>{button ?? <Menu.Button as={Button}>{label}</Menu.Button>}</div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ${
              right ? 'right-0' : 'left-0'
            } mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export type DropdownItemProps = {
  icon?: React.ReactNode;
  text?: string;
  children?: React.ReactNode | string;
};

export function DropdownItem({ icon, children, text }: DropdownItemProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? 'bg-blue-600 text-white' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2`}
        >
          {icon}
          {children ?? text}
        </button>
      )}
    </Menu.Item>
  );
}
