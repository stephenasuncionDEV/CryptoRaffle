import React, { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';

const EntryAnimation = (props, ref) => {
    const svgRef = useRef();

    useImperativeHandle(ref, () => ({
        handleAnimate() {
            const svgElement = svgRef.current.contentDocument;
            // console.log(svgElement);
            // svgElement.dispatchEvent(new Event('click'));
        }
    }), [])

    return (
        <object id="entryAnimation" type="image/svg+xml" data="/EntryAnimation.svg" ref={svgRef}>
            <img src="/EntryAnimation.svg" alt="Crypto Raffle Animation"/>
        </object>
    )
}

export default forwardRef(EntryAnimation)