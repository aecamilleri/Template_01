// Script para manejar la apertura y cierre del sidebar -->
        function openSidebar() {
            document.getElementById("sidebar").style.left = "0";
            document.getElementById("content").style.marginLeft = "250px";
        }

        function closeSidebar() {
            document.getElementById("sidebar").style.left = "-250px";
            document.getElementById("content").style.marginLeft = "0";
        }
