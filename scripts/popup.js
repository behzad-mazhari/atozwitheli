// When the user clicks on div, open the popup
//console.log(document.getElementById("myPopup").innerHTML);
function myFunction() {
  var popup = document.getElementById("myPopup");
  var popupenquery = document.getElementById("myPopupEnquery");
  popup.classList.toggle("show");
  popupenquery.classList.toggle("show");
  // setTimeout(function(){
  //   $(".popuptext").hide();
  // }, 6000);
  // console.log('popup done!');
  // $("#myPopup").
  let name = document.querySelector('input[name="name"]');
  let contact = document.querySelector('input[name="contact"]');
  let language = document.querySelector('input[name="fav_language"]:checked');
  // console.log(document.querySelectorAll('form').#contact);
  if ((localStorage.getItem('lang') == 'fa') || (localStorage.getItem('lang') == null)) {
    document.getElementById("myPopup").innerHTML = `ممنون ${name.value} عزیز \n <br> ثبت نام شما برای زبان ${language.value} انجام شد. به زودی از طریق شماره / ایمیل ${contact.value} با شما تماس میگریم.`;
  } else if (localStorage.getItem('lang') == 'fr') {
    document.getElementById("myPopup").innerHTML = `Thank you ${name.value} :)\n <br> We will contant you on ${contact.value} to arrange your ${language.value} interview session with Eli:)`;
  } else if (localStorage.getItem('lang') == 'it') {
    document.getElementById("myPopup").innerHTML = `Thank you ${name.value} :)\n <br> We will contant you on ${contact.value} to arrange your ${language.value} interview session with Eli:)`;
  } else if (localStorage.getItem('lang') == 'en') {
    document.getElementById("myPopup").innerHTML = `Thank you ${name.value} :)\n <br> We will contant you on ${contact.value} to arrange your ${language.value} interview session with Eli:)`;
  };

  // console.log(document.getElementById("myPopup").innerHTML);
}
//console.log(document.getElementById("myPopup").innerHTML);