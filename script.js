function submit() {
  var f_name = document.getElementById("Firstname");
  var email_work = document.getElementById("email-work");
  var phone = document.getElementById("phone");
  var web_url = document.getElementById("web-url");
  var select = document.getElementById("revenue");
  if (f_name || email_work || phone || web_url || select === "") {
    alert("Add information before submiting");
  } else {
    alert("Information submitted successfully");
  }
}
