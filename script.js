function handleSearch() {
    let sentence = document.getElementById('searchSentence').value;
    let word = document.getElementById('searchWord').value;
    
    if (sentence.includes(word)) {
        document.getElementById('searchResult').textContent = 'Found';
    } else {
        document.getElementById('searchResult').textContent = 'Not Found';
    }
}

function handleReplace() {
    let sentence = document.getElementById('replaceInput').value;
    let oldWord = document.getElementById('oldWord').value;
    let newWord = document.getElementById('newWord').value;
    
    let result = sentence.replace(oldWord, newWord);
    document.getElementById('replaceResult').textContent = result;
}
