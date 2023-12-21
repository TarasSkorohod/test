document.getElementById('searchInput').addEventListener('input', function() {
    var searchText = this.value.toLowerCase();
    var tableRows = document.querySelectorAll("#recent-purchases-listing tbody tr");

    tableRows.forEach(function(row) {
        var isVisible = false;

        row.querySelectorAll('td').forEach(function(cell) {
            var cellData = cell.textContent.toLowerCase();
            if (cellData.includes(searchText)) {
                isVisible = true;
            }
        });

        if (isVisible) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
