window.onload=function(){

    var searchBtn = document.getElementById("btn")
    var httpRequest;

    searchBtn.addEventListener('click', function(element) {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange = searchLog;
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    function searchLog(){
        if (httpRequest.readyState == XMLHttpRequest.DONE){
            if (httpRequest.status == 200){
               var response = httpRequest.responseText;
               alert(response);
            }else{
                alert('Request Declined.');
            }
        }
    }
}