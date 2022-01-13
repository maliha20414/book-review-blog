


// function show_comment()
// {
//     var name = document.getElementById("blog_name").value;
//     var comment =document.getElementById("blog_comment").value;
//     var id =document.getElementById("blog_id").value;
//     console.log("Submit");
//     console.log(name);
//     console.log(comment);
    
//     console.log(id);


//     firebase.database().ref('Blog/' +id).set({
//        name: name,
//        id:id,
//         comment : comment,
      
//       }, function(error) {
//         if (error) {
//           // The write failed...
//         } else {
//             alert("Posted!");
          
       
//         }
//       });
// }
// function display_blog()
// {

//   var id =document.getElementById("blog_id").value;
//   firebase.database().ref('Blog/'+id).once('value').then(function(snapshot){
//     var comment = snapshot.val().comment;
//     document.getElementById("blog_comment").value=comment;
//   });
  
// }
// function show_review()
// {
//     var name = document.getElementById("review_name").value;
//     var comment =document.getElementById("review_comment").value;
//     var id =document.getElementById("review_id").value;
//     console.log("Submit");
//     console.log(name);
//     console.log(comment);


//     firebase.database().ref('Review/' + id).set({
//        name: name,
//        id:id,
//         comment : comment
//       }, function(error) {
//         if (error) {
//           // The write failed...
//         } else {
//             alert("Posted!");
          
       
//         }
//       });
// }





var star = document.querySelectorAll('input');
var showValue = document.querySelector('#rating-value');
var rate;
var count;
var tot;

for(let i=5;i<star.length;i--)
{
  star[i].addEventListener('click',function()
  
  {rate = -i+5;
    
  });
}

function Star_rate()
{ console.log(rate);
  // var count = 
  // firebase.database().ref('Stars/' + rate).set({
  //   rate :rate,
      
  //     }, function(error) {
  //       if (error) {
  //         // The write failed...
  //       } else {
  //         count = count+1;
  //         tot =tot/count;
  //           alert("Total rates "+tot);
          
       
  //       }
  //     });

  alert("Submitted!");
  
}