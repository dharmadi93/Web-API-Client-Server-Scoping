
module.exports = {
    changeTitle: (req, res) => {
        res.json("")
    },

    changeFromUrl: (req, res) => {
        res.json("")
    },

    changeFromMeals: (req, res) => {
        meals = {
            meals: ['meals a', 'meals b', 'meals c']
        }
        // console.log(meals.meals)
        res.json(meals.meals)
    }
}