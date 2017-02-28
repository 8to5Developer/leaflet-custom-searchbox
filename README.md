# leaflet-custom-searchbox

A google map style search box which includes a side panel slider control.

## Requirements 
   * jquery:  1.12.1 
   * jquery-ui: 1.8.24 
   * leaflet: 1.0.2
   * google icons: https://google.github.io/material-design-icons/

## Demo
https://8to5developer.github.io/leaflet-custom-searchbox/

## Usage

<p align="center">
  <img src="https://github.com/8to5Developer/leaflet-custom-searchbox/raw/gh-pages/screenshots/snapshot1.JPG" width="350"/>
  <img src="https://github.com/8to5Developer/leaflet-custom-searchbox/raw/gh-pages/screenshots/snapshot2.JPG" width="350"/>
</p>


## Instructions
```
<script src="../dist/leaflet.customsearchbox.min.js"></script>
<link href="../dist/searchbox.min.css" rel="stylesheet" />
```

## Code Example
```
   <script>
     $(document).ready(function () {
        
        var map = L.map('map').setView([51.505, -0.09], 5);
        map.zoomControl.setPosition('topright');
        map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
            ));
	    
        var searchboxControl=createSearchboxControl();
        var control = new searchboxControl({
            sidebarTitleText: 'Header',
            sidebarMenuItems: {
                Items: [
                    { type: "link", name: "Link 1 (github.com)", href: "http://github.com", icon: "icon-local-carwash" },
                    { type: "link", name: "Link 2 (google.com)", href: "http://google.com", icon: "icon-cloudy" },
                    { type: "button", name: "Button 1", onclick: "alert('button 1 clicked !')", icon: "icon-potrait" },
                    { type: "button", name: "Button 2", onclick: "button2_click();", icon: "icon-local-dining" },
                    { type: "link", name: "Link 3 (stackoverflow.com)", href: 'http://stackoverflow.com', icon: "icon-bike" },
                ]
            }
        });
        control._searchfunctionCallBack = function (searchkeywords)
        {
            if (!searchkeywords) {
                searchkeywords = "The search call back is clicked !!"
            }
            alert(searchkeywords);
        }
        map.addControl(control);
    });
    
    function button2_click()
    {
        alert('button 2 clicked !!!');
    }
    </script>
```
	
