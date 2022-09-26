const light = document.getElementById('light');
const dark = document.getElementById('dark');

console.log(dark);

light.addEventListener('click', function lightMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black';
}
);

dark.addEventListener('click', function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
})


