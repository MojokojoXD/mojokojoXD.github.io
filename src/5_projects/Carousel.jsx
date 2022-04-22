// @ts-nocheck
import React from 'react';


export function CarouselItems({children,width,itemClass}){

    return(
        <div className={itemClass} style={{width: width}}>
            {children}
        </div>
    )
}

export default function Carousel({children}){
    const [active, setActive] = React.useState(1);


    const indexUpdate = (index) => {
      if (index < 0) {
        index = 0;
      } else if (index >= React.Children.count(children)) index -= 1;
      setActive(index);
    };

    return (
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${active * 30}vw)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { itemClass: (index === active)?('items activeItem'):'items'});
          })}
        </div>
        <div className="indicators">
            <button onClick={() => indexUpdate(active - 1)}>&lt;</button>


            {React.Children.map(children, (child, index) => {
                return <button onClick={()=>indexUpdate(index)} style={(index===active)?activeItemCount: {}}>{index + 1}</button>;
            })}


            <button onClick={() => indexUpdate(active + 1)}>&gt;</button>
        </div>
      </div>
    );
}


const activeItemCount = {
  background: 'radial-gradient(circle at center top, $tertiary_color 50%,$primary_color)',
  color: "#260101",
  padding: '0 5px'
};