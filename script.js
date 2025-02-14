function insert_Row() {
    let table = document.getElementById('sampleTable');
    
    // Create a new row
    let newRow = table.insertRow(0); // Insert at the first position (top)

    // Create two new cells
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);

    // Set text content for the cells
    newCell1.textContent = 'New Cell1';
    newCell2.textContent = 'New Cell2';
}
