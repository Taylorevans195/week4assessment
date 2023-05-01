const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn")
const addComplimentbtn = document.getElementById('addCompliment')
let input = document.querySelector('#input')

const addCompliment = () => {
    let body = {
        compliment: input.value
    }
    axios.post('http://localhost:4000/api/compliment', body)
}

addComplimentbtn.addEventListener('click', addCompliment)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getfortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data
            alert(data)
    })
}
fortuneBtn.addEventListener('click', getfortune)
complimentBtn.addEventListener('click', getCompliment)