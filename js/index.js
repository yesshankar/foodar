
function checkZipcode(form) {

    let zip = Number(form["zipcode"].value);
    let zipStatus = document.getElementById("zipStatus");
    let availableZips = [79936, 90011, 60629, 90650, 90201, 77084, 92335, 78521, 77449, 78572, 90250, 90280, 11226, 90805,
        91331, 8701, 90044, 92336, 926, 94565, 10467, 92683, 75052, 91342, 92704, 30044, 10025, 92503, 92804, 78577, 75217, 92376,
        93307, 10456, 10002, 91911, 91744, 75070, 77036, 93722, 92345, 60618, 93033, 93550, 95076, 11230, 11368, 37013, 11373,
        79912, 37211, 30043, 11206, 10453, 92154, 11355, 95823, 77479, 91706, 10458, 92553, 90706, 23464, 11212, 60617, 91709,
        11214, 11219, 91910, 22193, 77429, 93535, 66062, 93257, 30349, 60647, 77584, 10452, 77573, 11377, 11207, 77494, 75211,
        11234, 28269, 11235, 94544, 10029, 60625, 89110, 92509, 77083, 91335, 85364, 87121, 10468, 90255, 93065, 91710, 10462];

    if (availableZips.includes(zip)) {
        zipStatus.innerHTML = "We’ve got your area covered!";
        zipStatus.style.color = "green";
    } else {
        zipStatus.innerHTML = "Sorry, we haven’t expanded to that area yet.";
        zipStatus.style.color = "red";
    }

    zipStatus.style.visibility = "visible";


    return false;   //just to avoid submitting to the server (making client-side only right now)
}

// Display Ad after 5 second of page load
function displayAd(){
    setTimeout(() => {
        document.getElementById('bannerAd').style.display = "block";
    }, 5000);
}

function hideAd(){
    document.getElementById('bannerAd').style.display = "none";
}