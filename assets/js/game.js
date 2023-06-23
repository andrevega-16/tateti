let mark = 'x';

document.querySelectorAll('td').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cell.innerHTML = mark;

        if (mark === 'x') {
            mark = 'o';
        } else {
            mark = 'x';
        }
    })
})