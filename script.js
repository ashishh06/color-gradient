let butn1 = document.getElementById("but1");
        let butn2 = document.getElementById("but2");
        let copycode = document.querySelector(".copycode");

        let rgb1 = "#023860";
        let rgb2 = "#6bdb35";

        const hexvalues = () => {
            let hexdecimals = "0123456789abcdef";
            let colors = "#";
            for (let i = 0; i < 6; i++) {
                colors = colors + hexdecimals[Math.floor(Math.random() * 16)];
            }
            return colors;
        }
        const handlebutn1 = () => {
            rgb1 = hexvalues();
            console.log(rgb1);
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            butn1.innerText = rgb1;
            copycode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        };
        const handlebutn2 = () => {
            rgb2 = hexvalues();
            console.log(rgb2);
            butn2.innerText = rgb2;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copycode.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        };

        butn1.addEventListener("click", handlebutn1);
        butn2.addEventListener("click", handlebutn2);

        copycode.addEventListener("click", () => {
            navigator.clipboard.writeText(copycode.innerText);
        });
