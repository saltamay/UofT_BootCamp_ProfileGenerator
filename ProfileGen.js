module.exports = function ProfileGen(userInfo) {

    this.name = userInfo.name;
    this.gitHubURL = userInfo.html_url;
    this.color = userInfo.color;
    this.img = userInfo.avatar_url;
    this.bio = userInfo.bio;
    this.blog = userInfo.blog;
    this.location = userInfo.location;
    this.company = userInfo.company;
    this.public_repos = userInfo.public_repos;
    this.followers = userInfo.followers;
    this.following = userInfo.following;
    this.stargazers_count = userInfo['stargazers_count'];

    this.colors = {
        green: {
            wrapperBackground: "#E6E1C3",
            headerBackground: "#C1C72C",
            headerColor: "black",
            photoBorderColor: "#black"
        },
        blue: {
            wrapperBackground: "#5F64D3",
            headerBackground: "#26175A",
            headerColor: "white",
            photoBorderColor: "#73448C"
        },
        pink: {
            wrapperBackground: "#879CDF",
            headerBackground: "#FF8374",
            headerColor: "white",
            photoBorderColor: "#FEE24C"
        },
        red: {
            wrapperBackground: "#DE9967",
            headerBackground: "#870603",
            headerColor: "white",
            photoBorderColor: "white"
        }
    };
    this.html = `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/7053e21479.js" crossorigin="anonymous"></script>
        <title>Document</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${this.colors[this.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${this.colors[this.color].headerBackground};
           color: ${this.colors[this.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${this.colors[this.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${this.colors[this.color].headerBackground};
             color: ${this.colors[this.color].headerColor};
             margin: 20px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
        <div class="wrapper">
           <div class="photo-header">
                <img src="${this.img}" alt="Developer Profile Image">
                <h1>Hi!</h1>
                <h2>My name is ${this.name}!</h2>
                <h4>Currently @ ${this.company}</h4>
                <ul class="links-nav">
                    <li class="nav-link"><a href="http://maps.google.com/?q=${this.location}"><i class="fas fa-location-arrow"></i> ${this.location}</a></li>
                    <li class="nav-link"><a href="${this.gitHubURL}"><i class="fab fa-github-alt"></i> GitHub</a></li>
                    <li class=" nav-link"><a href="${this.blog}"><i class="fas fa-rss"></i> Blog</a></li>
                </ul>
            </div>
        <main>
            <div class="container">
                <div class="row">
                    <h5 class="col">${this.bio}</h5>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h4>Public Reposorities</h4>
                        <h5>${this.public_repos}</h5>
                        </div>
                        <div class="card col">
                        <h4>GitHub Stars</h4>
                        <h5>${this.stargazers_count}</h5>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <h4>Followers</h4>
                        <h5>${this.followers}</h5>
                        </div>
                        <div class="card col">
                        <h4>Following</h4>
                        <h5>${this.following}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;

}