import React from 'react';

function Tile({title, text,image, paragraph, textTwo  }) {
    return (
<section>


    {title && <> <h2>{title}</h2>
    <p>{text} </p>  <p>{textTwo} </p></>}
    { paragraph && <p>{paragraph}</p> }
    { image && <img src={image} alt={title}/>}

</section>
    );
}

export default Tile;

// <section>
//     <h2>The brand </h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
//         pariatur praesentium quia sequi similique sunt </p>
//     <p>>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga
//         pariatur praesentium quia sequi similique sunt</p>
//
// </section>
//
// <section>
//     <img src={brand} alt="brand"/>
// </section>