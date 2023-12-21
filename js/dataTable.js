window.addEventListener('DOMContentLoaded', function () {
    var data = [
        { Сегмент: 'Фінанси', Кількість: 10, Оцінені: 2.3, Середнє: 2, Дедлайн: '17.12.2023' },
        { Сегмент: 'Рітейл', Кількість: 11, Оцінені: 3, Середнє: 3, Дедлайн: '13.12.2023' },
        { Сегмент: 'Послуги', Кількість: 14, Оцінені: 33, Середнє: 32, Дедлайн: '11.12.2023' },
        { Сегмент: 'IT', Кількість: 16, Оцінені: 343, Середнє: 342, Дедлайн: '17.12.2023' },
        { Сегмент: 'IT', Кількість: 16, Оцінені: 343, Середнє: 342, Дедлайн: '17.12.2023' },
    ];

    var tableBody = document.getElementById('tableBody');

    if (!$.fn.DataTable.isDataTable('#recent-purchases-listing')) {
        for (var i = 0; i < data.length; i++) {
            var row = document.createElement('tr');
            row.innerHTML =
                '<td><a class="link-item" href="../finances/Finances.html">' + data[i].Сегмент + '</a></td>' +
                '<td><a class="link-item" href="../finances/Finances.html">' + data[i].Кількість + '</a></td>' +
                '<td><a class="link-item" href="../finances/Finances.html">' + data[i].Оцінені + '</a></td>' +
                '<td><a class="link-item" href="../finances/Finances.html">' + data[i].Середнє + '</a></td>' +
                '<td><a class="link-item" href="../finances/Finances.html">' + data[i].Дедлайн + '</a></td>';
            tableBody.appendChild(row);
        }

        $('#recent-purchases-listing').DataTable({
            searching: false,
            paging: true,
        });
    }

    window.changePageSize = function (size) {
        $('#recent-purchases-listing').DataTable().page.len(size).draw();

    };


    (function($) {
        'use strict';
        $(function() {
            $('#recent-purchases-listing').DataTable({
                "language": {
                    search: ""
                },
                searching: false,
                paging: false,
                info: false
            });
        });
    })(jQuery);

});
