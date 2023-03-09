const sizes = {
    _360: 360,
    _720: 720,
    _1024: 1024,
    _1512: 1512,
};
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (style) => `
      @media (max-width: ${sizes[label] / 16}rem) {
        ${style}
      }
    `;
    return acc;
}, {});
//# sourceMappingURL=index.js.map