 // Data for the 6 classes of food
 const foodClasses = [
    { class: "Proteins", examples: "Meat, Beans, Fish, Eggs" },
    { class: "Carbohydrates", examples: "Yam, Rice, Maize, Potatoes" },
    { class: "Minerals", examples: "Milk, Cheese, Liver, Banana" },
    { class: "Fats and Oils", examples: "Butter, Palm Oil, Margarine, Avocado" },
    { class: "Vitamins", examples: "Oranges, Fish, Carrots, Vegetables" },
    { class: "Water", examples: "Drinking Water, Water-melon, Cucumber, Juices" }
];

// Create a table element
const table = document.createElement("table");
table.border = "1";
table.style.width = "100%";
table.style.textAlign = "left";

// Create the header row
const headerRow = document.createElement("tr");
const headerClass = document.createElement("th");
headerClass.textContent = "Class of Food";
const headerExamples = document.createElement("th");
headerExamples.textContent = "Examples";
headerRow.appendChild(headerClass);
headerRow.appendChild(headerExamples);
table.appendChild(headerRow);

// Populate the table with data
foodClasses.forEach(food => {
    const row = document.createElement("tr");
    const classCell = document.createElement("td");
    classCell.textContent = food.class;
    const examplesCell = document.createElement("td");
    examplesCell.textContent = food.examples;
    row.appendChild(classCell);
    row.appendChild(examplesCell);
    table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);