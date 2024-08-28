document.getElementById("pdf").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the default link behavior
    window.print(); // Triggers the print dialog
});


const counter = document.querySelector(".counter-number");
async function getVisitorCount() {
    let response = await fetch ("https://r5l4eofrvtrd2fu4zvfcsvl76q0olulu.lambda-url.us-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Number of Visitors: ${data}`;
}

getVisitorCount();

