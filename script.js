        function insert_Row(){
         
            table=document.getElementById('sampleTable')
             let newRow=document.createElement('tr')
            let newCell = document.createElement('td'); 
            let cell2=document.createElement('td')
            newCell.textContent='New Cell1'
            cell2.textContent='New Cell2'
            newRow.appendChild(newCell)
            newRow.appendChild(cell2)
            table.prepend(newRow);
          
                
                    }
