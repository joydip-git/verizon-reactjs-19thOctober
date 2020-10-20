import Welcome from './Welcome'
import ProductList from './ProductList'
import * as React from 'react'

export default function App() {
    //const welcomeElement = Welcome();
    //const tableElement = ProductList();
    // const brElement = React.createElement('br', null, null);
    // const appElement = React.createElement('div', null, [welcomeElement, brElement, tableElement]);    
    // const appElement = (
    //     <div>
    //         {welcomeElement}
    //         <br />
    //         {tableElement}
    //     </div>
    // )
    const appElement = (
        <div>
            <Welcome />
            <br />
            <ProductList />
        </div>
    )
    return appElement;
}