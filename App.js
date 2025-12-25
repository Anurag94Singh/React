const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', { id: 'heading1' }, 'Hello World from h1'),
        React.createElement('h2', { id: 'heading2' }, 'Hello World from h2')]
    )
);


// const e = React.createElement('h1', { id: 'heading' }, 'Hello World, React!');

// console.log(e);//returns a React element object => which is a lightweight representation of the DOM element => HTML element which DOM understands

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);