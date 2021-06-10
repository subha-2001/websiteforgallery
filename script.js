function SearchPhotos() {
    let clientId="BobsNNf9W2wYYKD5ahWTgCIkVGqTjHrzAurOq06um9U";
    let query=document.getElementById("search").value;
    let url="https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;
    //make request
    fetch(url) 
        .then(function (data) {
            return data.json();
        
        })
        .then(function(data) {
            console.log(data);
            
            data.results.forEach(photo => {
                let result= `
                    <img src="${photo.urls.regular}">
                    <a href="${photo.links.download}">
                `;
				$("#result").html(result);
				//$("#result").append(result);
               
               
            });
        });
		

      
}
