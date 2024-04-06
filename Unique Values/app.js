// Unique values

const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },

    {
        name: 'nooddles',
        category: 'lunch',
    },

    {
        name: 'pasta',
        category: 'dinner',
    },

    {
        name: 'eggs',
        category: 'breakfast',
    },

    {
        name: 'burger',
        category: 'breakfast',
    },

    {
        name: 'steak',
        category: 'dinner',
    },

    {
        name: 'bacon',
        category: 'lunch',
    },
]

//const categories = menu.map((item) => (item.category));

const categories = ["all", ...new Set (menu.map((item) => (item.category)))];

console.log(categories);

const box = document.querySelector(".container");

box.innerHTML = categories.map((c)=>`<button>${c}</button>`).join('')
