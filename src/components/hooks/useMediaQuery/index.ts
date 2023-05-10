import { useContext, useMemo } from "react";
import { ResponsiveContext } from "../../../components/context/ResponsiveContext.component";
import { screenSize } from "../../../constants/responsive.constants";
import { DimType } from "../../../utils/eventDispatcher";

type Options<T> = Partial<Record<DimType, T>>;

const screenList = Object.entries(screenSize).sort((a, b) => a[1] - b[1]) as [
  DimType,
  number
][];

export const useMediaQuery = <T>(defaultValue: T, options?: Options<T>): T => {
  const { dim = { size: screenSize.xs, type: "xs" } } =
    useContext(ResponsiveContext);

  const component = useMemo(() => {
    // nullish
    if (options === undefined) return defaultValue;
    // search until the max resolution available
    const screen = screenList.find(
      ([key, value]) => value >= dim.size && options[key] !== undefined
    );
    if (screen !== undefined) {
      const [screenType] = screen;
      return options[screenType] as T;
    }
    return defaultValue;
  }, [dim, defaultValue, options]);

  return component;
};
