$(document).ready(function() {
    
    $('#DCspeakerList').DataTable( {
        "ajax": './DC/speakers.json',
        "order": [[0, "asc"]],
        "lengthMenu": [10, 25, 50, 75, 100],
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        
                        var link = convertToLink(data);
                        
                        return link;
                        
                    },
                    "targets": 1
                }
            ]
    } );
    
} );

function convertToLink(link) {
    
    var html = '<a target="_blank" href=https://twitter.com/' + link + '>' + link + "</a>";
    
    return html;
    
}

$(document).ready(function() {
    
    $('#AustinSpeakerList').DataTable( {
        "ajax": './austin/speakers.json',
        "order": [[0, "asc"]],
        "lengthMenu": [10, 25, 50, 75, 100],
        "columnDefs": [
                {
                    "render": function (data, type, row) {
                        
                        var link = convertToLink(data);
                        
                        return link;
                        
                    },
                    "targets": 1
                }
            ]
    } );
    
} );

function convertToLink(link) {
    
    var html = '<a target="_blank" href=https://twitter.com/' + link + '>' + link + "</a>";
    
    return html;
    
}
