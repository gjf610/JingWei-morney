import React from "react";
import cs from "classnames";
type Props = {
    name?: string,

} & React.SVGAttributes<SVGElement>
const SvgIcon = (props: Props) => {
    const { name, children, className, ...rest } = props
    return (
        <svg className={cs('icon', className)} {...rest} aria-hidden="true">
            {name && <use href={`#icon-${name}`} />}
        </svg>
    );
}

export default SvgIcon;