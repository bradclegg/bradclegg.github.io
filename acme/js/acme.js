$(document).ready(function(){
    $.getJSON("/acme/js/acme.json", function(json){
        $(".product-content").hide();
        $(".nav1").append(json.Anvils);
        $(".nav2").append(json.Explosives);
        $(".nav3").append(json.Decoys);
        $(".nav4").append(json.Traps);
        $("title").append("ACME | Home");
        $(".welcome-message").append("Welcome to ACME!");
        
        $(".nav1").click(function(){
            clearSlots();
            $("title").append("ACME | Anvil");
            $(".product-content").show();
            $(".welcome-message").append("Very Heavy Anvil");
            var anvilPic = json.Anvils.path;
            $(".product-picture").append('<img src="' + anvilPic + '" />');
            $(".product-description").append(json.Anvils.description);
            $(".product-manufacture").append("<b>Made By: </b>" + json.Anvils.manufacturer);
            $(".product-review").append("<b>Reviews: </b>" + json.Anvils.reviews + "/5");
            $(".product-price").append("<b>Price: </b>$" + json.Anvils.price);
        })
        $(".nav2").click(function(){
            clearSlots();
            $("title").append("ACME | T.N.T.");
            $(".product-content").show();
            $(".welcome-message").append("High Grade T.N.T.");
            var explosivesPic = json.Explosives.path;
            $(".product-picture").append('<img src="' + explosivesPic + '" />');
            $(".product-description").append(json.Explosives.description);
            $(".product-manufacture").append("<b>Made By: </b>" + json.Explosives.manufacturer);
            $(".product-reviews").append("<b>Reviews: </b>" + json.Explosives.reviews + "/5");
            $(".product-price").append("<b>Price: </b>$" + json.Explosives.price);
        })
        $(".nav3").click(function(){
            clearSlots();
            $("title").append("ACME | Decoy");
            $(".product-content").show();
            $(".welcome-message").append("Life Like Decoy");
            var decoysPic = json.Decoys.path;
            $(".product-picture").append('<img src="' + decoysPic + '" />');
            $(".product-description").append(json.Decoys.description);
            $(".product-manufacture").append("<b>Made by: </b>" + json.Decoys.manufacturer);
            $(".product-reviews").append("<b>Reviews: </b>" + json.Decoys.reviews + "/5");
            $(".product-price").append("<b>Price: </b>$" + json.Decoys.price);
        })
        $(".nav4").click(function(){
            clearSlots();
            $("title").append("ACME | Trap");
            $(".product-content").show();
            $(".welcome-message").append("All Purpose Trap");
            var trapsPic = json.Traps.path;
            $(".product-picture").append('<img src="' + trapsPic + '" />');
            $(".product-description").append(json.Traps.description);
            $(".product-manufacture").append("<b>Made by: </b>" + json.Traps.manufacturer);
            $(".product-reviews").append("<b>Reviews: </b>" + json.Traps.reviews + "/5");
            $(".product-price").append("<b>Price: </b>$" + json.Traps.price);
        })
    });
});
function clearSlots() {
    $(".home-content").hide();
    $(".welcome-message").empty();
    $(".product-picture").empty();
    $(".product-description").empty();
    $(".product-manufacture").empty();
    $(".product-reviews").empty();
    $(".product-price").empty();
    $("title").empty();
}
    
    