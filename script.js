function changeStyle(cssFile) {
    // Verifica se o elemento de link com id 'theme-style' está presente
    const link = document.getElementById('theme-style');
    if (link) {
        link.href = cssFile;
    } else {
        console.error("Elemento 'theme-style' não encontrado!");
    }
}
