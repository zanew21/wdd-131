
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth() + 1; 
// var currentDay = currentDate.getDate();

// var formattedDate = currentMonth + '/' + currentDay + '/' + currentYear;

// // Find the paragraph element in the footer by its ID
// var footerParagraph = document.getElementById("lastModified");

// footerParagraph.textContent = "Last modified: " + formattedDate;

window.onload = function() {
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleDateString();
    var footerParagraph = document.getElementById("lastmodified");
    footerParagraph.textContent = "Last modified: " + formattedDate;
};

