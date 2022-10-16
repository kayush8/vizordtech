export default function getRelativeCoordinates(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  referenceElement: HTMLDivElement | null
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement?.offsetLeft,
    top: referenceElement?.offsetTop,
    width: referenceElement?.clientWidth,
    height: referenceElement?.clientHeight,
  };

  let reference = referenceElement?.offsetParent;

  while (reference) {
    //@ts-ignore
    offset.left += reference.offsetLeft;
    //@ts-ignore
    offset.top += reference.offsetTop;
    //@ts-ignore
    reference = reference.offsetParent;
  }

  return {
    //@ts-ignore
    x: position.x - offset.left,
    //@ts-ignore
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    //@ts-ignore
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      //@ts-ignore
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

export type MousePositionState = {
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  height?: number | undefined;
  width?: number | undefined;
};
