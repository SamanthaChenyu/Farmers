

var IKS_METHOD_1 ={

        handlerData:function(resJSON){

            var templateSource   = $("#iks-tpl-1").html(),

                template = Handlebars.compile(templateSource),

                studentHTML = template(resJSON);

           $('#wrapper_1').html(studentHTML);
            console.log($("#iks-tpl-1"))
        },

        loadWholeData : function(){
            $.ajax({
                     url:"https://graph.facebook.com/917736238356044/comments?limit=10000&summary=1&date_format=Y-m-d&format=json&access_token=1655205754708472|ltLxZR5dARg2p_J51MuGcEk5b58",
                     //url:"./handlebar/json/event1.json",
                     method:'get',
                     success:this.handlerData
                  })
          },

 };




//  var IKS_METHOD_2 ={

//         handlerData:function(resJSON){

//             var templateSource   = $("#iks-tpl-2").html(),

//                 template = Handlebars.compile(templateSource),

//                 studentHTML = template(resJSON);

//            $('#wrapper_2').html(studentHTML);
//             console.log($("#iks-tpl-2"));

//         },

//         loadWholeData : function(){
//             $.ajax({
//                      url:"https://graph.facebook.com/917736238356044/comments?limit=10000&summary=1&date_format=Y-m-d&format=json&access_token=1655205754708472|ltLxZR5dARg2p_J51MuGcEk5b58",
//                      //url:"./handlebar/json/event2.json",
//                      method:'get',
//                      success:this.handlerData
//                   })
//         },

           
 
//  };




//  var IKS_METHOD_3 ={

//         handlerData:function(resJSON){

//             var templateSource   = $("#iks-tpl-3").html(),

//                 template = Handlebars.compile(templateSource),

//                 studentHTML = template(resJSON);

//            $('#wrapper_3').html(studentHTML);
//             console.log($("#iks-tpl-3"))
//         },

//         loadWholeData : function(){
//             $.ajax({
//                      url:"https://graph.facebook.com/917736238356044/comments?limit=10000&summary=1&date_format=Y-m-d&format=json&access_token=1655205754708472|ltLxZR5dARg2p_J51MuGcEk5b58",
//                      //url:"./handlebar/json/event3.json",
//                      method:'get',
//                      success:this.handlerData
//                   })
//           },

//  };



/*
  var IKS_METHOD_3a ={

        handlerData:function(resJSON){

            var templateSource   = $("#iks-tpl-3a").html(),

                template = Handlebars.compile(templateSource),

                studentHTML = template(resJSON);

           $('#wrapper_3a').html(studentHTML);
            console.log($("#iks-tpl-3a"))
        },

        loadWholeData : function(){
            $.ajax({
                     //url:"https://graph.facebook.com/956457271040371/comments?limit=10000&summary=1&date_format=Y-m-d&format=json",
                     url:"./handlebar/json/event3.json",
                     method:'get',
                     success:this.handlerData
                  })
          },

 };
 */


// var IKS_METHOD_4 ={

//         handlerData:function(resJSON){

//             var templateSource   = $("#iks-tpl-4").html(),

//                 template = Handlebars.compile(templateSource),

//                 studentHTML = template(resJSON);

//            $('#wrapper_4').html(studentHTML);
//             console.log($("#iks-tpl-4"))
//         },

//         loadWholeData : function(){
//             $.ajax({
//                      url:"https://graph.facebook.com/917736238356044/comments?limit=10000&summary=1&date_format=Y-m-d&format=json&access_token=1655205754708472|ltLxZR5dARg2p_J51MuGcEk5b58",
//                      //url:"./handlebar/json/event4.json",
//                      method:'get',
//                      success:this.handlerData
//                   })
//           },

//  };




// var IKS_METHOD_5 ={

//         handlerData:function(resJSON){

//             var templateSource   = $("#iks-tpl-5").html(),

//                 template = Handlebars.compile(templateSource),

//                 studentHTML = template(resJSON);

//            $('#wrapper_5').html(studentHTML);
//             console.log($("#iks-tpl-5"))
//         },

//         loadWholeData : function(){
//             $.ajax({
//                      url:"https://graph.facebook.com/917736238356044/comments?limit=10000&summary=1&date_format=Y-m-d&format=json&access_token=1655205754708472|ltLxZR5dARg2p_J51MuGcEk5b58",
//                      //url:"./handlebar/json/event5.json",
//                      method:'get',
//                      success:this.handlerData
//                   })
//           },

//  };




$(document).ready(function(){

    IKS_METHOD_1.loadWholeData();
    // IKS_METHOD_2.loadWholeData();
    // IKS_METHOD_3.loadWholeData();
    //IKS_METHOD_3a.loadWholeData();
    // IKS_METHOD_4.loadWholeData();
    // IKS_METHOD_5.loadWholeData();
});








