function generate_public_id(type) {
    /* Generates a public id of the form xyyyyyyy where x is the type of code
    and y is a digit from 0 to 9.
    Input: - type: string ("t","l","c")
    Output: the generated id
    */
    var public_id = "";
    var possible_types = ["t", "l", "c"]
    if(!possible_types.includes(type)){
        console.log("Invalid type");
    }

    public_id += type;
    var digits = "0123456789";
    var no_digits = 7; // [1000000-9999999]
    for(var i=0;i<no_digits;i++){
        public_id += digits.charAt(Math.floor(Math.random() * digits.length))
    }

    //console.log(public_id);
    return public_id;
}

module.exports = generate_public_id;