var Artwork = {};
Artwork.colors = ["red", "orange", "yellow", "green", "turquoise", "blue", "purple", "pink", "brown", "black", "grey", "white"]
Artwork.currentColor = "black";
Artwork.currentWidth = "5px";
Artwork.canvas = $("#canvas");
Artwork.canDraw = false;

function generateColors() {
    var colorBtn;
    for (var i = 0; i < Artwork.colors.length; i++) {
        colorBtn = $("<button/>");
        colorBtn.addClass(`color ${Artwork.colors[i]}`);
        colorBtn.attr("id", Artwork.colors[i]);
        $("div.colors").append(colorBtn);
    }
}


function setColor(e) {
    console.log(e.target.id);
    Artwork.currentColor = e.target.id;
    console.log($("#fgcolor").css("background-color"));
    $("#fgcolor").css("background-color", Artwork.currentColor);

}

function toggleDraw(e) {
    console.log('>>>>>>>>>..e.type', e.type);
    if (e.type === "mousedown") {
    Artwork.canDraw = true;
    drawDot(e);
    } else {
        Artwork.canDraw = false;
    }
}

function drawDot(e) {
    if (Artwork.canDraw) {
        var dot = $("<span>");
        console.log(`dot=${dot}`);
        console.log(`>>>>>>>e=`, e);
        var x = e.pageX - Artwork.canvas.offset().left + "px";
        var y = e.pageY - Artwork.canvas.offset().top + "px";
        dot.addClass("dot")
           .css("width", Artwork.currentWidth)
           .css("height", Artwork.currentWidth)
           .css("left", x)
           .css("top", y)
           .css("backgroundColor", Artwork.currentColor);
        Artwork.canvas.append(dot);
    }
}

generateColors();
$("button.color").each(function setListener() {
    $(this).on("click", setColor);
});


Artwork.canvas.on("mousedown", toggleDraw);
Artwork.canvas.on("mousemove", drawDot);
Artwork.canvas.on("mouseup", toggleDraw);