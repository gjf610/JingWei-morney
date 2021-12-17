type Props = {
    name?: string,

}

const SvgIcon = (props: Props) => {
    return (
        <svg className="icon" aria-hidden="true">
            {props.name && <use href={`#icon-${props.name}`} />}
        </svg>
    );
}

export default SvgIcon;