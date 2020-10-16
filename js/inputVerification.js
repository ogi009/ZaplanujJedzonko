export function verification (input,string) {
    input.style.border = `1px solid tomato`;
    input.setAttribute('placeholder',string);
    input.classList.add('placeholder_red');
}