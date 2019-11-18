module.exports = function Profile(userInfo) {

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


    this.style = {
        left: `background-color: lightgrey; height: 100%; margin: 0 !important; padding: 0 !important;`,
        right: `height: 100%; padding: 0 !important;`,
        devImg: `height: 50%;`,
        devCards: `background-color: white; height: 50%;`,
        list: `display: inline-block;`
    }

    this.html = `
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    
        <!-- Materialize Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
        <link rel="stylesheet" href="./style.css">
    
        <title>Developer Profile</title>

        <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            margin: 0 !important;
            padding: 0 !important;
        }
        </style>
    </head>
    
    <body>
        <div class="row">
            <section class="section left col s12 m8 l8 valign-wrapper" style="${this.style.left}">
                <div class="row">
                <div class="col s12 m4 offset-m1 dev-info">
                    <h5>Hi!</h5>
                    <h6>My name is ${this.name}!</h6>
                    <p>Currently @ ${this.company}</p>
                    <div id="dev-bio">
                        ${this.bio}
                    </div>
                    <ul class="social-links">
                        <li style="${this.style.list}"><a href="#"><i class="material-icons">location_on</i>${this.location}</a></li>
                        <li style="${this.style.list}"><a href="${this.gitHubURL}"><i class="material-icons">code</i>GitHub</a></li>
                        <li style="${this.style.list}"><a href="${this.blog}"><i class="material-icons">rss_feed</i>Blog</a></li>
                    </ul>
                </div>
                <div class="col s12 m7 dev-cards valign-wrapper" style="${this.style.devCards}">
                    <div class="row">
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Public Repositories</span>
                                <p clas="text-white">${this.public_repos}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Followers</span>
                                <p class="text-white">${this.followers}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">GitHub Stars</span>
                                <p class="text-white">${this.stars}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hoverable ${this.color} center-align">
                            <div class="card-content white-text">
                                <span class="card-title text-white">Following</span>
                                <p class="text-white">${this.following}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section class="section right col s12 m4 l4 valign-wrapper ${this.color}" style="${this.style.right}>
                <div id="dev-img" style="${this.style.devImg}">
                    <img src="${this.img}" alt="Developer Profile Picture">
                </div>
            </section>
        </div>
    
    </body>
    
    </html>
    `
}