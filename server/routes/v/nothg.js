// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1 style="margin-top: 50px; text-align: center">Appointment token</h1>
//     <div
//       style="
//         width: fit-content;
//         margin: 40px auto;
//         display: flex;
//         flex-direction: column;
//       "
//     >
//       <img style="width: 200px" src="<%" ="appointment.user.image%>" alt="" />
//       <p style="margin-top: 20px">Name:<%=appointment.user.name%></p>
//       <p style="margin-top: 20px">Doctor:<%=appointment.doctor.name%></p>
//       <p style="margin-top: 20px">Time:<%=appointment.slot.startTime%></p>
//       <p style="margin-top: 20px">Name:<%=appointment.user.name%></p>

//       doctor:<%=appointment.user.name%>
//     </div>
//   </body>
// </html>

let a = 5;
render("pdf.ejs", a);
