document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        let text = this.textContent;
        let display = document.getElementById('display');
        if (text === 'C') {
            display.textContent = '0';
        } else if (text === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch (e) {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0') {
                display.textContent = text;
            } else {
                display.textContent += text;
            }
        }
    });
});
