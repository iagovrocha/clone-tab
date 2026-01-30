import * as React from 'react';

function Home() {
    const [state, setState] = React.useState(0);

    function handleClick(st) {
        setState(st)
    }

    return <>
        <h2>Frase filosófica </h2>
        <h1>{state == 0 ?
        '"A violência é o último refúgio dos incompetentes" - Salvor Hardin em "Fundação"' :
        "'Ele criou o daltonismo'- Saas 2020"
        }</h1>
        <button onClick={() => handleClick(state == 0 ? 1 : 0)}> Clique aqui para ver a verdadeira frase filosófica </button>
    </>
}

export default Home;
