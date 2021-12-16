type Props = {
    name: string,

}

const SvgIcon = (props: Props) => {
    const symbolId = `#icon-${props.name}`;
    return (
        <svg className="icon" aria-hidden="true">
            <use href={symbolId} />
        </svg>
    );
}

export default SvgIcon;