function component() {
    const element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'Mukesh'], ' ');
    element.innerHTML = join(['Hello', 'Mukesh'], ' ');

    return element;
}

document.body.appendChild(component());