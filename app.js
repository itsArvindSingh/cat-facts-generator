let url = "https://catfact.ninja/fact";
let btn = document.querySelector(".generate");

let factBox = document.querySelector(".fact-box");

btn.addEventListener("click",async () => {
    btn.innerText = "Generating...";
    btn.disabled = true;
    let factText = await getFact();
    if (factText){
        factBox.innerHTML = `
        <p>Fact:</p>
        <p>${factText}</p>`;
    }else {
        factBox.innerHTML = `
        <p class="error-message">
            Failed to generate content. Please try again.
        </p>
    `;
    }

    btn.innerText = "Generate";
    btn.disabled = false;
})

async function getFact(){
    try {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error();
        }
        let data = await res.json();
        return data.fact;
    }
    catch {
        return null;
    }
}

