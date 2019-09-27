

let APIKey = "Wp72k9jqDxYwJsCX5EHN20YSSpcEdoM0"
let query = $("#searchTerm").val().trim();
console.log(query)
//userinput in start year
let start = $("#startYear").value;
//user input in end year
let end = $("#endYear").value;
let searchButton = $("#searchButton");
let clearButton = $("#clearButton");


let baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${APIKey}`;


function buildParameters(start, end) {
    let rval = '';
    if(start) {
        rval += `&begin_date=${start}`;
    }
    if(end) {
        rval += `&end_date=${end}`;
    }
    return rval;
}


searchButton.on("click", function (){
    $.ajax({
        url: baseUrl,
        //  + buildParameters(start, end),
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            $(".blockquote").append(response);
    
        });

})