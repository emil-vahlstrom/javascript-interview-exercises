(() => {
    // companyService is a PoC for Exercise 3
    const companies = companyService.getAll();

    //Exercise 2
    var listItems = document.getElementById("list").getElementsByTagName('li');

    for (var i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', showCompany);
    }

    function showCompany() {
        console.log(this.innerHTML + " is clicked!");
    }

    // Note to exercice 3
    // Using an event listener on the parent element (UL) instead of all the child elements (LI)
    // Removes the need to attach the same click listener to each LI-element.
    // Also data should not be hardcoded in the script file, but rather fetched from another source, 
    // like a REST-service. For making things simple this example uses a 'so called' service that's 
    // just defined in another file and imported in the index.html document with a script-tag.

    var unorderedList = document.getElementById("list");

    unorderedList.addEventListener('click', function (event) {
        console.log("Clicked element " + event.target.tagName + " with text: '" + event.target.innerHTML + "'");
    });

    var locationsToShow = [];

    function addCheckbox(parentElement, value, className) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('multiple_select_checkbox_choice');
        if (className) {
            newDiv.classList.add(className);
        }
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'checkbox');
        newInput.setAttribute('value', value);
        newDiv.appendChild(newInput);
        newDiv.appendChild(document.createTextNode(value));
        parentElement.appendChild(newDiv);
    }

    //Exercise 4
    window.onload = function () {
        var locationFilter = document.getElementById('locationFilter');

        addCheckbox(locationFilter, 'All', 'selectAll');

        companies.forEach(function (item) {
            addCheckbox(locationFilter, item.location);
        });

        locationFilter.addEventListener('click', function (event) {
            if (event.target.tagName != 'INPUT') {
                return;
            }

            if (event.target.value == 'All') {
                locationsToShow.splice(0, locationsToShow.length + 1);
                if (event.target.checked == true) {
                    for (var i = 0; i < locationFilter.children.length; i++) {
                        if (locationFilter.children[i].firstElementChild.value == 'All') {
                            continue;
                        }
                        locationFilter.children[i].firstElementChild.checked = true;
                        locationsToShow.push(locationFilter.children[i].firstElementChild.value);
                    }
                } else {
                    for (var i = 0; i < locationFilter.children.length; i++) {
                        locationFilter.children[i].firstElementChild.checked = false;
                    }
                }
            }
            else {
                if (event.target.checked) {
                    locationsToShow.push(event.target.value); whatever = event.target.value;
                } else {
                    var indexToRemove = locationsToShow.indexOf(event.target.value);
                    locationsToShow.splice(indexToRemove, 1);
                }
            }

            displayCompanies();
        });
    }

    // Exercise 1
    function displayCompanies() {
        var list = document.getElementById('list');

        list.innerHTML = ""; 

        // Exercise 4
        companies.filter(company => locationsToShow.filter(location => location == company.location).length > 0).forEach(company => {
            li = document.createElement("li");
            li.innerHTML = "Company Name: " + company.name + "," + " Company Location: " + company.location;
            list.appendChild(li);
        });
    }
})()
