import React, { FunctionComponent } from 'react'

interface ArrowProps {
    text: string;
    classNm: string; //ClassName
}

export const Arrow: FunctionComponent<ArrowProps> = ({text, classNm}) => {
    return (
        <div className={classNm}> 
            {text}
        </div>
    )
}
