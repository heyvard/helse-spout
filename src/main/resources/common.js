function vanligFunksjon(verdi) {
    if (verdi === "vårstemning") {
        let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "vanlig.css";
        document.head.appendChild(link);
    }
}