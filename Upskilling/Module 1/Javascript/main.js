console.log("Welcome to the Community Portal");

window.addEventListener("load", function () {
    alert("Welcome to the Community Portal!");
});

// Event class
class Event {
    constructor(name, date, category, location, seats) {
        this.name = name;
        this.date = date;
        this.category = category;
        this.location = location;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Events array
let events = [
    new Event("Music Night", "2026-06-10", "Music", "Bhopal", 5),
    new Event("Food Festival", "2026-06-15", "Food", "Bhopal", 8),
    new Event("Baking Workshop", "2026-06-20", "Workshop", "Indore", 4),
    new Event("Holi Festival", "2026-07-01", "Festival", "Bhopal", 10),
    new Event("Blood Donation Drive", "2026-07-05", "Health", "Nagpur", 6),
    new Event("Old Cultural Event", "2024-01-10", "Culture", "Bhopal", 0)
];

// Add new event using push()
function addEvent(name, date, category, location, seats) {
    events.push(new Event(name, date, category, location, seats));
}

addEvent("Yoga Camp", "2026-07-12", "Health", "Bhopal", 12);

// Closure to track registrations
function registrationTracker() {
    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log("Total registrations:", totalRegistrations);
        return totalRegistrations;
    };
}

const trackRegistration = registrationTracker();

// Display events
function displayEvents(eventList = events) {
    const eventContainer = document.querySelector("#dynamicEvents");

    if (!eventContainer) {
        console.warn("No #dynamicEvents container found in HTML");
        return;
    }

    eventContainer.innerHTML = "";

    const today = new Date();

    eventList.forEach(function (eventItem, index) {
        const eventDate = new Date(eventItem.date);

        if (eventDate < today || eventItem.seats <= 0) {
            return;
        }

        const card = document.createElement("div");
        card.className = "eventCard";

        const eventInfo = `
            <h3>${eventItem.name}</h3>
            <p><strong>Date:</strong> ${eventItem.date}</p>
            <p><strong>Category:</strong> ${eventItem.category}</p>
            <p><strong>Location:</strong> ${eventItem.location}</p>
            <p><strong>Seats:</strong> <span id="seat-${index}">${eventItem.seats}</span></p>
            <button onclick="registerUser(${index})">Register</button>
            <button onclick="cancelRegistration(${index})">Cancel</button>
        `;

        card.innerHTML = eventInfo;
        eventContainer.appendChild(card);
    });
}

// Register user
function registerUser(index) {
    try {
        if (!events[index]) {
            throw new Error("Invalid event selected");
        }

        if (!events[index].checkAvailability()) {
            throw new Error("No seats available");
        }

        events[index].seats--;
        trackRegistration();

        alert("Registration successful for " + events[index].name);
        displayEvents();

    } catch (error) {
        console.error("Registration error:", error.message);
        alert(error.message);
    }
}

// Cancel registration
function cancelRegistration(index) {
    if (events[index]) {
        events[index].seats++;
        alert("Registration cancelled for " + events[index].name);
        displayEvents();
    }
}

// Filter events by category
function filterEventsByCategory(category, callback) {
    const filteredEvents = events.filter(function (eventItem) {
        return eventItem.category === category;
    });

    callback(filteredEvents);
}

// Search by event name
function searchEventsByName(searchText) {
    const clonedEvents = [...events];

    const result = clonedEvents.filter(function (eventItem) {
        return eventItem.name.toLowerCase().includes(searchText.toLowerCase());
    });

    displayEvents(result);
}

// Music events using filter()
const musicEvents = events.filter(eventItem => eventItem.category === "Music");
console.log("Music Events:", musicEvents);

// Format cards using map()
const formattedCards = events.map(eventItem => `Workshop on ${eventItem.name}`);
console.log("Formatted Events:", formattedCards);

// Object.entries()
events.forEach(function (eventItem) {
    console.log("Event details:");
    Object.entries(eventItem).forEach(function ([key, value]) {
        console.log(`${key}: ${value}`);
    });
});

// Form handling
function handleRegistrationForm(event) {
    event.preventDefault();

    console.log("Form submission started");

    const form = event.target;
    const name = form.elements["name"]?.value;
    const email = form.elements["email"]?.value;
    const selectedEvent = form.elements["eventType"]?.value;

    const output = document.querySelector("#confirmationOutput");

    if (!name || !email || !selectedEvent) {
        if (output) {
            output.textContent = "Please fill all required fields.";
            output.style.color = "red";
        }
        return;
    }

    const userData = {
        name,
        email,
        selectedEvent
    };

    console.log("User data:", userData);

    submitRegistrationToServer(userData);
}

// Simulated AJAX / Fetch POST
function submitRegistrationToServer(userData) {
    const output = document.querySelector("#confirmationOutput");

    if (output) {
        output.textContent = "Submitting registration...";
        output.style.color = "blue";
    }

    setTimeout(function () {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server response:", data);

                if (output) {
                    output.textContent = "Registration submitted successfully!";
                    output.style.color = "green";
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);

                if (output) {
                    output.textContent = "Registration failed. Please try again.";
                    output.style.color = "red";
                }
            });
    }, 1500);
}

// Async / Await mock fetch
async function fetchMockEvents() {
    const loader = document.querySelector("#loadingSpinner");

    try {
        if (loader) {
            loader.style.display = "block";
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log("Mock API events loaded:", data.slice(0, 5));

    } catch (error) {
        console.error("Async fetch failed:", error);
    } finally {
        if (loader) {
            loader.style.display = "none";
        }
    }
}

// Old functions from your HTML
var isFormDirty = false;

function markAsEdited() {
    isFormDirty = true;
}

window.onbeforeunload = function () {
    if (isFormDirty) {
        return "You have unsaved changes!";
    }
};

function submitForm(event) {
    handleRegistrationForm(event);
}

function submitContactForm(event) {
    event.preventDefault();

    isFormDirty = false;

    var contactName = document.getElementById("contactName").value;
    document.getElementById("contactOutput").textContent =
        "Message sent! Thank you, " + contactName + ". Our staff will respond shortly.";
}

function buttonConfirmation() {
    alert("Submission button clicked!");
}

function contactButtonAlert() {
    alert("Contact query submitted!");
}

function validatePhone() {
    var phoneValue = document.getElementById("phone").value;
    var errorSpan = document.getElementById("phoneError");

    if (phoneValue.length !== 10 || isNaN(phoneValue)) {
        errorSpan.textContent = "Invalid format. Must be a 10-digit number.";
    } else {
        errorSpan.textContent = "";
    }
}

function showEventFee() {
    var selectedType = document.getElementById("eventType").value;
    var feeDisplay = document.getElementById("feeDisplay");

    if (selectedType === "Music Night") {
        feeDisplay.textContent = "Ticket Cost: $25";
    } else if (selectedType === "Food Fest") {
        feeDisplay.textContent = "Ticket Cost: $15";
    } else if (selectedType === "Blood Donation Drive") {
        feeDisplay.textContent = "Ticket Cost: Free Entry";
    } else if (selectedType === "") {
        feeDisplay.textContent = "";
    } else {
        feeDisplay.textContent = "Ticket Cost: $10";
    }
}

function toggleZoom(imageElement) {
    imageElement.classList.toggle("enlarged");
}

function countCharacters() {
    var currentText = document.getElementById("message").value;
    document.getElementById("charCount").textContent =
        "Characters typed: " + currentText.length;
}

function countContactCharacters() {
    var text = document.getElementById("contactQuery").value;
    document.getElementById("contactCharCount").textContent =
        "Characters typed: " + text.length;
}

function videoReadyMessage() {
    document.getElementById("videoStatus").textContent = "Video ready to play.";
}

function savePreference() {
    var dropdownValue = document.getElementById("eventType").value;

    if (dropdownValue !== "") {
        localStorage.setItem("userEventChoice", dropdownValue);
        sessionStorage.setItem("sessionEventChoice", dropdownValue);
    }
}

function loadSavedPreference() {
    var storedChoice = localStorage.getItem("userEventChoice");

    if (storedChoice && document.getElementById("eventType")) {
        document.getElementById("eventType").value = storedChoice;
        showEventFee();
    }
}

function clearPreferences() {
    localStorage.removeItem("userEventChoice");
    sessionStorage.removeItem("sessionEventChoice");

    document.getElementById("eventType").value = "";
    document.getElementById("feeDisplay").textContent = "";

    alert("Preferences cleared!");
}

function findLocation() {
    var output = document.getElementById("geoOutput");

    output.textContent = "Locating your system coordinates...";

    var options = {
        enableHighAccuracy: true,
        timeout: 6000
    };

    if (!navigator.geolocation) {
        output.textContent = "Geolocation is not supported by this browser.";
        return;
    }

    function success(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        output.textContent =
            "Coordinates Decoded -> Latitude: " + lat + "° | Longitude: " + lon + "°";
    }

    function error(err) {
        if (err.code === 1) {
            output.textContent = "Error: Permission Denied by User Settings.";
        } else if (err.code === 3) {
            output.textContent = "Error: Connection timed out before locating parameters.";
        } else {
            output.textContent = "Error: Unable to locate system.";
        }
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}

// DOM loaded setup
document.addEventListener("DOMContentLoaded", function () {
    loadSavedPreference();
    displayEvents();
    fetchMockEvents();

    const categoryFilter = document.querySelector("#categoryFilter");
    if (categoryFilter) {
        categoryFilter.onchange = function () {
            const selectedCategory = categoryFilter.value;

            if (selectedCategory === "All") {
                displayEvents(events);
            } else {
                filterEventsByCategory(selectedCategory, displayEvents);
            }
        };
    }

    const searchInput = document.querySelector("#searchEvent");
    if (searchInput) {
        searchInput.addEventListener("keydown", function () {
            searchEventsByName(searchInput.value);
        });
    }

    // jQuery demo
    if (window.jQuery) {
        $("#registerBtn").click(function () {
            alert("jQuery register button clicked");
        });

        $(".eventCard").fadeIn(500);
    }

    console.log("Debug: JavaScript file connected successfully");
    console.log("Debug: Event list loaded", events);
});