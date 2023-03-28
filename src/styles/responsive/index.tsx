import MediaQuery from 'react-responsive';
import { ReactNode } from 'react';

interface ResponsivePropsType {
  children?: ReactNode;
}

type EachDeiceType = (props: ResponsivePropsType) => JSX.Element;

interface DeviceType {
  Mobile?: EachDeiceType;
  Tablet?: EachDeiceType;
  Labtop?: EachDeiceType;
  Pc?: EachDeiceType;
}

const Template =
  (maxWidth: number) => (props: typeof MediaQuery.defaultProps) =>
    (
      <MediaQuery maxWidth={maxWidth} {...props}>
        {props.children}
      </MediaQuery>
    );
const device = {
  Mobile: 360,
  Tablet: 720,
  Labtop: 1024,
  Pc: 1512,
};

const newObject: DeviceType = {};

export const { Mobile, Tablet, Labtop, Pc }: DeviceType = Object.keys(
  device
).reduce((newObject, key: keyof DeviceType) => {
  const maxWidth = device[key];
  newObject[key] = Template(maxWidth);
  return newObject;
}, newObject);
