type MediaQueryProps = {
  _360: number;
  _720: number;
  _1024: number;
  _1512: number;
};

const sizes: MediaQueryProps = {
  _360: 360,
  _720: 720,
  _1024: 1024,
  _1512: 1512,
};

export const media = Object.keys(sizes).reduce(
  (acc, label: keyof MediaQueryProps) => {
    acc[label] = (style: string) => `
      @media (max-width: ${sizes[label] / 16}rem) {
        ${style}
      }
    `;
    return acc;
  },
  {} as { [index in keyof MediaQueryProps]: (style: string) => string },
);
