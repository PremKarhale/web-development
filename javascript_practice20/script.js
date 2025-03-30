function createcard(title, cname,views,monthold,duration,thumbnail){
    let viewsstr;
    if(views>=1000 & views <1000000){
    viewsstr= views/1000 +"k";

    }
    else if(views>=1000000) {
        viewsstr=views/1000000 +"M";
    }
    else{
        viewsstr=views;
    }

    let html= `<div class="card">
            <div class="image"><img
                    src="${thumbnail}"
                    alt="">
                <div style=" position: absolute;
                z-index: 10;
                top: 89px;
                left: 137px;background-color: gray;opacity: 0.8;" id="cap" class="cap ">${duration}</div>
            </div>
            <div class="text">
                <h1 style="margin: 0px;">${title}</h1>
                <p style="margin: 2px 0px;">${cname} . ${viewsstr} views . ${monthold} months ago </p>

            </div>
        </div>`
        // used to call it again and again .
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML +html
    
}
createcard("Introduction to backend | sigma web Dev video #3 ", "code with harry ","7700000","7","16:44","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");

createcard("Introduction to backend | sigma web Dev video #4 ", "code with harry ","77000","4","15:44","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");


createcard("Introduction to backend | sigma web Dev video #5 ", "code with harry ","10000","2","15:44","https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg");