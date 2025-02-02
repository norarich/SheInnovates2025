//global review arrays
const songs = [];
const reviews = [];
const totalRatings = [];
const images = [];
// jQuery autocomplete feature for review page search bar
jQuery(function() {
    var songs = [
        "Denial is a River - Doechii",
        "Not Like Us - Kendrick Lamar",
        "Getting Older - Billie Eilish",
        "Space Oddity - David Bowie",
        "Holiday - Green Day",
        "In Bloom - Nirvana",
        "Out of Touch - Hall & Oates",
        "Add Up My Love - Clairo",
        "Die With A Smile - Bruno Mars, Lady Gaga",
        "APT. - Bruno Mars, Rose",
        "Wildflower - Billie Eilish",
        "Balloon - Tyler The Creator ft. Doechii",
        "Luther - Kendrick Lamar ft. SZA",
        "30 for 30 - SZA",
        "Blue - Billie Eilish"
    ];
    jQuery("#songSearch").autocomplete({ source: songs });
});

jQuery(function() {
    var songs = [
        "Denial is a River - Doechii",
        "Not Like Us - Kendrick Lamar",
        "Getting Older - Billie Eilish",
        "Space Oddity - David Bowie",
        "Holiday - Green Day",
        "In Bloom - Nirvana",
        "Out of Touch - Hall & Oates",
        "Add Up My Love - Clairo",
        "Die With A Smile - Bruno Mars, Lady Gaga",
        "APT. - Bruno Mars, Rose",
        "Wildflower - Billie Eilish",
        "Balloon - Tyler The Creator ft. Doechii",
        "Luther - Kendrick Lamar ft. SZA",
        "30 for 30 - SZA",
        "Blue - Billie Eilish"
    ];
    jQuery("#1songSearch").autocomplete({ source: songs });
});
// displays the correct album cover based on what song is selected
function displayModal() {
    var song = document.getElementById("songSearch").value;
    document.getElementById("staticBackdropLabel").innerHTML = song;
    if (song == "Denial is a River - Doechii") {
        document.getElementById("songCover").src = 'imgs/doechii.png';
    }
    else if (song == "Not Like Us - Kendrick Lamar") {
        document.getElementById('songCover').src = 'imgs/kendrickalbum.jpeg';
    }
    else if (song == "Getting Older - Billie Eilish") {
        document.getElementById('songCover').src = 'imgs/billie.jpg';
    }
    else if (song == "Space Oddity - David Bowie") {
        document.getElementById('songCover').src = 'imgs/spaceoddity.jpg';
    }
    else if (song == "Holiday - Green Day") {
        document.getElementById('songCover').src = 'imgs/holiday.jpg';
    }
    else if (song == "In Bloom - Nirvana") {
        document.getElementById('songCover').src = 'imgs/inbloom.jpg';
    }
    else if (song == "Out of Touch - Hall & Oates") {
        document.getElementById('songCover').src = 'imgs/hall&oats.jpeg';
    }
    else if (song == "Add Up My Love - Clairo") {
        document.getElementById('songCover').src = 'imgs/addupmylove.jpg';
    }
    else if (song == "Die With A Smile - Bruno Mars, Lady Gaga") {
        document.getElementById('songCover').src = 'imgs/DieWithASmile.jpeg';
    }
    else if (song == "APT. - Bruno Mars, Rose") {
        document.getElementById('songCover').src = 'imgs/ATPBrunoandRose.jpeg';
    }
    else if (song == "Balloon - Tyler The Creator ft. Doechii") {
        document.getElementById('songCover').src = 'imgs/tylerthecreator.jpeg';
    }
    else if (song == "Wildflower - Billie Eilish") {
        document.getElementById('songCover').src = 'imgs/birdsofafeather.jpeg';
    }
    else if (song == "Luther - Kendrick Lamar ft. SZA") {
        document.getElementById('songCover').src = 'imgs/kendrickalbum.jpeg';
    }
    else if (song == "30 for 30 - SZA") {
        document.getElementById('songCover').src = 'imgs/30for30.jpeg';
    }
    else if (song == "Blue - Billie Eilish") {
        document.getElementById('songCover').src = 'imgs/birdsofafeather.jpeg';
    }
    else {
        document.getElementById("songCover").src = 'imgs/no image.jpg';
    }

    //display modal
    $('#staticBackdrop').modal('show');
}

// creates review posts
function review() {
    // gets song name from review modal
    var song = document.getElementById("songSearch").value;
    console.log(song);
    //gets review field from review modal
    var reviewText = document.getElementById("reviewText").value;
    document.getElementById("reviewText").value = "";
    console.log(reviewText);
    // get the rating value from the radio buttons
    var notes = document.getElementsByName("rating");
    var rating = 0;
    for (i = 0; i < notes.length; i++) {
        if (notes[i].checked) {
            rating = notes[i].value;
        }
    }

    //get the image
    var image = document.getElementById("songCover").src;
    console.log(image);

    //store review info in global review arrayList
    songs.push(song);

    reviews.push(reviewText);

    totalRatings.push(rating);
    console.log(totalRatings);

    images.push(image);

    //outputs review to the homepage
    outputReviews();
}

function outputReviews() {
    for (i = 0; i < songs.length; i++) {
        if (totalRatings[i] == 5) {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='theImg' src= '" + images[i] + "' class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'><span><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i></span></li></ul></div>"
        }
        else if (totalRatings[i] == 4) {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='theImg' src='" + images[i] + "' class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'><span><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i></span></li></ul></div>"
        } else if (totalRatings[i] == 3) {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='theImg' src='" + images[i] + "'class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'><span><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i></span></li></ul></div>"
        } else if (totalRatings[i] == 2) {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='theImg' src='" + images[i] + "'class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'><span><i id='musicNote' class='bi bi-file-earmark-music'></i><i id='musicNote' class='bi bi-file-earmark-music'></i></span></li></ul></div>"
        } else if (totalRatings[i] == 1) {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='theImg' src='" + images[i] + "'class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'><i id='musicNote' class='bi bi-file-earmark-music'></i></span></li></ul></div>"
        } else {
            document.getElementById("newReviews_" + i + "").innerHTML = "<div class='card'><div class='card-header' id='cardHeader_1'><img id='profilePic' src='https://hips.hearstapps.com/hmg-prod/images/kendrick-lamar-attends-the-2023-met-gala-celebrating-karl-news-photo-1732565208.jpg?crop=0.625xw:0.912xh;0.219xw,0.0578xh&resize=640:*' class='img-thumbnail' alt='...'height='50' width='50'> &nbsp&nbsp<b>Kendrick Lamar</b></div><ul class='list-group list-group-flush'><li class='list-group-item'><img id='songCover' src='" + images[i] + "'class='img-thumbnail' alt='...' height='150' width='150'> &nbsp&nbsp<b style='font-size:20px;'>" + songs[i] + "</b></li><li class='list-group-item'>" + reviews[i] + "</li><li class='list-group-item'></li></ul></div>"
        }

    }
}

// function to display album to profile page based on how people are feeling
function displayAlbum() {
    var song = document.getElementById("1songSearch").value;
    if (song == "Denial is a River - Doechii") {
        document.getElementById("feelingAlbum").src = 'imgs/doechii.png';
    }
    else if (song == "Not Like Us - Kendrick Lamar") {
        document.getElementById('feelingAlbum').src = 'imgs/kendrickalbum.jpeg';
    }
    else if (song == "Getting Older - Billie Eilish") {
        document.getElementById('feelingAlbum').src = 'imgs/billie.jpg';
    } else if (song == "Space Oddity - David Bowie") {
        document.getElementById('feelingAlbum').src = 'imgs/spaceoddity.jpg';
    }
    else if (song == "Holiday - Green Day") {
        document.getElementById('feelingAlbum').src = 'imgs/holiday.jpg';
    }
    else if (song == "In Bloom - Nirvana") {
        document.getElementById('feelingAlbum').src = 'imgs/inbloom.jpg';
    }
    else if (song == "Out of Touch - Hall & Oates") {
        document.getElementById('feelingAlbum').src = 'imgs/hall&oats.jpeg';
    }
    else if (song == "Add Up My Love - Clairo") {
        document.getElementById('feelingAlbum').src = 'imgs/addupmylove.jpg';
    }
    else if (song == "Die With A Smile - Bruno Mars, Lady Gaga") {
        document.getElementById('feelingAlbum').src = 'imgs/DieWithASmile.jpeg';
    }
    else if (song == "APT. - Bruno Mars, Rose") {
        document.getElementById('feelingAlbum').src = 'imgs/ATPBrunoandRose.jpeg';
    }
    else if (song == "Balloon - Tyler The Creator ft. Doechii") {
        document.getElementById('feelingAlbum').src = 'imgs/tylerthecreator.jpeg';
    }
    else if (song == "Wildflower - Billie Eilish") {
        document.getElementById('feelingAlbum').src = 'imgs/birdsofafeather.jpeg';
    }
    else if (song == "Luther - Kendrick Lamar ft. SZA") {
        document.getElementById('feelingAlbum').src = 'imgs/kendrickalbum.jpeg';
    }
    else if (song == "30 for 30 - SZA") {
        document.getElementById('feelingAlbum').src = 'imgs/30for30.jpeg';
    }
    else if (song == "Blue - Billie Eilish") {
        document.getElementById('feelingAlbum').src = 'imgs/birdsofafeather.jpeg';
    }
    else {
        document.getElementById('feelingAlbum').src = 'imgs/musicnote.jpg';
    }
}
