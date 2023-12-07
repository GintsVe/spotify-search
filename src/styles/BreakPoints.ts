type TSize = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

const size: TSize = {
  xs: "300px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg});`,
};
