//const obj = " https://picsum.photos/v2/list?page=1&limit=25";
        //const URL = JSON.stringify(obj);
        document.addEventListener("DOMContentLoaded", () => {
            //set up the IntersectionObserver to load more images if the footer is visible.
          // URL = "https://gist.githubusercontent.com/prof3ssorSt3v3/1944e7ba7ffb62fe771c51764f7977a4/raw/c58a342ab149fbbb9bb19c94e278d64702833270/infinite.json";
            URL = "./image.json";
            let options = {
                root: null,
                rootMargins: "0px",
                threshold: 0.5
                };
            const observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(document.querySelector("footer"));
            //an initial load of some data
            getData();
        });
        function handleIntersect(entries) {
            if (entries[0].isIntersecting) {
            console.warn("something is intersecting with the viewport");
            getData();
            }
        }
        function getData() {
            let main = document.querySelector("main");
            console.log("JSON data");
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                // data.items[].img, data.items[].name
                data.items.forEach(item => {
                let fig = document.createElement("figure");
                let fc = document.createElement("figcaption");
                let img = document.createElement("img");
                img.src = item.download_url;
                //   img.alt = item.author;
                //   fc.textContent = item.author;
                fig.appendChild(img);
                fig.appendChild(fc);
                main.appendChild(fig);
                });
            });
        }