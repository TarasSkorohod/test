window.addEventListener('DOMContentLoaded', function () {
    var data = [
        { Назва: 'А-банк3', Кількість_Cегментів: 1, Оцінка: 'Оцінити' },
        { Назва: 'Приват', Кількість_Cегментів: 2, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 3, Оцінка: 'Оцінити' },
        { Назва: 'А-банк3', Кількість_Cегментів: 4, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 5, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 6, Оцінка: 'Оцінити' },
        { Назва: 'А-банк3', Кількість_Cегментів: 6, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 7, Оцінка: 'Оцінити' },
        { Назва: 'А-банк3', Кількість_Cегментів: 5, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 6, Оцінка: 'Оцінити' },
        { Назва: 'А-банк3', Кількість_Cегментів: 6, Оцінка: 'редагувати' },
        { Назва: 'А-банк3', Кількість_Cегментів: 7, Оцінка: 'Оцінити' },
    ];

    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement('tr');
        row.innerHTML =
            '<td><a class="link-item" href="../OnlineServise/OnlineServise.html">' + data[i].Назва + '</a></td>' +
            '<td><a class="link-item" href="../OnlineServise/OnlineServise.html">' + data[i].Кількість_Cегментів + '</a></td>' +
            '<td><a class="link-item" href="../OnlineServise/OnlineServise.html">' + getThirdColumnContent(data[i].Оцінка, data[i].Назва) + '<a/></td>';
        tableBody.appendChild(row);
    }

    if (!$.fn.DataTable.isDataTable('#recent-purchases-listing')) {
        $('#recent-purchases-listing').DataTable({
            searching: false,
            paging: true,
        });
    }
    window.changePageSize = function (size) {
        $('#recent-purchases-listing').DataTable().page.len(size).draw();
    };

    $('.dataTables_filter').addClass('d-none');
});

function getThirdColumnContent(contentType, name) {
    if (contentType === 'Оцінити') {
        return '<a class="link-item" href="../OnlineServise/OnlineServise.html"><button type="button" class="btn btn-inverse-success">' + name + '</button></a>';
    } else {
        return contentType;
    }
}
