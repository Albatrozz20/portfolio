function func() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = function () {
        const imageDataURL = reader.result;
    
        const userInfoWindow = window.open('', '_blank');
    
        userInfoWindow.document.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
            
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Gruppo&family=Poppins:wght@300&family=Sacramento&family=Teko:wght@500&display=swap" rel="stylesheet">
        
            <title>My profile</title>
        
            <style>
                section
                {
                    background-color: #222831;
                    height: 100vh;
                }
                .name
                {
                    font-size: 3rem;
                    font-family: 'Sacramento', cursive;
                    color: white;
                }
                .overall
                {
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
                h2
                {
                    color: #ffb740;
                }
                h4
                {
                    color: #ffb740;
                }
                .img
                {
                    height: 400px;
                    width: 400px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .number
                {
                    font-size: 1.5rem;
                    color: white;
                }
            </style>
        
        </head>
        <body>
            <section>
                <div class="over">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                <div class="container-fluid">
                    <div class="row text-center overall">
                        <div class="col-md-4">
                            <img src="${imageDataURL}" alt="User-Image" class="img">
                        </div>
                        <div class="col-md-4">
                            <h2>Hello ! I'm</h2>
                            <h1 class="name"> ${name}</h1>
                            <h4>${position}</h4>
                        </div>
                        <div class="col-md-4">
                            <h2>contact</h2>
                            <h2 class="number">${number}</h2>
                            <h2 class="name">${mail}</h2>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </body>
        </html>`);
                                };

}

// function displayimg()
// {
//     var input = document.getElementById('imageInput');
//     var container = document.getElementById('imageContainer');

//         var reader = new FileReader();

//         reader.onload = function (e) {
//             container.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image">';
//         };
//         reader.readAsDataURL(input.files[0]);
// }
