function cara() {
    var str = "abcdefghijklmnopqrstuvwxyz - ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
    const regexp = /[c&C]/gi;
    const regexp2 = /[k&K]/gi;
    const regexp3 = /[l&L]/gi;
    
    let matches = str.match(regexp);
    let matches2 = str.match(regexp2);
    let matches3 = str.match(regexp3);
    
    console.log(matches);
    console.log(matches2);
    console.log(matches3);
}
cara();