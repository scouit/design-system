import MediaQuery from 'react-responsive';

type TemplatePropsType = typeof MediaQuery.defaultProps;
interface TemplateType extends TemplatePropsType {
  highToLow?: boolean;
}

type EachDeiceType = (props: TemplateType) => JSX.Element;

interface DeviceType {
  Mobile?: EachDeiceType;
  Tablet?: EachDeiceType;
  Labtop?: EachDeiceType;
  Pc?: EachDeiceType;
}

const device = {
  Mobile: 360,
  Tablet: 720,
  Labtop: 1024,
  Pc: 1512,
};

const Template = (width: number) => (props: TemplateType) => {
  const { highToLow } = props;
  const addDefault = highToLow || highToLow === undefined;
  const maxOrMin = {
    [addDefault ? 'maxWidth' : 'minWidth']: width,
  };
  return (
    <MediaQuery {...maxOrMin} {...props}>
      {props.children}
    </MediaQuery>
  );
};

const newObject: DeviceType = {};

export const { Mobile, Tablet, Labtop, Pc }: DeviceType = Object.keys(
  device
).reduce((newObject, key: keyof DeviceType) => {
  const width = device[key];
  newObject[key] = Template(width);
  return newObject;
}, newObject);
