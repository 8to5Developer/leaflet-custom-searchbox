
function getControlHrmlContent()
{

var controlHtmlContent = "<div id=\"controlbox\" ><div id=\"boxcontainer\" class=\"searchbox searchbox-shadow\" > <div class=\"searchbox-menu-container\"><button aria-label=\"Menu\" id=\"searchbox-menubutton\" class=\"searchbox-menubutton\"><\/button> <span aria-hidden=\"true\" style=\"display:none\">Menu<\/span> <\/div><div><input id=\"searchboxinput\" type=\"text\" style=\"position: relative;\"\/><\/div><div class=\"searchbox-searchbutton-container\"><button aria-label=\"search\" id=\"searchbox-searchbutton\" class=\"searchbox-searchbutton\"><\/button> <span aria-hidden=\"true\" style=\"display:none;\">search<\/span> <\/div><\/div><\/div><div class=\"panel\"> <div class=\"panel-header\"> <div class=\"panel-header-container\"> <span class=\"panel-header-title\"><\/span> <button aria-label=\"Menu\" id=\"panelbutton\" class=\"panel-close-button\"><\/button> <\/div><\/div><div class=\"panel-content\"> <\/div><\/div>";
return controlHtmlContent;
}

function generateHtmlContent(menuItems)
{
    var content = '<ul class="panel-list">'

    for (var i = 0; i < menuItems.Items.length;i++)
    {
        var item = menuItems.Items[i];
        content += '<li class="panel-list-item"><div>';
        if (item.type == 'link') {
            content += '<span class=\"panel-list-item-icon '  + item.icon+ '\" ></span>';
            content += '<a href=\"' + item.href + '\">' + item.name + '</a>';
        }
        else if (item.type == 'button') {
            content += '<span class=\"panel-list-item-icon ' + item.icon + '\" ></span>';
            content += '<button onclick=\"' + item.onclick + '\">' + item.name + '</button>';

        }
        content += '</li></div>'
    }


    content += '</ul>'
    return content;
}

function createSearchboxControl()
{


var searchboxControl = L.Control.extend({
    
    _sideBarHeaderTitle: 'Sample Title',
    _sideBarMenuItems: {
        Items: [
                    { type: "link", name: "Link 1 (github.com)", href: "http://github.com", icon: "icon-local-carwash" },
                    { type: "link", name: "Link 2 (google.com)", href: "http://google.com", icon: "icon-cloudy" },
                    { type: "button", name: "Button 1", onclick: "alert('button 1 clicked !')", icon: "icon-potrait" },
                    { type: "button", name: "Button 2", onclick: "alert('button 2 clicked !')", icon: "icon-local-dining" },
                    { type: "link", name: "Link 3 (stackoverflow.com)", href: 'http://stackoverflow.com', icon: "icon-bike" },
        ],
    _searchfunctionCallBack: function(x)
        {
        alert('calling the default search call back');
        }
    },   
    options: {
        position: 'topleft'
    },
    initialize: function(options) {
        L.Util.setOptions(this, options);
        if(options.sidebarTitleText)
        {
            this._sideBarHeaderTitle = options.sidebarTitleText;
        }

        if (options.sidebarMenuItems)
        {
            this._sideBarMenuItems = options.sidebarMenuItems;

        }
    },
    onAdd: function (map) {


        var container = L.DomUtil.create('div');
        container.id = "controlcontainer";
        var headerTitle = this._sideBarHeaderTitle;
        var menuItems = this._sideBarMenuItems;
        var searchCallBack = this._searchfunctionCallBack;
     
       /* $(container).load("searchbox.html", function () {

            $("#searchbox-searchbutton").click(function () {
                var searchkeywords = $("#searchboxinput").val();
                searchCallBack(searchkeywords);
            });

            $("#searchbox-menubutton").click(function () {

                $(".panel").toggle("slide", { direction: "left" }, 500);
            });

            $(".panel-close-button").click(function () {

                $(".panel").toggle("slide", { direction: "left" }, 500);
            });

            $(".panel-header-title").text(headerTitle);


            var htmlContent = generateHtmlContent(menuItems);
            $(".panel-content").html(htmlContent);

        });*/

        $(container).html(getControlHrmlContent());
        setTimeout(function () {
            
            $("#searchbox-searchbutton").click(function () {
                var searchkeywords = $("#searchboxinput").val();
                searchCallBack(searchkeywords);
            });

            $("#searchbox-menubutton").click(function () {
                
                $(".panel").toggle("slide", { direction: "left" }, 500);
            });

            $(".panel-close-button").click(function () {

                $(".panel").toggle("slide", { direction: "left" }, 500);
            });

            $(".panel-header-title").text(headerTitle);


            var htmlContent = generateHtmlContent(menuItems);
            $(".panel-content").html(htmlContent);       
        }, 1);


         L.DomEvent.disableClickPropagation(container);
        return container;
    }

});

return searchboxControl;
}