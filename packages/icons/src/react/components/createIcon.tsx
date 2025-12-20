import { ForwardedRef, forwardRef, SVGProps } from 'react';

const createIcon = (
    displayName: string,
    paths: React.ReactNode,
    width: number | string,
    height: number | string,
    options: React.SVGAttributes<SVGSVGElement> = {
        fill: 'inherit'
    },
) => {
    const Icon = (
        { left, top, ...props }: SVGProps<SVGSVGElement> & { left?: number, top?: number },
        ref: ForwardedRef<SVGSVGElement>
    ) => (
        <svg
            ref={ref}
            className={props.className}
            width={width}
            height={height}
            viewBox={`${left ?? 0} ${top ?? 0} ${(width)} ${height}`}
            aria-hidden="true"
            fill="currentColor"
            xmlns="https://www.w3.org/2000/svg"
            strokeWidth="0"
            preserveAspectRatio="xMidYMid meet"
            {...options}
            {...props}
        >{paths}</svg>
    )
    Icon.displayName = `${displayName}Icon`;

    return forwardRef<SVGSVGElement, SVGProps<SVGSVGElement> & { left?: number, top?: number }>(Icon);

};

export { createIcon };