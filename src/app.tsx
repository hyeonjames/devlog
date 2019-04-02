import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FileStore from './core/FileStore';



ReactDOM.render(
    <div>Hello World!!@
        
    </div>,
    document.getElementById("app")
);



const store = new FileStore();
async function test() {
    console.log(await store.get('./test.json'));
    return 0;
}

test();