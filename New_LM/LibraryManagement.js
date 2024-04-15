   axios.get("https://simple-books-api.glitch.me").then( response=>{

                 let msg = response.data.message;
                  console.log(msg);
                 let para = document.getElementById("p1");

                 para.textContent = msg;
                 console.log(response);
             })
             .catch( e =>{
                 console.log(e);
             })




function GetList(){
        axios.get("https://simple-books-api.glitch.me/books").then( response=>{

                    console.log(response);
                    const data = response.data;
                    const List = document.getElementById('ul1');
                     List.innerHTML = '';
                   data.forEach(item=>{

                        const LI = document.createElement('li');
                       // LI.textContent=`ID: ${item.id}  Name: ${item.name}   Type: ${item.type}`
                         LI.innerHTML=`<b>ID:</b> ${item.id} | <b>Name:</b> <i>${item.name}</i> | <b>Type:</b> <i>${item.type}</i>`;
                        List.appendChild(LI);
                       
                   })
                    
// c1f213b046ecaa2af6627d28f4a4f36f70c0caa863e88dc5bc0df8f4e50a1d1d
             })
             .catch( e =>{
                 console.log(e);
             })      
}

/*
function GetList() {
    axios.get("https://simple-books-api.glitch.me/books")
        .then(response => {
            console.log(response);
            const data = response.data;
            const table = document.createElement('table');

            
            const headerRow = table.insertRow();
            const idHeader = headerRow.insertCell();
            idHeader.textContent = 'ID';
            const nameHeader = headerRow.insertCell();
            nameHeader.textContent = 'Name';
            const typeHeader = headerRow.insertCell();
            typeHeader.textContent = 'Type';

            data.forEach(item => {
                const row = table.insertRow();
                const idCell = row.insertCell();
                idCell.textContent = item.id;
                const nameCell = row.insertCell();
                nameCell.textContent = item.name;
                const typeCell = row.insertCell();
                typeCell.textContent = item.type;
            });

           
            const container = document.getElementById('div2');
            container.innerHTML = '';
            container.appendChild(table);
        })
        .catch(e => {
            console.log(e);
        });
}
*/

function Search(){

        const idSearch =parseInt( document.getElementById("SearchId").value);
        if(idSearch >6 || idSearch <1  ){
                
            var searchP = document.getElementById("seachP");
            searchP.textContent="Enter Valid Book Id";

        }else{
        console.log(idSearch);
        axios.get(`https://simple-books-api.glitch.me/books/${idSearch}`).then(response =>{
            
            console.log(response);

            let data = response.data;

            var searchP = document.getElementById("seachP");
            searchP.textContent=`ID: ${data.id}  Name: ${data.name}   Type: ${data.type}`

        }

       )
        }
}
    

// function Order(){

//      let idOrder = parseInt(document.getElementById("orderId").value);
//      let custName = document.getElementById("custName").value;
//      console.log(idOrder,custName)
//      const accessToken = "c1f213b046ecaa2af6627d28f4a4f36f70c0caa863e88dc5bc0df8f4e50a1d1d";
//                  axios.post("https://simple-books-api.glitch.me/orders",{

                     
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`
//                     }
//                 },
//                   {
//                     bookId: idOrder,
//                     customerName: custName
//                 })
// .then((response) => {
//   console.log('Order created:', response.data);
// })
// .catch((error) => {
//   console.error('Error creating order:', error);
// });
// }

function Order() {
    let idOrder = parseInt(document.getElementById("orderId").value);
    let custName = document.getElementById("custName").value;
    console.log(idOrder, custName);

    if(idOrder >6 || idOrder <1  ){
                
            alert("Enter Valid Book Id");

        }
    const accessToken = "27b7332db46349378db0808ae9bab9b3329ea2129489c626abcd36678a9c155e";

    axios.post("https://simple-books-api.glitch.me/orders/", {
            bookId: idOrder,
            customerName: custName
            
        }, {
            headers: {
               
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
               
            }
        })
        .then((response) => {
            console.log('Order created:', response.data);
        })
        .catch((error) => {
            console.error('Error creating order:', error);
        });
}








function GetOrders(){
   
     const accessToken = "27b7332db46349378db0808ae9bab9b3329ea2129489c626abcd36678a9c155e";
        axios.get("https://simple-books-api.glitch.me/orders",{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
            }).then( response=>{

                    console.log(response);
                    const data = response.data;
                    const List = document.getElementById('ul2');
                     List.innerHTML = '';
                   data.forEach(item=>{

                         const LI = document.createElement('li');
                         LI.innerHTML=`<b>ID:</b> ${item.id} | <b>Name</b>: ${item.customerName}  | <b>Type</b>: ${item.quantity}`
                         List.appendChild(LI);
                       
                   })
                    

             })
             .catch( e =>{
                 console.log(e);
             })      
}




function SearchOrder(){

      const ordSearch = document.getElementById("searchOrderId").value;
        const accessToken = "27b7332db46349378db0808ae9bab9b3329ea2129489c626abcd36678a9c155e";
        axios.get(`https://simple-books-api.glitch.me/orders/${ordSearch}`,{ headers: {
                Authorization: `Bearer ${accessToken}`
            }}).then(response =>{
            
            console.log(response);

            let data = response.data;

            var searchP = document.getElementById("orderS");
            searchP.textContent=`ID: ${data.bookId}  Name: ${data.customerName}   `

        }

       )
}



function deleteOrder() {
    const accessToken = "27b7332db46349378db0808ae9bab9b3329ea2129489c626abcd36678a9c155e";
 const deleteId = document.getElementById("deleteId").value;
    axios.delete(`https://simple-books-api.glitch.me/orders/${deleteId}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then((response) => {
             var searchP = document.getElementById("orderD");
            searchP.textContent=response.data
            console.log('Order deleted:', response.data);
        })
        .catch((error) => {
            console.error('Error deleting order:', error);
        });
}


function PatchOrder() {
    const deleteId = document.getElementById("deleteId").value;
    let patchName = document.getElementById("patchName").value;
    console.log(deleteId, patchName);

    const accessToken = "27b7332db46349378db0808ae9bab9b3329ea2129489c626abcd36678a9c155e";

    axios.patch(`https://simple-books-api.glitch.me/orders/${deleteId}`, {
           
            customerName: patchName
            
        }, {
            headers: {
               
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
               
            }
        })
        .then((response) => {
            console.log('Order created:', response.data);
        })
        .catch((error) => {
            console.error('Error creating order:', error);
        });
}