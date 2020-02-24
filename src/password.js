var password = function(length){
    return Math.random().toString(36).slice(length * -1);
}

module.exports = password;
