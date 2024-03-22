// const rootEle=document.getElementById('root');
// let div=React.createElement('div',null,[
//     React.createElement('h1',null,'h1 inside div'),
    
//     React.createElement('p',null,'paragrapha inside div'),
// ]);

// ReactDOM.createRoot(rootEle).render(div);

// // ----------------------------------------------


const rootEle=document.getElementById('root');
let div=(
    <div>
        <div>
            <h1>hello h1 jsx</h1>
            <p>hello p jsx</p>
        </div>
    </div>
)

ReactDOM.createRoot(rootEle).render(div);

