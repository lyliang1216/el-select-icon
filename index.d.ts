type OptionsType = {
  fixedContentArea?: boolean;
};

declare module "SelectIcon" {
  export const Button: import("vue").DefineComponent<OptionsType>;

  const install: (
    app: import("vue").App,
    options: {
      name: string;
    }
  ) => unknown;
  export default install;
}
