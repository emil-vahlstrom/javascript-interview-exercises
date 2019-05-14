(() => {

  const companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
  ]
    //Exercise 1
    for (var i = 0; i < companies.length; i++) {
        var li = document.createElement("li")
        li.innerHTML = "Company Name: " + companies[i].name + "," + " Company Location: " + companies[i].location;
        document.getElementById("list").appendChild(li);
    }

    //Exercise 2
    var list1 = document.getElementById("list").getElementsByTagName('li');

    for (var i = 0; i < list1.length; i++) {
        list1[i].addEventListener('click', showCompany);
    }

    function showCompany() {
        console.log(this.innerHTML + " is clicked!");
    }

    //Exercise 3

    //Exercise 4
    window.onload = function () {
        var buttonElement = document.getElementById("btnFilter");

        if (buttonElement) {
            buttonElement.addEventListener("click", filter);
        }

        function filter() {
            var array = [];

            for (var i = 0; i < document.getElementsByName("company").length; i++) {

                if (document.getElementsByName("company")[i].checked) {
                    array.push(document.getElementsByName("company")[i].value);
                }
            }

            for (var i = 0; i < array.length; i++) {

                var myDiv = document.createElement("myDiv")
                myDiv.innerHTML = array[i] + "</br>";
                document.getElementById("myDiv").appendChild(myDiv);
            }
        }
    }
})()
