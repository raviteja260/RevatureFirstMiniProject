export  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;

}


document.getElementById('getDateButton').addEventListener('click', () => {
        let dateDiv = document.getElementById('dateDiv');
        if (!dateDiv) {
            dateDiv = document.createElement('div');
            dateDiv.id = 'dateDiv';
            document.body.appendChild(dateDiv);
        }
        dateDiv.textContent = getCurrentDate();
});