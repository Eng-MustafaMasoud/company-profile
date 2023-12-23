import React from 'react'

import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div className="cursor" >
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 163, 60'
      outerAlpha={0.4}
      innerScale={1.5}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}