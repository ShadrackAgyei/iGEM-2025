document.addEventListener('DOMContentLoaded', function() {
    console.log('iGEM 2025 homepage loaded');
});

// Team Members Data (One Per Page)
const teamMembers = [
    [
        { name: "John Doe", eggName: "Egg Alpha", image: "images/IMG_3289.jpeg" },
        { name: "Jane Smith", eggName: "Egg Beta", image: "images/IMG_3292.jpeg" }
    ],
    [
        { name: "Michael Brown", eggName: "Egg Gamma", image: "images/member3.jpg" },
        { name: "Emily White", eggName: "Egg Delta", image: "images/member4.jpg" }
    ],
    [
        { name: "Chris Green", eggName: "Egg Epsilon", image: "images/member5.jpg" },
        { name: "Sophia Black", eggName: "Egg Zeta", image: "images/member6.jpg" }
    ],
    [
        { name: "Daniel Red", eggName: "Egg Eta", image: "images/member7.jpg" },
        { name: "Olivia Blue", eggName: "Egg Theta", image: "images/member8.jpg" }
    ],
    [
        { name: "Lucas White", eggName: "Egg Iota", image: "images/member9.jpg" },
        { name: "Emma Gray", eggName: "Egg Kappa", image: "images/member10.jpg" }
    ],
    [
        { name: "Aiden Green", eggName: "Egg Lambda", image: "images/member11.jpg" },
        { name: "Mia Brown", eggName: "Egg Mu", image: "images/member12.jpg" }
    ],
    [
        { name: "Noah Black", eggName: "Egg Nu", image: "images/member13.jpg" },
        { name: "Ava White", eggName: "Egg Xi", image: "images/member14.jpg" }
    ]
];

// Get Elements
const book = document.querySelector(".book");
const bookCover = document.getElementById("bookCover");
const bookInner = document.getElementById("bookInner");
const memberImage1 = document.getElementById("memberImage1");
const memberName1 = document.getElementById("memberName1");
const eggName1 = document.getElementById("eggName1");
const memberImage2 = document.getElementById("memberImage2");
const memberName2 = document.getElementById("memberName2");
const eggName2 = document.getElementById("eggName2");

// Get All Egg Containers
const eggContainers = document.querySelectorAll(".egg-container");

// Function to Open the Book and Show Two Members
function showMemberDetails(index) {
    const members = teamMembers[index];

    memberImage1.src = members[0].image;
    memberName1.textContent = members[0].name;
    eggName1.textContent = members[0].eggName;

    memberImage2.src = members[1].image;
    memberName2.textContent = members[1].name;
    eggName2.textContent = members[1].eggName;

    // Show Book Details
    book.classList.add("open");
    bookCover.classList.add("hidden");
    bookInner.classList.remove("hidden");
}

// Function to Close the Book
function closeBook() {
    book.classList.remove("open");
    bookCover.classList.remove("hidden");
    bookInner.classList.add("hidden");
}

// Attach Click Event to Each Egg Container
eggContainers.forEach((egg, index) => {
    egg.addEventListener("click", () => showMemberDetails(index));
});