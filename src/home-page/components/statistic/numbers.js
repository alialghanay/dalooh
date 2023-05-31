function Numbers(props) {
    return (
            <p className='s-num'>
                {props.children.p}
                <span className='supsub'>
                    <sup className='superscript'>{props.children.sup}</sup>
                    <sub className='subscript'>{props.children.sub}</sub>
                </span>
            </p>
    )
}

export default Numbers;