document.getElementById("btnMP2").addEventListener("click", () => {
    const sentence = document.getElementById("mp2Sentence").value;
    const word = document.getElementById("mp2Word").value;
    
    if (sentence.includes(word)) {
        document.getElementById("outMP2").textContent = "Found";
    } else {
        document.getElementById("outMP2").textContent = "Not Found";
    }
});