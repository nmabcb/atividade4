window.onload = () => {
  getdata()

  async function getdata(){
      const url = "/news/theguardian"
      var request = new Request(url)
    
      await fetch(request).then( async function (response) {
          let dataHtml = ""
    
          var newss = await response.json()
          console.log(newss)
          newss.forEach(news => {
              dataHtml += `<tr>
              <td>${news.title}</td>
              <td><a href=${news.url}> Link </a></td>
              <td>${news.source}</td>
              </tr>`;
          })
  
          document.getElementById("tableData").innerHTML = dataHtml
      })
  }
  
}