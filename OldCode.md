/* Multiple rows for ordering */
            <div class="col-md-4">
               <div id="white_bg" class="works_box">
                  <h4>Amany</h4>
                  <br>
                  <br>
                  <br>
                  <div class="Amany-order-container">
                     <!-- <div class="Amany-order row justify-content-between align-items-baseline">
                        <table id="main">
                           <tr class="alt" id="row">
                              <td><input type="text" placeholder="Enter Value"> </td>
                           </tr>
                           
                        </table>
                        <div class="counter">
                           <div class="increment-count">
                              <input type="image" class="up-arrow" src="./images/up_arrow.png" />
                           </div>
                           <div class="total-count">
                           </div>
                           <div class="decrement-count">
                              <input type="image" class="down-arrow" src="./images/down_arrow.png" />
                           </div>
                        </div>
                        
                     </div> -->
                  </div>

                  <hr>
                  <input type="button" value="Add New Row" onclick="addRow();" id="rowButton" />
                  <script>
                        /*-----------------------------------------------------*/
                        function addRow() {
                        // for (var i = 0; i < Amanyorder.length; i++) {
                           // $( ".Amanyorder" ).append( "<p>Test</p>" );
                           $( ".Amany-order-container" ).append("<div class='Amany-order row justify-content-between align-items-baseline'><table id='main'><tr class='alt'><td><input type='text'></td></tr></table><div class='counter'><div class='increment-count'><input type='image' class='up-arrow' src='./images/up_arrow.png'><div class='total-count'></div><div class='decrement-count'><input type='image' class='down-arrow' src='./images/down_arrow.png'></div></div></div></div>");
                        // }
                         // Select increment and decrement buttons
                     const incrementCount = document.getElementsByClassName("increment-count");
                     const decrementCount = document.getElementsByClassName("decrement-count");

                     // Select total count
                     const totalCount = document.getElementsByClassName("total-count");
                     for(let tc = 0; tc < totalCount.length; tc++){
                     // Variable to track count
                     var count = 0;
                     // Display initial count value
                     totalCount[tc].innerHTML = count;
                     // Function to increment count
                     const handleIncrement = () => {
                        count++;
                        totalCount[tc].innerHTML = count;
                        console.log(totalCount.innerHTML[tc])
                     };
                     
                     // Function to decrement count
                     const handleDecrement = () => {
                        count--;
                        totalCount[tc].innerHTML = count;
                        console.log(totalCount.innerHTML[tc])
                     };
                     // Add click event to buttons
                     for(let ic = 0; ic < incrementCount.length; ic++){
                        incrementCount[ic].addEventListener("click", handleIncrement);
                     }
                     for( let dc = 0; dc < decrementCount.length; dc++){
                        decrementCount[dc].addEventListener("click", handleDecrement);
                     }
                     }
                     }
                  </script>
               </div>
            </div>