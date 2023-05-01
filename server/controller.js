const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getfortune: (req, res) => {
        let fortuneArr = [
        'A beautiful, smart, and loving person will be coming into your life.',
        'A dubious friend may be an enemy in camouflage.',
        'A faithful friend is a strong defense.'
        ]
        let randomIndex = Math.floor(Math.random() * fortuneArr.length)
        let randomFortune = fortuneArr[randomIndex]
        res.status(200).send(randomFortune)
    },

    addCompliment: (req,res) => {
        let newCompliment = req.body.compliment
        compliments.push(newCompliment)
    }
    
}