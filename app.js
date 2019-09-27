

let APIKey = "Wp72k9jqDxYwJsCX5EHN20YSSpcEdoM0"

//userinput in start year
let start = $("#startYear").value;
//user input in end year
let end = $("#endYear").value;
let searchButton = $("#searchButton");
let clearButton = $("#clearButton");




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
    let query = $("#searchTerm").val().trim();
    
    console.log(query)
    let baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${APIKey}`;


    $.ajax({
        url: baseUrl,
        //  + buildParameters(start, end),
        method: "GET"
      })
        .then(function(response) {
            console.log(response);
            let newDiv = $('<div>');

            let lead = response.response.docs[0].lead_paragraph
            let webURL = response.response.docs[0].web_url
            let snippet = response.response.docs[0].snippet

            newDiv.html(JSON.stringify((`<p>${lead}</p>`, `<p>${webURL}</p>`, `<p>${snippet}</p>`));
            console.log(newDiv)
            newDiv.append(lead, webURL, snippet);
            $(".blockquote").append(newDiv);
            
        });

})

