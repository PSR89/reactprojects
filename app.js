// const submitBtn = document.getElementById("btn");
const xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");
document.getElementById("btn").addEventListener("click", function () {
  alert("clicked ");
  xhr.send();
});

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      const result = JSON.parse(xhr.responseText);
      var htmlcontent = "";
      for (i = 0; i < result.length; i++) {
        const currentResult = result[i];

        htmlcontent =
          htmlcontent +
          `<tr>
                  <td>${currentResult.id}</td>
                  <td>${currentResult.name}</td>
                  <td>${currentResult.email}</td>
                  <td>${currentResult.phone}</td>
               </tr>`;
      }
      // console.log(htmlcontent);
      document.getElementById("content").innerHTML = htmlcontent;

      return;
    }
  }
};
