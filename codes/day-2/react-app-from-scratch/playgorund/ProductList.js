// function productlist() {
//     let data = [];
//     fetch('http://localhost:4322/productservice/')
//         .then(r => data = r.json())
//         .catch()
//     let table = document.createElement('table');
//     if (data !== null && data.length > 0) {
//         for (let i = 0; i < data.length; i++) {
//             table.appendChild(document.createElement('tr'));
//         }
//         return table;
//     } else {
//         return document.createElement('span').innerHTML = 'loading...';
//     }

// }
import React from 'react'
function ProductList() {
    let data = [];
    fetch('http://localhost:4322/productservice/')
        .then(r => data = r.json())
        .catch()
    // let tableDesign = React.createElement('table', null, null);
    let design = null;
    if (data !== null && data.length > 0) {
        design = (
            <table>

            </table>
        )
        // for (let i = 0; i < data.length; i++) {
        //     let row = <tr><td>pdata</td></tr>;
        // }

    } else {
        design = <span id='loadindgSpan'>Loading...</span>
    }
    return design;
}
export default ProductList;