const fontToCss = (sz: number, wt: number, lh?: number) => `
  font-family: "Pretendard";
  font-weight: ${wt};
  font-size: ${sz}px;
  ${lh && `line-height: ${lh}%;`}
`;

export const font = {
  heading1: fontToCss(27, 900),
  heading2: fontToCss(17, 700),
  heading3: fontToCss(14, 700),
  heading4: fontToCss(13, 400),
  title1: fontToCss(23, 700),
  title2: fontToCss(19, 600),
  title3: fontToCss(16, 500),
  title4: fontToCss(15, 500),
  body1: fontToCss(16, 400, 140),
  body2: fontToCss(14, 400),
  body3: fontToCss(13, 400),
  body4: fontToCss(12, 400),
};
