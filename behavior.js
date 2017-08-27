  function get_doc(id){
    const url = 'https://www.googleapis.com/drive/v3/files/'+id+'?alt=media'
    if(self.fetch){
    var setHeaders = new Headers();
    setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
    setHeaders.append('Content-Type', mime);

    var setOptions = {
        method: 'GET',
        headers: setHeaders
    };
    fetch(url,setOptions)
        .then(response => { if(response.ok){
        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        reader.read().then(function(result){
            var data = {}
            data = decoder.decode(result.value, {stream: !result.done});
            console.log(data);
    });
        }
    else{
        console.log("Response wast not ok");
    }
  })  .catch(error => {
        console.log("There is an error " + error.message);
        });
    }
}
//FAMOUS QUOTES ID LIST: 19a5-0wJPg-vzM9XSQJhHY_3jRc5kqJiGyLwUw5G2Gkw
